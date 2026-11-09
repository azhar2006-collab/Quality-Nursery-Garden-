/* ============================================================
   QUALITY NURSERY GARDEN — Chennai's Premier Nursery & Garden Store
   Main Interactive Application & E-Commerce Logic
   ============================================================ */

// ---- Exact 16 Quality Products ----
const PRODUCTS_DATA = [
    {
        id: 1,
        name: "3 Low Maintenance Indoor Plants Combo – Live Rubber Plant, Syngonium, & Money Plant",
        category: "combo",
        categoryLabel: "Combo Offer",
        price: 500,
        originalPrice: 600,
        discount: "17% OFF",
        badge: "17% OFF",
        rating: 4.9,
        reviews: 218,
        image: "https://dukaan.b-cdn.net/700x700/webp/media/a8005217-440f-4099-9c77-3996333d6054.webp",
        light: "Medium to Bright Indirect",
        water: "Once a Week",
        pot: "3 Nursery Pots Included",
        difficulty: "Beginner Friendly",
        description: "Best-selling starter pack for Chennai apartments! Includes 1 sturdy Rubber Plant (Ficus elastica), 1 lush Syngonium arrow-head vine, and 1 glossy Money Plant. Ideal for living rooms, offices, and indoor shelves with minimal care."
    },
    {
        id: 2,
        name: "Rosemary Plant Buy 1 Get 1 Free – Live Fresh Culinary Herb Pack",
        category: "herbal",
        categoryLabel: "Herbal & Culinary",
        price: 259,
        originalPrice: 500,
        discount: "48% OFF",
        badge: "BUY 1 GET 1 FREE",
        rating: 4.8,
        reviews: 142,
        image: "https://dukaan.b-cdn.net/500x500/webp/media/3d08a24c-8c58-4f73-9a33-7f2ecde77176.png",
        light: "Full Sunlight (4-6 hrs)",
        water: "When Topsoil Dries",
        pot: "6 Inch Black Nursery Pot",
        difficulty: "Easy to Moderate",
        description: "Special offer! Get 2 healthy rooted rosemary plants (Salvia rosmarinus). Releases an invigorating aroma, perfect for fresh herbal tea, culinary dishes, and natural insect repellent on your balcony."
    },
    {
        id: 3,
        name: "3 Outdoor Flowering Plants Combo Pack – Yellow Allamanda, Pink Ixora Mini, & Iruvatchi Malli Star Jasmine",
        category: "flowering",
        categoryLabel: "Flowering Combo",
        price: 149,
        originalPrice: 199,
        discount: "25% OFF",
        badge: "25% OFF",
        rating: 4.7,
        reviews: 312,
        image: "https://dukaan.b-cdn.net/500x500/webp/media/d1bec799-c2dd-492c-b1df-adcccd85fe16.webp",
        light: "Full Direct Sunlight",
        water: "Daily in Summers",
        pot: "3 Nursery Polybags",
        difficulty: "Very Easy",
        description: "Bring non-stop color and heavenly fragrance to your terrace garden! Features 1 golden trumpet Allamanda, 1 heavy-blooming dwarf pink Ixora, and 1 intensely fragrant South Indian Iruvatchi Malli (Star Jasmine)."
    },
    {
        id: 4,
        name: "Top 4 Plants to Bring Good Luck and Prosperity Combo – Live Peace Lily, Money Plant, 2-Layer Lucky Bamboo, & Jade Plants",
        category: "combo",
        categoryLabel: "Good Luck Combo",
        price: 650,
        originalPrice: 700,
        discount: "7% OFF",
        badge: "BESTSELLER",
        rating: 4.9,
        reviews: 420,
        image: "https://dukaan.b-cdn.net/700x700/webp/media/12cc6828-b799-4d3a-98fb-744a2791482b.png",
        light: "Indoor Filtered Light",
        water: "Weekly or as needed",
        pot: "4 Self-Watering Pots",
        difficulty: "Beginner",
        description: "The ultimate Vastu and Feng Shui prosperity pack! Handpicked combination of flowering Peace Lily, Money Plant in fancy pot, 2-Layer Lucky Bamboo with glass vase, and hardy Crassula Jade Plant."
    },
    {
        id: 5,
        name: "Mini Ixora Flowering Plants Pack of 3 – Live Ixora Plants in 3 Vibrant Colors",
        category: "flowering",
        categoryLabel: "Flowering Plants",
        price: 299,
        originalPrice: 399,
        discount: "25% OFF",
        badge: "25% OFF",
        rating: 4.6,
        reviews: 89,
        image: "https://dukaan.b-cdn.net/500x500/webp/media/3b0f2e31-b35e-4d47-a47a-bac0877fe6a5.webp",
        light: "Full Sun / Outdoor",
        water: "Alternate Days",
        pot: "3 Grow Pots",
        difficulty: "Easy",
        description: "Cluster flowering dwarf Ixora plants in Red, Yellow, and Coral Pink. Heat tolerant and perennial bloomers, specially suited for Chennai's tropical weather and decorative balcony borders."
    },
    {
        id: 6,
        name: "Set of 3 Small Plants for Luck – Live 2-Layer Lucky Bamboo, Money Plant, & Green Peperomia Combo",
        category: "combo",
        categoryLabel: "Tabletop Combos",
        price: 399,
        originalPrice: 499,
        discount: "20% OFF",
        badge: "20% OFF",
        rating: 4.8,
        reviews: 175,
        image: "https://dukaan.b-cdn.net/700x700/webp/media/bab899b0-7b4a-4eca-a711-6d23441252a6.webp",
        light: "Tabletop / Fluorescent",
        water: "Bamboo: Water change weekly",
        pot: "Ceramic & Glass Bowls",
        difficulty: "Very Easy",
        description: "Compact tabletop plants designed for work desks, study tables, and living room consoles. Brings calm green focus and absorbs indoor toxins."
    },
    {
        id: 7,
        name: "Top 3 Flowering Indoor Plants to Purify Air Combo – Live Red Anthurium & Twin Peace Lily Plants",
        category: "plants",
        categoryLabel: "Air Purifier Plants",
        price: 900,
        originalPrice: 999,
        discount: "10% OFF",
        badge: "PREMIUM",
        rating: 4.9,
        reviews: 94,
        image: "https://dukaan.b-cdn.net/500x500/webp/media/06cb6fd4-d837-4c67-ae9b-df0bc8a178b6.webp",
        light: "Bright Indirect Light",
        water: "Twice a Week",
        pot: "Decorative Nursery Planters",
        difficulty: "Easy to Moderate",
        description: "Luxury botanical combo! Features 1 blooming exotic Red Anthurium with glossy spathes and 2 snow-white flowering Peace Lily plants. NASA certified for removing airborne toxins."
    },
    {
        id: 8,
        name: "Winter Special Top 4 Air Purifier Plants Pack – Live Areca Palm Small, Peace Lily, Syngonium, & Star Jasmine",
        category: "plants",
        categoryLabel: "Air Purifiers",
        price: 699,
        originalPrice: 800,
        discount: "13% OFF",
        badge: "TOP PICK",
        rating: 4.7,
        reviews: 153,
        image: "https://dukaan.b-cdn.net/700x700/webp/media/f6b4d1b0-24b1-4bc7-accb-ddb7f2e712b2.webp",
        light: "Partial Sun / Balcony",
        water: "Regular Watering",
        pot: "4 Plastic Pots Included",
        difficulty: "Easy",
        description: "Complete seasonal wellness combo. The feathery Areca Palm humidifies dry indoor air while Syngonium, Peace Lily, and fragrant Star Jasmine create a living sanctuary."
    },
    {
        id: 9,
        name: "Top 3 Beautiful Samanthi Flowers of the Season – Live Purple, Yellow, & White Chrysanthemum Combo",
        category: "flowering",
        categoryLabel: "Flowering Plants",
        price: 199,
        originalPrice: 299,
        discount: "33% OFF",
        badge: "33% OFF",
        rating: 4.7,
        reviews: 204,
        image: "https://dukaan.b-cdn.net/500x500/webp/media/d324f01c-eb40-47a6-a94c-d78279536fe6.jpg",
        light: "Direct Sun (Morning)",
        water: "Daily in flowering season",
        pot: "3 Nursery Pots",
        difficulty: "Easy",
        description: "Traditional South Indian Samanthi (Chrysanthemum) plants loaded with flower buds. Perfect for pooja, garland making, and vibrant festive home decorations."
    },
    {
        id: 10,
        name: "Short Snake Plant (Sansevieria) – Live Indoor Air-Purifying Plant in 6 Inch White Fancy Pot",
        category: "plants",
        categoryLabel: "Indoor Plants",
        price: 329,
        originalPrice: 399,
        discount: "18% OFF",
        badge: "18% OFF",
        rating: 4.9,
        reviews: 280,
        image: "https://dukaan.b-cdn.net/500x500/webp/media/526534c6-9bf8-4301-bdb3-b50583b1737e.png",
        light: "Low to High Indirect",
        water: "Every 2 Weeks",
        pot: "6 Inch White Fancy Ribbed Pot",
        difficulty: "Indestructible",
        description: "The ultimate bedroom plant! Releases oxygen throughout the night and tolerates extreme neglect. Comes pre-potted in a premium white designer planter ready to display."
    },
    {
        id: 11,
        name: "Variegated Money Plant – Live Indoor Air-Purifying Plant in 6 Inch Green Fancy Pot",
        category: "plants",
        categoryLabel: "Indoor Plants",
        price: 250,
        originalPrice: 299,
        discount: "16% OFF",
        badge: "16% OFF",
        rating: 4.8,
        reviews: 190,
        image: "https://dukaan.b-cdn.net/500x500/webp/media/89aeb8fd-038e-4a4e-9377-a89b7f70c869.png",
        light: "Shade / Indirect Sun",
        water: "Weekly",
        pot: "6 Inch Green Pastel Pot",
        difficulty: "Very Easy",
        description: "Healthy rooted Epipremnum Aureum with heart-shaped golden-green foliage. Beautifully potted in a pastel green designer pot with built-in drainage plate."
    },
    {
        id: 12,
        name: "Buy 1 Get 1 Rose Mix Fertilizer - 250Gram Special Micronutrient Blend",
        category: "fertilizer",
        categoryLabel: "Organic Fertilizer",
        price: 100,
        originalPrice: 150,
        discount: "33% OFF",
        badge: "BOGO OFFER",
        rating: 4.9,
        reviews: 310,
        image: "https://dukaan.b-cdn.net/500x500/webp/download-and-upload/95bdddbc-03bc-48f3-93b6-efd8625cf729.jpeg",
        light: "N/A",
        water: "Apply every 15 days",
        pot: "2 Packets (250g x 2)",
        difficulty: "Easy to Apply",
        description: "Our famous Chennai nursery secret! Formulated with bone meal, neem cake, seaweed granules, and balanced bio-fertilizers to produce heavy flowering and large-sized rose blooms."
    },
    {
        id: 13,
        name: "Buy 4 Thulasi Plant and Get 1 Thulasi Free – Holy Krishna & Rama Tulsi Pack",
        category: "herbal",
        categoryLabel: "Medicinal Herbs",
        price: 150,
        originalPrice: 199,
        discount: "25% OFF",
        badge: "BUY 4 GET 1 FREE",
        rating: 4.9,
        reviews: 245,
        image: "https://dukaan.b-cdn.net/500x500/webp/download-and-upload/b4d9ca33-bf63-45b5-876f-a0e720d1306d.jpeg",
        light: "Morning Sunlight (3-5 hrs)",
        water: "Daily Morning",
        pot: "5 Nursery Pots",
        difficulty: "Easy",
        description: "Traditional sacred Tulsi bundle containing 3 Krishna Thulasi (purple leaf) and 2 Rama Thulasi (green leaf). Purifies home atmosphere, perfect for daily pooja and herbal teas."
    },
    {
        id: 14,
        name: "Fish Amino Acid 1L + Panchagavya 1L Combo – 100% Traditional Organic Plant Tonic",
        category: "fertilizer",
        categoryLabel: "Organic Fertilizer",
        price: 420,
        originalPrice: 599,
        discount: "30% OFF",
        badge: "30% OFF",
        rating: 4.8,
        reviews: 188,
        image: "https://dukaan.b-cdn.net/500x500/webp/download-and-upload/8a88f82a-7cd7-4c87-95e5-c099e033b872.jpeg",
        light: "N/A",
        water: "Dilute 5ml per Liter",
        pot: "2 x 1000ml Bottles",
        difficulty: "Foliar Spray",
        description: "Powerful natural growth booster for vegetable terrace gardens! Prepared through traditional fermentation methods. Boosts immunity against mealy bugs and triggers rapid flowering and fruiting."
    },
    {
        id: 15,
        name: "Buy 10 Pack Coriander Seeds ( கொத்தமல்லி விதை ) Get 2 Pack Free",
        category: "seeds",
        categoryLabel: "Country Seeds",
        price: 200,
        originalPrice: 250,
        discount: "20% OFF",
        badge: "BUY 10 GET 2 FREE",
        rating: 4.7,
        reviews: 135,
        image: "https://dukaan.b-cdn.net/500x500/webp/download-and-upload/007d0d6e-beb7-4d3a-ba4e-5afe200d1e15.jpeg",
        light: "Partial Sun / 3-4 hrs",
        water: "Keep Soil Moist",
        pot: "12 Packets (~50g each)",
        difficulty: "Easy / 7-10 Days",
        description: "Native country coriander seeds with 85%+ tested germination rate. Intense aroma and rapid green leaf growth. Ready to harvest within 25 days of sowing in terrace grow bags."
    },
    {
        id: 16,
        name: "Blackberry Fruit Plant | Live Fruit Plant for Home & Terrace Gardens",
        category: "plants",
        categoryLabel: "Fruit Plants",
        price: 450,
        originalPrice: 550,
        discount: "18% OFF",
        badge: "EXOTIC",
        rating: 4.6,
        reviews: 78,
        image: "https://dukaan.b-cdn.net/700x700/webp/media/9bfad35e-09bb-4abf-b495-b855f6e942a2.png",
        light: "Full Direct Sun",
        water: "Regular Watering",
        pot: "8 Inch Sturdy Bag",
        difficulty: "Moderate",
        description: "Grafted exotic fruiting shrub adapted to South Indian container gardening. Yields juicy sweet dark berries in season. Heavy fruit bearing with organic vermicompost feed."
    }
];

