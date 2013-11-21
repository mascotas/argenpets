module.exports = function(sequelize, Seq){

	return sequelize.define('usuario',{
		id : { 
			type : Seq.INTEGER, 
			primaryKey: true
		},
		email : {
			type : Seq.STRING(100),
			validate : {
				isEmail : true
			}
		}
	}, {
		timestamps: false,
		tableName : "usuario"
	});

};