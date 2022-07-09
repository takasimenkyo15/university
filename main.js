'use strict';

$(() => {

  // $('.slider').slick({
  //   setting-name: setting-value
  // });
$('.slider').slick({
  autoplay: true,
  fade: true,
  zIndex: 2
});


// $(!"li:has(.content-30-active)").toggleClass("content-30-active-responsive");

// $('.content-30-li').on('click', function() {
//   $(!"li:has(.content-30-active)").toggleClass("content-30-active-responsive");
// });






$('.slider2').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive:[{
    breakpoint: 1001,
    settings: {
      slidesToShow: 3,
      variableWidth: true,
      // arrows: false,
      // centerMode: true,
    }
  }, {
    breakpoint: 480,
    settings: {
      slideToShow: 1
    }
  }]
});




});