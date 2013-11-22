module.exports = function(sequelize, Seq){

return sequelize.define('usuarios',{
   
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
   }
} ,{
	
	tableName : "usuarios"
});

};