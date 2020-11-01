require('dotenv').config();

const sequelize = require('../sequelize');

async function setup() {
    console.log('Initializing database');
    console.log('sql ' + process.env.DATABASE_URL);
    await sequelize.sync({ force: true });
}

setup();
