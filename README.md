# safnat-web
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SAFNAT — Shop More. Live Better.</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Top Navigation Bar -->
  <header class="top">
    <a href="index.html" class="brand">
      <img src="safnat-logo.svg" alt="SAFNAT Logo">
      <div><strong>SAFNAT</strong><small>Shop More. Live Better.</small></div>
    </a>
    
    <div class="search">
      <span class="search-icon">🔍</span>
      <input id="search" placeholder="Search for products, categories, or brands...">
    </div>
    
    <button class="branch-btn" id="branchBtn">📍 <span id="branchText">Select Branch</span> ▾</button>
    
    <nav class="actions">
      <a href="admin.html" class="admin-link-btn" title="Admin Panel">⚙️ <small>Admin</small></a>
      <button id="cartBtn" class="cart-btn">🛒<b id="cartCount">0</b><small>Cart</small></button>
    </nav>
  </header>

  <!-- Secondary Navigation -->
  <nav class="nav">
    <div class="nav-links">
      <a class="active" href="index.html">Home</a>
      <a href="#offers">Today's Offers</a>
      <a href="#products">Products</a>
      <a href="#branches">Branches</a>
      <a href="#about">About Us</a>
    </div>
    <span class="delivery">🚫 Store Pickup Only — No Home Delivery</span>
  </nav>

  <main>
    <!-- Hero Banner -->
    <section class="hero">
      <div class="hero-copy">
        <div class="pill">WELCOME TO SAFNAT</div>
        <h1>Quality Products.<br><span>Better Prices.</span></h1>
        <p>Fresh groceries, daily essentials, and great offers across all our Oman branches.</p>
        <button class="primary" onclick="document.getElementById('products').scrollIntoView({behavior: 'smooth'})">Explore Products →</button>
      </div>
      <div class="hero-art">
        <div class="hero-badge">🛒 Fresh Everyday</div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="section">
      <div class="section-head">
        <h2>Shop by Category</h2>
        <a href="#products" onclick="filterCategory('All')">View All Categories →</a>
      </div>
      <div class="categories" id="categories"></div>
    </section>

    <!-- Today's Offers Banner -->
    <section class="offer" id="offers">
      <div class="offer-icon">%</div>
      <div>
        <h2>Today's Offers</h2>
        <p>Save More, Shop More on Selected Items!</p>
      </div>
      <button class="light" onclick="filterOffers()">View All Offers →</button>
      <div class="offer-big">UP TO <strong>50% OFF</strong><small>at all SAFNAT branches</small></div>
    </section>

    <!-- Products Grid -->
    <section class="section" id="products">
      <div class="section-head">
        <h2 id="productsHeading">Featured Products</h2>
        <button class="btn-text" id="resetFilterBtn" style="display:none;" onclick="resetProductFilter()">Show All Products</button>
      </div>
      <div class="products" id="productsGrid"></div>
    </section>

    <!-- Branches Panel -->
    <section class="branch-panel" id="branches">
      <div class="branch-panel-head">
        <h2>📍 Our Official Branches</h2>
        <p>Select your branch to verify item availability and visit us in person.</p>
      </div>
      <div class="branches" id="branchList"></div>
    </section>

    <!-- Value Propositions -->
    <section class="features">
      <div><span>🥬</span> <strong>Fresh & Quality</strong><small>Directly sourced daily</small></div>
      <div><span>💰</span> <strong>Best Prices</strong><small>Unbeatable daily deals</small></div>
      <div><span>🏬</span> <strong>4 Stores</strong><small>Serving Al Amerat & Quriyat</small></div>
      <div><span>🛍️</span> <strong>Easy Shopping</strong><small>In-store pickup convenience</small></div>
    </section>
  </main>

  <!-- Footer -->
  <footer id="about">
    <div class="footer-container">
      <div class="footer-brand">
        <img src="safnat-logo.svg" alt="SAFNAT Logo">
        <div><strong>SAFNAT</strong><small>Shop More. Live Better.</small></div>
        <p class="footer-desc">Your trusted neighborhood supermarket brand in Oman offering high-quality daily essentials at wholesale rates.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <a href="#">Home</a>
        <a href="#offers">Offers</a>
        <a href="#products">Products</a>
        <a href="#branches">Branches</a>
        <a href="admin.html">Store Management</a>
      </div>
      <div>
        <h3>Customer Info</h3>
        <span>🚫 No Delivery Available</span>
        <span>🏬 Store Pickup Only</span>
        <span>💳 Cash / Card Payment In-Store</span>
      </div>
      <div>
        <h3>Our Branches</h3>
        <span>Al Amerat Souq 6</span>
        <span>Al Amerat Nahda</span>
        <span>Al Amerat Souq 3</span>
        <span>Quriyat</span>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; SAFNAT Supermarket. All Rights Reserved. Built for SAFNAT Oman.
    </div>
  </footer>

  <!-- Branch Selection Modal -->
  <div class="modal hidden" id="branchModal">
    <div class="modal-card">
      <button class="close" onclick="closeBranchModal()">×</button>
      <h2>Select Your Preferred Branch</h2>
      <p>Choose your nearest SAFNAT store location to check active inventory.</p>
      <div id="modalBranches"></div>
    </div>
  </div>

  <!-- Shopping Cart Modal -->
  <div class="modal hidden" id="cartModal">
    <div class="modal-card">
      <button class="close" onclick="closeCartModal()">×</button>
      <h2>Your Pick-up Cart</h2>
      <div class="cart-notice">🚫 SAFNAT operates in-store pickup only. No home delivery is available.</div>
      <div id="cartItems" class="cart-items"></div>
      <div class="cart-footer">
        <div class="cart-total">Total: <span id="cartTotal">0.000 OMR</span></div>
        <button class="primary-btn" onclick="clearCart()">Clear Cart</button>
      </div>
    </div>
  </div>

  <div class="toast" id="toast"></div>

  <script src="script.js"></script>
