require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { getById, create } = require('./routes/slugs');
const path = require('path');

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./dist'));

// TODO: Make route dictionary

app.get('/:slug', (req, res) => {
	console.log('logged hello');
	console.log(JSON.stringify(req.params, null, 2));
	process(getById(req, res));
	//res.json({ message: 'Hello World!' });
});

app.post('/slugs/', (req, res) => {
	// respond with sucessful / unsuccessful slugs
	console.log('logged from slugs');
	console.log(JSON.stringify(req.body, null, 2));
	// proc(create(req, res));
	create(req, res).catch((error) => {
		res.status(500).json({ error: error.message }).send();
	});
	// process(create(req, res));
});

app.patch('/slugs/:slug', (req, res) => {
	// temporary disabled
	console.log('logged from patch', JSON.stringify(req.body, null, 2));
	res.status(500).send('not implemented');
});

app.use('/', (req, res) => {
	console.log('get something');
	res.sendFile(path.resolve('./dist', 'index.html'));
});

/** handle not supported routes */
// app.use(function (req, res, next) {
//   res.status(404).send("Sorry can't find that!");
// });

/*
 * wrap process to be asynchronus
 * @param {*} handler
 */
function process(handler) {
	return async (req, res, next) => {
		try {
			await handler(req, res);
		} catch (error) {
			res.status(500).json({ error: error.message }).send();
			next(error);
		}
	};
}

module.exports = app;
