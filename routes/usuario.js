module.exports = function(app){
	var Usuario = app.get('models').usuario;

	Get = function(req, res) {
		Usuario.find(req.params[0]).success(function(usuario) {
			console.log(usuario);
		})
	};

	List = function(req, res){
		Usuario.all().success(function(usuarios) {
			res.send(usuarios)
		})
	};

	Delete = function(req, res) {
		console.log("DELETE");
	};

	Post = function(req, res) {
		/*
		var Rol = app.get('models').rol;

		Rol.create({
	       'nombre' : 'admin',
	       'estado' : 1
		}).success(function(rol){
	        res.send(rol.dataValues);
		}).error(function(err){
			res.send(err);
		});
		*/

		Rol.find({
			where: {nombre: 'admin'}
		}).success(function(rol){
			if(rol){
				req.body.rol_id = rol.id;
				
				Usuario.create(req.body).success(function(usuario){
					res.send(usuario.dataValues);
				}).error(function(err){
					if(err.code == "ER_DUP_ENTRY")
						err.code = "Ya existe un usuario registrado con ese mail";
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

	Show = function(req, res){
		console.log(req.params);
	};


	controller = function(app){
		//app.get('/:usuario', this.Show);
		//app.get('/:usuario/*', this.Show);

		app.get('/usuario', this.List );
		app.get('/usuario/*', this.Get );
		app.post('/usuario', this.Post);    
		app.delete('/usuario/*', this.Delete);    
		app.put('/usuario/*', this.Put);
	};

	controller(app);
}



