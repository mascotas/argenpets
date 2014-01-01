module.exports = function(app){
	
	var indexRoute = require('./index');
	var usuarioRoute = require('./usuario');
	var mascotaRoute = require('./mascota');

	app.get('/upload', function(req, res){
		console.log('get upload');
	});

	app.post('/upload', function(req, res){
		console.log('post upload');
	});

	app.get('/usuarios', function(req, res){
		var Usuario = app.get('models').usuario;

		if(typeof req.session.id == "undefined"){
			Usuario.all().success(function(usuarios) {
				res.send(usuarios)
			})
		}else{
			Usuario.findAll({
				where: {
					id: {
						ne: req.session.id //not equal
					}
				}
			}).success(function(usuarios) {
				res.send(usuarios)
			})
		}

		
	});

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

};