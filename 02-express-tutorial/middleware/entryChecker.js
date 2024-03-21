const { people } = require("../data");

const checkId_DB = (req, res, next) => {
	const id = parseInt(req.params.id);
	const personFound = people.find((person) => person.id === id);
	if (!personFound) {
		return res.status(404).json({
			success: false,
			message: "Person not found [ID]",
		});
	}
	next();
};

const checkName_DB = (req, res, next) => {
	const personFound = people.find((person) => person.name === req.body.name);
	if (!personFound) {
		return res.status(404).json({
			success: false,
			message: "Person not found [NAME]",
		});
	}
	next();
};

const isNameInBody_Client = (req, res, next) => {
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

module.exports = { checkId_DB, checkName_DB, isNameInBody_Client };
