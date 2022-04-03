const {Sequelize}=require('sequelize');

const sequelize = new Sequelize('factorixschema', 'root', 'Micutu12?', {
    dialect: 'mysql',
    host: 'localhost',
});



module.exports=sequelize;