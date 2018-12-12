$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 2500) {
         $('body').addClass('changeColor4')
      }
      if ($(this).scrollTop() < 2500) {
         $('body').removeClass('changeColor4')
      }
      if ($(this).scrollTop() > 1800) {
         $('body').addClass('changeColor3')
      }
      if ($(this).scrollTop() < 1800) {
         $('body').removeClass('changeColor3')
      }
      if ($(this).scrollTop() > 1200) {
         $('body').addClass('changeColor2')
      }
      if ($(this).scrollTop() < 1200) {
         $('body').removeClass('changeColor2')
      }
      if ($(this).scrollTop() > 600) {
         $('body').addClass('changeColor')
         }
      if ($(this).scrollTop() < 600) {
         $('body').removeClass('changeColor')
       }
   });
});