// ---- Application State ----
let cart = JSON.parse(localStorage.getItem('qualitynursery_cart') || localStorage.getItem('myowngarden_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('qualitynursery_wishlist') || localStorage.getItem('myowngarden_wishlist') || '[]');
let activeCategory = 'all';
let activeSort = 'featured';
let searchQuery = '';
let currentHeroIndex = 0;
let heroTimer = null;
let appliedCoupon = null;
let currentModalProductId = null;
let modalQtyValue = 1;

// ---- DOM Elements ----
const productsGrid = document.getElementById('productsGrid');
const cartBadge = document.getElementById('cartBadge');
const cartHeaderTotal = document.getElementById('cartHeaderTotal');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawerItems = document.getElementById('cartDrawerItems');
const cartDrawerEmpty = document.getElementById('cartDrawerEmpty');
const cartDrawerFoot = document.getElementById('cartDrawerFoot');
const cartDrawerCount = document.getElementById('cartDrawerCount');
const wishlistBadge = document.getElementById('wishlistBadge');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const toastHost = document.getElementById('toastHost');

// ---- Initialization ----
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartDisplay();
    updateWishlistBadge();
    initHeroSlider();
    initPincodeStorage();

    // Payment method radio selection highlight
    document.querySelectorAll('input[name="payMethod"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('.pay-option').forEach(opt => opt.classList.remove('active'));
            e.target.closest('.pay-option').classList.add('active');
        });
    });

    // Search input listener
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        searchClear.style.display = searchQuery ? 'block' : 'none';
        renderProducts();
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        renderProducts();
        searchInput.focus();
    });

    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeQuickModal();
            closePincodeModal();
            if (cartDrawer.classList.contains('active')) toggleCartDrawer();
        }
    });
});

