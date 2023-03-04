'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    static associate(models) {
      address.hasOne(models.places);
    }
  }
  address.init({
    city: DataTypes.STRING,
    state: DataTypes.INTEGER,
    street: DataTypes.STRING,
    suburb: DataTypes.STRING,
    postal_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};