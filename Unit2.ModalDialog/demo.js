function ModalDialog(modal, modalWidth) {
	$this = this;
	modal.width(modalWidth);

	this.findPosition = function () {
		var w = window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;

		var h = window.innerHeight ||
			document.documentElement.clientHeight ||
			document.body.clientHeight;

		this.modalHeight = modal.outerHeight(true);


		this.left = (w - modalWidth) / 2;
		this.top = (h - this.modalHeight) / 2;
	}

	this.open = function () {
		modal.parents('.modal-bg').show();
		modal.show();

		this.findPosition();

		modal.css({
			left: this.left,
			top: 0,
			width: modalWidth
		}).animate({
			left: this.left,
			top: this.top,
			width: modalWidth
		});
	}

	this.render = function () {
		this.findPosition();

		modal.css({
			left: this.left,
			top: this.top
		});
	}

	this.close = function () {
		this.findPosition();

		modal.animate({
			left: this.left,
			top: 0
		}, 'mid', function () {
			modal.parents('.modal-bg').hide();
			modal.hide();
		});
	}

	$(window).resize(function () {
		if ($('.modal').css('display') != 'none') {
			$this.render();
		}
	});

	$('.modal .dismiss').click(function () {
		$this.close();
	});
}

$(function () {
	var modal = new ModalDialog($('.modal'), 500);
	$('#openDialog').click(function () {
		modal.open();
	});

});