// ============================================================
// PRODUCT RENDERING & FILTERING
// ============================================================
function renderProducts() {
    let filtered = [...PRODUCTS_DATA];

    // Filter by Category
    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchQuery) ||
            p.categoryLabel.toLowerCase().includes(searchQuery) ||
            p.description.toLowerCase().includes(searchQuery)
        );
    }

    // Sort Products
    switch (activeSort) {
        case 'discount':
            filtered.sort((a, b) => {
                const discA = parseInt(a.discount) || 0;
                const discB = parseInt(b.discount) || 0;
                return discB - discA;
            });
            break;
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'featured':
        default:
            // Combos & highest reviews first
            filtered.sort((a, b) => b.reviews - a.reviews);
            break;
    }

    // Update count subtitle
    const countSub = document.getElementById('productCountSub');
    if (countSub) {
        countSub.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} nursery products`;
    }

    // Render HTML Cards
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <div style="font-size: 3.5rem; margin-bottom: 14px;">🔍</div>
                <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--gray-800); margin-bottom: 6px;">No products found</h3>
                <p style="color: var(--gray-500); font-size: 0.92rem;">Try searching with different keywords like "rose", "combo", "tulsi", or "vermicompost".</p>
                <button class="btn btn--primary" style="margin-top: 18px;" onclick="resetAllFilters()">View All Products</button>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filtered.map(product => {
        const inCartItem = cart.find(item => item.id === product.id);
        const inCartQty = inCartItem ? inCartItem.quantity : 0;
        const isWish = wishlist.includes(product.id);

        let badgeMarkup = '';
        if (product.badge.includes('BUY')) {
            badgeMarkup = `<span class="product-card__bogo-tag">${product.badge}</span>`;
        } else if (product.badge) {
            badgeMarkup = `<span class="product-card__discount-tag">${product.badge}</span>`;
        }

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-card__img-box">
                    ${badgeMarkup}
                    <button class="product-card__wish-btn ${isWish ? 'active' : ''}" 
                            onclick="toggleWishlist(${product.id})" 
                            title="Add to Wishlist" 
                            aria-label="Wishlist">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         class="product-card__img" 
                         loading="lazy"
                         onerror="this.src='https://dukaan.b-cdn.net/700x700/webp/media/a8005217-440f-4099-9c77-3996333d6054.webp'">
                    <button class="product-card__quick-btn" onclick="openQuickModal(${product.id})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/></svg>
                        Quick View
                    </button>
                </div>

                <div class="product-card__info">
                    <span class="product-card__cat">${product.categoryLabel}</span>
                    <h3 class="product-card__title" title="${product.name}">${product.name}</h3>
                    
                    <div class="product-card__pricing">
                        <span class="product-card__price">₹${product.price}</span>
                        ${product.originalPrice ? `<span class="product-card__orig-price">₹${product.originalPrice}</span>` : ''}
                        ${product.discount ? `<span class="product-card__discount-pill">(${product.discount})</span>` : ''}
                    </div>

                    <div class="product-card__bottom">
                        ${inCartQty > 0 ? `
                            <div class="product-card__stepper">
                                <button class="product-card__step-btn" onclick="updateCartItemQty(${product.id}, -1)">−</button>
                                <span class="product-card__step-qty">${inCartQty}</span>
                                <button class="product-card__step-btn" onclick="updateCartItemQty(${product.id}, 1)">+</button>
                            </div>
                        ` : `
                            <button class="product-card__add-btn" onclick="addToCart(${product.id})">
                                ADD
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Category Filter Handling
function setCategoryFilter(category) {
    activeCategory = category;

    // Update filter pills
    document.querySelectorAll('.filter-pill').forEach(pill => {
        const text = pill.textContent.toLowerCase();
        const isMatch = (category === 'all' && text.includes('all')) || text.includes(category);
        pill.classList.toggle('active', isMatch);
    });

    // Update story circles
    document.querySelectorAll('.story-item').forEach(item => {
        const onclickAttr = item.getAttribute('onclick') || '';
        item.classList.toggle('active', onclickAttr.includes(`'${category}'`));
    });

    renderProducts();

    // Smooth scroll to catalog section if triggered from header/stories
    const shopSec = document.getElementById('shop');
    if (shopSec && window.scrollY > 400) {
        shopSec.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleSortChange(sortVal) {
    activeSort = sortVal;
    renderProducts();
}

function resetAllFilters() {
    activeCategory = 'all';
    searchQuery = '';
    searchInput.value = '';
    searchClear.style.display = 'none';
    setCategoryFilter('all');
}

function toggleAllCategoriesDropdown() {
    const catNav = document.getElementById('catNav');
    if (catNav) {
        catNav.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================================
// SHOPPING CART OPERATIONS
// ============================================================
function addToCart(productId, qty = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({ id: productId, quantity: qty });
    }

    saveCart();
    updateCartDisplay();
    renderProducts(); // Updates card "ADD" to stepper
    showToast(`Added to cart: ${product.name.slice(0, 36)}...`, '🛒');
}

function updateCartItemQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    saveCart();
    updateCartDisplay();
    renderProducts();
}

function removeCartItem(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartDisplay();
    renderProducts();
    showToast('Item removed from cart', '🗑️');
}

function saveCart() {
    localStorage.setItem('qualitynursery_cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        return sum + (prod ? prod.price * item.quantity : 0);
    }, 0);

    // Update Header Badges
    if (cartBadge) cartBadge.textContent = totalCount;
    const mobileCartBadge = document.getElementById('mobileCartBadge');
    if (mobileCartBadge) mobileCartBadge.textContent = totalCount;
    if (cartHeaderTotal) cartHeaderTotal.textContent = `₹${subtotal}`;
    if (cartDrawerCount) cartDrawerCount.textContent = totalCount;

    // Free delivery meter (Target: ₹999)
    const meterTarget = 999;
    const remaining = Math.max(0, meterTarget - subtotal);
    const pct = Math.min(100, (subtotal / meterTarget) * 100);
    const meterFill = document.getElementById('shippingMeterFill');
    const meterText = document.getElementById('shippingMeterText');

    if (meterFill && meterText) {
        meterFill.style.width = `${pct}%`;
        if (remaining > 0) {
            meterText.innerHTML = `Add <strong>₹${remaining}</strong> more for <strong>FREE Delivery in Chennai</strong>!`;
        } else {
            meterText.innerHTML = `🎉 You've unlocked <strong>FREE Home Delivery in Chennai!</strong>`;
        }
    }

    // Render Drawer Items
    if (cart.length === 0) {
        cartDrawerItems.innerHTML = '';
        cartDrawerEmpty.classList.add('visible');
        cartDrawerFoot.style.display = 'none';
    } else {
        cartDrawerEmpty.classList.remove('visible');
        cartDrawerFoot.style.display = 'block';

        cartDrawerItems.innerHTML = cart.map(item => {
            const prod = PRODUCTS_DATA.find(p => p.id === item.id);
            if (!prod) return '';

            return `
                <div class="cart-row">
                    <img src="${prod.image}" alt="${prod.name}" class="cart-row__img" onerror="this.src='https://dukaan.b-cdn.net/700x700/webp/media/a8005217-440f-4099-9c77-3996333d6054.webp'">
                    <div class="cart-row__details">
                        <div class="cart-row__name" title="${prod.name}">${prod.name}</div>
                        <div class="cart-row__price">₹${prod.price} × ${item.quantity} = ₹${prod.price * item.quantity}</div>
                        <div class="cart-row__controls">
                            <button class="cart-row__btn" onclick="updateCartItemQty(${prod.id}, -1)">−</button>
                            <span class="cart-row__qty">${item.quantity}</span>
                            <button class="cart-row__btn" onclick="updateCartItemQty(${prod.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="cart-row__del" onclick="removeCartItem(${prod.id})" title="Remove item">✕</button>
                </div>
            `;
        }).join('');

        // Calculate Totals & Discounts
        let discountAmt = 0;
        if (appliedCoupon === 'QUALITY10' || appliedCoupon === 'MOG10') {
            discountAmt = Math.round(subtotal * 0.10);
        } else if (appliedCoupon === 'COMBO20') {
            discountAmt = Math.round(subtotal * 0.20);
        }

        const deliveryFee = subtotal >= 999 || appliedCoupon === 'FREESHIP' ? 0 : 70;
        const grandTotal = Math.max(0, subtotal - discountAmt + deliveryFee);

        document.getElementById('cartSummarySubtotal').textContent = `₹${subtotal}`;
        document.getElementById('cartSummaryDelivery').textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
        document.getElementById('cartSummaryGrand').textContent = `₹${grandTotal}`;

        const discountRow = document.getElementById('cartDiscountRow');
        const discountVal = document.getElementById('cartSummaryDiscount');
        if (discountAmt > 0) {
            discountRow.style.display = 'flex';
            discountVal.textContent = `-₹${discountAmt}`;
        } else {
            discountRow.style.display = 'none';
        }
    }
}

function toggleCartDrawer() {
    cartDrawer.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Coupon Codes
function copyCouponCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast(`Coupon code "${code}" copied to clipboard!`, '📋');
        const input = document.getElementById('cartCouponInput');
        if (input) input.value = code;
        appliedCoupon = code;
        updateCartDisplay();
    }).catch(() => {
        appliedCoupon = code;
        updateCartDisplay();
        showToast(`Coupon applied: ${code}`, '🎉');
    });
}

