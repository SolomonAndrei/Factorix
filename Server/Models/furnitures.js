const {Sequelize}=require('sequelize');
const sequelize=require('../utils/database.js');

const Furniture = sequelize.define('furniture', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   volume: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   duration: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   name: {
         type: Sequelize.STRING,
         allowNull: false,
      },
   costOfMaterials: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
   materialType: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
   userid: {
            type: Sequelize.INTEGER,
            allowNull: false,
         },
});

module.exports=Furniture;