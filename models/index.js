var Sequelize  = require('sequelize');
var config  = require('./conf').database;

var sequelize = new Sequelize(
	config.database,
	config.username,
	config.password
	);

var models = [ 
'partidos',
'usuario_partido',
'usuario',
'rol'
];

models.forEach(function(model){
	module.exports[model] = sequelize.import( __dirname + "/" + model );
});

(function(m){
	//m.usuario.hasMany( m.partidos, {  joinTableModel : m.usuario_partido, foreignKey : 'usuario_id', foreignKeyConstraint: true, allowNull: false } );
	//m.partidos.hasMany( m.usuario, {  joinTableModel : m.usuario_partido, foreignKey : 'partido_id', foreignKeyConstraint: true, allowNull: false } );

	m.rol.hasMany(m.usuario, { foreignKey: 'rol_id', foreignKeyConstraint: true});
	//m.rol.hasOne(m.usuario);

})(module.exports);


module.exports.sequelize = sequelize;