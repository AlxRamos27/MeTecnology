// ============================================
// MeTecnologie - JavaScript principal
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll('.servicio-card, .proceso-step, .nosotros-text, .contacto-form, .info-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const nombre = formData.get('nombre');
  const telefono = formData.get('telefono');
  const equipo = formData.get('equipo');
  const problema = formData.get('problema');

  // Build WhatsApp message
  const mensaje = `Hola MeTecnologie! Soy ${nombre}.%0A` +
    `Teléfono: ${telefono}%0A` +
    `Equipo: ${equipo}%0A` +
    `Problema: ${problema}`;

  // Replace with your actual WhatsApp number
  const whatsappNumber = '0000000000';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${mensaje}`;

  window.open(whatsappURL, '_blank');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = navbar.offsetHeight;
      const position = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  });
});
