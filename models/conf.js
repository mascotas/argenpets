var Sequelize = require("sequelize")

var sequelize = new Sequelize('mascotas', 'root', 'root',{
	language: 'es'
} );

module.exports = sequelize;