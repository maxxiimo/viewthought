// Lettering.js

$(document).ready(function() {
  $(".logo").lettering();
});


// Anystretch

$('#quote').anystretch("assets/pics/silhouette-1024-maximum.jpg", {speed: 200, positionY: 'top'});


// Magic Line

// http://css-tricks.com/jquery-magicline-navigation/

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#nav"),

        // http://stackoverflow.com/questions/590602/padding-or-margin-value-in-pixels-as-integer-using-jquery
        $current = $(".active"),
        // paddingLeft = $current.css("padding-left"),
        // paddingLeft = parseInt($current.css("padding-top").replace("px","")),
        paddingBoth = ($current.innerWidth() - $current.width()),
        paddingLeft = paddingBoth / 2;

    $mainNav.append("<span id='magic-line'></span>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($current.width())
        .css("left", $current.position().left + paddingLeft)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#nav a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.width() + paddingBoth;
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });
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
