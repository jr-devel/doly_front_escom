'use strict';

(function(){
  document.addEventListener('DOMContentLoaded', function() {
    // pequeño helper para actualizar el año en el footer
    try {
      var y = new Date().getFullYear();
      var el = document.getElementById('year');
      if(el) el.textContent = y;

      // comportamiento simple del header: agregar clase scrolled al hacer scroll
      var header = document.querySelector('.main-header');
      window.addEventListener('scroll', function(){
        if(!header) return;
        if(window.scrollY > 20) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      });
    } catch(e){ console.warn(e); }
  });
}());
