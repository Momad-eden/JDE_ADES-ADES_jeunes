const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fermer le menu quand on défile
window.addEventListener('scroll', () => {
  nav.classList.remove('active');
});


