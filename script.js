
const branches = [
  {
    id: "souq6",
    name: "SAFNAT Hypermarket",
    location: "Al Amerat Souq 6, Oman"
  },
  {
    id: "nahda",
    name: "Arafat Shopping Centre",
    location: "Al Amerat Nahda, Oman"
  },
  {
    id: "souq3",
    name: "SAFNAT Supermarket",
    location: "Al Amerat Souq 3, Oman"
  },
  {
    id: "quriyat",
    name: "SAFNAT Supermarket",
    location: "Quriyat, Oman"
  }
];

const defaultProducts = [
  {
    id: 1,
    name: "Basmati Rice",
    category: "Grocery",
    icon: "🍚",
    price: 2.500,
    oldPrice: 2.900,
    isOffer: true,
    inStock: true
  },
  {
    id: 2,
    name: "Fresh Milk",
    category: "Fresh Food",
    icon: "🥛",
    price: 0.650,
    oldPrice: null,
    isOffer: false,
    inStock: true
  },
  {
    id: 3,
    name: "Orange Juice",
    category: "Beverages",
    icon: "🧃",
    price: 1.200,
    oldPrice: 1.450,
    isOffer: true,
    inStock: true
  },
  {
    id: 4,
    name: "Potato Chips",
    category: "Snacks",
    icon: "🍟",
    price: 0.550,
    oldPrice: null,
    isOffer: false,
    inStock: true
  },
  {
    id: 5,
    name: "Washing Powder",
    category: "Household",
    icon: "🧺",
    price: 2.100,
    oldPrice: 2.400,
    isOffer: true,
    inStock: true
  },
  {
    id: 6,
    name: "Shampoo",
    category: "Personal Care",
    icon: "🧴",
    price: 1.750,
    oldPrice: null,
    isOffer: false,
    inStock: true
  },
  {
    id: 7,
    name: "Cooking Oil",
    category: "Grocery",
    icon: "🫗",
    price: 2.250,
    oldPrice: 2.600,
    isOffer: true,
    inStock: true
  },
  {
    id: 8,
    name: "Fresh Apples",
    category: "Fresh Food",
    icon: "🍎",
    price: 1.300,
    oldPrice: null,
    isOffer: false,
    inStock: true
  }
];

let products;

try {
  const savedProducts = localStorage.getItem("safnat_products");
  products = savedProducts ? JSON.parse(savedProducts) : defaultProducts;
} catch (error) {
  products = defaultProducts;
}

let cart = [];

try {
  const savedCart = localStorage.getItem("safnat_cart");
  cart = savedCart ? JSON.parse(savedCart) : [];
} catch (error) {
  cart = [];
}

function saveProducts() {
  localStorage.setItem(
    "safnat_products",
    JSON.stringify(products)
  );
}

function saveCart() {
  localStorage.setItem(
    "safnat_cart",
    JSON.stringify(cart)
  );
}

function renderProducts(list = products) {
  const grid = document.getElementById("productGrid");

  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-message">
        <h3>No products found</h3>
        <p>Try another search or category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(product => `
    <div class="product-card">

      ${
        product.isOffer
          ? `<span class="offer-badge">OFFER</span>`
          : ""
      }

      <div class="product-icon">
        ${product.icon || "🛒"}
      </div>

      <p class="product-category">
        ${product.category}
      </p>

      <h3>${product.name}</h3>

      <div class="product-price">

        <strong>
          ${Number(product.price).toFixed(3)} OMR
        </strong>

        ${
          product.oldPrice
            ? `
              <span>
                ${Number(product.oldPrice).toFixed(3)} OMR
              </span>
            `
            : ""
        }

      </div>

      ${
        product.inStock
          ? `
            <button
              class="add-cart-btn"
              onclick="addToCart(${product.id})"
            >
              Add to Cart
            </button>
          `
          : `
            <button
              class="add-cart-btn disabled"
              disabled
            >
              Out of Stock
            </button>
          `
      }

    </div>
  `).join("");
}

function renderBranches() {
  const grid = document.getElementById("branchGrid");

  if (!grid) return;

  grid.innerHTML = branches.map(branch => `
    <div class="branch-card">

      <div class="branch-icon">
        📍
      </div>

      <h3>${branch.name}</h3>

      <p>${branch.location}</p>

      <button onclick="selectBranch('${branch.id}')">
        Select Branch
      </button>

    </div>
  `).join("");
}

