require('dotenv').config();

const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./association');

console.log(`database url ${process.env.DATABASE_URL}`);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres'
});

const modelDefinitions = [
	require('./models/slug'),
	require('./models/slugAccess')
	// add here for new models
];

for (const model of modelDefinitions) {
	model(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;
