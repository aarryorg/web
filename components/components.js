// --- Function to include HTML components using Fetch API ---
async function includeHtmlComponents() {
    const headerPlaceholder = document.querySelector('#header-placeholder');
    const footerPlaceholder = document.querySelector('#footer-placeholder');

    try {
        // Load Header (always the same)
        if (headerPlaceholder) {
            const headerRes = await fetch('/components/header.html');
            if (headerRes.ok) {
                const headerHtml = await headerRes.text();
                headerPlaceholder.innerHTML = headerHtml;
            }
        }

        // Conditionally load the correct footer
        if (footerPlaceholder) {
            let footerHtml;
            let footerRes;

            // Check the current page URL to decide which footer to load
            if (window.location.pathname.includes('/case-studies.html') || window.location.pathname.includes('/blogs')) {
                // Assuming you have a separate footer file for these pages
                footerRes = await fetch('/components/footer-alternate.html');
            } else {
                // Default footer for all other pages
                footerRes = await fetch('/components/footer.html');
            }
            
            if (footerRes.ok) {
                footerHtml = await footerRes.text();
                footerPlaceholder.innerHTML = footerHtml;
            }
        }
    } catch (err) {
        console.error('Failed to load shared components:', err);
    }
}

// --- Functionality for mobile menu ---
function setupMobileMenu() {
    const mobileMenuOpenBtn = document.getElementById('mobile-menu-open-button');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-button');
    const mobileNav = document.getElementById('mobile-nav');
    const body = document.body;

    if (mobileMenuOpenBtn && mobileMenuCloseBtn && mobileNav) {
        mobileMenuOpenBtn.addEventListener('click', () => {
            mobileNav.classList.add('open');
            body.classList.add('overflow-hidden');
        });

        mobileMenuCloseBtn.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            body.classList.remove('overflow-hidden');
        });
    }

    const accordionButtons = document.querySelectorAll('.mobile-accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            content.classList.toggle('open');
            icon.classList.toggle('rotate-180');
        });
    });
}

// --- Add WhatsApp floating button ---
function addWhatsAppButton() {
    const whatsAppLink = `https://api.whatsapp.com/send?phone=+8801777510221&text=Hello%20Aarry%20Limited!`;
    const whatsappHtml = `
        <div style="position: fixed; bottom: 30px; right: 30px; z-index: 1000;">
            <a href="${whatsAppLink}" target="_blank" style="display: block;">
                <img src="/assets/images/whatsapp.png" alt="WhatsApp Chat" style="width: 60px; height: auto;">
            </a>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', whatsappHtml);
}

// --- Update copyright year ---
function updateCopyrightYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// --- Wait for the DOM to be ready and run the functions ---
document.addEventListener('DOMContentLoaded', () => {
    includeHtmlComponents().then(() => {
        setupMobileMenu(); // Set up mobile menu after header is loaded
        updateCopyrightYear(); // Update the year after the footer is loaded
    });
    addWhatsAppButton();
});
