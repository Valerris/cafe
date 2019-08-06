jQuery(function($) {

  var target = null;

  $('.toggle').on('click', function() {

    if(target === this) {
      target = null;
    } else {
      $(target).next().stop().slideUp();
      target = this;
    }

    $(this).next().stop().slideToggle();
  }).next().stop().hide();

});
