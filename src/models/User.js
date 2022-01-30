const { Sequelize, DataTypes } = require("sequelize");
const databaseConnection = require("../database/connection");

const User = databaseConnection.define("User", {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    }
})

module.exports = User;
