define(["backbone","jquery"],function(Backbone, $){

	var MascotaModel = Backbone.Model.extend({
		url: 'mascota',
		initialize : function(){

		},
		validate : function(attrs, options){

    	}

	});

	return MascotaModel;

});