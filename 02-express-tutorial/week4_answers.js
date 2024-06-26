const express = require("express");
const cookieParser = require("cookie-parser");
const { products, people } = require("./data");
const { logger } = require("./middleware/logger");
const { authorize } = require("./middleware/auth");
const {
	isNameInBody_Client,
	checkName_DB,
} = require("./middleware/entryChecker");
const peopleRouter = require("./routes/people");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./public"), logger);
app.use(express.json());
app.use("/api/v1/people", peopleRouter);

app.post("/logon", [isNameInBody_Client, checkName_DB], (req, res) => {
	const { name } = req.body;
	res.cookie("name", name).status(201).json(`hello, ${name}`);
});

app.delete("/logoff", authorize, (req, res) => {
	const { user } = req;
	res.clearCookie("name").status(200).json(`${user} logged off`);
});

app.get("/test", authorize, (req, res) => {
	res.json(`${req.user} authorized`);
});

// =================================
// WEEK 3
app.get("/api/v1/test", (req, res) => {
	res.json({ message: `it worked!` });
});

app.get("/api/v1/products", (req, res) => {
	res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
	const { productID } = req.params;

	const product = products.find((p) => p.id === Number(productID));

	if (product?.id) {
		res.json(product);
	} else {
		res.json({ message: "That product was not found." });
	}
});

app.get("/api/v1/query", (req, res) => {
	const { search, limit } = req.query;

	const findUser = (name) => people.filter((person) => person.name === name);
	const findLimit = (limit) => products.slice(0, parseInt(limit));

	const answer = search
		? limit
			? { user: findUser(search), limit: findLimit(limit) }
			: { user: findUser(search) }
		: limit
		? { limit: findLimit(limit) }
		: `incorrect query, no user, no limit`;

	res.json(answer);
});

app.get("/api/v2/query", (req, res) => {
	const { search, limit, price } = req.query;

	const json = {};

	if (search) {
		const userInfo = people.filter((person) => person.name.includes(search));
		if (userInfo.length) json.userInfo = userInfo;
	}

	if (limit) {
		if (price) {
			json.products = products
				.filter((product) => product.price < parseInt(price))
				.slice(0, parseInt(limit));
		} else {
			json.products = products.slice(0, parseInt(limit));
		}
	}

	if (price && !limit) {
		json.products = products.filter(
			(product) => product.price < parseInt(price)
		);
	}

	res.json(json);
});

app.all("*", (req, res) => {
	res.status(404).end("not found");
});

app.listen(3000, () => {
	console.log(`listening on port 3000...`);
});
