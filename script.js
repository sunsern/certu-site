/**
 * Certu - Main JavaScript
 * Handles interactivity, animations, and mobile navigation
 */

// ================================================
// Header Scroll Effect
// ================================================
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

function updateHeader() {
  const scrollY = window.scrollY;
  
  if (scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScrollY = scrollY;
}

window.addEventListener('scroll', updateHeader, { passive: true });

// ================================================
// Mobile Navigation Toggle
// ================================================
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  menuToggle.classList.toggle('active');
  
  // Toggle body scroll
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

// Close mobile nav when clicking a link
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ================================================
// Smooth Scroll for Navigation Links
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    if (href === '#') return;
    
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ================================================
// Scroll-Triggered Fade-In Animations
// ================================================
const fadeElements = document.querySelectorAll('.fade-in');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});

// ================================================
// Staggered Animation for Grid Items
// ================================================
const gridSections = document.querySelectorAll('.grid');

gridSections.forEach(grid => {
  const items = grid.querySelectorAll('.fade-in');
  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });
});

// ================================================
// Parallax Effect for Hero Background (subtle)
// ================================================
const heroBackground = document.querySelector('.hero__background img');

if (heroBackground) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroBackground.style.transform = `translateY(${scrollY * 0.3}px) scale(1.1)`;
    }
  }, { passive: true });
}

// ================================================
// Initialize
// ================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initial header state
  updateHeader();
  
  // Add loaded class for any initial animations
  document.body.classList.add('loaded');
});
