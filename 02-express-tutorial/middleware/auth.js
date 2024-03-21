require("colors");

const authorize = (req, res, next) => {
	const { name } = req.cookies;
	if (!name) {
		return res.status(401).json("access denied");
	}
	req.user = name;
	next();
};

module.exports = { authorize };
