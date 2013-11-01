

module.exports = function(app){
  
 var usuarioRoute = require('./usuario');
 
 usuarioRoute(app);

 app.get('/',  function(req, res) {
   res.render('example');    
 } );


};

