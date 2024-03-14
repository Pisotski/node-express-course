const { people } = require("../data");

const idChecker = (req, res, next) => {
	const id = Number(req.params.id);
	const personFound = people.find((person) => person.id === id);
	if (!personFound) {
		return res.status(404).json({
			success: false,
			message: "Person not found",
		});
	}
	next();
};

const nameChecker = (req, res, next) => {
	const personFound = people.find((person) => person.name === req.body.name);
	if (!personFound) {
		return res.status(404).json({
			success: false,
			message: "Person not found",
		});
	}
	next();
};

const isNameInBody = (req, res, next) => {
	const { name } = req.body;
	if (!name) {
		res.status(400).json({
			success: false,
			message: "Please provide a name",
		});
		return;
	}
	next();
};
module.exports = { idChecker, nameChecker, isNameInBody };
