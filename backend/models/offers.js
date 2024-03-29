const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tax: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tariff: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    adValorem: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    float: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iof: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expiresIn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paymentStatusSponsor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    paymentStatusProvider: {
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
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    sponsorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sponsors',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'offers',
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
      {
        name: "sponsorId",
        using: "BTREE",
        fields: [
          { name: "sponsorId" },
        ]
      },
    ]
  });
};
