module.exports = function(app){
  var user = app.get('models').usuarios;

Get = function(req, res) {

	var user = app.get('models').usuarios;

	user.find({where: {id: 1}}).success(function(post) {
        console.log(post);
    }).error(function(err) {
        console.log(err);
    })

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

	user.create({
       'nombre' : 'Seasdasda'
	}).success(function(user){
         res.send(user);
	}).error(function(err){
		res.send(err);
	});


};

Put = function(req, res) {
	console.log("PUT");
};


controller = function(app){


 app.get('/usuario/*', this.Get );
 app.get('/newUsuario', this.Post );
 app.post('/usuario/*', this.Post);    
 app.delete('/usuario/*', this.Delete);    
	app.put('/usuario/*', this.Put);
};

controller(app);
}



