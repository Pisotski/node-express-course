const express = require("express");
const router = express.Router();
const { people } = require("../data");

router.get("/", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

router.post("/postman", (req, res) => {
	const { name } = req.body;

	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please provide the name value" });
	}
	res.status(201).json({ success: true, data: [...people, name] });
});

// figure out .send() vs .json() diff
router.post("/", (req, res) => {
	console.log("hi");
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please provide the name value" });
	}
	res.status(201).json({ success: true, person: name });
});

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	let personFound;

	const updatedPeople = people.map((person) => {
		if (person.id === Number(id)) {
			personFound = true;
			person.name = name;
		}
		return person;
	});

	if (!personFound) {
		return res
			.status(400)
			.json({ success: false, msg: `no person with id ${id}` });
	}

	res.status(201).json({ success: true, updatedPeople });
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;

	const personFound = people.find((person) => person.id === Number(id));
	if (!personFound) {
		return res
			.status(400)
			.json({ success: false, msg: `no person with id ${id}` });
	}

	const updatedPeople = people.filter((person) => person.id !== Number(id));
	res.status(201).json({ success: true, updatedPeople });
});

module.exports = router;
