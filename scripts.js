$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 3550) {
         $('body').addClass('halloween-4')
      }
      if ($(this).scrollTop() < 3550) {
         $('body').removeClass('halloween-4')
      }
      if ($(this).scrollTop() > 2050) {
         $('body').addClass('halloween-3')
      }
      if ($(this).scrollTop() < 2050) {
         $('body').removeClass('halloween-3')
      }
      if ($(this).scrollTop() > 500) {
         $('body').addClass('halloween-2')
         }
      if ($(this).scrollTop() < 500) {
         $('body').removeClass('halloween-2')
       }
   });
});
