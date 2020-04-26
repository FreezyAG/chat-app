require('dotenv');

const config = {
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    MONGO_DB_URL_TEST: process.env.MONGO_DB_URL_TEST
}

module.exports = config;