//------------------------INDEX.HTML------------------------
        // Navbar Scroll State
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        const slider = document.querySelector('.slider');

        setInterval(() => {
            
            slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });

            setTimeout(() => {
                
                slider.style.scrollBehavior = 'auto'; 
                
                slider.appendChild(slider.firstElementChild); 
                
                slider.scrollLeft -= slider.clientWidth; 
                
                slider.style.scrollBehavior = 'smooth'; 
                
            }, 600); 

        }, 8000);

       // 2. Infinite Sponsor Carousel Controls
        const track = document.getElementById('cardTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const originalCards = document.querySelectorAll('.card-item');

        if (nextBtn && prevBtn && track && originalCards.length > 0) {
            const gap = 32; 
            let currentIndex = 0;
            let isTransitioning = false;

            // Determine how many cards are visible on screen
            const getVisibleCardsCount = () => window.innerWidth <= 768 ? 1 : 4;

            // 1. CLONE CARDS: Clone the first few cards and append them to the end
            const visibleCount = getVisibleCardsCount();
            for (let i = 0; i < visibleCount; i++) {
                const clone = originalCards[i].cloneNode(true);
                clone.classList.add('cloned-card');
                track.appendChild(clone);
            }

            // Grab all cards now including clones
            const allCards = track.querySelectorAll('.card-item');

            function updateSlider(smooth = true) {
                const cardWidth = originalCards[0].getBoundingClientRect().width;
                const moveDistance = cardWidth + gap;

                if (smooth) {
                    track.style.transition = 'transform 0.5s ease-in-out';
                } else {
                    track.style.transition = 'none';
                }

                track.style.transform = `translateX(-${moveDistance * currentIndex}px)`;
            }

            nextBtn.addEventListener('click', () => {
                if (isTransitioning) return; // Prevent double-click bugs
                
                currentIndex++;
                isTransitioning = true;
                updateSlider(true);
            });

            prevBtn.addEventListener('click', () => {
                if (isTransitioning) return;
                
                const totalOriginal = originalCards.length;
                
                // If we are at the very beginning and click "prev"
                if (currentIndex === 0) {
                    isTransitioning = true;
                    // Jump instantly to the clone position at the end
                    currentIndex = totalOriginal;
                    updateSlider(false);
                    
                    // Force browser layout repaint, then animate one step backward
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

            // 2. INFINITE JUMP LOGIC: Snap back instantly when transition finishes
            track.addEventListener('transitionend', () => {
                isTransitioning = false;
                const totalOriginal = originalCards.length;

                // If we reached the clones at the end, snap instantly back to index 0
                if (currentIndex >= totalOriginal) {
                    currentIndex = 0;
                    updateSlider(false); // Snap instantly without animation
                }
            });

            // Re-align on window resize
            window.addEventListener('resize', () => {
                updateSlider(false);
            });

            // Initial setup run
            updateSlider(false);
        }

        //------------------------COMMUNITY JS------------------------
        
        document.querySelectorAll(".swatch").forEach(button => {
            button.addEventListener("click", function () {
                
                // 1. Move the 'active' white outline ring to the clicked button
                document.querySelector(".swatch.active").classList.remove("active");
                this.classList.add("active");

                // 2. Grab the new text values from the button's data attributes
                const newTitle = this.getAttribute("data-product-title");
                const newPrice = this.getAttribute("data-product-price");
                const newColorLabel = this.getAttribute("data-color-label");
                const newBestSeller = this.getAttribute("data-bestsell");

                // 3. Update the text on the page
                document.querySelector(".product-title").textContent = newTitle;
                document.querySelector(".product-price").textContent = newPrice;
                // Targets the <strong> tag inside the color label to keep the "Color: " part intact
                document.querySelector(".color-label strong").textContent = newColorLabel; 
                
                const bestSellerBadge = document.querySelector(".best-seller");
                if (newBestSeller) {
                    bestSellerBadge.textContent = newBestSeller;
                    bestSellerBadge.style.display = "block";
                } else {
                    bestSellerBadge.style.display = "none";
                }

                // 4. Grab the new image paths
                const newImage1 = this.getAttribute("data-img-1");
                const newImage2 = this.getAttribute("data-img-2");
                const newImage3 = this.getAttribute("data-img-3");
                const newImage4 = this.getAttribute("data-img-4");

                // 5. Update the images in the gallery
                document.querySelector(".pg-img-1").src = newImage1;
                document.querySelector(".pg-img-2").src = newImage2;
                document.querySelector(".pg-img-3").src = newImage3;
                document.querySelector(".pg-img-4").src = newImage4;
            });
        });

        const urlParams = new URLSearchParams(window.location.search);
        const selectedColor = urlParams.get('color'); // Looks for '?color=xyz'

        // 2. If a color parameter exists, find the corresponding swatch
        if (selectedColor) {
            const targetSwatch = document.querySelector(`.swatch[data-color-id="${selectedColor}"]`);
            
            // 3. If the swatch is found, trigger a click on it
            if (targetSwatch) {
                targetSwatch.click(); 
            }
        }

        //------------------------COMMUNITY JS------------------------
        const commTrack = document.getElementById('communityTrack');
        const commPrevBtn = document.getElementById('commPrevBtn');
        const commNextBtn = document.getElementById('commNextBtn');
        const commCards = document.querySelectorAll('.community-item');

        if (commNextBtn && commPrevBtn && commTrack && commCards.length > 0) {
            const gap = 32; // Matches 2rem
            let commIndex = 0;
            let commTransitioning = false;

            const getVisibleCards = () => window.innerWidth <= 768 ? 1 : 4;

            // Clone initial cards for infinite loop
            const visibleCount = getVisibleCards();
            for (let i = 0; i < visibleCount; i++) {
                const clone = commCards[i].cloneNode(true);
                commTrack.appendChild(clone);
            }

            function updateCommunitySlider(smooth = true) {
                const cardWidth = commCards[0].getBoundingClientRect().width;
                const moveDistance = cardWidth + gap;

                if (smooth) {
                    commTrack.style.transition = 'transform 0.5s ease-in-out';
                } else {
                    commTrack.style.transition = 'none';
                }

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

        // Mat Color Pop-up Modal Logic (Event Delegation)
        const modal = document.getElementById('matModal');
        const closeModalBtn = document.querySelector('.close-modal');
        const modalName = document.getElementById('modalMatName');
        const modalImg = document.getElementById('modalMatImg');
        const modalMatLink = document.getElementById('modalMatLink');

        document.addEventListener('click', (e) => {
            const button = e.target.closest('.mat-badge-btn');

            if (button) {
                e.preventDefault();  // Stop default navigation
                e.stopPropagation(); // Stop event bubbling to <a class="card-link">

                const color = button.getAttribute('data-color');
                const imgSrc = button.getAttribute('data-img');
                const productUrl = button.getAttribute('data-url');

                if (modalName) modalName.textContent = `Forma ${color} Mat`;
                if (modalImg) modalImg.src = imgSrc;

                // Dynamic URL update to mat.html?color=walnut
                if (modalMatLink && productUrl) {
                    modalMatLink.href = productUrl; 
                }

                if (modal) modal.style.display = 'flex';
            }
        });

        // Close event triggers
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });


    // =========================================
    // SIDE CART LOGIC
    // =========================================
    const sideCart = document.getElementById('side-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart');
    const basketIcons = document.querySelectorAll('.fa-bag-shopping');
    const quickAddBtns = document.querySelectorAll('.quick-add-btn');

    // Function to slide the cart in
    function openCart() {
        if (sideCart && cartOverlay) {
            sideCart.classList.add('open');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevents background scrolling
        }
    }

    // Function to slide the cart out
    function closeCart() {
        if (sideCart && cartOverlay) {
            sideCart.classList.remove('open');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restores background scrolling
        }
    }

    // 1. Trigger: Clicking the navbar basket icon
    basketIcons.forEach(icon => {
        // Finds the <a> tag wrapping the icon
        const parentLink = icon.closest('a'); 
        if (parentLink) {
            parentLink.addEventListener('click', (e) => {
                e.preventDefault(); // Stops the browser from loading basket.html
                openCart();
            });
        }
    });

    // 2. Trigger: Clicking any "QUICK ADD" button
    quickAddBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            openCart();
            // You can later add code here to visually add the specific mat to the cart!
        });
    });

    // 3. Triggers to close the cart
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCart);
    }

    // Clicking the darkened background overlay closes the cart
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }


