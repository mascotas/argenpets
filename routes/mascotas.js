module.exports = function(app){
	var Mascotas = app.get('models').mascotas;

	Get = function(req, res) {

	};

	List = function(req, res){
		var Usuario = app.get('models').usuario

		Usuario.find({
			where: {nickname: req.query.user}
		}).success(function(usuario){
			if(usuario){
				Mascotas.find({
					where: {usuario_id: usuario.id}
				}).success(function(mascotas){
					res.send(mascotas);
				})
			}else{
				res.send('no se encuentra usuario');
			}
		})
		
	};

	Delete = function(req, res) {
		console.log("DELETE");
	};

	Create = function(req, res) {
		

	};

	Put = function(req, res) {
		console.log("PUT");
	};

	controller = function(app){
		app.get('/mascotas', this.List );
		app.get('/mascotas/*', this.Get );
		app.delete('/mascota/*', this.Delete);    
		app.put('/mascota/*', this.Put);
	};

	controller(app);
}

