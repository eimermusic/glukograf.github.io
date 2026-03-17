/**
 * Glukograf – scroll-linked animations
 * Uses Intersection Observer to add .in-view when sections enter viewport.
 * CSS handles the animation. Minimal and non-blocking; page works without JS.
 */
(function () {
  'use strict';

  function initScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initScrollAnimations();
    });
  } else {
    initScrollAnimations();
  }
})();
