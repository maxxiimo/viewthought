// Lettering
// Anystretch
// Remove Anchor Outline
// Smooth Scroll


// ===========================
// Lettering
// ===========================

$(document).ready(function() {
  $(".logo").lettering();
});


// ===========================
// Anystretch
// ===========================

$('#photo-hero').anystretch("http://cdn0.viewthought.com/assets/pics/silhouette-320-maximum.jpg", {speed: 200, positionY: 'top'});
// $('#in-person').anystretch("http://cdn0.viewthought.com/assets/smush_map-320.png", {speed: 200, positionY: 'top'});


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
