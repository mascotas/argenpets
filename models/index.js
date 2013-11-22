var Sequelize  = require('sequelize');
var config  = require('./conf').database;
var sequelize = new Sequelize(
	config.database,
	config.username,
	config.password
	,{
		define: {
			syncOnAssociation: true,
			timestamps: true

		}

	});


var models = [ 'partidos',
'usuario_partido',
'usuarios'
];



models.forEach(function(model){
	module.exports[model] = sequelize.import( __dirname + "/" + model );
});

(function(m){

	m.usuarios.hasMany( m.partidos, {  joinTableModel : m.usuario_partido, foreignKey : 'usuario_id', foreignKeyConstraint: true, allowNull: false } );
	m.partidos.hasMany( m.usuarios, {  joinTableModel : m.usuario_partido, foreignKey : 'partido_id', foreignKeyConstraint: true, allowNull: false } );

})(module.exports);

//sequelize.sync({ force : true });

module.exports.sequelize = sequelize;

