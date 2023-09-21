const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Expense = sequelize.define('expense',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    amount:{
        type:Sequelize.DECIMAL,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports= Expense;