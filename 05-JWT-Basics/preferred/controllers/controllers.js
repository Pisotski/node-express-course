const login = async (req, res) => {
	res.json(`Fake Login/Register/Signup Route`);
};

const dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `hello, John Wayne`,
		secret: `here is your lucky number: ${luckyNumber}`,
	});
};

module.exports = { login, dashboard };
