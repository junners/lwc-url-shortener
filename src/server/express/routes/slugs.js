const { models } = require('../../sequelize');
const { nanoid } = require('nanoid');
const validUrl = require('valid-url');

async function getById(req, res) {
	const id = req.params.slug;
	const slugRecord = await models.slug.findByPk(id);
	if (slugRecord) {
		res.status(200).redirect(slugRecord.longUrl);
		return;
	}

	throw new Error('unable to find short url');
}

async function create(req, res) {
	let { slug, url } = req.body;

	if (!url) {
		throw new Error('Pass in a url to shorten');
	}

	if (!validUrl.isUri(url)) {
		throw new Error('URL is not valid');
	}

	// default a value if not specified;
	if (!slug) {
		slug = nanoid();
	}

	slug = slug.toLowerCase();

	await models.slug.create({ id: slug, longUrl: url });

	res.status(201).json({ message: `url shortened, use ${slug}` });
}

module.exports = {
	getById,
	create
};
