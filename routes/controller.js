module.exports = function(app){
	
	var usuarioRoute = require('./usuario');
	var mascotaRoute = require('./mascota');
	var mascotasRoute = require('./mascotas');
	
	usuarioRoute(app);
	mascotaRoute(app);
	mascotasRoute(app);

	app.get('/',  function(req, res) {
		res.render('home');    
	} );

	app.get('/:usuario', function(req, res){
		console.log(req.params['usuario']);
	} );

};

