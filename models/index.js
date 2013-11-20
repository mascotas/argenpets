var Sequelize  = require('sequelize');
var config  = require('./conf').database;
var sequelize = new Sequelize(
	config.database,
	config.username,
	config.password
	);


var models = [ 'partidos','usuario_partido','usuarios'
 ];



 models.forEach(function(model){
 	module.exports[model] = sequelize.import( __dirname + "/" + model );
 });

  (function(m){
    
    m.usuarios.hasMany( m.partidos, {  joinTableModel : m.usuario_partido, foreignKey : 'usuario_id' } );
    m.partidos.hasMany( m.usuarios, {  joinTableModel : m.usuario_partido, foreignKey : 'partido_id' } );

    })(module.exports);

module.exports.sequelize = sequelize;

