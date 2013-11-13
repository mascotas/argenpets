var Sequelize = require("sequelize")

var sequelize = new Sequelize('pet', 'root', 'abc789',{
	language: 'en'
} );

module.exports = sequelize;