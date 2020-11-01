require('dotenv').config();

const app = require('./express/app');
const sequelize = require('./sequelize');

const PORTNUM = process.env.PORT;

async function initializeConnection() {
    console.log('Database connection startup sequence');
    try {
        await sequelize.authenticate();
        console.log('Database connection successful');
    } catch (error) {
        console.error('Unable to connect with the database', error.message);
        process.exit(1);
    }
}

async function initializeApp() {
    await initializeConnection();

    console.log(`Starting application server on port ${PORTNUM}`);

    app.listen(PORTNUM, () => {
        console.log(`Application server started on port ${PORTNUM}`);
    });
}

initializeApp();