</body>
</html>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>SAFNAT Admin — Inventory & Branch Management</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="admin.css">
</head>
<body>
  <header class="top admin-header">
    <a href="index.html" class="brand">
      <img src="safnat-logo.svg" alt="SAFNAT Logo">
      <div><strong>SAFNAT</strong><small>Admin Dashboard</small></div>
    </a>
    <div class="admin-top-actions">
      <a href="index.html" class="btn-outline">← Back to Main Website</a>
    </div>
  </header>

  <main class="admin-container">
    <!-- Prototype Disclaimer Banner -->
    <div class="admin-disclaimer">
      ⚠️ <strong>Prototype Mode:</strong> Data edits are stored locally in your web browser using <code>localStorage</code>. For a multi-user, multi-device live production system, connect this frontend to a backend database (e.g., PostgreSQL / Node.js / Firebase).
    </div>

    <!-- Admin Grid Layout -->
    <div class="admin-grid">
      
      <!-- Product Form Column -->
      <section class="admin-card">
        <h2 id="formTitle">Add New Product</h2>
        <form id="productForm">
          <input type="hidden" id="productId">
          
          <div class="form-group">
            <label for="prodName">Product Name *</label>
            <input type="text" id="prodName" required placeholder="e.g. Al Rawabi Fresh Milk 2L">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="prodCategory">Category *</label>
              <select id="prodCategory" required>
                <option value="Dairy & Eggs">Dairy & Eggs</option>
                <option value="Fresh Produce">Fresh Produce</option>
                <option value="Beverages">Beverages</option>
                <option value="Bakery & Snacks">Bakery & Snacks</option>
                <option value="Pantry & Cooking">Pantry & Cooking</option>
              </select>
            </div>
            <div class="form-group">
              <label for="prodIcon">Icon/Emoji *</label>
              <input type="text" id="prodIcon" required placeholder="e.g. 🥛 or 🍎" value="🛒">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="prodPrice">Price (OMR) *</label>
              <input type="number" step="0.001" id="prodPrice" required placeholder="0.000">
            </div>
            <div class="form-group">
              <label for="prodOldPrice">Old Price (OMR)</label>
              <input type="number" step="0.001" id="prodOldPrice" placeholder="Optional">
            </div>
          </div>

          <div class="form-group">
            <label>Flags & Options</label>
            <div class="checkbox-group">
              <label><input type="checkbox" id="prodIsOffer"> Today's Offer</label>
              <label><input type="checkbox" id="prodIsFeatured" checked> Featured Item</label>
              <label><input type="checkbox" id="prodInStock" checked> In Stock</label>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-save" id="saveBtn">Save Product</button>
            <button type="button" class="btn-cancel" id="cancelBtn" onclick="resetForm()">Cancel</button>
          </div>
        </form>
      </section>

      <!-- Branch Management Card -->
      <section class="admin-card">
        <h2>Active SAFNAT Branches</h2>
        <div class="branches-admin-list" id="adminBranchList"></div>
      </section>

    </div>

    <!-- Product Inventory Table -->
    <section class="admin-card table-section">
      <div class="table-header">
        <h2>Product Inventory (<span id="totalProductsCount">0</span>)</h2>
        <button class="btn-danger" onclick="resetToDefaultData()">↺ Reset Demo Data</button>
      </div>

      <div class="table-responsive">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Old Price</th>
              <th>Offer?</th>
              <th>Featured?</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="adminProductTable">
            <!-- Populated dynamically -->
          </tbody>
        </table>
      </div>
    </section>

  </main>

  <div class="toast" id="toast"></div>

  <script src="script.js"></script>
  <script src="admin.js"></script>
