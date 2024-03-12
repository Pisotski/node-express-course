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

// figure out .send vs .json diff
app.post("/api/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please provide the name value" });
	}
	res.status(201).json({ success: true, person: name });
});

app.listen(3000, () => {
	console.log(`server is listening on port 3000...`);
});
