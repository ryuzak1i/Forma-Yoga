# Forma Yoga

*Align with confidence. The mat that gets you.*

## About the Project

Forma Yoga began as a thesis requirement by five 4th-year Management students at Ateneo de Manila University and evolved into a guided yoga mat startup. This repository contains the custom front-end e-commerce platform designed to showcase the product. The site highlights the mat's unique features, including built-in alignment guides, a moisture-wicking PU top, a natural rubber base, and an integrated QR code for access to independent yoga routines.

## Key Website Features

- **Multi-Page E-Commerce Architecture:** A fully cohesive site structure including a Homepage, Product Page (`mat.html`), Our Story, Events, FAQs, Shipping & Returns (`delivery.html`), Contact Us, and a dedicated Checkout (`basket.html`).
- **Serverless Form Handling:** Integration with Google Apps Script to securely capture both checkout orders and contact form submissions. Customer data and order details are automatically logged into a Google Sheets database without the need for a traditional backend server.
- **Dynamic Side Cart & Local Storage:** A fully functional, slide-out shopping bag built with Vanilla JavaScript. It persists user data across pages using `localStorage`, calculates subtotals dynamically, manages item quantities, and gracefully handles empty states.
- **Advanced Checkout & Payment UI:** Features real-time input filtering (regex-based letter/number restrictions), a functional discount code engine (e.g., "FORMA10"), and a dynamic payment selector that triggers specific GCash or MariBank QR code modals.
- **Interactive Product Gallery:** The catalogue utilizes data attributes so that clicking a color swatch instantly updates the main product images, titles, pricing, and "Best Seller" badges without reloading the page.
- **Infinite Scroll Carousels:** Features smooth, mathematical, infinite-looping sliders for both the brand sponsors and the video-based "Spotted with Forma" community section.
- **Video Integration & Modals:** Enhances user engagement with auto-playing background hero videos, clickable community video cards, and an interactive pop-up modal for shopping specific mats seen in user-generated clips.
- **Interactive FAQ Accordion:** Clean, animated dropdowns utilizing semantic HTML5 `<details>` and `<summary>` tags alongside custom CSS keyframe animations.
- **CSS Grid & Advanced Flexbox Layouts:** Utilizes CSS Grid for an edge-to-edge, fully responsive Mat Catalogue, alongside precise Flexbox positioning for premium promotional blocks and structured form layouts.

## Tech Stack & Setup

- **HTML5:** Semantic structuring across interconnected pages.
- **CSS3:** Custom styling featuring CSS Grid, Flexbox layouts, smooth transitions, glassmorphism overlay effects, custom form styling (radio buttons, select dropdowns), and typography (`AppleGaramond-Light`, `Poppins`).
- **Vanilla JavaScript:** Handles all complex cart logic, state management, DOM manipulation, carousel rendering, form validation, and `fetch` requests without the need for heavy external libraries.
- **Google Apps Script & Google Sheets:** Serves as a lightweight, serverless backend to process form actions and store user submission data.

## Installation

To run this project locally, simply clone the repository and open `index.html` in any modern web browser. No complex build tools or local servers are required to view and interact with the front-end.