const ADMIN_PRODUCTS_KEY = "safnat_products";

const defaultProducts = [
  { id: 1, name: "Basmati Rice", category: "Grocery", icon: "🍚", price: 2.500, oldPrice: 2.900, isOffer: true, inStock: true },
  { id: 2, name: "Fresh Milk", category: "Fresh Food", icon: "🥛", price: 0.650, oldPrice: null, isOffer: false, inStock: true },
  { id: 3, name: "Orange Juice", category: "Beverages", icon: "🧃", price: 1.200, oldPrice: 1.450, isOffer: true, inStock: true },
  { id: 4, name: "Potato Chips", category: "Snacks", icon: "🍟", price: 0.550, oldPrice: null, isOffer: false, inStock: true },
  { id: 5, name: "Washing Powder", category: "Household", icon: "🧺", price: 2.100, oldPrice: 2.400, isOffer: true, inStock: true },
  { id: 6, name: "Shampoo", category: "Personal Care", icon: "🧴", price: 1.750, oldPrice: null, isOffer: false, inStock: true },
  { id: 7, name: "Cooking Oil", category: "Grocery", icon: "🫗", price: 2.250, oldPrice: 2.600, isOffer: true, inStock: true },
  { id: 8, name: "Fresh Apples", category: "Fresh Food", icon: "🍎", price: 1.300, oldPrice: null, isOffer: false, inStock: true }
];

let adminProducts =
  JSON.parse(localStorage.getItem(ADMIN_PRODUCTS_KEY)) ||
  defaultProducts;

document.addEventListener("DOMContentLoaded", renderAdminProducts);

function saveAdminProducts() {
  localStorage.setItem(
    ADMIN_PRODUCTS_KEY,
    JSON.stringify(adminProducts)
  );
}

function renderAdminProducts() {
  const list = document.getElementById("adminProductList");

  if (!list) return;

  if (adminProducts.length === 0) {
    list.innerHTML = `
      <p class="admin-empty">
        No products added yet.
      </p>
    `;
    return;
  }

  list.innerHTML = adminProducts.map(product => `
    <div class="admin-product">

      <div class="admin-product-info">
        <span class="admin-product-icon">${product.icon || "🛒"}</span>

        <div>
          <strong>${product.name}</strong>
          <small>${product.category}</small>

          <div class="admin-price">
            ${Number(product.price).toFixed(3)} OMR
            ${product.oldPrice
              ? `<del>${Number(product.oldPrice).toFixed(3)} OMR</del>`
              : ""
            }
          </div>

          <span class="${product.inStock ? "stock-good" : "stock-bad"}">
            ${product.inStock ? "In Stock" : "Out of Stock"}
          </span>

          ${product.isOffer
            ? `<span class="offer-label">OFFER</span>`
            : ""
          }
        </div>
      </div>

      <div class="admin-actions">
        <button onclick="editProduct(${product.id})">
          Edit
        </button>

        <button class="delete-btn" onclick="deleteProduct(${product.id})">
          Delete
        </button>
      </div>

    </div>
  `).join("");
}

function addProduct() {
  const name = document.getElementById("productName").value.trim();
  const category = document.getElementById("productCategory").value;
  const price = Number(document.getElementById("productPrice").value);
  const oldPriceValue =
    document.getElementById("productOldPrice").value;

  const oldPrice =
    oldPriceValue === "" ? null : Number(oldPriceValue);

  const icon =
    document.getElementById("productIcon").value.trim() || "🛒";

  const isOffer =
    document.getElementById("productOffer").checked;

  const inStock =
    document.getElementById("productStock").checked;

  if (!name) {
    showAdminToast("Please enter a product name.");
    return;
  }

  if (!price || price <= 0) {
    showAdminToast("Please enter a valid price.");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name,
    category,
    icon,
    price,
    oldPrice,
    isOffer,
    inStock
  };

  adminProducts.push(newProduct);

  saveAdminProducts();
  renderAdminProducts();
  clearProductForm();

  showAdminToast("Product added successfully! ✅");
}

function editProduct(id) {
  const product = adminProducts.find(item => item.id === id);

  if (!product) return;

  const name = prompt("Product name:", product.name);
  if (name === null) return;

  const priceInput = prompt(
    "Price in OMR:",
    product.price
  );

  if (priceInput === null) return;

  const price = Number(priceInput);

  if (!name.trim() || !price || price <= 0) {
    showAdminToast("Invalid product details.");
    return;
  }

  product.name = name.trim();
  product.price = price;

  saveAdminProducts();
  renderAdminProducts();

  showAdminToast("Product updated! ✅");
}

function deleteProduct(id) {
  const product = adminProducts.find(item => item.id === id);

  if (!product) return;

  const confirmed = confirm(
    `Delete "${product.name}"?`
  );

  if (!confirmed) return;

  adminProducts =
    adminProducts.filter(item => item.id !== id);

  saveAdminProducts();
  renderAdminProducts();

  showAdminToast("Product deleted.");
}

function resetAdminProducts() {
  const confirmed = confirm(
    "Reset products to the original demo products?"
  );

  if (!confirmed) return;

  adminProducts = [...defaultProducts];

  saveAdminProducts();
  renderAdminProducts();

  showAdminToast("Demo products restored.");
}

function clearProductForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productOldPrice").value = "";
  document.getElementById("productIcon").value = "";
  document.getElementById("productOffer").checked = false;
  document.getElementById("productStock").checked = true;
}

function showAdminToast(message) {
  const toast = document.getElementById("adminToast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
