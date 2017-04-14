$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 2100) {
         $('body').addClass('changeColor3')
      }
      if ($(this).scrollTop() < 2100) {
         $('body').removeClass('changeColor3')
      }
      if ($(this).scrollTop() > 1300) {
         $('body').addClass('changeColor2')
      }
      if ($(this).scrollTop() < 1300) {
         $('body').removeClass('changeColor2')
      }
      if ($(this).scrollTop() > 400) {
         $('body').addClass('changeColor')
         }
      if ($(this).scrollTop() < 400) {
         $('body').removeClass('changeColor')
       }
   });
});
