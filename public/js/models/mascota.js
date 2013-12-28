define(["backbone","jquery"],function(Backbone, $){

	var MascotaModel = Backbone.Model.extend({
		url: 'mascota',
		initialize : function(){

		},
		validate : function(attrs, options){
			if(attrs.nombre == "" || _.isUndefined(attrs.nombre)){
	            return 'El nombre es incorrecto';
	        }

	        if(attrs.tipo == "" || _.isUndefined(attrs.tipo)){
	            return 'Tipo de mascota incorrecto';
	        }
    	}

	});

	return MascotaModel;

});