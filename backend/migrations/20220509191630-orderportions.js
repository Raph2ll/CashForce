'use strict';
const { DataTypes } = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions',  {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nDup: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      dVenc: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      vDup: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      availableToMarket: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'orders',
          key: 'id'
        }
      }
    }, {
      Sequelize,
      tableName: 'orderportions',
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
          name: "orderId",
          using: "BTREE",
          fields: [
            { name: "orderId" },
          ]
        },
      ]
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orderportions');
  }
};
