


module.exports = function(app){

Get = function(req, res) {
  console.log("GET");
};

Delete = function(req, res) {
  console.log("DELETE");
};

Post = function(req, res) {
  console.log("POST");
};

Put = function(req, res) {
  console.log("PUT");
};



controller = function(app){

 app.get('/usuario/*', this.Get );

 app.post('/usuario/*', this.Post);    

 app.delete('/usuario/*', this.Delete);    

 app.put('/usuario/*', this.Put);    

};

controller(app);


}



