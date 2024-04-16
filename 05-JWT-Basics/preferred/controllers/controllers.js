const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
	const { name, password } = req.body;
	if (!name || !password) {
		throw new BadRequestError(`please enter valid name or password`);
	}
	jwt.sign(
		{ name },
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.EXPIRATION,
		},
		(err, token) => {
			if (err) throw new BadRequestError(`can't generate token`);
			res.status(200).json({
				token,
			});
		}
	);
};

const hello = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);

	res.status(200).json({
		msg: `hello, ${req.user.name}`,
		secret: `here is your lucky number: ${luckyNumber}`,
	});
};

module.exports = { logon, hello };
