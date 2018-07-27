$(function () {


	// Слайдер
	var $items = $('.slider__item');

	$('.slider').owlCarousel({
			loop: true,
			margin: 10,
			responsiveClass: true,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000,
			smartSpeed: 1100,
			margin: 0,
			responsive: {
				0: {
						items: 1
				}
			},
			onInitialized: function () {
					equalsHeight($items);
			},
			onResized: function () {
					equalsHeight($items);
			}
			
	});

	function equalsHeight($items) {
		var max = 0;

		$items.each(function () {
				var h = $(this).find('> div').outerHeight();

				if (h > max) {
						max = h;
				}
		});

		$items.css('min-height', max + 'px');

		setTimeout(function () {
				$('.slider').trigger('refresh.owl.carousel');
		}, 1);
	}	



	// Адаптивное меню

	var menu = $('.main-header');
	var slider = $('.slider')

	$(document).on('scroll', function() {
		var top = $(this).scrollTop();
		if(top > 100) {
			menu.addClass('fixed')
			slider.addClass('fixed')
		}	
		else {
			menu.removeClass('fixed')
			slider.removeClass('fixed')
		}		
	})

	$('a.scroll').on('click', function(e) {
		e.preventDefault();
		var selector = $(this).attr('href');
		var h = $(selector);

		$('html, body').animate({
			scrollTop: h.offset().top - 150
		}, 400);
	});
	
});





	

	

