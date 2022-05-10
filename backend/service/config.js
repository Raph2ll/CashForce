/* eslint-disable max-len */
const path = require('path');

const output = path.join(__dirname, './models');

const options = { directory: output, caseFile: 'l', caseModel: 'p', caseProp: 'c', lang: 'ts', useDefine: false, singularize: true, spaces: true, indentation: 2 };

// Edit the configuration below for your database dialect

// mysql
const mysql = {
  dbname: 'cashforce_v3.1',
  user: 'root',
  pass: 'root',
  options: { dialect: 'mysql' },
  autoOptions: { dialect: 'mysql', ...options },
};

// Change to export appropriate config for your database
module.exports = mysql;