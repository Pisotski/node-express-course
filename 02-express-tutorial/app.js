const express = require("express");
const app = express();
const morgan = require("morgan");
const { logger } = require("./logger");
const { authorize } = require("./authorize");
const { people } = require("./data");

// app.use([authorize, logger]);
// app.use(express.static("./public"));
app.use(morgan("tiny"));
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (_, res) => {
	res.send("hi");
});

app.post("/login", (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(201).send(`Welcome ${name}`);
	}
	res.status(401).send(`please provide credentials`);
});

// ask mentor about passing data use cases with urls and with post method
app.get("/about", (_, res) => {
	res.send("About");
});

app.get("/api/products", (_, res) => {
	res.send("Products");
});

app.get("/api/items", (_, res) => {
	console.log(_.user);
	res.send("Items");
});

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post("/api/postman/people", (req, res) => {
	const { name } = req.body;

	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please provide the name value" });
	}
	res.status(201).json({ success: true, data: [...people, name] });
});

// figure out .send() vs .json() diff
app.post("/api/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please provide the name value" });
	}
	res.status(201).json({ success: true, person: name });
});

app.put("/api/people/:id", (req, res) => {
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

app.delete("/api/people/:id", (req, res) => {
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

app.listen(3000, () => {
	console.log(`server is listening on port 3000...`);
});
