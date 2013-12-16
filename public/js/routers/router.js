define([
	'jquery',
	'backbone',
	'views/app',
	'views/usuario/mascotas',
	'text!templates/login.html',
	], function ($, Backbone, AppView, MascotasUsuarioView, loginTemplate) {
		'use strict';

		var router = Backbone.Router.extend({

			routes : {
				'login' : 'login',
				':user/mascotas' : 'mascotasUsuario'
			},
			initialize: function(){
				window.view = new AppView();
				Backbone.history.start();
			},
			login: function(){
				$('#modal .modal-content').html(loginTemplate);
				$('#modal').modal();
			},
			mascotasUsuario: function(user){
				if(_.isUndefined(window.view.misMascotasView)){
					window.view.misMascotasView = new MascotasUsuarioView({user: user});
					$('#page').html(window.view.misMascotasView.render().el);
				}else
					$('#page').html(window.view.misMascotasView.render().el);
				
			}
		});

		return router;
	});