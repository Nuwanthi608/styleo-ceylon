document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const cartBtn = document.getElementById('cartBtn');
    let cartCount = 0;

    // Mobile Navbar Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Basic Interactivity: Cart Increment
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            cartCount++;
            cartBtn.innerText = `Bag (${cartCount})`;
        });
    });
});