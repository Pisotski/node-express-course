const getHelloController = (req, res) => {
	console.log(`get request`);
	res.send("hello");
};

module.exports = getHelloController;
