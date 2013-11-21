module.exports = function(sequelize, Seq){

return sequelize.define('partidos',{
   
   id : { 
       type : Seq.INTEGER, 
       primaryKey: true
   }
} ,{
	timestamps: false,
	tableName : "partidos"
});

};