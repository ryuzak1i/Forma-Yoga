# Forma Yoga

*Align with confidence. The mat that gets you.*

## About the Project

Forma Yoga began as a thesis requirement by five 4th-year Management students at Ateneo de Manila University and evolved into a guided yoga mat startup. This repository contains the custom front-end e-commerce platform designed to showcase the product. The site highlights the mat's unique features, including built-in alignment guides, a moisture-wicking PU top, a natural rubber base, and an integrated QR code for access to yoga routines.

## Key Website Features

* **Serverless Form Handling:** Integration with Google Apps Script to securely capture checkout and contact form submissions, automatically logging customer data and order details directly into a Google Sheets database without the need for a traditional backend server.

* **Dynamic Side Cart:** A fully functional, slide-out shopping bag built with Vanilla JavaScript and `localStorage`. It persists user data across pages, calculates subtotals dynamically, manages item quantities, and safely handles empty states.

* **Interactive Product Gallery:** The catalogue utilizes data attributes so that clicking a color swatch instantly updates the main product images, titles, pricing, and "Best Seller" badges without reloading the page.

* **CSS Grid & Advanced Flexbox Layouts:** Utilizes CSS Grid for an edge-to-edge, fully responsive Mat Catalogue, alongside precise Flexbox positioning for the premium "Rent a Mat" promotional blocks and structured Contact information.

* **Infinite Scroll Carousels:** Features smooth, mathematical, infinite-looping sliders for both the brand sponsors and the video-based "Spotted with Forma" community section.

* **Video Integration & Modals:** Enhances user engagement with auto-playing background hero videos, clickable community video cards, and an interactive pop-up modal for shopping specific mats seen in user-generated clips.

* **Fully Responsive UI/UX:** Custom CSS media queries ensure a seamless, fluid browsing experience across mobile devices, tablets, laptops, and large desktop screens.

## Tech Stack & Setup

* **HTML5:** Semantic structuring across interconnected pages (`index.html`, `mat.html`, `our-story.html`, `events.html`, `checkout.html`).

* **CSS3:** Custom styling featuring CSS Grid, Flexbox layouts, smooth transitions, glassmorphism overlay effects, and custom typography (`AppleGaramond-Light`, `Poppins`).

* **Vanilla JavaScript:** Handles all complex cart logic, state management, DOM manipulation, carousel rendering, and scroll events without the need for heavy external libraries.

* **Google Apps Script & Google Sheets:** Serves as a lightweight, serverless backend to process form actions and store user submission data.

**Installation:** To run this project locally, simply clone the repository and open `index.html` in any modern web browser. No complex build tools or local servers are required to view the front-end.
