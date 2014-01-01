define([
	'jquery',
	'backbone',
	'views/app',
	'views/usuario/mascotas',
	'views/mascota/show',
	'views/usuario/usuarios'
	], function ($, Backbone, AppView, MascotasUsuarioView, MascotaView, UsuariosView) {
		'use strict';

		var router = Backbone.Router.extend({

			routes : {
				':user/mascotas' : 'mascotasUsuario',
				'mascota/:id' : 'mascota',
				'usuarios' : 'usuarios'
			},
			initialize: function(){
				window.view = new AppView();
				Backbone.history.start();
			},
			mascotasUsuario: function(user){
				if(_.isUndefined(window.view.mascotasUsuarioView)){
					window.view.mascotasUsuarioView = new MascotasUsuarioView({user: user});
					$('#page').html(window.view.mascotasUsuarioView.render().el);
				}else{
					$('#page').html(window.view.mascotasUsuarioView.render().el);
					window.view.mascotasUsuarioView.mascotasList.fetch({
						reset: true,
						data: {user: user}
					});
				}
				
			},
			mascota: function(id){
				if(_.isUndefined(window.view.mascotaView)){
					window.view.mascotaView = new MascotaView({id: id});
					$('#page').html(window.view.mascotaView.render().el);
				}else{
					console.log('existe');
					$('#page').html(window.view.mascotaView.render().el);
					window.view.mascotaView.model.set({"id" : id});
				}
			},
			usuarios: function(){
				if(_.isUndefined(window.view.usuariosView)){
					window.view.usuariosView = new UsuariosView();
					$('#page').html(window.view.usuariosView.render().el);
				}else{
					$('#page').html(window.view.usuariosView.render().el);
					window.view.usuariosView.usuariosList.fetch({reset: true});
				}
			}

		});

		return router;
	});