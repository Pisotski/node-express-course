const { CustomError } = require("../middleware/error-handler");
const JWT = require("jsonwebtoken");

const login = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		res.status(200).json({ msg: `please enter valid username or password` });
		return;
	}
	const id = new Date().getDate();

	const token = JWT.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});

	res.status(200).json({
		msg: `user created`,
		token,
	});
};

const dashboard = async (req, res) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		res.status(200).json({ msg: `No token provided`, status: 401 });
		return;
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = JWT.verify(token, process.env.JWT_SECRET);
		const luckyNumber = Math.floor(Math.random() * 100);

		res.status(200).json({
			msg: `hello, ${decoded.username}`,
			secret: `here is your lucky number: ${luckyNumber}`,
		});
	} catch (error) {
		res
			.status(200)
			.json({ msg: `Not authorized to access this route`, status: 401 });
		return;
	}
};

module.exports = { login, dashboard };
