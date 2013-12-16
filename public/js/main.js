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
		},
		'facebook' : {
			export: 'FB'
		}
	},
	paths :{
		"jquery" : "lib/jquery",
		"underscore" : "lib/underscore",
		"backbone" : "lib/backbone",
		"text": "lib/text", //require.js text
		"bootstrap" : "lib/bootstrap",
		'facebook': '//connect.facebook.net/en_US/all',
		"alertify" : "lib/alertify"
	}
});


require([ 
	"jquery", 
	"underscore", 
	"backbone", 
	"routers/router", 
	"bootstrap",
	"fb"
	], function($, _, Backbone, Router, FB){
		window.router = new Router();		
	});