const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, // Don't allow NULL values
      primaryKey: true, // Set as the primary key
      autoIncrement: true, // Automatically increment the value for each new record
    },
    tag_name: {
      type: DataTypes.STRING, // Set the data type to STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
