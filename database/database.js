require('dotenv').config();

const Sequelize = require("sequelize");

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT

const connection = new Sequelize(dbName, dbUser, password, {
    dialect: 'mysql',
    host: dbHost,
    port: dbPort
});

module.exports = connection;