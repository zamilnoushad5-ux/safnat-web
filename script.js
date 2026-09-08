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

let products =
  JSON.parse(localStorage.getItem("safnat_products")) ||
  defaultProducts;

let cart = JSON.parse(localStorage.getItem("safnat_cart")) || [];

let selectedCategory = "All";

function saveProducts() {
  localStorage.setItem("safnat_products", JSON.stringify(products));
}

function saveCart() {
  localStorage.setItem("safnat_cart", JSON.stringify(cart));
}

function renderProducts(list = products) {
  const grid = document.getElementById("productGrid");

  if (!grid) return;

  if (list.length === 0) {
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
      ${product.isOffer ? `<span class="offer-badge">OFFER</span>` : ""}

      <div class="product-icon">
        ${product.icon || "🛒"}
      </div>

      <p class="product-category">${product.category}</p>

      <h3>${product.name}</h3>

      <div class="product-price">
        <strong>${Number(product.price).toFixed(3)} OMR</strong>
        ${
          product.oldPrice
            ? `<span>${Number(product.oldPrice).toFixed(3)} OMR</span>`
            : ""
        }
      </div>

      ${
        product.inStock
          ? `<button class="add-cart-btn" onclick="addToCart(${product.id})">
               Add to Cart
             </button>`
          : `<button class="add-cart-btn disabled" disabled>
               Out of Stock
             </button>`
      }
    </div>
  `).join("");
}

function renderBranches() {
  const grid = document.getElementById("branchGrid");

  if (!grid) return;

  grid.innerHTML = branches.map(branch => `
    <div class="branch-card">
      <div class="branch-icon">📍</div>
      <h3>${branch.name}</h3>
      <p>${branch.location}</p>
      <button onclick="selectBranch('${branch.id}')">
        Select Branch
      </button>
    </div>
  `).join("");
}

function selectBranch(branchId) {
  const branch = branches.find(item => item.id === branchId);

  if (!branch) return;

  localStorage.setItem("safnat_branch", branchId);

  const selected = document.getElementById("selectedBranch");

  if (selected) {
    selected.textContent = branch.name;
  }

  closeBranchModal();

  alert(`Branch selected: ${branch.name}`);
}

function loadSelectedBranch() {
  const savedId = localStorage.getItem("safnat_branch");

  if (!savedId) return;

  const branch = branches.find(item => item.id === savedId);

  if (!branch) return;

  const selected = document.getElementById("selectedBranch");

  if (selected) {
    selected.textContent = branch.name;
  }
}

function filterCategory(category) {
  selectedCategory = category;

  const filtered = products.filter(
    product => product.category === category
  );

  const title = document.getElementById("productsTitle");

  if (title) {
    title.textContent = category;
  }

  renderProducts(filtered);

  document
    .getElementById("products")
    ?.scrollIntoView({ behavior: "smooth" });
}

function resetProducts() {
  selectedCategory = "All";

  const title = document.getElementById("productsTitle");

  if (title) {
    title.textContent = "Featured Products";
  }

  renderProducts(products);
}

function searchProducts() {
  const input = document.getElementById("searchInput");

  if (!input) return;

  const searchText = input.value.trim().toLowerCase();

  let results = products;

  if (selectedCategory !== "All") {
    results = results.filter(
      product => product.category === selectedCategory
    );
  }

  if (searchText) {
    results = results.filter(product =>
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  }

  const title = document.getElementById("productsTitle");

  if (title) {
    title.textContent = searchText
      ? `Search: ${input.value}`
      : selectedCategory === "All"
        ? "Featured Products"
        : selectedCategory;
  }

  renderProducts(results);

  document
    .getElementById("products")
    ?.scrollIntoView({ behavior: "smooth" });
}

function showOffers() {
  selectedCategory = "All";

  const offers = products.filter(product => product.isOffer);

  const title = document.getElementById("productsTitle");

  if (title) {
    title.textContent = "Special Offers";
  }

  renderProducts(offers);

  document
    .getElementById("products")
    ?.scrollIntoView({ behavior: "smooth" });
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);

  if (!product || !product.inStock) return;

  const existing = cart.find(item => item.id === productId);

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

  alert(`${product.name} added to cart!`);
}

function updateCartCount() {
  const count = document.getElementById("cartCount");

  if (!count) return;

  const total = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  count.textContent = total;
}

function openCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  let message = "Your SAFNAT Cart:\n\n";

  cart.forEach(item => {
    message += `${item.icon} ${item.name} × ${item.quantity}\n`;
  });

  message += "\nStore Pickup Only 🛍️";

  alert(message);
}

function openBranchModal() {
  document
    .getElementById("branches")
    ?.scrollIntoView({ behavior: "smooth" });
}

function closeBranchModal() {
  // Reserved for future branch popup.
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderBranches();
  loadSelectedBranch();
  updateCartCount();

  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        searchProducts();
      }
    });
  }
});
