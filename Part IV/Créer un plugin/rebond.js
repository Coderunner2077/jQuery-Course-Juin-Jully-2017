(function($) {
	$.fn.rebond = function(amplX, amplY) {
		var x, y, affX, affY, initX, initY, duree;

		this.each(function() {
			initX = 100;
			initY = 400;

			for(x = Math.PI / 2; x < (Math.PI * 7); x = x + .2) {
				y = Math.abs(Math.sin(x)) / x;
				console.log('x : ' + x + '\ny : ' + y);
				affX = initX + x * amplX;
				affY = initY - y * amplY;
				duree = x == (Math.PI / 2) ? 1000 : 10;
				$(this).animate({ left: affX, top: affY}, duree);
			}
		});

		return this;
	};
})(jQuery);