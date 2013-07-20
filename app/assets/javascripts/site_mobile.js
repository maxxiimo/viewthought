// ===========================
// Lettering.js
// ===========================

$(document).ready(function() {
  $(".logo").lettering();
});


// ===========================
// bgStretcher
// ===========================

callBack = function(){
  var $one   = $('.one');
  var $two   = $('.two');
  var $three = $('.three');
  var $four  = $('.four');

  if ($one.is(':visible')){
      $one.fadeOut(500);
      $two.delay(1500).fadeIn(1500);
  }
  else if ($two.is(':visible')){
      $two.fadeOut(500);
      $three.delay(1500).fadeIn(1500);
  }
  else if ($three.is(':visible')){
      $three.fadeOut(500);
      $four.delay(1500).fadeIn(1500);
  }
  else{
      $four.fadeOut(500);
      $one.delay(1500).fadeIn(1500);
  }
  // console.log("callback");
}


$(document).ready(function(){

  $('#quote').bgStretcher({
    images: ['assets/pics/silhouette-320-maximum.jpg', 'assets/pics/drain-320-maximum.jpg', 'assets/pics/lake-titicaca-320-maximum.jpg', 'assets/pics/rainbow-320-maximum.jpg'],
    imageWidth: 1024,
    imageHeight: 682,
    slideDirection: 'N',
    nextSlideDelay: 10000,
    slideShowSpeed: 1500,
    transitionEffect: 'fade',
    sequenceMode: 'normal',
    buttonPrev: '#prev',
    buttonNext: '#next',
    pagination: '#controls',
    anchoring: 'center center',
    anchoringImg: 'center center',
    callbackfunction: callBack
  });

});


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

$(document).ready(function(){

  $('#map').gmap3({

    map:{
      options:{
        center:[26.7084, -80.0565],
        zoom:15,
        backgroundColor:'none',
        // mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: true,
        scrollwheel: true,
        streetViewControl: true
      }
    },

    // marker:{
    //     latLng:[26.7084, -80.0565]
    // },
    // infowindow:{
    //   options:{
    //     content: "Give us a call. Let's Meet! We would love to hear all about your project and see how we can help."
    //   },
    //   open: true
    // }

    marker:{
      values:[
        {latLng:[26.7084, -80.0565], data: "Give us a call. Let's Meet! We would love to hear all about your project and see how we can help."}
      ],
      options:{
        draggable: false
      },
      events:{
        // mouseove: function(marker, event, context){
        click: function(marker, event, context){
          var map = $(this).gmap3("get"),
            infowindow = $(this).gmap3({get:{name:"infowindow"}});
          if (infowindow){
            infowindow.open(map, marker);
            infowindow.setContent(context.data);
          } else {
            $(this).gmap3({
              infowindow:{
                anchor:marker,
                options:{content: context.data}
              }
            });
          }
        }
        // },
        // mouseout: function(){
        //   var infowindow = $(this).gmap3({get:{name:"infowindow"}});
        //   if (infowindow){
        //     infowindow.close();
        //   }
        // }
      }
    }
  });

});


// ===========================
// Typekit
// ===========================

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