</body>
</html>
:root {
  --safnat-green: #0d7a40;
  --safnat-green-dark: #08522a;
  --safnat-red: #d92525;
  --safnat-red-dark: #a81919;
  --safnat-bg: #f4f6f8;
  --safnat-card: #ffffff;
  --safnat-text: #1c252c;
  --safnat-muted: #627282;
  --safnat-border: #e1e6eb;
  --safnat-radius: 10px;
  --safnat-shadow: 0 4px 14px rgba(0,0,0,0.06);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body {
  background-color: var(--safnat-bg);
  color: var(--safnat-text);
  line-height: 1.5;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Header */
header.top {
  background: var(--safnat-card);
  padding: 12px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-bottom: 2px solid var(--safnat-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand img {
  height: 42px;
  width: auto;
}

.brand strong {
  font-size: 1.3rem;
  color: var(--safnat-green);
  display: block;
  line-height: 1;
  letter-spacing: 0.5px;
}

.brand small {
  font-size: 0.72rem;
  color: var(--safnat-muted);
}

.search {
  flex: 1;
  max-width: 500px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  font-size: 0.9rem;
  color: var(--safnat-muted);
}

.search input {
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1px solid var(--safnat-border);
  border-radius: 20px;
  outline: none;
  font-size: 0.9rem;
  transition: border-color 0.2s;
}

.search input:focus {
  border-color: var(--safnat-green);
}

.branch-btn {
  background: #f0f7f2;
  border: 1px solid var(--safnat-green);
  color: var(--safnat-green-dark);
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-btn, .admin-link-btn {
  background: var(--safnat-green);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.85rem;
}

.cart-btn b {
  background: var(--safnat-red);
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 0.75rem;
}

/* Secondary Nav */
nav.nav {
  background: var(--safnat-green);
  color: white;
  padding: 10px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  font-weight: 500;
  opacity: 0.9;
}

.nav-links a:hover, .nav-links a.active {
  opacity: 1;
  text-decoration: underline;
}

.delivery {
  background: var(--safnat-red);
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 0.8rem;
}

/* Main Content */
main {
  padding: 20px 5%;
  max-width: 1280px;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #0d7a40 0%, #064021 100%);
  color: white;
  border-radius: var(--safnat-radius);
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.pill {
  background: rgba(255,255,255,0.2);
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.hero h1 {
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 12px;
}

.hero h1 span {
  color: #ffd700;
}

.hero p {
  opacity: 0.9;
  margin-bottom: 20px;
  max-width: 480px;
}

button.primary {
  background: var(--safnat-red);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.95rem;
}

.hero-badge {
  font-size: 2.5rem;
  background: rgba(255,255,255,0.15);
  padding: 30px;
  border-radius: 50%;
  text-align: center;
  border: 2px dashed rgba(255,255,255,0.4);
}

/* Sections */
.section {
  margin-bottom: 35px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  border-bottom: 2px solid var(--safnat-border);
  padding-bottom: 8px;
}

.section-head h2 {
  color: var(--safnat-green-dark);
  font-size: 1.4rem;
}

.section-head a, .btn-text {
  color: var(--safnat-green);
  font-weight: bold;
  font-size: 0.9rem;
  background: none;
  border: none;
  cursor: pointer;
}

/* Category Grid */
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 15px;
}

.cat-card {
  background: var(--safnat-card);
  padding: 15px;
  border-radius: var(--safnat-radius);
  text-align: center;
  border: 1px solid var(--safnat-border);
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
}

.cat-card:hover {
  transform: translateY(-3px);
  border-color: var(--safnat-green);
}

.cat-card .icon {
  font-size: 2rem;
  margin-bottom: 6px;
}

.cat-card span {
  font-size: 0.85rem;
  font-weight: bold;
  display: block;
}

/* Offer Banner */
.offer {
  background: var(--safnat-red);
  color: white;
  padding: 25px 30px;
  border-radius: var(--safnat-radius);
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 35px;
}

.offer-icon {
  font-size: 2.5rem;
  font-weight: 900;
  background: white;
  color: var(--safnat-red);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.offer-big {
  margin-left: auto;
  text-align: right;
  font-size: 0.9rem;
}

.offer-big strong {
  display: block;
  font-size: 1.8rem;
  line-height: 1;
}

button.light {
  background: white;
  color: var(--safnat-red);
  border: none;
  padding: 10px 18px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
}

/* Products Grid */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.product-card {
  background: var(--safnat-card);
  border-radius: var(--safnat-radius);
  border: 1px solid var(--safnat-border);
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: var(--safnat-shadow);
}

.badge-offer {
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--safnat-red);
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 10px;
}

.product-img {
  font-size: 3.5rem;
  text-align: center;
  margin: 10px 0;
}

.product-category {
  font-size: 0.75rem;
  color: var(--safnat-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-title {
  font-size: 0.95rem;
  font-weight: bold;
  margin: 4px 0 10px 0;
  color: var(--safnat-text);
  flex-grow: 1;
}

.product-pricing {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 12px;
}

.price {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--safnat-green-dark);
}

.old-price {
  font-size: 0.85rem;
  color: var(--safnat-muted);
  text-decoration: line-through;
}

.btn-add-cart {
  width: 100%;
  background: var(--safnat-green);
  color: white;
  border: none;
  padding: 8px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-add-cart:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* Branches Section */
.branch-panel {
  background: var(--safnat-card);
  border: 1px solid var(--safnat-border);
  padding: 25px;
  border-radius: var(--safnat-radius);
  margin-bottom: 35px;
}

.branch-panel-head {
  margin-bottom: 15px;
}

.branch-panel-head h2 {
  color: var(--safnat-green-dark);
}

.branches {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 15px;
}

.branch-card {
  border: 1px solid var(--safnat-border);
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.branch-card.selected {
  border-color: var(--safnat-green);
  background: #f0f7f2;
}

.branch-card h4 {
  color: var(--safnat-green-dark);
  margin-bottom: 4px;
}

.branch-card p {
  font-size: 0.8rem;
  color: var(--safnat-muted);
}

/* Features Strip */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  background: var(--safnat-card);
  padding: 20px;
  border-radius: var(--safnat-radius);
  border: 1px solid var(--safnat-border);
}

.features div {
  text-align: center;
  font-size: 0.85rem;
}

.features span {
  font-size: 1.5rem;
  display: block;
}

.features strong {
  display: block;
  margin-top: 4px;
}

.features small {
  color: var(--safnat-muted);
}

/* Footer */
footer {
  background: #111822;
  color: #a0aec0;
  padding: 40px 5% 20px 5%;
  margin-top: 40px;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #2d3748;
}

.footer-brand img {
  height: 40px;
  margin-bottom: 10px;
}

.footer-brand strong {
  color: white;
  font-size: 1.2rem;
  display: block;
}

.footer-brand small {
  color: var(--safnat-green);
  display: block;
  margin-bottom: 10px;
}

.footer-desc {
  font-size: 0.8rem;
  line-height: 1.4;
}

footer h3 {
  color: white;
  font-size: 1rem;
  margin-bottom: 12px;
}

footer a, footer span {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

footer a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  font-size: 0.8rem;
  padding-top: 20px;
}

/* Modals */
.modal {
  position: fixed;
  top:0; left:0; width:100%; height:100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal.hidden {
  display: none;
}

.modal-card {
  background: white;
  width: 90%;
  max-width: 500px;
  border-radius: var(--safnat-radius);
  padding: 25px;
  position: relative;
  max-height: 85vh;
  overflow-y: auto;
}

.modal-card .close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Toast Notification */
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--safnat-green-dark);
  color: white;
  padding: 12px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: none;
  z-index: 2000;
  font-size: 0.9rem;
  font-weight: bold;
}

.toast.show {
  display: block;
  animation: fadeIn 0.3s;
}

.cart-notice {
  background: #fff3f3;
  color: var(--safnat-red);
  padding: 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  margin: 10px 0;
  border: 1px solid #ffcdd2;
}

.cart-items {
  margin: 15px 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--safnat-border);
  font-size: 0.9rem;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.cart-total {
  font-weight: bold;
  font-size: 1.1rem;
}

.primary-btn {
  background: var(--safnat-green);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive Styles */
@media (max-width: 768px) {
  header.top {
    flex-wrap: wrap;
  }
  .search {
    order: 3;
    width: 100%;
    max-width: 100%;
  }
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 25px;
  }
  .hero p {
    margin: 0 auto 20px auto;
  }
  .hero-art {
    margin-top: 20px;
  }
  .offer {
    flex-direction: column;
    text-align: center;
  }
  .offer-big {
    margin-left: 0;
    text-align: center;
  }
}
.admin-header {
  background: #1c252c;
  color: white;
}

.admin-header .brand strong {
  color: #2ed573;
}

.btn-outline {
  color: white;
  border: 1px solid rgba(255,255,255,0.3);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
}

.admin-container {
  padding-top: 25px;
}

.admin-disclaimer {
  background: #fff8e1;
  border: 1px solid #ffe082;
  color: #8c6b00;
  padding: 12px 18px;
  border-radius: 8px;
  margin-bottom: 25px;
  font-size: 0.88rem;
}

.admin-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 25px;
}

@media (max-width: 900px) {
  .admin-grid {
    grid-template-columns: 1fr;
  }
}

.admin-card {
  background: white;
  border: 1px solid var(--safnat-border);
  border-radius: var(--safnat-radius);
  padding: 20px;
  box-shadow: var(--safnat-shadow);
}

.admin-card h2 {
  font-size: 1.1rem;
  color: var(--safnat-green-dark);
  margin-bottom: 15px;
  border-bottom: 1px solid var(--safnat-border);
  padding-bottom: 8px;
}

.form-group {
  margin-bottom: 14px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid var(--safnat-border);
  border-radius: 6px;
  font-size: 0.9rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.checkbox-group {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.btn-save {
  background: var(--safnat-green);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-cancel {
  background: #e0e0e0;
  color: #333;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-danger {
  background: var(--safnat-red);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.table-responsive {
  overflow-x: auto;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.88rem;
}

.admin-table th, .admin-table td {
  padding: 10px;
  border-bottom: 1px solid var(--safnat-border);
}

.admin-table th {
  background: #f8fafc;
  color: var(--safnat-muted);
}

.badge-status {
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
}

.badge-status.in {
  background: #e6f4ea;
  color: #137333;
}

.badge-status.out {
  background: #fce8e6;
  color: #c5221f;
}

.branches-admin-list .branch-item {
  padding: 10px;
  border: 1px solid var(--safnat-border);
  border-radius: 6px;
  margin-bottom: 10px;
  font-size: 0.85rem;
}
// Default SAFNAT Store Data
const DEFAULT_BRANCHES = [
  { id: 'b1', name: 'SAFNAT Hypermarket', location: 'Al Amerat Souq 6, Oman' },
  { id: 'b2', name: 'Arafat Shopping Centre', location: 'Al Amerat Nahda, Oman' },
  { id: 'b3', name: 'SAFNAT Supermarket', location: 'Al Amerat Souq 3, Oman' },
  { id: 'b4', name: 'SAFNAT Supermarket', location: 'Quriyat, Oman' }
];

const DEFAULT_CATEGORIES = [
  { name: 'Dairy & Eggs', icon: '🥛' },
  { name: 'Fresh Produce', icon: '🍎' },
  { name: 'Beverages', icon: '🧃' },
  { name: 'Bakery & Snacks', icon: '🍞' },
  { name: 'Pantry & Cooking', icon: '🌾' }
];

const DEFAULT_PRODUCTS = [
  { id: 1, name: 'Al Rawabi Fresh Milk 2L', category: 'Dairy & Eggs', price: 0.850, oldPrice: 1.000, icon: '🥛', isOffer: true, isFeatured: true, inStock: true },
  { id: 2, name: 'Fresh Oman Tomatoes 1kg', category: 'Fresh Produce', price: 0.350, oldPrice: 0.500, icon: '🍅', isOffer: true, isFeatured: true, inStock: true },
  { id: 3, name: 'Oman Flour 10kg Bag', category: 'Pantry & Cooking', price: 2.400, oldPrice: 2.900, icon: '🌾', isOffer: false, isFeatured: true, inStock: true },
  { id: 4, name: 'Al Pinar White Cheese 500g', category: 'Dairy & Eggs', price: 1.100, oldPrice: null, icon: '🧀', isOffer: false, isFeatured: true, inStock: true },
  { id: 5, name: 'Fresh Local Bananas 1kg', category: 'Fresh Produce', price: 0.450, oldPrice: 0.600, icon: '🍌', isOffer: true, isFeatured: false, inStock: true },
  { id: 6, name: 'Areej Cooking Oil 1.5L', category: 'Pantry & Cooking', price: 1.250, oldPrice: 1.500, icon: '🍾', isOffer: true, isFeatured: true, inStock: true }
];

// LocalStorage Helper
function getStoredData(key, fallback) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
}

function setStoredData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// App State
let branches = getStoredData('safnat_branches', DEFAULT_BRANCHES);
let products = getStoredData('safnat_products', DEFAULT_PRODUCTS);
let categories = DEFAULT_CATEGORIES;
let cart = getStoredData('safnat_cart', []);
let selectedBranch = getStoredData('safnat_selected_branch', branches[0]);

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productsGrid')) {
    renderCategories();
    renderProducts(products);
    renderBranches();
    updateBranchUI();
    updateCartUI();
    setupSearch();
  }
});

// Render UI Elements
function renderCategories() {
  const container = document.getElementById('categories');
  if (!container) return;
  container.innerHTML = categories.map(cat => `
    <div class="cat-card" onclick="filterCategory('${cat.name}')">
      <div class="icon">${cat.icon}</div>
      <span>${cat.name}</span>
    </div>
  `).join('');
}

function renderProducts(items) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No products match your search/filter.</p>';
    return;
  }

  grid.innerHTML = items.map(prod => `
    <div class="product-card">
      ${prod.isOffer ? '<span class="badge-offer">SPECIAL OFFER</span>' : ''}
      <div class="product-img">${prod.icon}</div>
      <div class="product-category">${prod.category}</div>
      <div class="product-title">${prod.name}</div>
      <div class="product-pricing">
        <span class="price">${prod.price.toFixed(3)} OMR</span>
        ${prod.oldPrice ? `<span class="old-price">${prod.oldPrice.toFixed(3)} OMR</span>` : ''}
      </div>
      <button class="btn-add-cart" onclick="addToCart(${prod.id})" ${!prod.inStock ? 'disabled' : ''}>
        ${prod.inStock ? '+ Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  `).join('');
}

function renderBranches() {
  const list = document.getElementById('branchList');
  const modalList = document.getElementById('modalBranches');
  if (!list) return;

  const html = branches.map(b => `
    <div class="branch-card ${selectedBranch.id === b.id ? 'selected' : ''}" onclick="selectBranch('${b.id}')">
      <h4>📍 ${b.name}</h4>
      <p>${b.location}</p>
    </div>
  `).join('');

  list.innerHTML = html;
  if (modalList) modalList.innerHTML = html;
}

function selectBranch(id) {
  const branch = branches.find(b => b.id === id);
  if (branch) {
    selectedBranch = branch;
    setStoredData('safnat_selected_branch', branch);
    updateBranchUI();
    renderBranches();
    closeBranchModal();
    showToast(`Branch set to ${branch.name} (${branch.location})`);
  }
}

function updateBranchUI() {
  const btnText = document.getElementById('branchText');
  if (btnText && selectedBranch) {
    btnText.textContent = selectedBranch.name;
  }
}

// Filters & Search
function filterCategory(catName) {
  const filtered = products.filter(p => p.category === catName);
  document.getElementById('productsHeading').textContent = `Category: ${catName}`;
  document.getElementById('resetFilterBtn').style.display = 'inline-block';
  renderProducts(filtered);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function filterOffers() {
  const filtered = products.filter(p => p.isOffer);
  document.getElementById('productsHeading').textContent = "Today's Offers";
  document.getElementById('resetFilterBtn').style.display = 'inline-block';
  renderProducts(filtered);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function resetProductFilter() {
  document.getElementById('productsHeading').textContent = 'Featured Products';
  document.getElementById('resetFilterBtn').style.display = 'none';
  renderProducts(products);
}

function setupSearch() {
  const searchInput = document.getElementById('search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderProducts(products);
      return;
    }
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    );
    renderProducts(filtered);
  });
}

// Cart System
function addToCart(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    cart.push(item);
    setStoredData('safnat_cart', cart);
    updateCartUI();
    showToast(`${item.name} added to pick-up list!`);
  }
}

function updateCartUI() {
  const count = document.getElementById('cartCount');
  if (count) count.textContent = cart.length;

  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) cartBtn.onclick = openCartModal;
}

function openCartModal() {
  const modal = document.getElementById('cartModal');
  const itemsContainer = document.getElementById('cartItems');
  const totalElem = document.getElementById('cartTotal');

  if (cart.length === 0) {
    itemsContainer.innerHTML = '<p style="text-align:center; padding: 20px 0;">Your pickup cart is empty.</p>';
    totalElem.textContent = '0.000 OMR';
  } else {
    itemsContainer.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <span>${item.icon} ${item.name}</span>
        <div>
          <strong>${item.price.toFixed(3)} OMR</strong>
          <button style="margin-left:8px; color:red; border:none; background:none; cursor:pointer;" onclick="removeFromCart(${idx})">✕</button>
        </div>
      </div>
    `).join('');

    const total = cart.reduce((sum, i) => sum + i.price, 0);
    totalElem.textContent = `${total.toFixed(3)} OMR`;
  }

  modal.classList.remove('hidden');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  setStoredData('safnat_cart', cart);
  updateCartUI();
  openCartModal();
}

function clearCart() {
  cart = [];
  setStoredData('safnat_cart', cart);
  updateCartUI();
  openCartModal();
}

function closeCartModal() {
  document.getElementById('cartModal').classList.add('hidden');
}

// Modals & UI Triggers
const branchBtn = document.getElementById('branchBtn');
if (branchBtn) {
  branchBtn.onclick = () => document.getElementById('branchModal').classList.remove('hidden');
}

function closeBranchModal() {
  document.getElementById('branchModal').classList.add('hidden');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
// Admin Logic & CRUD Management
document.addEventListener('DOMContentLoaded', () => {
  renderAdminTable();
  renderAdminBranches();

  const form = document.getElementById('productForm');
  if (form) {
    form.addEventListener('submit', handleProductSubmit);
  }
});

function renderAdminTable() {
  const tableBody = document.getElementById('adminProductTable');
  const countElem = document.getElementById('totalProductsCount');
  if (!tableBody) return;

  const currentProducts = getStoredData('safnat_products', DEFAULT_PRODUCTS);
  if (countElem) countElem.textContent = currentProducts.length;

  tableBody.innerHTML = currentProducts.map(p => `
    <tr>
      <td><strong>${p.icon} ${p.name}</strong></td>
      <td>${p.category}</td>
      <td><strong>${p.price.toFixed(3)} OMR</strong></td>
      <td>${p.oldPrice ? p.oldPrice.toFixed(3) + ' OMR' : '-'}</td>
      <td>${p.isOffer ? '✅ Yes' : '❌ No'}</td>
      <td>${p.isFeatured ? '✅ Yes' : '❌ No'}</td>
      <td><span class="badge-status ${p.inStock ? 'in' : 'out'}">${p.inStock ? 'In Stock' : 'Out of Stock'}</span></td>
      <td>
        <button class="btn-text" onclick="editProduct(${p.id})">Edit</button> | 
        <button class="btn-text" style="color:var(--safnat-red);" onclick="deleteProduct(${p.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function renderAdminBranches() {
  const container = document.getElementById('adminBranchList');
  if (!container) return;

  const currentBranches = getStoredData('safnat_branches', DEFAULT_BRANCHES);
  container.innerHTML = currentBranches.map(b => `
    <div class="branch-item">
      <strong>📍 ${b.name}</strong>
      <div>${b.location}</div>
    </div>
  `).join('');
}

function handleProductSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('productId').value;
  const name = document.getElementById('prodName').value;
  const category = document.getElementById('prodCategory').value;
  const icon = document.getElementById('prodIcon').value || '🛒';
  const price = parseFloat(document.getElementById('prodPrice').value);
  const oldPriceVal = document.getElementById('prodOldPrice').value;
  const oldPrice = oldPriceVal ? parseFloat(oldPriceVal) : null;
  const isOffer = document.getElementById('prodIsOffer').checked;
  const isFeatured = document.getElementById('prodIsFeatured').checked;
  const inStock = document.getElementById('prodInStock').checked;

  let currentProducts = getStoredData('safnat_products', DEFAULT_PRODUCTS);

  if (id) {
    // Edit Existing
    currentProducts = currentProducts.map(p => p.id === parseInt(id) ? {
      ...p, name, category, icon, price, oldPrice, isOffer, isFeatured, inStock
    } : p);
    showToast('Product updated successfully!');
  } else {
    // Add New
    const newProduct = {
      id: Date.now(),
      name, category, icon, price, oldPrice, isOffer, isFeatured, inStock
    };
    currentProducts.push(newProduct);
    showToast('New product added to inventory!');
  }

  setStoredData('safnat_products', currentProducts);
  resetForm();
  renderAdminTable();
}

function editProduct(id) {
  const currentProducts = getStoredData('safnat_products', DEFAULT_PRODUCTS);
  const prod = currentProducts.find(p => p.id === id);
  if (!prod) return;

  document.getElementById('productId').value = prod.id;
  document.getElementById('prodName').value = prod.name;
  document.getElementById('prodCategory').value = prod.category;
  document.getElementById('prodIcon').value = prod.icon;
  document.getElementById('prodPrice').value = prod.price;
  document.getElementById('prodOldPrice').value = prod.oldPrice || '';
  document.getElementById('prodIsOffer').checked = prod.isOffer;
  document.getElementById('prodIsFeatured').checked = prod.isFeatured;
  document.getElementById('prodInStock').checked = prod.inStock;

  document.getElementById('formTitle').textContent = 'Edit Product';
  document.getElementById('saveBtn').textContent = 'Update Product';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    let currentProducts = getStoredData('safnat_products', DEFAULT_PRODUCTS);
    currentProducts = currentProducts.filter(p => p.id !== id);
    setStoredData('safnat_products', currentProducts);
    renderAdminTable();
    showToast('Product removed.');
  }
}

function resetForm() {
  document.getElementById('productForm').reset();
  document.getElementById('productId').value = '';
  document.getElementById('formTitle').textContent = 'Add New Product';
  document.getElementById('saveBtn').textContent = 'Save Product';
}

function resetToDefaultData() {
  if (confirm('Reset all inventory data back to original store defaults?')) {
    localStorage.removeItem('safnat_products');
    localStorage.removeItem('safnat_branches');
    renderAdminTable();
    renderAdminBranches();
    showToast('Store data reset to default demo set.');
  }
}