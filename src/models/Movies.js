const sequelize = require('../utils/connect')
const { DataTypes }= require('sequelize')

const Movies = sequelize.define('movies', {
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    description : {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Movies