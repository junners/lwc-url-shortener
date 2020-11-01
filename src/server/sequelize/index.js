require('dotenv').config();

const { Sequelize } = require('sequelize');

// let match = process.env.DATABASE_URL.match(
//   /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/
// );
// sequelize = new Sequelize(match[5], match[1], match[2], {
//     dialect:  'postgres',
//     protocol: 'postgres',
//     port:     match[4],
//     host:     match[3],
//     logging: false
// })

console.log(`database url ${process.env.DATABASE_URL}`);
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//     keepAlive: true,
//   },
// });
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
