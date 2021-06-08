jQuery(document).ready(function($) {
	let slider = $('#slider');
	let btnLeft = $('#boton-anterior');
	let btnRight = $('#boton-siguiente');


	//Se pone el ultimo elemento al inicio

	$('#slider .slide:last').insertBefore('#slider .slide:first')


	//Agregar margen izquierdo
	slider.css('margin-left', '-20%');


	//Funcion para mover a la derecha
	function moverDerecha () {
		slider.animate({
			marginLeft: '-62.6%'
		}, 700,function(){
			$('#slider .slide:first').insertAfter('#slider .slide:last')
			slider.css('margin-left','-20%');
		})
	}

	//Funcion para mover a la Izquierda
	function moverIzquierda () {
		$('#slider .slide:last').insertBefore('#slider .slide:first')
		slider.css('margin-left','-60.6%')
		slider.animate({
			marginLeft: '-20%'
		}, 700)

	}

	btnRight.on('click', moverDerecha);
	btnLeft.on('click', moverIzquierda);
});