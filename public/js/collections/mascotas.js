define(['jquery','backbone', 'models/mascota'], function($, Backbone, MascotaModel){
	
	var MascotasList = Backbone.Collection.extend({
		model: MascotaModel,
		url: 'usuario/mascotas'
	});

	return MascotasList;
});