module.exports = function(sequelize, Seq){
  
  return sequelize.define('usuario_partido',{
    estado : { 
      type : Seq.INTEGER
    },
    usuario_id: {
      type: Seq.INTEGER,
      references: "usuario",
      referencesKey: "id"
    },
    partido_id: {
      type: Seq.INTEGER,
      references: "partidos",
      referencesKey: "id"
    }
  },{
    timestamps: true,
    tableName : "usuario_partido"
  }
  );
};