module.exports = function(sequelize, Seq){

	return sequelize.define('usuario', {
		id : { 
			type : Seq.INTEGER, 
			primaryKey: true, 
			autoIncrement: true
		},
		nombre : {
			type : Seq.STRING(50),
			validate: {
				len: [5, 49]
			}
		},
		rol_id: {
	      type: Seq.INTEGER,
	      references: "rol",
	      referencesKey: "id"
	    }
	},{
		tableName : "usuario"
	});
};
