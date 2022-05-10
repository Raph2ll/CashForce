'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', 
      [
        {
          orderNfId: '1605181324132', // 1- Nota Fiscal
          orderNumber: '18153',
          orderPath: null,
          orderFileName: null,
          orderOriginalName: null,
          emissionDate: '2020-10-30T11:00:00-03:00', // 4- Emissão
          pdfFile: null,
          emitedTo: '22843980000127',
          nNf: '18153',
          CTE: '',
          value: '198450', // 5- Valor
          createdAt: '2020-10-30 17:54:18',
          updatedAt: '2020-10-30 17:54:18',
          cnpjId: 1,
          userId: 1,
          buyerId: 1, // 2- 
          providerId: 1,// 3- 
          orderStatusBuyer: '0', // 6- Status
          orderStatusProvider: '0',
          deliveryReceipt: null,
          cargoPackingList: null,
          deliveryCtrc: null,
        },
        {
          orderNfId: '2314231815061',
          orderNumber: '18159',
          orderPath: null,
          orderFileName: null,
          orderOriginalName: null,
          emissionDate: '2020-10-30T11:00:00-03:00',
          pdfFile: null,
          emitedTo: '22843980000127',
          nNf: '18153',
          CTE: '',
          value: '198450',
          createdAt: '2020-10-30 17:54:18',
          updatedAt: '2020-10-30 17:54:18',
          cnpjId: 2,
          userId: 2,
          buyerId: 2,
          providerId: 2, 
          orderStatusBuyer: '0',
          orderStatusProvider: '0',
          deliveryReceipt: null,
          cargoPackingList: null,
          deliveryCtrc: null,
        },
        {
          orderNfId: '1815061231423',
          orderNumber: '18160',
          orderPath: null,
          orderFileName: null,
          orderOriginalName: null,
          emissionDate: '2020-10-30T11:00:00-03:00',
          pdfFile: null,
          emitedTo: '22843980000127',
          nNf: '18153',
          CTE: '',
          value: '198450',
          createdAt: '2020-10-30 17:54:18',
          updatedAt: '2020-10-30 17:54:18',
          cnpjId: 3,
          userId: 3,
          buyerId: 3,
          providerId: 3, 
          orderStatusBuyer: '0',
          orderStatusProvider: '0',
          deliveryReceipt: null,
          cargoPackingList: null,
          deliveryCtrc: null,
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
