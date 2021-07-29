'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VaccineCities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VaccineId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vaccines',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      CityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cities',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('VaccineCities');
  }
};