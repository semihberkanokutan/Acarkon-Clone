$('.promotional-products').owlCarousel({ 
    loop:true,
    dots:true,
    dotsEach: true,
    // margin:10,
    nav:true,
    navContainer: '#Promotional-products-navhere',
    dotsContainer: '#Promotional-products-dotshere',
    navText: ["<img src=\'img/prev-next-arrows/prev-btn.svg\'>", "<img src=\'img/prev-next-arrows/next-btn.svg\'>"],
    dotsData:"'1', '2', '3', '4', '5', '6'",
    // center: true,
    items: 5,
    // startPosition: 2
})


$('.component-products').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    // navText: ['<i class="fa-solid fa-chevron-left" style="color: #7a6958;"></i>', '<i class="fa-solid fa-chevron-right"  style="color: #7a6958;"></i>'],
    navText: ["<img src='img/prev-next-arrows/prev-btn.svg'>",  "<img src='img/prev-next-arrows/next-btn.svg'>"],
    navContainer: "#Component-products-navhere",
    dots:true,
    dotsEach:true,
    dotsContainer: "#Component-products-counter-here",
    // autoWidth:true,
    items: 5,
    center: true,
    // startPosition: 2,
    dotsData:"'1', '2', '3'",

    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

$('.top-seller').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    navText: ['<i class="fa-solid fa-chevron-left" style="color: #7a6958;"></i>', '<i class="fa-solid fa-chevron-right"  style="color: #7a6958;"></i>'],
    navContainer: "#Top-seller-navhere",
    dots:true,
    dotsContainer: "#Top-seller-counter-here",
    center:true,
    // startPosition:0,
    dotsData:true,
    // autoWidth:true,
    items:3,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})

$(document).ready(function(){
    $('.Collectors-carousel').slick({
        centerMode: true,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        // focusOnSelect: true,
        focusOnSelect: true,
        initialSlide: 2,
        swipe: false
    });
});

$(document).ready(function(){
    $('.Blog-carousel').slick({
        centerMode: true,
        dots: true, 
        arrows: true,
        appendArrows: "#Blog-navhere",
        prevArrow: "<button type='button' class='Carousel-nav-buttons'><img src='img/prev-next-arrows/prev-btn.svg'></button>",
        nextArrow: "<button type='button'  class='Carousel-nav-buttons'><img src='img/prev-next-arrows/next-btn.svg'></button>",
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        // focusOnSelect: true,
        focusOnSelect: true,
        initialSlide: 2,
        appendDots: "#Blog-counter-here",
        
    });
});

$(document).ready(function(){
    $('.News-carousel').slick({
        centerMode: true,
        dots: true, 
        appendDots: "#News-counter-here",
        arrows: true,
        appendArrows: "#News-navhere",
        prevArrow: "<button type='button' class='Carousel-nav-buttons'><img src='img/prev-next-arrows/prev-btn.svg'></button>",
        nextArrow: "<button type='button'  class='Carousel-nav-buttons'><img src='img/prev-next-arrows/next-btn.svg'></button>",
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        // focusOnSelect: true,
        focusOnSelect: true,
        initialSlide: 1,
        
    });
});



/*document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  let twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  let flipdown = new FlipDown(twoDaysFromNow)

      // Start the countdown
      .start()

      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
});*/

// new FlipDown(1538137672000000000).start();
 





