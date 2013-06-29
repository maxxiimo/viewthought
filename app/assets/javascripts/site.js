// Lettering.js

$(document).ready(function() {
  $(".logo").lettering();
});


// Anystretch

// $('#hero').anystretch("#{asset_path("pics/IMG_1324.jpg")}", {speed: 150});


// Magic Line

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#nav");

    $mainNav.append("<span id='magic-line'></span>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".current").width())
        .css("left", $(".current").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#nav a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        // newWidth = $el.parent().width();
        newWidth = $el.width();
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