function applyCartCoupon() {
    const input = document.getElementById('cartCouponInput');
    const msg = document.getElementById('cartCouponMsg');
    const code = input.value.trim().toUpperCase();

    if (code === 'QUALITY10' || code === 'MOG10') {
        appliedCoupon = 'QUALITY10';
        msg.style.color = '#16a34a';
        msg.textContent = '✔ Coupon QUALITY10 applied: 10% instant discount!';
        showToast('10% discount applied!', '🎉');
    } else if (code === 'FREESHIP') {
        appliedCoupon = 'FREESHIP';
        msg.style.color = '#16a34a';
        msg.textContent = '✔ Coupon FREESHIP applied: Free Delivery unlocked!';
        showToast('Free delivery coupon applied!', '🚚');
    } else if (code === 'COMBO20') {
        appliedCoupon = 'COMBO20';
        msg.style.color = '#16a34a';
        msg.textContent = '✔ Coupon COMBO20 applied: 20% discount on combos!';
        showToast('20% discount applied!', '🔥');
    } else {
        appliedCoupon = null;
        msg.style.color = '#dc2626';
        msg.textContent = '✖ Invalid coupon. Try QUALITY10, FREESHIP, or COMBO20.';
    }

    updateCartDisplay();
}

// Checkout Handlers
function handleCheckoutStandard() {
    if (cart.length === 0) {
        showToast('Your cart is empty! Add plants first.', '🛒');
        return;
    }
    // Close the cart drawer and open the checkout modal
    if (cartDrawer.classList.contains('active')) {
        toggleCartDrawer();
    }
    openCheckoutModal();
}

