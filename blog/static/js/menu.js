$(document).ready(function() {
    $('a.responsive').click( function() {
        $('nav').slideToggle(300);
      });

      $(document).ready(function() {
        $('.menu-toggle').on('click', function() {
            $('.nav').toggleClass('display');
        });
    
      $(".toggle-nav").click(function(){
        $(".menu ul li").slideToggle("slow");
      });
  
      $('.post-wrapper').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          nextArrow: $('.next'),
          prevArrow: $('.prev'),
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
    });
});
       
  