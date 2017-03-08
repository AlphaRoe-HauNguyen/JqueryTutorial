function setModalCenter(modal, modalWidth) {
	var w = window.innerWidth 
	|| document.documentElement.clientWidth 
	|| document.body.clientWidth;

	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	var modalHeight = modal.outerHeight(true);
	modal.width(modalWidth);

	var left = (w - modalWidth) / 2;
	var top = (h - modalHeight) / 2;

	if (modalHeight < h && modalWidth < w) {
		modal.animate({
			left: left,
			top: top,
			width: modalWidth,
		}, 'fast', 'linear');
	}
}

$(function(){

	$('#openDialog').click(function(){
		$('.modal-bg').show();
		$('.modal').show();
		setModalCenter($('.modal'), 500);
	});

	$(window).resize(function(){
		if ($('.modal').css('display') != 'none') {
			setModalCenter($('.modal'), 500);
		}
	});

	$('.modal .dismiss').click(function(){
		$('.modal-bg').hide();
		$('.modal').hide();
	});
	
});