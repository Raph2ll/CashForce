'use strict';
const { DataTypes } = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cnpjs', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cnpj: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: "cnpj"
      },
      companyType: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
    }, {
      Sequelize,
      tableName: 'cnpjs',
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "cnpj",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "cnpj" },
          ]
        },
      ]
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cnpjs');
  }
};
