jQuery(document).ready(function() {
	let banner = $('.banner-principal')

	function alturaBanner(){
		let vpAltura = $(window).height();
		banner.css('height', vpAltura);
	}

	alturaBanner()

	$(window).resize(alturaBanner);
});