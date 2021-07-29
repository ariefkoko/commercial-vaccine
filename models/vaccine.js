'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaccine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vaccine.belongsToMany(models.City, { 
        through: 'VaccineCities' 
      })
      Vaccine.hasMany(models.User, {
        foreignKey: 'VaccineId'
      })
    }

    convertPrice() {
      return `IDR ${this.price.toLocaleString('id')}`
    }
  };
  Vaccine.init({
    vaccine_name: DataTypes.STRING,
    country_manufacture: DataTypes.STRING,
    base_material: DataTypes.STRING,
    efficacy: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Vaccine',
  });
  return Vaccine;
};