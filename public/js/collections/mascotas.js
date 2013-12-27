define(['jquery','backbone'], function($, Backbone){
	
	var MascotasList = Backbone.Collection.extend({
		url: 'usuario/mascotas',
	});

	return MascotasList;
});