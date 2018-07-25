$(function () {

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
});


	

	

