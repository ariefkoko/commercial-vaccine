'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.City, {
        foreignKey: 'CityId'
      })
      User.belongsTo(models.Vaccine, {
        foreignKey: 'VaccineId'
      })
    }
  };
  const {hasPassword} = require('../helper/bcryptpass')
  User.init({
    VaccineId: DataTypes.INTEGER,
    CityId: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty : {
          msg : 'Kota Tidak Boleh Kosong!'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Nama Tidak Boleh Kosong!'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Role Tidak Boleh Kosong!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Email Tidak Boleh Kosong!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Password Tidak Boleh Kosong!'
        }
      }
    }
  }, {
    hooks: {
      // beforeCreate: (instance, options) => {
      //   return hasPassword(instance.password)
      // },
      beforeCreate(instance, options) {
        instance.password = hasPassword(instance.password);
        instance.role = 'customer';
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};