const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('slugAccess', {
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4
		},
		who: {
			allowNull: true,
			comment: 'the originating client',
			type: DataTypes.TEXT
		}
	});
};
