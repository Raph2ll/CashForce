const Sequelize = require('sequelize');
const { initModels } = require('../models/init-models');
const config = require('./config');

const sequelize = new Sequelize(config.dbname, config.user, config.pass, config.options);

const { orders, cnpjs, users, buyers, providers } = initModels(sequelize);

const list = async () => {
  const result = await orders.findAll({
    include: [
      { model: cnpjs, as: 'cnpj' },
      { model: users, as: 'user' },
      { model: buyers, as: 'buyer' },
      { model: providers, as: 'provider' },
    ],
  });
  return result;
};

module.exports = { 
  list,
};