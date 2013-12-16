define(['jquery','backbone'], function($, Backbone){
	
	var MascotasList = Backbone.Collection.extend({
		url: 'mascotas',
	});

	return MascotasList;
});