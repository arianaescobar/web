$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 3000) {
         $('body').addClass('halloween-3')
      }
      if ($(this).scrollTop() < 3000) {
         $('body').removeClass('halloween-2')
      }
      if ($(this).scrollTop() > 1000) {
         $('body').addClass('halloween-2')
         }
      if ($(this).scrollTop() < 1000) {
         $('body').removeClass('body-halloween')
       }
   });
});
