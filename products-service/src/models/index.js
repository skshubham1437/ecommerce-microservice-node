const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Product = require('./product')(sequelize, Sequelize);

const db = {
  sequelize,
  Sequelize,
  Product,
};

module.exports = db;
