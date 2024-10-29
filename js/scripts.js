

// scripts.js
const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
    console.log('Toggle button clicked'); 
    navMenu.classList.toggle('show-menu');
});