function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('checkoutOverlay');
    const payableTotal = document.getElementById('checkoutPayableTotal');
    const grand = document.getElementById('cartSummaryGrand');
    
    if (payableTotal && grand) {
        payableTotal.textContent = grand.textContent;
    }

    // Reset to form view
    document.getElementById('checkoutFormScreen').style.display = 'block';
    document.getElementById('checkoutSuccessScreen').style.display = 'none';

    // Autofill saved location/pincode if available
    const savedPin = localStorage.getItem('qualitynursery_pincode') || '';
    const pinMatch = savedPin.match(/\d{6}/);
    if (pinMatch) {
        const pinInput = document.getElementById('orderPincode');
        if (pinInput && !pinInput.value) pinInput.value = pinMatch[0];
    }

    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('checkoutOverlay');
    if (modal && overlay) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}

function handlePlaceOrder(event) {
    event.preventDefault();

    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    const area = document.getElementById('orderArea').value.trim();
    const pincode = document.getElementById('orderPincode').value.trim();

    const payMethodInput = document.querySelector('input[name="payMethod"]:checked');
    const payMethod = payMethodInput ? payMethodInput.value : 'Cash on Delivery (COD)';
    const grandTotal = document.getElementById('cartSummaryGrand').textContent;

    const orderId = 'QNG-2026-' + Math.floor(1000 + Math.random() * 9000);

    // Populate Receipt
    document.getElementById('receiptOrderId').textContent = orderId;
    document.getElementById('receiptName').textContent = name;
    document.getElementById('receiptAddress').textContent = `${address}, ${area} - ${pincode}`;
    document.getElementById('receiptPayment').textContent = payMethod;
    document.getElementById('receiptTotal').textContent = grandTotal;

    // Track on WhatsApp button link
    const waMsg = encodeURIComponent(
        `🌿 *Order Confirmation - Quality Nursery Garden*\n\n*Order ID:* ${orderId}\n*Customer:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}, ${area} - ${pincode}\n*Payment:* ${payMethod}\n*Amount:* ${grandTotal}\n\nPlease confirm dispatch from your Medavakkam nursery!`
    );
    document.getElementById('receiptWhatsAppBtn').href = `https://wa.me/919962545455?text=${waMsg}`;

    // Switch view to success
    document.getElementById('checkoutFormScreen').style.display = 'none';
    document.getElementById('checkoutSuccessScreen').style.display = 'flex';

    // Clear cart
    cart = [];
    saveCart();
    updateCartDisplay();
    renderProducts();

    showToast(`Order ${orderId} confirmed successfully!`, '🎉');
}

