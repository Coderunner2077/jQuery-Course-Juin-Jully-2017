(function($) {
	$.fn.gis = function() {
		this.each(function() {
			$(this).wrap('<b><u><i></i></u></b>');
		});

		return this;
	};
})(jQuery);