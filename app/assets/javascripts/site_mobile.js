// Lettering.js

$(document).ready(function() {
  $(".logo").lettering();
});


// show Hide

// http://papermashup.com/jquery-show-hide-plugin/

$(document).ready(function(){

  $('.show_hide').showHide({
    speed: 1000,  // speed you want the toggle to happen
    easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
    changeText: 1, // if you dont want the button text to change, set this to 0
    showText: 'Read More',// the button text to show when a div is closed
    hideText: 'Less' // the button text to show when a div is open
  });

});


// Typekit

$(function() {
  // As soon as the DOM is ready, make invisible
  $(document).ready(function() {
    $('.logo').css('visibility', 'hidden');
  });

  // Load the fonts
  try {
    Typekit.load({
      active: function() {
        // As soon as the fonts are active, fade in
        // Don't fade in browsers that don't do proper opacity, like IE
        if (jQuery.support.opacity) {
          $('.logo').css('visibility', 'visible').hide().fadeIn();
        } else {
          $('.logo').css('visibility', 'visible');
        }
      },
      inactive: function() {
        // If the fonts are inactive, just show
        // You can apply fallback styles using the wf-inactive class in your CSS
        $('.logo').css('visibility', 'visible');
      }
    })
  } catch(e) {}
})();
