const Sequelize = require('sequelize');
const {Op} = Sequelize;
module.exports = {
    database: 'database',
    username: process.env.DB_USERNAME || null,
    password: process.env.DB_PASSWORD || null,
    config: {
        dialect: 'sqlite',
        storage: 'db.sqlite3',
        operatorsAliases: {$and: Op.and},
        logging: false
    }
};
