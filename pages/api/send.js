module.exports = server => {
	server.post('/send', (req, res) => {
		console.log(req.body);
	});
};
