// ===========================
// Lettering.js
// ===========================

$(document).ready(function() {
  $(".logo").lettering();
});


// ===========================
// Magic Line
// ===========================

// http://css-tricks.com/jquery-magicline-navigation/

$(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("#social-links"),

        // http://stackoverflow.com/questions/590602/padding-or-margin-value-in-pixels-as-integer-using-jquery
        $current = $(".current"),
        paddingBoth = ($current.innerWidth() - $current.width()),
        paddingLeft = paddingBoth / 2;

    $mainNav.append("<span id='magic-line'></span>");
    var $magicLine = $("#magic-line");

    $magicLine
        // .width($current.width())
        // .css("left", $current.position().left + paddingLeft)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#social-links a").hover(function() {
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


// ===========================
// Anystretch
// ===========================

$('#photo-hero').anystretch("assets/pics/silhouette-1024-maximum.jpg", {speed: 200, positionY: 'top'});
$('#in-person').anystretch("assets/map-1400.gif", {speed: 200, positionY: 'top'});


// ===========================
// Adjust Arrow Location
// ===========================

$(document).ready(function () {
    var windowHeight, headHeight, heroHeight, expertiseHeight;

    function init() {
        windowHeight = $(window).height();
        headHeight = $('#home').height();
        arrowHeight = $('#photo-hero .scroll').height();
        heroHeight = $('#photo-hero').outerHeight();
        expertiseHeight = $('#expertise').outerHeight();

        // FIXME ccm: Why doesn't this work properly on resize?
        // $('#photo-hero .scroll').css('top', windowHeight - (arrowHeight + headHeight));
        // $('#expertise .scroll').css('top', windowHeight - (arrowHeight - 10))

        if (heroHeight + headHeight > windowHeight) {
            $('#photo-hero .scroll').css('top', windowHeight - 110);
        }
        if (expertiseHeight > windowHeight) {
            $('#expertise .scroll').css('top', windowHeight - 60)
        };
    }
    init();
    $(window).resize(function () {

        init();
    });
})


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
// Roundabout
// ===========================

 $(document).ready(function() {
    $('#process ul').roundabout({
       enableDrag: true,
       autoplay: true,
       autoplayDuration: 8000,
       autoplayPauseOnHover: true,
       responsive: true
    });
 });


// ===========================
// show Hide
// ===========================

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


// ===========================
// Google Maps API
// ===========================

// $(document).ready(function(){

//   $('#map').gmap3({

//     map:{
//       options:{
//         center:[26.7084, -80.0565],
//         zoom:15,
//         backgroundColor:'none',
//         mapTypeControl: true,
//         mapTypeControlOptions: {
//           style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
//         },
//         navigationControl: true,
//         scrollwheel: true,
//         streetViewControl: true
//       }
//     },

//     marker:{
//       values:[
//         {latLng:[26.7084, -80.0565], data: "Let's Meet! We would love to hear all about your project and see how we can help. To set up a meeting give us a call at 561-320-1117. We look forward to chatting."}
//       ],
//       options:{
//         draggable: false
//       },
//       events:{
//         click: function(marker, event, context){
//           var map = $(this).gmap3("get"),
//             infowindow = $(this).gmap3({get:{name:"infowindow"}});
//           if (infowindow){
//             infowindow.open(map, marker);
//             infowindow.setContent(context.data);
//           } else {
//             $(this).gmap3({
//               infowindow:{
//                 anchor:marker,
//                 options:{content: context.data}
//               }
//             });
//           }
//         }
//       }
//     }
//   });

// });