function handleCheckoutWhatsApp() {
    if (cart.length === 0) return;

    let itemsText = cart.map((item, idx) => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        return `${idx + 1}. ${prod ? prod.name : 'Item'} x ${item.quantity} = ₹${(prod ? prod.price : 0) * item.quantity}`;
    }).join('\n');

    const totalText = document.getElementById('cartSummaryGrand').textContent;
    const locText = document.getElementById('currentLocation').textContent;

    const message = encodeURIComponent(
        `🌿 *Hello Quality Nursery Garden! I want to order plants:*\n\n${itemsText}\n\n*Total Amount:* ${totalText}\n*Delivery Area:* ${locText}\n\nPlease confirm availability and payment details.`
    );

    window.open(`https://wa.me/919962545455?text=${message}`, '_blank');
}

// ============================================================
// CATEGORY DRAWER
// ============================================================
function toggleCategoryDrawer() {
    const drawer = document.getElementById('menuDrawer');
    const overlay = document.getElementById('menuOverlay');
    if (drawer && overlay) {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }
}

// ============================================================
// WISHLIST FUNCTIONALITY & MODAL
// ============================================================
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist', '🤍');
    } else {
        wishlist.push(productId);
        showToast('Added to your nursery wishlist!', '❤️');
    }

    localStorage.setItem('qualitynursery_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    renderProducts();
}

