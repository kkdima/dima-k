const express = require('express');
const next = require('next');
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const { mail } = require('./public/mail');
	const server = express();

	// body parser middleware
	server.use(bodyParser.urlencoded({ extended: true }));
	server.use(bodyParser.json());
	server.use(cookieParser());

	// static folder
	server.use('/public', express.static(path.join(__dirname, 'public')));

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});

	server.post('api/send', (req, res) => {
		console.log(req.body);

		send(name, email, message);
	});
});
