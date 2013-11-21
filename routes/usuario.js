module.exports = function(app){

Get = function(req, res) {
		var user = app.get('models').usuarios;
  //HACES LO QUE QUIERAS
  
  console.log("GET");
};

Delete = function(req, res) {
	console.log("DELETE");


	var usuario = require('../models/usuario');
		/*
		usuario.FindOne(  { id : req.body.id }, function(err, result, fields){
			if(!err){
				console.log(result);
			}else{
				console.log(err);
			}
		});
*/
};

Post = function(req, res) {
	var usuario = require('../models/usuario');

	console.log(req.body);
	console.log("POST");
};

Put = function(req, res) {
	console.log("PUT");
};


controller = function(app){

	app.get('/usuario?*', this.Get );

	app.post('/usuario', this.Post);

	app.delete('/usuario/*', this.Delete);

	app.put('/usuario/*', this.Put);

};

controller(app);
}



