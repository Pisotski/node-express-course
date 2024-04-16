const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		throw new UnauthenticatedError(`unauthorized`);
	}

	const token = authHeader.split(" ")[1];

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err)
			throw new UnauthenticatedError("Not authorized to access this route");
		const { name } = decoded;
		req.user = { name };
		next();
	});
};

module.exports = {
	authenticationMiddleware,
};
