/* ========================================
   RS AUTOMOTIVE — JavaScript Puro
   Animações GSAP + Interações
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ---- HERO ENTRANCE ANIMATION ----
  const heroTl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.8 } });

  heroTl
    .to(".word", { y: 0, opacity: 1, stagger: 0.05, duration: 0.6 })
    .to("#hero-sub", { opacity: 1, y: 0 }, "-=0.4")
    .to("#hero-cta", { opacity: 1, scale: 1 }, "-=0.5")
    .from("#hero-bg", { scale: 1.1, duration: 1.5 }, 0);

  // ---- HERO PARALLAX ----
  gsap.to("#hero-bg", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    y: 100,
    ease: "none"
  });

  // ---- SCROLL REVEAL ----
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power3.out"
    });
  });

  // ---- HEADER SCROLL EFFECT ----
  const nav = document.querySelector('.site-nav');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
