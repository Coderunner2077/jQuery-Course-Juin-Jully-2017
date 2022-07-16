(function($) {
	$.fn.wideText = function() {
		return this.each(function() {
			// Add "wtext" class to each element and then set up the magic
			var obj = $(this),
				rtext = obj.addClass('wtext'),
				i = 0,
				lambda,
				size;

			// Work the magic each time the browser is resized
			$(window).on('resize', function() {
				i = 0;
			do {
				lambda = obj.parent().width() / obj.width();
				size = parseInt(obj.css('fontSize'), 10);
				obj.css({ 'fontSize':  size * lambda - 1 + 'px', 'visibility': 'visible' });
				console.log(++i);
			} while ((obj.width() < (obj.parent().width() - 35) || obj.width() > obj.parent().width()) && i < 10);
			}).resize();
		});
	};
})(jQuery);