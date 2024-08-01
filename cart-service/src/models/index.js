const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Cart = require('./cart')(sequelize, Sequelize);

const db = {
  sequelize,
  Sequelize,
  Cart,
};

module.exports = db;
