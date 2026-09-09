document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const cartBtn = document.getElementById('cartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const closeCart = document.getElementById('closeCart');
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');

    let count = 0;

    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    cartBtn.addEventListener('click', () => cartDrawer.classList.add('active'));
    closeCart.addEventListener('click', () => cartDrawer.classList.remove('active'));

    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            count++;
            cartCount.innerText = count;
            const itemTitle = e.target.parentElement.nextElementSibling.innerText;
            cartItems.innerHTML = `<p>🌿 Added <strong>${itemTitle}</strong></p>`;
            cartDrawer.classList.add('active');
        });
    });
});