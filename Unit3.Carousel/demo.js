var Slider = function(slider, duration) {
	// Properties
	$this = this;
	$this.items = slider.find('.slider-item');
	$this.indicators = slider.find('.slider-indicators .dot');

	// Method
	$this.nav = function(index) {
		var items = slider.find('.slider-item');
		items.removeClass('active');
		items.eq(index).addClass('active');

		var indicators = slider.find('.slider-indicators .dot');
		indicators.removeClass('active');
		indicators.eq(index).addClass('active');
	}

	$this.findCurrentSlide = function() {
		var activeDot = slider.find('.slider-indicators .dot.active')
		return activeDot.index('.slider-indicators .dot');
	}

	$this.next = function(){
		var nextSlide = $this.findCurrentSlide() + 1;
		$this.nav(nextSlide >= $this.indicators.length ? 0 : nextSlide);
	}

	$this.prev = function(){
		var prevSlide = $this.findCurrentSlide() - 1;
		$this.nav(prevSlide < 0 ? $this.indicators.length - 1 : prevSlide);
	}

	// Contructor
	$this.indicators.each(function(){
		$(this).click(function(){
			var selected = $(this).index('.slider-indicators .dot');
			$this.nav(selected);
		});
	});

	slider.find('.slider-prev').click($this.prev);
	slider.find('.slider-next').click($this.next);

	var interval = setInterval($this.next, duration);
	slider.mouseenter(function(){clearInterval(interval)});
	slider.mouseleave(function(){
		interval  = setInterval($this.next, duration);
	});

	return $this;
}

$(function(){
	var slider = new Slider($('.slider'), 3000);
});