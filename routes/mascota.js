module.exports = function(app){
	var Mascota = app.get('models').mascota;

	Get = function(req, res) {
		Mascota.find(req.params[0]).success(function(mascota) {
			console.log(mascota);
		})

		Mascota.find({
			where: {nombre: req.params[0]},
		}).success(function(mascota) {
			console.log(mascota);
		})
	};

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

		var mascota = {
			'nombre' : 'carlitos',
			'tipo_mascota_id' : 1
		}

		//req.body.tipo_mascota_id
		TipoMascota.find(1).success(function(tipoMascota) {
			Usuario.find(1).success(function(usuario){
				
				Mascota.create(mascota).success(function(mascota){
					usuario.setMascota([mascota]).success(function(resp){
						console.log(resp)
						res.send(mascota.dataValues);
					})
				}).error(function(err){
					res.send(err);
				});
			})
		})

	};

	Put = function(req, res) {
		console.log("PUT");
	};


	controller = function(app){
		app.get('/mascota', this.Create );
		app.get('/mascota/*', this.Get );
		app.post('/mascota', this.Post);    
		app.delete('/mascota/*', this.Delete);    
		app.put('/mascota/*', this.Put);
	};

	controller(app);
}



