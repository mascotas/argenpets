define(['jquery','backbone'], function($, Backbone){
	
	var TiposMascotaList = Backbone.Collection.extend({
		url: 'mascota/tipos',
	});

	return TiposMascotaList;
});