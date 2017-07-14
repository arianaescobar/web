$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 2250) {
         $('body').addClass('changeColor3')
      }
      if ($(this).scrollTop() < 2250) {
         $('body').removeClass('changeColor3')
      }
      if ($(this).scrollTop() > 1250) {
         $('body').addClass('changeColor2')
      }
      if ($(this).scrollTop() < 1250) {
         $('body').removeClass('changeColor2')
      }
      if ($(this).scrollTop() > 500) {
         $('body').addClass('changeColor')
         }
      if ($(this).scrollTop() < 500) {
         $('body').removeClass('changeColor')
       }
   });
});
