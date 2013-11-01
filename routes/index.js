
/*
 * GET home page.
 */

exports.producto = function(req, res) {
	var productoModel = require('../models/producto');
    var id = new Buffer(req.params[0], 'base64').toString('ascii');
    productoModel.findById({ id : id }, function(err, result, fields){
       if(!err){
         res.render('producto', { data : result } );
         }
       else{
       	console.log(err);
       	res.render('error');
       }
            
    });
    
};

exports.base64 = function(req, res) {   
   res.render('base',{ base : new Buffer(req.params[0]).toString('base64') });
}
exports.encode = function( req, res ){
  res.jsonp({ id : new Buffer(req.query.id).toString('base64') });

}
exports.getSuperInfo = function(req, res){
   
}

exports.carrito = function(req, res) {
    var carrito = require('../models/carrito');
    var superProd = require('../models/super');
    var carritoProd = require('../models/CarritoProd');

    var id = new Buffer(req.params[0], 'base64').toString('ascii');
    var respJson = {};
    carrito.FindOne(  { carrito_id : id }, function(err, result, fields){
        if(!err){
           respJson['nombre'] = result[0].carrito_nombre;
           carritoProd.List( { carrito_id : id }, function(err, result, fields){
              if(!err){
                 respJson['productos'] = result;
                 superProd.getComparation(result, function(err, result, fields){
                     if(!err){
                         respJson['super'] = result;
                         res.render('carrito', { data :  respJson } );
                     }else{
                       console.log("Super ERROR");
                       console.log(err);
                       res.render('error');
                     } 
                 });   
              }else{
                 console.log("Producto Carrito ERROR");
                 console.log(err);
                 res.render('error');
              } 
           });
        }else{
          console.log("Carrito ERROR");
          console.log(err);
          res.render('error');
        }
    } );

};

