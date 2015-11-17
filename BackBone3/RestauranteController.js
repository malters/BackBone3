define(function(require) {
	var RestauranteModel = require('./RestauranteModel');
	var RestauranteView = require('./RestauranteView');
	var $ = require('jquery');

	var model = new RestauranteModel({ id: document.location.search.slice(1) });
	model.fetch();

	$(document).ready(function() {
		var hello = new RestauranteView({
			el: $('.hello').first(),
			model: model
		});
	});

});