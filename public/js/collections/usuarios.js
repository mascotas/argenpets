define(['jquery','backbone'], function($, Backbone){
	
	var UsuariosList = Backbone.Collection.extend({
		url: 'usuarios'
	});

	return UsuariosList;
});