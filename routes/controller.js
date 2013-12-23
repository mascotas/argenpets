module.exports = function(app){
	
	var indexRoute = require('./index');
	var usuarioRoute = require('./usuario');
	var mascotaRoute = require('./mascota');
	var mascotasRoute = require('./mascotas');

	app.get('/',  function(req, res) {
		if(typeof req.session.id == "undefined")
			res.render('home', { 'usuarioLogeado' : false, 'user' : 'no'});
		else
			res.render('home', { 'usuarioLogeado' : true, 'user': req.session.user, 'isAdmin' : true});
	} );

	indexRoute(app);

	/*
	app.get('/:usuario', function(req, res){
		console.log(req.params['usuario']);
	} );*/

	usuarioRoute(app);
	mascotaRoute(app);
	mascotasRoute(app);

};