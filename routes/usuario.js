


module.exports = function(app){
  var user = app.get('models').usuarios;

Get = function(req, res) {
  //HACES LO QUE QUIERAS
  user.find(req.params[0]).success(function(datas){
    res.send(datas);
  });
};

Delete = function(req, res) {
  console.log("DELETE");
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



