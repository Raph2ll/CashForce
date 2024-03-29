'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('providers', 
      [
        {
          name: 'CEDENTE 002', // 3- Cedente
          tradingName: 'CEDENTE 002 LTDA',
          cashforceTax: null,
          responsibleName: null,
          responsibleEmail: null,
          responsiblePosition: null,
          responsiblePhone: null,
          responsibleMobile: null,
          website: null,
          postalCode: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          bank: null,
          bankAgency: null,
          account: null,
          documents: null,
          phoneNumber: null,
          situation: null,
          situationDate: null,
          createdAt: '2020-10-29 21:22:21',
          updatedAt: '2020-10-29 21:22:22',
          cnpjId: 2,
          email: null,
        },
        {
          name: 'CEDENTE 003',
          tradingName: 'CEDENTE 003 LTDA',
          cashforceTax: null,
          responsibleName: null,
          responsibleEmail: null,
          responsiblePosition: null,
          responsiblePhone: null,
          responsibleMobile: null,
          website: null,
          postalCode: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          bank: null,
          bankAgency: null,
          account: null,
          documents: null,
          phoneNumber: null,
          situation: null,
          situationDate: null,
          createdAt: '2020-10-29 21:22:21',
          updatedAt: '2020-10-29 21:22:22',
          cnpjId: 2,
          email: null,
        },
        {
          name: 'CEDENTE 004',
          tradingName: 'CEDENTE 004 LTDA',
          cashforceTax: null,
          responsibleName: null,
          responsibleEmail: null,
          responsiblePosition: null,
          responsiblePhone: null,
          responsibleMobile: null,
          website: null,
          postalCode: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          bank: null,
          bankAgency: null,
          account: null,
          documents: null,
          phoneNumber: null,
          situation: null,
          situationDate: null,
          createdAt: '2020-10-29 21:22:21',
          updatedAt: '2020-10-29 21:22:22',
          cnpjId: 2,
          email: null,
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('providers', null, {});
  }
};
