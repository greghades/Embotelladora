jQuery(document).ready(function($) {
	
	$('a.scroll-suave').on('click', function(event) {
		event.preventDefault();
		let offsetTop = $($(this).attr('href')).offset().top
		$('html,body').stop().animate({scrollTop:offsetTop},1000);
	});

});