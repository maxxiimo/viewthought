// Lettering
// Show Hide
// Anystretch
// Adjust Arrow Location
// Remove Anchor Outline
// Smooth Scroll
// Roundabout
// Animations
// Superscrollorama
// Equal Heights
// Magic Line


// ===========================
// Lettering
// ===========================

$(document).ready(function() {
  $(".logo").lettering();
});


// ===========================
// Show Hide
// ===========================

// http://papermashup.com/jquery-show-hide-plugin/

$(document).ready(function(){

  $('.show_hide').showHide({
    speed: 1000,                   // speed you want the toggle to happen
    easing: '',                    // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
    changeText: 1,                 // if you dont want the button text to change, set this to 0
    showText: 'Learn More',        // the button text to show when a div is closed
    hideText: 'Less is More'       // the button text to show when a div is open
  });

  $('.show_hide_2').showHide({
    speed: 1000,
    easing: '',
    changeText: 1,
    showText: 'Read More',
    hideText: 'Less is More'
  });

  $('.show_hide_3').showHide({
    speed: 1000,
    easing: '',
    changeText: 1,
    showText: 'Learn More',
    hideText: 'Close'
  });

});


// ===========================
// Anystretch
// ===========================

$('#photo-hero').anystretch("http://cdn0.viewthought.com/assets/pics/smush_silhouette-1024-maximum-cut.jpg", {speed: 200, positionY: 'top'});
$('#in-person').anystretch("http://cdn0.viewthought.com/assets/400-hibiscus-1400.jpg", {speed: 200, positionY: 'top'});


// ===========================
// Adjust Arrow Location
// ===========================

$(document).ready(function () {
  Mobvious.for_device_type('tablet', function() {
    var windowHeight, headHeight, heroHeight, expertiseHeight;

    function init() {
        windowHeight = $(window).height();
        headHeight = $('#home').height();
        arrowHeight = $('#photo-hero .scroll').height();

        heroHeight = $('#photo-hero').outerHeight();
        // expertiseHeight = $('#expertise').outerHeight();
        aboutHeight = $('#about-us').outerHeight();
        // processHeight = $('#process').outerHeight();
        valueHeight = $('#value').outerHeight();

        // FIXME ccm: Why doesn't this work properly on resize?
        // $('#photo-hero .scroll').css('top', windowHeight - (arrowHeight + headHeight));
        // $('#expertise .scroll').css('top', windowHeight - (arrowHeight - 10))

        if (heroHeight + headHeight > windowHeight) {
            $('#photo-hero .scroll').css('top', windowHeight - 110);
        }
        if (aboutHeight > windowHeight) {
            $('#about-us .scroll').css('top', windowHeight - 60)
        }
        // if (expertiseHeight > windowHeight) {
        //     $('#expertise .scroll').css('top', windowHeight - 60)
        // }
        // if (processHeight > windowHeight) {
        //     $('#process .scroll').css('top', windowHeight - 60)
        // }
        if (valueHeight > windowHeight) {
            $('#value .scroll').css('top', windowHeight - 60)
        };
    }
    init();
    $(window).resize(function () {

        init();
    });
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


// // ===========================
// // Animations
// // ===========================

// $(document).ready(function() {

//   Mobvious.for_device_type('desktop', function() {
//       $(window).scroll(function() {
//         $('.devices').each(function(){
//         var imagePos = $(this).offset().top;

//         var topOfWindow = $(window).scrollTop();
//           if (imagePos < topOfWindow+600) {
//             $(this).addClass("fade-in");
//           }
//         });
//       });
//   });

//   Mobvious.for_device_type('tablet', function() {
//       $('.devices').addClass("reveal-devices");
//   });

// });


// ===========================
// Superscrollorama
// ===========================

$(document).ready(function() {
  var controller = $.superscrollorama();

  controller.addTween('#photo-hero .scroll span',
    TweenMax.fromTo(
      $('.tagline, .start-project'),
      1.5,
      {css:{opacity: 1}},
      {css:{opacity: 0}}
    )
  );

  // controller.addTween('#expertise',
  //   TweenMax.from(
  //     $('.coding-design-button a'),
  //     1.0,
  //     {css:{opacity: 0, rotation: 720}, ease:Quad.easeOut}
  //   )
  // );

  controller.addTween('.our-mission',
    TweenMax.fromTo(
      $('#our-mission ol'),
      1.5,
      {css:{opacity: 0, scale: 0}},
      {css:{opacity: 1, scale: 1}}
    )
  );

  controller.addTween('.tech-icons',
    (new TimelineLite())
      .append([

        TweenMax.staggerFromTo(
          $('.ruby, .jquery, .git, .backbone, .html, .css, .haml, .sass'),
          .5,
          {css:{opacity: 0, scale: 0}},
          {css:{opacity: 1, scale: 1}},
          .1
        ),
        TweenMax.staggerTo(
          $('.ruby, .jquery, .git, .backbone, .html, .css, .haml, .sass'),
          .5,
          {css:{rotation: 360}},
          .1
        )

      ])
  );

  $(window).resize(function () {
    controller.triggerCheckAnim();
  });
});


// ===========================
// Equal Heights
// ===========================

// http://filamentgroup.com/lab/setting_equal_heights_with_jquery/

$(document).ready(function() {

  $('.our-mission ol').equalHeights();

});


// ===========================
// Magic Line
// ===========================

// http://css-tricks.com/jquery-magicline-navigation/

$(document).ready(function() {
  setTimeout(function(){

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

  },1000);
});
