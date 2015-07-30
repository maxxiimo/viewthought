// Lettering
// Anystretch
// Remove Anchor Outline
// Smooth Scroll
// Show Hide

// ===========================
// Lettering
// ===========================

$(document).ready(function() {
  $(".logo").lettering();
});


// ===========================
// Anystretch
// ===========================

$('#photo-hero').anystretch("http://cdn0.ojalainc.com/assets/pics/silhouette-320-maximum.jpg", {speed: 200, positionY: 'top'});
$('#in-person').anystretch("http://cdn0.ojalainc.com/assets/smush_map-320.png", {speed: 200, positionY: 'top'});


// ===========================
// Remove Anchor Outline
// ===========================

// http://stackoverflow.com/questions/1535538/jquery-getting-rid-of-dotted-outline-around-buttons

$(function() {
    $('.autoblur').live("click", function(event) {
        this.blur();
    });
});


// ===========================
// Smooth Scroll
// ===========================

$(document).ready(function() {

  $('.scroll').click(function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
      speed: 1000,
      scrollTarget: link.hash
    });
  });

});


// ===========================
// Show Hide
// ===========================

// http://papermashup.com/jquery-show-hide-plugin/

$(document).ready(function(){

  $('.show_hide_2').showHide({
    speed: 1000,                   // speed you want the toggle to happen
    easing: '',                    // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
    changeText: 1,                 // if you dont want the button text to change, set this to 0
    showText: 'Read More',         // the button text to show when a div is closed
    hideText: 'Less is More'       // the button text to show when a div is open
  });

  $('.show_hide_3').showHide({
    speed: 1000,
    easing: '',
    changeText: 1,
    showText: 'Learn More',
    hideText: 'Close'
  });

});
