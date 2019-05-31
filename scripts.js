$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 3700) {
         $('body').addClass('bg6')
      }
      if ($(this).scrollTop() < 3700) {
         $('body').removeClass('bg6')
      }
      if ($(this).scrollTop() > 3200) {
         $('body').addClass('bg5')
      }
      if ($(this).scrollTop() < 3200) {
         $('body').removeClass('bg5')
      }
      if ($(this).scrollTop() > 2800) {
         $('body').addClass('bg4')
      }
      if ($(this).scrollTop() < 2800) {
         $('body').removeClass('bg4')
      }
      if ($(this).scrollTop() > 2000) {
         $('body').addClass('bg3')
      }
      if ($(this).scrollTop() < 2000) {
         $('body').removeClass('bg3')
      }
      if ($(this).scrollTop() > 1500) {
         $('body').addClass('bg2')
      }
      if ($(this).scrollTop() < 1500) {
         $('body').removeClass('bg2')
      }
      if ($(this).scrollTop() > 1000) {
         $('body').addClass('bg1')
         }
      if ($(this).scrollTop() < 1000) {
         $('body').removeClass('bg1')
       }
   });
});
