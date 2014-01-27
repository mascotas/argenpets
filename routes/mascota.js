module.exports = function(app){
	var Mascota = app.get('models').mascota;

	Get = function(req, res) {
		Mascota.find(req.query.id).success(function(mascota) {
			res.send(mascota.dataValues);
		})

		/*
		Mascota.find({
			where: {nombre: req.params[0]},
		}).success(function(mascota) {
			console.log(mascota);
		})
		*/
	};

	Post = function(req, res){
		console.log('bien bnsadm');
	}

	List = function(req, res){
		Mascota.all().success(function(mascotas) {
			res.send(mascotas)
		})
	};

	Delete = function(req, res) {
		console.log("DELETE");
	};

	Create = function(req, res) {
		var TipoMascota = app.get('models').tipo_mascota;
		var Usuario = app.get('models').usuario;
		var Mascotas = app.get('models').mascotas;

		var $mascota = {
			'nombre' : req.body.nombre,
			'tipo_mascota_id' : req.body.tipo
		}

		Usuario.find(req.session.id).success(function(usuario){
			if(usuario){
				TipoMascota.find(req.body.tipo).success(function(tipoMascota) {
					if(tipoMascota){
						Mascota.create($mascota).success(function(mascota){
							
							var $mascotaUsuario = {
								'mascota_id' : mascota.dataValues.id,
								'usuario_id' : usuario.dataValues.id,
								'cantidad' : 2
							}

							Mascotas.create($mascotaUsuario).success(function(mascotaUsuario){
								var resp = mascotaUsuario.toJSON();
								resp.id = resp.mascota_id;
								delete resp.mascota_id;
								res.send(resp);
							})

							/*
							//TODO: no anda el addMascota, addMascotas, addMascotass, addmascota, addmascotas}
							usuario.setMascota([mascota]).success(function(){
								res.send('ok');
							});
							*/


						}).error(function(err){
							res.send(err);
						});
					}else{
						res.send('Tipo de mascota erroneo');
					}
				})
			}else{
				res.send('No logeado o no se encuentra el usuario');
			}
		})

	};

	Put = function(req, res) {
		console.log("PUT");
	};

	Tipos = function(req, res){
		var TipoMascota = app.get('models').tipo_mascota;
		
		/*
		TipoMascota.create({
	       'nombre' : 'perro',
	       'tipo_mascota_id': null
		}).success(function(tipoMascota){
			console.log(tipoMascota);
	        res.send(tipoMascota.dataValues);
		}).error(function(err){
			console.log(err);
			res.send(err);
		});*/

		TipoMascota.all().success(function(tiposMascota) {
			res.send(tiposMascota);
		})
	}

	controller = function(app){
		app.get('/mascota/tipos', this.Tipos);
		app.get('/mascota', this.Get );
		app.post('/mascota', this.Create);    
		app.delete('/mascota/*', this.Delete);    
		app.put('/mascota/*', this.Put);
		
	};

	controller(app);
}



