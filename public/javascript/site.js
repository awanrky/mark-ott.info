M = (function() {
	"use strict";
	return {

		navbar: {

			setActive: function(id) {
				$("li[id^='navbar-list-item-']").removeClass('active');
				$('#' + id).addClass('active');
			}

		}

	}
}());