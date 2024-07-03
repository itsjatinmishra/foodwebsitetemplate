$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("header").css("background", "white");
      $("header").css("box-shadow", " 0 3px 10px rgb(0 0 0 / 8%)");
    } else {
      $("header").css("background", "transparent");
      $("header").css("box-shadow", "none");
    }
  });
});

$(".responsive").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  nextArrow:
    '<button class="d-none d-md-block slick-arrow-right"><i class="fa-solid fa-arrow-right"></i></button>',
  prevArrow:
    '<button class="d-none d-md-block slick-arrow-left"><i class="fa-solid fa-arrow-left"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".responsive-card").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  nextArrow:
    '<button class="d-none d-md-block slick-arrow-right"><i class="fa-solid fa-arrow-right"></i></button>',
  prevArrow:
    '<button class="d-none d-md-block slick-arrow-left"><i class="fa-solid fa-arrow-left"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
