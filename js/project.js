(function () {
  'use strict';

  /* Keyboard navigation: ← prev | → next */
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    var prev = document.querySelector('.project-nav__link--prev');
    var next = document.querySelector('.project-nav__link--next');

    if (e.key === 'ArrowLeft' && prev) {
      window.location.href = prev.getAttribute('href');
    }
    if (e.key === 'ArrowRight' && next) {
      window.location.href = next.getAttribute('href');
    }
  });

  /* Progressive image fade-in */
  var blocks = document.querySelectorAll('.project__block img');

  blocks.forEach(function (img) {
    if (img.complete) return;

    img.style.opacity = '0';
    img.style.transition = 'opacity 0.4s ease';

    img.addEventListener('load', function () {
      img.style.opacity = '1';
    });
  });
})();