require('dotenv').config();

const { Sequelize } = require('sequelize');

console.log(`database url ${process.env.DATABASE_URL}`);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres'
});

const modelDefinitions = [
	require('./models/slug')
	// add here for new models
];

for (const model of modelDefinitions) {
	model(sequelize);
}

// TODO: Add entity relationship

module.exports = sequelize;
