module.exports = function(app){
	var Usuario = app.get('models').usuario;

	Get = function(req, res) {
		console.log(req.params);

		User.all().success(function(users) {
			console.log(users);
		})
		
		/*

		user.getRols().success(function(response) {
	  		console.log(response)
		})
		*/

	};

	Delete = function(req, res) {
		console.log("DELETE");
	};

	Post = function(req, res) {
		var Rol = app.get('models').rol;

		/*
		Rol.create({
	       'nombre' : 'admin',
	       'estado' : 1
		}).success(function(rol){
	        res.send(rol.dataValues);
		}).error(function(err){
			res.send(err);
		});*/

		//console.log(req.body);

		Rol.find({
			where: {nombre: 'admin'}
		}).success(function(rol){
			if(rol){
				req.body.rol_id = rol.id;
				console.log(req.body);
				Usuario.create(req.body).success(function(usuario){
					res.send(usuario.dataValues);
				}).error(function(err){
					res.send(err);
				});

			}else{
				res.send('No existe el rol para el usuario');
			}
		})

		/*
		;*/

	};

	Put = function(req, res) {
		console.log("PUT");
	};


	controller = function(app){
		app.get('/usuario/*', this.Get );
		app.post('/usuario', this.Post);    
		app.delete('/usuario/*', this.Delete);    
		app.put('/usuario/*', this.Put);
	};

	controller(app);
}



