require.config({
	shim : {
		underscore: {
			exports: '_'
		},
		"backbone" : {
			"deps" : ["underscore", "jquery"],
			"exports" : "Backbone"
		},
		"bootstrap" : {
			"deps" : ["jquery"]
		}
	},
	paths :{
		"jquery" : "lib/jquery",
		"underscore" : "lib/underscore",
		"backbone" : "lib/backbone",
		"text": "lib/text", //require.js text
		"bootstrap" : "lib/bootstrap",
		"alertify" : "lib/alertify"
	}
});


require([ 
	"jquery", 
	"underscore", 
	"backbone", 
	"routers/router", 
	//"bootstrap",
	], function($, _, Backbone, Router){
		window.router = new Router();		
	});