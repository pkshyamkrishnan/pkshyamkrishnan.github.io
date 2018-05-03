



(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		wow = new WOW({
			mobile: false
		});
		wow.init();
		$(function(){
				$(".who").typed({
					strings: ["UI/UX DESIGNER", "WEB DESIGNER", "WEB DEVELOPER"],
					typeSpeed: 100,
					backSpeed: 5,
					loop: false

				});
			});
		$('#preloader').fadeOut('slow');
	});

	$(document).ready(function() {
		$('.svg').each(function(){
								var $img = jQuery(this);
								var imgID = $img.attr('id');
								var imgClass = $img.attr('class');
								var imgURL = $img.attr('src');

								jQuery.get(imgURL, function(data) {
										// Get the SVG tag, ignore the rest
										var $svg = jQuery(data).find('svg');

										// Add replaced image's ID to the new SVG
										if(typeof imgID !== 'undefined') {
												$svg = $svg.attr('id', imgID);
										}
										// Add replaced image's classes to the new SVG
										if(typeof imgClass !== 'undefined') {
												$svg = $svg.attr('class', imgClass+' replaced-svg');
										}

										// Remove any invalid XML tags as per http://validator.w3.org
										$svg = $svg.removeAttr('xmlns:a');

										// Replace image with new SVG
										$img.replaceWith($svg);

								}, 'xml');

						});
								var loadFilter='.webdesign';
								$('#Container').mixItUp({
									animation: {
									enable: false
								},
								load: {
								filter: loadFilter // pass it to MixItUp when you instantiate
							},
								callbacks: {
								onMixLoad: function(){
								$(this).mixItUp('setOptions', {
								animation: {
									enable: true,
									duration:750,
									effects: ' scale  translateZ(3500px)  rotateX(25deg) stagger(35ms)',
									easing: 'cubic-bezier(.6,.05,.23,.85)'
								},
								load: {
								filter: loadFilter // pass it to MixItUp when you instantiate
							}
							});
							}
							}
							});

		$('.filter').click(function(){
			$(this).addClass('active');
		});




		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){

			var anchor = $(this);
			$('html, body').stop().animate({
				easing:'cubic-bezier(.6,.05,.23,.85)',
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();

			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0,
			mobile: true
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 0
		});


        /* ---------------------------------------------- /*
		 * Skills
        /* ---------------------------------------------- */
        //var color = $('#home').css('backgroundColor');

        $('.skills').waypoint(function(){
            $('.chart').each(function(){
            $('.chart').easyPieChart({
                    size:160,
                    animate: 1500,
										easing: 'cubic-bezier(.6,.05,.23,.85)',
                    lineCap:'round',
                    scaleColor: false,
                    barColor: 'rgb(84, 202, 145)',
                    trackColor: 'rgb(227, 224, 224)',
                    lineWidth: 14,
										onStep: function(value) {
    this.$el.find('span').text(Math.round(value));
  },
  onStop: function(value, to) {
    this.$el.find('span').text(Math.round(to));
  }
                });
            });
        },{offset:'80%'});


        /* ---------------------------------------------- /*
		 * Quote Rotator
		/* ---------------------------------------------- */

			$( function() {
				/*
				- how to call the plugin:
				$( selector ).cbpQTRotator( [options] );
				- options:
				{
					// default transition speed (ms)
					speed : 700,
					// default transition easing
					easing : 'ease',
					// rotator interval (ms)
					interval : 8000
				}
				- destroy:
				$( selector ).cbpQTRotator( 'destroy' );
				*/

				$( '#cbp-qtrotator' ).cbpQTRotator();

			} );


		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());
		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.85);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */



		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		/*function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};*/

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

	});

})(jQuery);
