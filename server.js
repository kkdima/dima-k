const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({ extended: true }));

	// GET
	server.get('*', (req, res) => {
		return handle(req, res);
	});

	// Listen
	server.listen(port, err => {
		if (err) throw err;
		console.log(`Server started on http://localhost:${port}`);
	});

	server.post('/api/sendMail', (req, res) => {
		const { email, name, message } = req.body;

		mailer({
			email,
			name,
			message
		})
			.then(() => {
				console.log('success');
				res.send('success');
			})
			.catch(error => {
				console.log('failed', error);
				res.send('badddd');
			});
	});
});
// .catch(ex => {
// 	console.error(ex.stack);
// 	process.exit(1);
// });
