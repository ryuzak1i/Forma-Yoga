//------------------------INDEX.HTML------------------------
// Navbar Scroll State
const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Hero Slider
const slider = document.querySelector('.slider');
if (slider) {
    setInterval(() => {
        slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
        setTimeout(() => {
            slider.style.scrollBehavior = 'auto'; 
            slider.appendChild(slider.firstElementChild); 
            slider.scrollLeft -= slider.clientWidth; 
            slider.style.scrollBehavior = 'smooth'; 
        }, 600); 
    }, 8000);
}

// Infinite Sponsor Carousel
const track = document.getElementById('cardTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const originalCards = document.querySelectorAll('.card-item');

if (nextBtn && prevBtn && track && originalCards.length > 0) {
    const gap = 32; 
    let currentIndex = 0;
    let isTransitioning = false;

    const getVisibleCardsCount = () => window.innerWidth <= 768 ? 1 : 4;

    const visibleCount = getVisibleCardsCount();
    for (let i = 0; i < visibleCount; i++) {
        const clone = originalCards[i].cloneNode(true);
        clone.classList.add('cloned-card');
        track.appendChild(clone);
    }

    const allCards = track.querySelectorAll('.card-item');

    function updateSlider(smooth = true) {
        const cardWidth = originalCards[0].getBoundingClientRect().width;
        const moveDistance = cardWidth + gap;
        track.style.transition = smooth ? 'transform 0.5s ease-in-out' : 'none';
        track.style.transform = `translateX(-${moveDistance * currentIndex}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        currentIndex++;
        isTransitioning = true;
        updateSlider(true);
    });

    prevBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        const totalOriginal = originalCards.length;
        if (currentIndex === 0) {
            isTransitioning = true;
            currentIndex = totalOriginal;
            updateSlider(false);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    currentIndex--;
                    updateSlider(true);
                });
            });
        } else {
            currentIndex--;
            isTransitioning = true;
            updateSlider(true);
        }
    });

    track.addEventListener('transitionend', () => {
        isTransitioning = false;
        const totalOriginal = originalCards.length;
        if (currentIndex >= totalOriginal) {
            currentIndex = 0;
            updateSlider(false);
        }
    });

    window.addEventListener('resize', () => {
        updateSlider(false);
    });

    updateSlider(false);
}

//------------------------PRODUCT PAGE (MAT.HTML) JS------------------------
document.querySelectorAll(".swatch").forEach(button => {
    button.addEventListener("click", function () {
        const activeSwatch = document.querySelector(".swatch.active");
        if (activeSwatch) activeSwatch.classList.remove("active");
        
        this.classList.add("active");

        const newTitle = this.getAttribute("data-product-title");
        const newPrice = this.getAttribute("data-product-price");
        const newColorLabel = this.getAttribute("data-color-label");
        const newBestSeller = this.getAttribute("data-bestsell");

        const titleEl = document.querySelector(".product-title");
        const priceEl = document.querySelector(".product-price");
        const labelEl = document.querySelector(".color-label strong");
        const badgeEl = document.querySelector(".best-seller");
        
        if (titleEl) titleEl.textContent = newTitle;
        if (priceEl) priceEl.textContent = newPrice;
        if (labelEl) labelEl.textContent = newColorLabel; 
        
        if (badgeEl) {
            if (newBestSeller) {
                badgeEl.textContent = newBestSeller;
                badgeEl.style.display = "block";
            } else {
                badgeEl.style.display = "none";
            }
        }

        const img1 = document.querySelector(".pg-img-1");
        const img2 = document.querySelector(".pg-img-2");
        const img3 = document.querySelector(".pg-img-3");
        const img4 = document.querySelector(".pg-img-4");

        if (img1) img1.src = this.getAttribute("data-img-1");
        if (img2) img2.src = this.getAttribute("data-img-2");
        if (img3) img3.src = this.getAttribute("data-img-3");
        if (img4) img4.src = this.getAttribute("data-img-4");
    });
});

const urlParams = new URLSearchParams(window.location.search);
const selectedColor = urlParams.get('color'); 

if (selectedColor) {
    const targetSwatch = document.querySelector(`.swatch[data-color-id="${selectedColor}"]`);
    if (targetSwatch) {
        targetSwatch.click(); 
    }
}

//------------------------COMMUNITY SECTION JS------------------------
const commTrack = document.getElementById('communityTrack');
const commPrevBtn = document.getElementById('commPrevBtn');
const commNextBtn = document.getElementById('commNextBtn');
const commCards = document.querySelectorAll('.community-item');

if (commNextBtn && commPrevBtn && commTrack && commCards.length > 0) {
    const gap = 32; 
    let commIndex = 0;
    let commTransitioning = false;

    const getVisibleCards = () => window.innerWidth <= 768 ? 1 : 4;
    const visibleCount = getVisibleCards();
    
    for (let i = 0; i < visibleCount; i++) {
        const clone = commCards[i].cloneNode(true);
        commTrack.appendChild(clone);
    }

    function updateCommunitySlider(smooth = true) {
        const cardWidth = commCards[0].getBoundingClientRect().width;
        const moveDistance = cardWidth + gap;
        commTrack.style.transition = smooth ? 'transform 0.5s ease-in-out' : 'none';
        commTrack.style.transform = `translateX(-${moveDistance * commIndex}px)`;
    }

    commNextBtn.addEventListener('click', () => {
        if (commTransitioning) return;
        commIndex++;
        commTransitioning = true;
        updateCommunitySlider(true);
    });

    commPrevBtn.addEventListener('click', () => {
        if (commTransitioning) return;
        const totalOriginal = commCards.length;
        if (commIndex === 0) {
            commTransitioning = true;
            commIndex = totalOriginal;
            updateCommunitySlider(false);
            
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    commIndex--;
                    updateCommunitySlider(true);
                });
            });
        } else {
            commIndex--;
            commTransitioning = true;
            updateCommunitySlider(true);
        }
    });

    commTrack.addEventListener('transitionend', () => {
        commTransitioning = false;
        const totalOriginal = commCards.length;
        if (commIndex >= totalOriginal) {
            commIndex = 0;
            updateCommunitySlider(false);
        }
    });

    window.addEventListener('resize', () => {
        updateCommunitySlider(false);
    });

    updateCommunitySlider(false);
}

// Mat Color Pop-up Modal
const modal = document.getElementById('matModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalName = document.getElementById('modalMatName');
const modalImg = document.getElementById('modalMatImg');
const modalMatLink = document.getElementById('modalMatLink');

document.addEventListener('click', (e) => {
    const button = e.target.closest('.mat-badge-btn');
    if (button) {
        e.preventDefault();  
        e.stopPropagation(); 

        const color = button.getAttribute('data-color');
        const imgSrc = button.getAttribute('data-img');
        const productUrl = button.getAttribute('data-url');

        if (modalName) modalName.textContent = `Forma ${color} Mat`;
        if (modalImg) modalImg.src = imgSrc;
        if (modalMatLink && productUrl) {
            modalMatLink.href = productUrl; 
        }
        if (modal) modal.style.display = 'flex';
    }
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        if (modal) modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// =========================================
// ADVANCED SIDE CART LOGIC
// =========================================
const sideCart = document.getElementById('side-cart');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtnSide = document.getElementById('close-cart');
const basketIcons = document.querySelectorAll('.fa-bag-shopping');
const cartContent = document.querySelector('.cart-content');

// Load cart from memory
let cart = JSON.parse(localStorage.getItem('formaCart')) || [];

function openCart() {
    if (sideCart && cartOverlay) {
        sideCart.classList.add('open');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeCart() {
    if (sideCart && cartOverlay) {
        sideCart.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = ''; 
    }
}

// Helper: Converts "P 2,500" or "₱2,500" into a pure math number (2500)
function parsePrice(priceStr) {
    return parseInt(priceStr.replace(/[^\d]/g, ''), 10);
}

// Helper: Converts a math number (2500) back into a string ("₱2,500")
function formatPrice(num) {
    return '₱' + num.toLocaleString();
}

function updateCartUI() {
    if (!cartContent) return;
    
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartTotalEl = document.getElementById('cart-total-price');
    const cartBadges = document.querySelectorAll('.cart-badge'); 
    
    let subtotal = 0;
    let totalItems = 0; 

    // IF CART IS EMPTY
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart-state">
                <p>Your bag is currently empty.</p>
                <a href="index.html#catalogue" class="empty-cart-link">GET SHOPPING</a>
            </div>
        `;
        if (cartTotalEl) cartTotalEl.textContent = '₱0';
        if (checkoutBtn) checkoutBtn.classList.add('disabled'); 
        
        // Hide the badge when empty
        cartBadges.forEach(badge => badge.classList.remove('show'));
        
        localStorage.setItem('formaCart', JSON.stringify(cart));
        return;
    }

    // IF CART HAS ITEMS
    if (checkoutBtn) checkoutBtn.classList.remove('disabled'); 
    cartContent.innerHTML = ''; 

    cart.forEach((item, index) => {
        const itemTotal = parsePrice(item.price) * item.quantity;
        subtotal += itemTotal; 
        totalItems += item.quantity; 

        cartContent.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(itemTotal)}</div>
                    
                    <div class="cart-item-quantity">
                        <button class="qty-btn qty-minus" data-index="${index}">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn qty-plus" data-index="${index}">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" data-index="${index}">&times;</button>
            </div>
        `;
    });

    if (cartTotalEl) cartTotalEl.textContent = formatPrice(subtotal);
    
    // Update the badge number and make it visible!
    cartBadges.forEach(badge => {
        badge.textContent = totalItems;
        badge.classList.add('show');
    });

    localStorage.setItem('formaCart', JSON.stringify(cart));
}

// Close side cart when clicking anywhere outside of it
document.addEventListener('click', (e) => {
    // Only run if the cart is open
    if (sideCart && sideCart.classList.contains('open')) {
        const isClickInsideCart = sideCart.contains(e.target);
        const isClickOnBasketIcon = e.target.closest('.fa-bag-shopping');
        const isClickOnQuickAdd = e.target.closest('.quick-add-btn');
        const isClickOnAddToBag = e.target.closest('.btn-add-bag');

        // If the click did NOT happen inside the cart and was not one of the open triggers
        if (!isClickInsideCart && !isClickOnBasketIcon && !isClickOnQuickAdd && !isClickOnAddToBag) {
            closeCart();
        }
    }
});

// Master Click Listener for Cart Buttons (Remove, +, -)
if (cartContent) {
    cartContent.addEventListener('click', (e) => {
        const target = e.target;
        const index = target.getAttribute('data-index');

        if (target.classList.contains('remove-item-btn')) {
            cart.splice(index, 1); // Trash can clicked
        } 
        else if (target.classList.contains('qty-plus')) {
            cart[index].quantity += 1; // Plus clicked
        } 
        else if (target.classList.contains('qty-minus')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1; // Minus clicked
            } else {
                cart.splice(index, 1); // Removes item if quantity drops to 0
            }
        }
        
        // Refresh UI if any button was clicked
        if (target.closest('button')) updateCartUI();
    });
}

// Logic to check for duplicates before adding
function addToCart(name, price, image) {
    // Look to see if this mat is already in the cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1; // Duplicate found! Just increase quantity
    } else {
        cart.push({ name, price, image, quantity: 1 }); // New item! Add to array
    }
    
    updateCartUI();
    openCart();
}

// Trigger: Homepage "QUICK ADD"
const quickAddBtns = document.querySelectorAll('.quick-add-btn');
quickAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        const card = btn.closest('.yoga-mat-card');
        if (card) {
            const name = card.querySelector('.mat-name').textContent;
            const price = card.querySelector('.mat-price').textContent;
            const image = card.querySelector('.base-img').src; 
            addToCart(name, price, image);
        }
    });
});

// Trigger: Product Page "ADD TO BAG"
const addToBagBtn = document.querySelector('.btn-add-bag');
if (addToBagBtn) {
    addToBagBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.querySelector('.product-title').textContent;
        const price = document.querySelector('.product-price').textContent;
        const image = document.querySelector('.pg-img-1').src;
        addToCart(name, price, image);
    });
}

// Navigation & Close Triggers
basketIcons.forEach(icon => {
    const parentLink = icon.closest('a'); 
    if (parentLink) {
        parentLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            openCart();
        });
    }
});

if (closeCartBtnSide) closeCartBtnSide.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// Run immediately to load saved data and calculate total
updateCartUI();