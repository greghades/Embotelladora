jQuery(document).ready(function($) {
	
	$(window).on('scroll', function(event) {
		
		let nosotrosOffsetTop = $('#acerca-De').offset().top

		if($(window).scrollTop() >= 300){
			$('.imagen-botellas').css('left', 0);
			$('.texto-acerca p,.texto-acerca h2').show('2000');

		}
		
	});


});