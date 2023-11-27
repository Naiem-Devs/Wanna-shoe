(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault();
    $('body').toggleClass('siteBar');   
  }); 

  window.addEventListener('scroll', () => {
    let header = document.querySelector('.header-top');
    if (window.scrollY > 250) {
      header.classList.add('fixed')
    }else{
      header.classList.remove('fixed')
    }
  })
 
 
})(jQuery);
