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
		if(top > 1) {
			menu.addClass('fixed')
		}	
		else {
			menu.removeClass('fixed')
		}		
	})

	$('.services__arrow').on('click', function(e) {

		$('html, body').animate({
			scrollTop: 600
		}, 400);
	});


	// $('a.scroll').on('click', function(e) {
	// 	e.preventDefault();
	// 	var selector = $(this).attr('href');
	// 	var h = $(selector);

	// 	$('html, body').animate({
	// 		scrollTop: h.offset().top - 150
	// 	}, 300);
	// });


	//Отправка формы
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	
	
});





	

	

