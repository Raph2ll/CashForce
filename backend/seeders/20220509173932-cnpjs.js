'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cnpjs', 
      [
        {
          cnpj: '00000000000001',
          companyType: '2',
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:33',
        },
        {
          cnpj: '00000000000002',
          companyType: '1',
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:33',
        },
        {
          cnpj: '00000000000003',
          companyType: '1',
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:33',
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cnpjs', null, {});
  }
};