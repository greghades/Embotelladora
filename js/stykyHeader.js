jQuery(document).ready(function() {
	let encabezadofix = $('#encabezado-fix')
	$(window).on('scroll', function(event) {
		
		let nosotrosOffsetTop = $('#acerca-De').offset().top

		if($(window).scrollTop() >= nosotrosOffsetTop){
			encabezadofix.css('margin-top', -85);
		}
		else{
			encabezadofix.css('margin-top', -168);
		}

	});
});