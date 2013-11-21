module.exports = function(sequelize, Seq){

return sequelize.define('usuario_partido',{
   
   estado : { 
       type : Seq.INTEGER
   }
} ,{
	timestamps: false,
	tableName : "usuario_partido"
});

};


