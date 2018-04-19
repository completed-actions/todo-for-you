const dbConfig = require('./db');
const serverConfig = require('./server');
module.exports = {
    db: dbConfig,
    server: serverConfig,
    NODE_ENV_PROD: process.env.NODE_ENV === 'production',
    NODE_ENV_DEV: process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV !== 'production'
};
