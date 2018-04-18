const Sequelize = require('sequelize');

const scheme = require('./scheme');
const db = require('../config').db;

// добавил название базы данных
const sequelize = new Sequelize(
  db.database,
  db.username,
  db.password,
  db.config
);

scheme(sequelize);
sequelize.sync();

module.exports.sequelize = sequelize;
module.exports.models = sequelize.models;
