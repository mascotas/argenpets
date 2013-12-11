module.exports = function(sequelize, Seq){

	return sequelize.define('mascota', {
		id : { 
			type : Seq.INTEGER, 
			primaryKey: true, 
			autoIncrement: true
		},
		nombre : {
			type : Seq.STRING(45),
			allowNull: true,
			validate: {
				len: [2, 45]
			}
		},
		tipo_mascota_id: {
	      	type: Seq.INTEGER,
	      	references: "tipo_mascota",
	      	referencesKey: "id"
	    }
	},{
		timestamps: false,
		tableName : "mascota"
	});
};
