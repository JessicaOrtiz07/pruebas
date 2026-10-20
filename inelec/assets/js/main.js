/* INELEC · Scripts de la página */
(function () {
  // Menú móvil: abre y cierra la navegación
  var menu = document.querySelector('.menu');
  var nav = document.querySelector('.nav');
  if (menu && nav) {
    menu.addEventListener('click', function () {
      var abierto = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
    });
  }
})();
