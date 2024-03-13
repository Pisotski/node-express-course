const { people } = require("../data");

const getPeople = (req, res) => {
	res.json(people);
};

const addPerson = (req, res) => {
	const { name } = req.body;

	if (!name) {
		res.status(400).json({
			success: false,
			message: "Please provide a name",
		});
		return;
	}

	people.push({ id: people[people.length - 1].id + 1, name: req.body.name });
	res.status(201).json({ success: true, name: req.body.name });
};

const getPerson = (req, res) => {
	const persona = people.filter(
		(person) => person.id === Number(req.params.id)
	);

	res.json(persona);
};

const updatePerson = (req, res) => {
	const id = parseInt(req.params.id);

	const { name } = req.body;

	const updatedPeople = people.map((person) => {
		if (person.id === id) {
			person.name = name;
		}
		return person;
	});

	res.json(updatedPeople);
};

const deletePerson = (req, res) => {
	const updatedPeople = people.filter(
		(person) => person.id !== parseInt(req.params.id)
	);
	res.json(updatedPeople);
};

module.exports = {
	getPeople,
	addPerson,
	getPerson,
	updatePerson,
	deletePerson,
};
