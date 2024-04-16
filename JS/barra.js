document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.boton-menu');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
  