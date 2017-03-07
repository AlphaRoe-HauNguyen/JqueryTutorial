$(function(){
	var contents = $('.accordion .panel .panel-content')
	// content.hide();

	$('.accordion .panel .panel-header').each(function(){
		var header = $(this);
		header.click(function(){
			contents.slideUp('mid');
			var cardContent = header.parents('.panel').children('.panel-content').first();
			if (cardContent.css('display') == 'none') {
				cardContent.slideDown('mid');
			}
		});
	});
});