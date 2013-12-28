var Sequelize  = require('sequelize');
var config  = require('./conf').database;

var sequelize = new Sequelize(config.database, config.username, config.password, {
	sync: { force: true },
	syncOnAssociation: true
}
);

var models = [ 
'rol',
'usuario',
'mascota',
'mascotas',
'tipo_mascota'
];

models.forEach(function(model){
	module.exports[model] = sequelize.import( __dirname + "/" + model );
});

(function(m){

	m.rol.hasMany(m.usuario, { foreignKey: 'rol_id', foreignKeyConstraint: true});
	m.usuario.hasMany( m.mascota, {  joinTableModel : m.mascotas, foreignKey : 'usuario_id', foreignKeyConstraint: true, allowNull: false } );
	m.mascota.hasMany( m.usuario, {  joinTableModel : m.mascotas, foreignKey : 'mascota_id', foreignKeyConstraint: true, allowNull: false } );

})(module.exports);


module.exports.sequelize = sequelize;