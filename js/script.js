$(document).ready(function () {
     $('.in-basket').click(function () {
     	$(this).toggleClass('in-basket-hidden');
     	$('.count3').show();
     });
});



var $btnTop = $(".to-top")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 1000){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();
	}
});

$btnTop.on("click", function(){
	$("html,body").animate({scrollTop:0}, 900)
});


$(document).ready(function ()	{
	$('.hamburger').click(function () {
		$('.menu_gumburger').toggleClass('opened').slideToggle();
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	})
	$('.cross').click(function () {
		$('.menu_gumburger').slideUp();
		$( ".cross" ).hide();
		$( ".hamburger" ).show();

	});
});



    $(document).ready(function(){
      $('.single-item').slick({
      	arrows: false,
      	dots: true
              });
    });



    $(document).ready(function(){
      $('.multiple-items').slick({
		  infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 2,
		  arrows: false,
      	dots: true,
      	responsive: [
    		{
      			breakpoint: 917,
      			settings: {
        			slidesToShow: 4,
        			slidesToScroll: 2,
        			infinite: true,
        			dots: true
      			}
    		},
    		{
      			breakpoint: 743,
      			settings: {
        			slidesToShow: 3,
        			slidesToScroll: 2,
        			infinite: true,
        			dots: true
      			}
    		},
    		{
      			breakpoint: 591,
      			settings: {
        			slidesToShow: 2,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true
      			}
    		},
    		{
      			breakpoint: 401,
      			settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true
      			}
    		}
    		]
		});
    });



    $(document).ready(function(){
      $('.multiple-items__prof').slick({
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  arrows: false,
      	dots: true,
      	responsive: [
    		{
      			breakpoint: 917,
      			settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true,
        			dots: true
      			}
    		}]
		});
    });


    (function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar({
            	axis:"x"
            });
        });
    })(jQuery);



$(function () {
 
  $(".rateYo").rateYo({
    rating: 3,
    fullStar: true,
    starWidth: "12px",
    ratedFill : "#fdcc05",
    spacing: "2px"

  });
 
});