function updateWishlistBadge() {
    if (wishlistBadge) {
        wishlistBadge.textContent = wishlist.length;
    }
}

function openWishlistModal() {
    const modal = document.getElementById('wishlistModal');
    const overlay = document.getElementById('wishlistOverlay');
    const list = document.getElementById('wishlistItemsList');
    const countHead = document.getElementById('wishlistCountHead');
    if (!modal || !overlay) return;

    if (countHead) countHead.textContent = wishlist.length;

    if (wishlist.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <div style="font-size: 3rem; margin-bottom: 12px;">🤍</div>
                <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--gray-800); margin-bottom: 6px;">Your Wishlist is Empty</h4>
                <p style="color: var(--gray-500); font-size: 0.88rem;">Click the heart icon on any live plant or combo to save it for later!</p>
            </div>
        `;
    } else {
        list.innerHTML = wishlist.map(id => {
            const prod = PRODUCTS_DATA.find(p => p.id === id);
            if (!prod) return '';
            return `
                <div class="wishlist-row">
                    <img src="${prod.image}" alt="${prod.name}" class="wishlist-row__img" onerror="this.src='https://dukaan.b-cdn.net/700x700/webp/media/a8005217-440f-4099-9c77-3996333d6054.webp'">
                    <div class="wishlist-row__info">
                        <div class="wishlist-row__title" title="${prod.name}">${prod.name}</div>
                        <div class="wishlist-row__price">₹${prod.price}</div>
                    </div>
                    <div class="wishlist-row__actions">
                        <button class="btn btn--primary btn--sm" onclick="addToCart(${prod.id}); closeWishlistModal();">Add to Cart</button>
                        <button class="btn btn--outline btn--sm" onclick="toggleWishlist(${prod.id}); openWishlistModal();" title="Remove">✕</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeWishlistModal() {
    const modal = document.getElementById('wishlistModal');
    const overlay = document.getElementById('wishlistOverlay');
    if (modal && overlay) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}

// ============================================================
// QUICK VIEW LIGHTBOX MODAL
// ============================================================
function openQuickModal(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    currentModalProductId = productId;
    modalQtyValue = 1;

    document.getElementById('quickModalImg').src = product.image;
    document.getElementById('quickModalImg').alt = product.name;
    document.getElementById('quickModalBadge').textContent = product.badge || '';
    document.getElementById('quickModalBadge').style.display = product.badge ? 'inline-block' : 'none';
    document.getElementById('quickModalCat').textContent = product.categoryLabel;
    document.getElementById('quickModalName').textContent = product.name;
    document.getElementById('quickModalPrice').textContent = `₹${product.price}`;
    document.getElementById('quickModalOrig').textContent = product.originalPrice ? `₹${product.originalPrice}` : '';
    document.getElementById('quickModalDiscount').textContent = product.discount ? `(${product.discount})` : '';
    document.getElementById('quickModalDesc').textContent = product.description;

    document.getElementById('quickModalLight').textContent = product.light;
    document.getElementById('quickModalWater').textContent = product.water;
    document.getElementById('quickModalPot').textContent = product.pot;
    document.getElementById('quickModalDifficulty').textContent = product.difficulty;
    document.getElementById('quickModalQty').textContent = modalQtyValue;

    document.getElementById('quickModalAddBtn').onclick = () => {
        addToCart(product.id, modalQtyValue);
        closeQuickModal();
    };

    document.getElementById('quickModal').classList.add('active');
    document.getElementById('quickModalOverlay').classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeQuickModal() {
    document.getElementById('quickModal').classList.remove('active');
    document.getElementById('quickModalOverlay').classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function changeModalQty(delta) {
    modalQtyValue = Math.max(1, modalQtyValue + delta);
    document.getElementById('quickModalQty').textContent = modalQtyValue;
}

// ============================================================
// PINCODE DELIVERY CHECKER MODAL
// ============================================================
function openPincodeModal() {
    document.getElementById('pincodeModal').classList.add('active');
    document.getElementById('pincodeModalOverlay').classList.add('active');
    document.body.classList.add('no-scroll');
    document.getElementById('pincodeInput').focus();
}

function closePincodeModal() {
    document.getElementById('pincodeModal').classList.remove('active');
    document.getElementById('pincodeModalOverlay').classList.remove('active');
    document.body.classList.remove('no-scroll');
}

function verifyPincode() {
    const input = document.getElementById('pincodeInput');
    const result = document.getElementById('pincodeResult');
    const code = input.value.trim();

    if (!/^\d{6}$/.test(code)) {
        result.style.color = '#dc2626';
        result.textContent = 'Please enter a valid 6-digit Indian pincode.';
        return;
    }

    // Chennai pincodes start with 600
    if (code.startsWith('600')) {
        result.style.color = '#16a34a';
        result.innerHTML = `✔ <strong>Pincode ${code} is eligible for Express Doorstep Delivery!</strong> Same-day/next-day dispatch from our Medavakkam nursery.`;
        setLocation(`Chennai ${code}`);
        setTimeout(closePincodeModal, 1500);
    } else {
        result.style.color = '#0f766e';
        result.innerHTML = `✔ <strong>Pincode ${code} is eligible for All-India Courier Delivery!</strong> Expected in 3-5 days with safe plant framing.`;
        setLocation(`India - ${code}`);
        setTimeout(closePincodeModal, 1500);
    }
}

function selectQuickPincode(code, areaName) {
    setLocation(`${areaName} (${code})`);
    closePincodeModal();
    showToast(`Delivery location set to ${areaName}!`, '📍');
}

function setLocation(loc) {
    document.getElementById('currentLocation').textContent = loc;
    localStorage.setItem('qualitynursery_pincode', loc);
}

function initPincodeStorage() {
    const saved = localStorage.getItem('qualitynursery_pincode') || localStorage.getItem('myowngarden_pincode');
    if (saved) {
        document.getElementById('currentLocation').textContent = saved;
    }
}

// ============================================================
// HERO SLIDER CAROUSEL
// ============================================================
function initHeroSlider() {
    const track = document.getElementById('heroTrack');
    if (!track) return;

    startHeroTimer();

    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => clearInterval(heroTimer));
        slider.addEventListener('mouseleave', () => startHeroTimer());

        // Mobile touch swipe gestures
        let touchStartX = 0;
        let touchEndX = 0;
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 45) {
                if (diff > 0) {
                    changeHeroSlide(1); // Swipe left -> next slide
                } else {
                    changeHeroSlide(-1); // Swipe right -> prev slide
                }
            }
        }, { passive: true });
    }
}

function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
        changeHeroSlide(1);
    }, 5500);
}

function changeHeroSlide(direction) {
    const totalSlides = 3;
    currentHeroIndex = (currentHeroIndex + direction + totalSlides) % totalSlides;
    updateHeroSlider();
}

function goToHeroSlide(index) {
    currentHeroIndex = index;
    updateHeroSlider();
    startHeroTimer();
}

function updateHeroSlider() {
    const track = document.getElementById('heroTrack');
    if (!track) return;

    track.style.transform = `translateX(-${currentHeroIndex * 33.3333}%)`;

    document.querySelectorAll('.slider-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentHeroIndex);
    });
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function showToast(message, icon = '🌿') {
    if (!toastHost) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="font-size: 1.2rem;">${icon}</span><span>${message}</span>`;
    toastHost.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}
