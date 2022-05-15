const {Sequelize}=require('sequelize');
const sequelize=require('../utils/database.js');

const Material = sequelize.define('materials', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   name: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   colour: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   userid: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
});

module.exports=Material;