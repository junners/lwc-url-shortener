function applyExtraSetup(sequelize) {
	const { slug, slugAccess } = sequelize.models;

	slug.hasMany(slugAccess);
	slugAccess.belongsTo(slug);
}

module.exports = { applyExtraSetup };
