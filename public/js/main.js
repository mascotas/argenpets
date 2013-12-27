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
		"bootstrap-select" : {
			"deps" : ["jquery"]
		},
		"jquery.ui.widget" : {
			"deps" : ["jquery"]
		},
		"jquery.iframe-transport" : {
			"deps" : ["jquery"]
		},
		"jquery.fileupload" : {
			"deps" : ["jquery", "jquery.ui.widget"]
		},
		"backbone.defered-view-loader" : {
			"deps" : ["jquery", "backbone"]
		},
		"backbone.upload-manager" : {
			"deps" : ["jquery", "backbone", "backbone.defered-view-loader", "jquery.fileupload"]
		}
		/*,
		'facebook' : {
			export: 'FB'
		}*/
	},
	paths :{
		"jquery" : "lib/jquery",
		"underscore" : "lib/underscore",
		"backbone" : "lib/backbone",
		"backbone.defered-view-loader" : "lib/backbone.defered-view-loader",
		"backbone.upload-manager" : "backbone.upload-manager",
		"text": "lib/text", //require.js text
		"bootstrap" : "lib/bootstrap",
		"bootstrap-select" : "lib/bootstrap-select",
		"jquery.ui.widget" : "lib/jquery.ui.widget",
		"jquery.fileupload" : "jquery.fileupload",
		"jquery.iframe-transport" : "lib/jquery.iframe-transport",

		//'facebook': '//connect.facebook.net/en_US/all',
		"alertify" : "lib/alertify"
	}
});


require([ 
	"jquery", 
	"underscore", 
	"backbone", 
	"routers/router", 
	"bootstrap"
	
	], function($, _, Backbone, Router){
		window.router = new Router();		
	});