'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', 
      [
        {
          name: 'ALLAN SOUZA',
          email: 'allan@cashforce.com.br',
          phoneNumber: null,
          mobile: null,
          departament: null,
          verificationCode: '',
          emailChecked: 1,
          createdAt: '2020-10-01 21:31:37',
          updatedAt: '2020-10-01 22:41:23',
          departament: 1,
        },
        {
          name: 'RAPHAEL CORDEIRO',
          email: 'raphael@cashforce.com.br',
          phoneNumber: null,
          mobile: null,
          departament: null,
          verificationCode: '',
          emailChecked: 1,
          createdAt: '2020-10-01 21:31:37',
          updatedAt: '2020-10-01 22:41:23',
          departament: 1,
        },
        {
          name: 'FULANO',
          email: 'fulano@cashforce.com.br',
          phoneNumber: null,
          mobile: null,
          departament: null,
          verificationCode: '',
          emailChecked: 1,
          createdAt: '2020-10-01 21:31:37',
          updatedAt: '2020-10-01 22:41:23',
          departament: 1,
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
