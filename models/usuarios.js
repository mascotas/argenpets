module.exports = function(sequelize, Seq){

return sequelize.define('usuario',{
   
   id : { 
       type : Seq.INTEGER, 
       primaryKey: true
   }
} ,{
	timestamps: false,
	tableName : "usuario"
});

};