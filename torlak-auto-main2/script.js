// Handle mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu automatically when any nav link is clicked (already worked, kept for clarity)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Set the current year in the footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// NEW: Subtle scroll-reveal animations for service cards
const cards = document.querySelectorAll('.card');

if (cards.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // trigger only once
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  cards.forEach((card) => observer.observe(card));
}

console.log('%c🚀 Torlak Auto sajt – sve unapređenja aktivna!', 'color:#001a4d; font-weight:800;');