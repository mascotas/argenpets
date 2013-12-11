define([
	'jquery',
	'backbone',
	'views/app'
	], function ($, Backbone, AppView) {
		'use strict';

		var router = Backbone.Router.extend({

			routes : {

			},
			initialize: function(){
				window.view = new AppView();
				Backbone.history.start();
			}
		});

		return router;
	});