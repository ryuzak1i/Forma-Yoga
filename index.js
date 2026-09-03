// =========================================
// 1. NAVBAR SCROLL
// =========================================
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

// =========================================
// 2. HERO SLIDER
// =========================================
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

// =========================================
// 3. SPONSOR CAROUSEL
// =========================================
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

    window.addEventListener('resize', () => updateSlider(false));
    updateSlider(false);
}

// =========================================
// 4. PRODUCT PAGE SWATCHES
// =========================================
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
    if (targetSwatch) targetSwatch.click(); 
}

// =========================================
// 5. COMMUNITY CAROUSEL
// =========================================
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

    window.addEventListener('resize', () => updateCommunitySlider(false));
    updateCommunitySlider(false);
}

// =========================================
// 6. MAT COLOR POP-UP MODAL
// =========================================
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
        if (modalMatLink && productUrl) modalMatLink.href = productUrl; 
        
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
// 7. ADVANCED SIDE CART LOGIC
// =========================================
const sideCart = document.getElementById('side-cart');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtnSide = document.getElementById('close-cart');
const basketIcons = document.querySelectorAll('.fa-bag-shopping');
const cartContent = document.querySelector('.cart-content');

// Load global cart from memory
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

function parsePrice(priceStr) {
    return parseInt(priceStr.replace(/[^\d]/g, ''), 10);
}

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

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart-state">
                <p>Your bag is currently empty.</p>
                <a href="index.html#catalogue" class="empty-cart-link">GET SHOPPING</a>
            </div>
        `;
        if (cartTotalEl) cartTotalEl.textContent = '₱0';
        if (checkoutBtn) checkoutBtn.classList.add('disabled'); 
        
        cartBadges.forEach(badge => badge.classList.remove('show'));
        localStorage.setItem('formaCart', JSON.stringify(cart));
        return;
    }

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
    
    cartBadges.forEach(badge => {
        badge.textContent = totalItems;
        badge.classList.add('show');
    });

    localStorage.setItem('formaCart', JSON.stringify(cart));
}

document.addEventListener('click', (e) => {
    if (sideCart && sideCart.classList.contains('open')) {
        const isClickInsideCart = sideCart.contains(e.target);
        const isClickOnBasketIcon = e.target.closest('.fa-bag-shopping');
        const isClickOnQuickAdd = e.target.closest('.quick-add-btn');
        const isClickOnAddToBag = e.target.closest('.btn-add-bag');

        if (!isClickInsideCart && !isClickOnBasketIcon && !isClickOnQuickAdd && !isClickOnAddToBag) {
            closeCart();
        }
    }
});

if (cartContent) {
    cartContent.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;

        e.stopPropagation();
        const index = button.getAttribute('data-index');

        if (button.classList.contains('remove-item-btn')) {
            cart.splice(index, 1); 
        } 
        else if (button.classList.contains('qty-plus')) {
            cart[index].quantity += 1; 
        } 
        else if (button.classList.contains('qty-minus')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1; 
            } else {
                cart.splice(index, 1); 
            }
        }
        updateCartUI();
    });
}

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ name, price, image, quantity: 1 }); 
    }
    updateCartUI();
    openCart();
}

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

updateCartUI();

// =========================================
// 8. CHECKOUT PAGE RENDERING
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const checkoutList = document.getElementById('checkout-items-list');
    
    // SAFEGUARD: If this isn't the checkout page, stop here so it doesn't crash!
    if (!checkoutList) return;

    const subtotalEl = document.getElementById('checkout-subtotal');
    const totalEl = document.getElementById('checkout-total');
    const countEl = document.getElementById('checkout-item-count');
    const applyBtn = document.getElementById('apply-discount-btn');
    const discountInput = document.getElementById('discount-code');

    function formatCheckoutPrice(num) {
        return '₱' + num.toLocaleString() + '.00'; 
    }

    function renderCheckout() {
        checkoutList.innerHTML = '';
        let subtotal = 0;
        let totalItems = 0;

        if (cart.length === 0) {
            checkoutList.innerHTML = '<p style="font-family: Poppins; font-size: 0.9rem; margin-bottom: 1rem;">Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const itemTotal = parsePrice(item.price) * item.quantity;
                subtotal += itemTotal;
                totalItems += item.quantity;

                checkoutList.innerHTML += `
                    <div class="checkout-item">
                        <div class="checkout-item-img-wrapper">
                            <img src="${item.image}" alt="${item.name}">
                            <span class="checkout-item-qty">${item.quantity}</span>
                        </div>
                        <span class="checkout-item-name">${item.name}</span>
                        <span class="checkout-item-price">${formatCheckoutPrice(itemTotal)}</span>
                    </div>
                `;
            });
        }

        countEl.textContent = `· ${totalItems} items`;
        subtotalEl.textContent = formatCheckoutPrice(subtotal);
        totalEl.textContent = formatCheckoutPrice(subtotal); 
        
        return subtotal;
    }

    let currentSubtotal = renderCheckout();

    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const code = discountInput.value.trim().toUpperCase();
            if (code === 'FORMA10') {
                const discount = currentSubtotal * 0.10;
                totalEl.textContent = formatCheckoutPrice(currentSubtotal - discount);
                
                applyBtn.textContent = 'Applied';
                applyBtn.style.backgroundColor = '#46271f';
                applyBtn.style.color = '#ffffff';
                discountInput.disabled = true;
            } else {
                alert('Invalid discount code');
            }
        });
    }
});

// =========================================
// 9. CHECKOUT PAYMENT MODAL & GOOGLE SHEETS
// =========================================
const checkoutForm = document.getElementById('checkout-form');
const paymentModal = document.getElementById('payment-modal');
const closePaymentModalBtn = document.querySelector('.close-payment-modal');
const qrImg = document.getElementById('payment-qr-img');
const paymentTitle = document.getElementById('payment-modal-title');
const finalSubmitBtn = document.getElementById('final-submit-btn');
const fileInput = document.getElementById('proof-file');

if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const formData = new FormData(checkoutForm);
        const method = formData.get('method');

        if (method === 'Cash') {
            processOrder(formData, checkoutForm.querySelector('.pay-btn'));
        } else {
            if (method === 'GCash') {
                qrImg.src = 'images/qr-payment/gcash.png';
                paymentTitle.textContent = 'Pay via GCash';
            } else if (method === 'BankTransfer') {
                qrImg.src = 'images/qr-payment/maribank.png';
                paymentTitle.textContent = 'Pay via MariBank';
            }
            paymentModal.style.display = 'flex';
        }
    });
}

if (closePaymentModalBtn) {
    closePaymentModalBtn.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });
}

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");

    dropZoneElement.addEventListener("click", () => inputElement.click());

    inputElement.addEventListener("change", () => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, () => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone--over");
    });
});

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    }
}

if (finalSubmitBtn) {
    finalSubmitBtn.addEventListener('click', () => {
        if (fileInput.files.length === 0) {
            alert('Please upload your proof of payment to complete the order.');
            return;
        }
        const formData = new FormData(checkoutForm);
        processOrder(formData, finalSubmitBtn);
    });
}

function processOrder(formData, buttonElement) {
    const originalBtnText = buttonElement.textContent || buttonElement.value;
    if (buttonElement.tagName === 'INPUT') {
        buttonElement.value = "Processing...";
    } else {
        buttonElement.textContent = "Processing...";
    }
    buttonElement.disabled = true;
    buttonElement.style.backgroundColor = "#cccccc";

    let cartItemsText = cart.map(item => `${item.quantity}x ${item.name}`).join(', ');
    let finalTotal = document.getElementById('checkout-total').textContent;

    const orderData = {
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        apartment: formData.get('apartment') || "",
        city: formData.get('city'),
        province: formData.get('philippine-province'),
        postal_code: formData.get('postal_code'),
        method: formData.get('method'),
        cart_items: cartItemsText,
        total_price: finalTotal
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxm9o9ocGYl3K7B4xD8NylYMh4ZLWdTEpogxM1lqVwumy4Y2yP9eayYU5P79523ZIiO/exec';

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            localStorage.removeItem('formaCart');
            alert("Thank you! Your Forma Yoga order has been successfully placed.");
            window.location.href = "index.html"; 
        }
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert("Something went wrong placing your order. Please try again.");
        if (buttonElement.tagName === 'INPUT') {
            buttonElement.value = originalBtnText;
        } else {
            buttonElement.textContent = originalBtnText;
        }
        buttonElement.disabled = false;
        buttonElement.style.backgroundColor = "#1e0d09";
    });
}