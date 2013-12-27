module.exports = function(sequelize, Seq){

	return sequelize.define('tipo_mascota',{
		id : { 
			type : Seq.INTEGER, 
			primaryKey: true,
			autoIncrement: true
		},
		nombre : {
			type : Seq.STRING(100)
		},
		tipo_mascota_id: {
	      	type: Seq.INTEGER,
	      	allowNull: true,
	      	references: "tipo_mascota",
	      	referencesKey: "id",
	      	validate: {
	      		notNull: false
	      	}
	    }
	},{
		timestamps: false,
		tableName : "tipo_mascota"
	});

};