const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('slug', {
        id: {
            allowNull: false,
            primaryKey: true,
            comment: 'represents a slug',
            type: DataTypes.STRING
        },
        longUrl: {
            allowNull: false,
            comment: 'this is the url to be redirected',
            type: DataTypes.STRING
        }
    });
};
