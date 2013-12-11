module.exports = function(sequelize, Seq){
  return sequelize.define('mascotas', {
    mascota_id: {
      type: Seq.INTEGER,
      primaryKey: true,
      references: "mascota",
      referencesKey: "id"
    },
    usuario_id: {
      type: Seq.INTEGER,
      primaryKey: true,
      references: "usuario",
      referencesKey: "id"
    }
  },{
    timestamps: false,
    tableName : "mascotas"
  }
  );
};