'use strict';
const { DataTypes } = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: "email"
      },
      phoneNumber: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      mobile: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      departament: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      verificationCode: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      emailChecked: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      cashforceAdm: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      }
    }, {
      Sequelize,
      tableName: 'users',
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
          name: "email",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "email" },
          ]
        },
      ]
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
