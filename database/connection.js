require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.DB_USER, 
    process.env.DB_PASS, {
        host: process.env.HOST,
        dialect: process.env.DIALECT
    });

module.exports = sequelize;
