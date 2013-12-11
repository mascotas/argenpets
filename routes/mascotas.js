module.exports = function(app){
	var Mascotas = app.get('models').mascotas;

	Get = function(req, res) {

	};

	List = function(req, res){
		console.log('ok');
		console.log(req.params);
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



