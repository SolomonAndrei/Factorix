const {Sequelize}=require('sequelize');
const sequelize=require('../utils/database.js');

const Order = sequelize.define('orders', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   clientName: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   finalTerm: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
   },
   piecesOfFurniture: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   furnitureType: {
         type: Sequelize.STRING,
         allowNull: false,
      },

});

module.exports=Order;