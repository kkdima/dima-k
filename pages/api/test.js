export default (req, res) => {
	console.log('api test', req.method);
	res.json('ok');
};
