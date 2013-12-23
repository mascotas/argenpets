define([
	'jquery',
	'backbone',
	'views/app',
	'views/usuario/mascotas',
	], function ($, Backbone, AppView, MascotasUsuarioView) {
		'use strict';

		var router = Backbone.Router.extend({

			routes : {
				':user/mascotas' : 'mascotasUsuario'
			},
			initialize: function(){
				window.view = new AppView();
				Backbone.history.start();
			},
			mascotasUsuario: function(user){
				if(_.isUndefined(window.view.misMascotasView)){
					console.log(user);
					window.view.misMascotasView = new MascotasUsuarioView({user: user});
					$('#page').html(window.view.misMascotasView.render().el);
				}else{
					$('#page').html(window.view.misMascotasView.render().el);
				}
					
				
			}
		});

		return router;
	});