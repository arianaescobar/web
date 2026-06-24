(function() {
  document.querySelectorAll('[data-w-id][style*="opacity:0"], [style*="opacity:0"]').forEach(function(el) {
    el.style.transition = 'opacity 0.6s ease';
    el.style.opacity = '1';
  });

  document.querySelectorAll('.w-nav-button, .menu-button, .menu-button-white').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var nav = btn.closest('.w-nav, .nav-white');
      var menu = nav.querySelector('.w-nav-menu');
      var isOpen = btn.classList.contains('w--open');

      if (isOpen) {
        btn.classList.remove('w--open');
        menu.removeAttribute('data-nav-menu-open');
        menu.style.display = '';
        document.body.style.overflow = '';
      } else {
        btn.classList.add('w--open');
        menu.setAttribute('data-nav-menu-open', '');
        menu.style.display = 'block';
        if (nav.dataset.noScroll === '1') {
          document.body.style.overflow = 'hidden';
        }
      }
    });
  });
})();
