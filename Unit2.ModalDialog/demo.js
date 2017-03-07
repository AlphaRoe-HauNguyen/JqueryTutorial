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
		modal.css('float','left');
		modal.css('position', 'fixed');
		modal.offset({left: left, top: top});
	}
}

$(function(){

	$('#openDialog').click(function(){
		$('.modal').each(function(){
			// $('body').prepend("<div></div>")
			$(this).show();
			setModalCenter($(this), 500);
		});
	});

	$(window).resize(function(){
		console.log(0);
		if ($('modal').css('display') != 'none') {
			setModalCenter($(this), 500);
		}
	});
});