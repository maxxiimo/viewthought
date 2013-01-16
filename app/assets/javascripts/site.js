// Lettering.js

$(document).ready(function() {
  $(".viewthought").lettering();
});


// Typekit

$(function() {
  // As soon as the DOM is ready, make invisible
  $(document).ready(function() {
    $('.viewthought').css('visibility', 'hidden');
  });

  // Load the fonts
  try {
    Typekit.load({
      active: function() {
        // As soon as the fonts are active, fade in
        // Don't fade in browsers that don't do proper opacity, like IE
        if (jQuery.support.opacity) {
          $('.viewthought').css('visibility', 'visible').hide().fadeIn();
        } else {
          $('.viewthought').css('visibility', 'visible');
        }
      },
      inactive: function() {
        // If the fonts are inactive, just show
        // You can apply fallback styles using the wf-inactive class in your CSS
        $('.viewthought').css('visibility', 'visible');
      }
    })
  } catch(e) {}
})();