function selectBranch(branchId) {
  const branch = branches.find(
    branch => branch.id === branchId
  );

  if (!branch) return;

  localStorage.setItem(
    "safnat_branch",
    branchId
  );

  const selectedBranch =
    document.getElementById("selectedBranch");

  if (selectedBranch) {
    selectedBranch.textContent =
      branch.name;
  }

  document
    .getElementById("branches")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}

function loadSelectedBranch() {
  const savedId =
    localStorage.getItem("safnat_branch");

  if (!savedId) return;

  const branch = branches.find(
    branch => branch.id === savedId
  );

  if (!branch) return;

  const selectedBranch =
    document.getElementById("selectedBranch");

  if (selectedBranch) {
    selectedBranch.textContent =
      branch.name;
  }
}

function filterCategory(category) {
  const filteredProducts =
    products.filter(
      product => product.category === category
    );

  const title =
    document.getElementById("productsTitle");

  if (title) {
    title.textContent = category;
  }

  renderProducts(filteredProducts);

  document
    .getElementById("products")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}

function resetProducts() {
  const title =
    document.getElementById("productsTitle");

  if (title) {
    title.textContent =
      "Featured Products";
  }

  renderProducts(products);
}

function searchProducts() {
  const input =
    document.getElementById("searchInput");

  if (!input) return;

  const searchText =
    input.value.trim().toLowerCase();

  if (!searchText) {
    resetProducts();
    return;
  }

  const results =
    products.filter(product =>
      product.name
        .toLowerCase()
        .includes(searchText) ||
      product.category
        .toLowerCase()
        .includes(searchText)
    );

  const title =
    document.getElementById("productsTitle");

  if (title) {
    title.textContent =
      `Search: ${input.value}`;
  }

  renderProducts(results);

  document
    .getElementById("products")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}

function showOffers() {
  const offers =
    products.filter(
      product => product.isOffer
    );

  const title =
    document.getElementById("productsTitle");

  if (title) {
    title.textContent =
      "Special Offers";
  }

  renderProducts(offers);

  document
    .getElementById("products")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}

function addToCart(productId) {
  const product =
    products.find(
      product => product.id === productId
    );

  if (!product || !product.inStock) {
    return;
  }

  const existing =
    cart.find(
      item => item.id === productId
    );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      icon: product.icon,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
}

function updateCartCount() {
  const count =
    document.getElementById("cartCount");

  if (!count) return;

  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  count.textContent = total;
}

function openCart() {
  const modal = document.getElementById("cartModal");
  const itemsBox = document.getElementById("cartItems");
  const totalBox = document.getElementById("cartTotal");

  if (!modal || !itemsBox || !totalBox) return;

  if (!cart.length) {
    itemsBox.innerHTML = `
      <div class="empty-message">
        <h3>Your cart is empty</h3>
        <p>Add some products to your cart.</p>
      </div>
    `;
    totalBox.textContent = "0.000 OMR";
    modal.classList.add("show");
    return;
  }

  itemsBox.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <span class="cart-item-icon">${item.icon || "🛒"}</span>
        <div>
          <strong>${item.name}</strong>
          <p>${Number(item.price).toFixed(3)} OMR each</p>
        </div>
      </div>

      <div class="cart-item-actions">
        <button onclick="changeQuantity(${item.id}, -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity(${item.id}, 1)">+</button>
        <button onclick="removeFromCart(${item.id})">🗑️</button>
      </div>
    </div>
  `).join("");

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  totalBox.textContent = `${total.toFixed(3)} OMR`;
  modal.classList.add("show");
}
function changeQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== productId);
  }

  saveCart();
  updateCartCount();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);

  saveCart();
  updateCartCount();
  openCart();
}

function closeCart() {
  const modal = document.getElementById("cartModal");

  if (modal) {
    modal.classList.remove("show");
  }
}

function checkoutCart() {
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  alert(
    "🛍️ SAFNAT Pickup Order\n\n" +
    "Your cart is ready.\n" +
    "Please collect your order from your selected SAFNAT branch.\n\n" +
    "Store Pickup Only."
  );
}
function openBranchModal() {
  document
    .getElementById("branches")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderProducts();
    renderBranches();
    loadSelectedBranch();
    updateCartCount();

    const searchInput =
      document.getElementById(
        "searchInput"
      );

    if (searchInput) {
      searchInput.addEventListener(
        "keydown",
        function (event) {
          if (event.key === "Enter") {
            searchProducts();
          }
        }
      );
    }

  }
);
