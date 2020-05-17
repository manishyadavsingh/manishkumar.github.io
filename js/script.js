$(document).ready(function() {
  $('button').click(function() {
    $(this).parents('.sliderComplete').children('button').removeClass('close').fadeIn(300);

    // The button, that was visible, goes on display none.
    $(this).addClass('close').fadeOut(300);

    // We do a fluid slider with the class '.turn'.
    $(this).parents('.sliderComplete').children('.wrapper').children('.slider').toggleClass('turn');
  });
});