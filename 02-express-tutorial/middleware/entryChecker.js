const { people } = require("../data");

const idChecker = (req, res, next) => {
	const id = Number(req.params.id);
	const personFound = people.find((person) => person.id === id);
	if (!personFound) {
		res.status(404).json({
			success: false,
			message: "Person not found",
		});
	}
	next();
};

module.exports = { idChecker };
