const express = require("express");
const app = express();
const { products, people } = require("./data");

// TODO: ask about middleware
// definition from express documentation
// Middleware functions are functions that have access
// to the request object (req), the response object (res),
// and the next middleware function in the application’s
// request-response cycle.

// what is "mount" in express

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
	res.status(200).json({ message: `it worked!` });
});

app.get("/api/v1/products", (req, res) => {
	res.status(200).json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
	console.log(req.params);
	const { productID } = req.params;
	// FIXME: [DATA TRANSFORMATION]i want data object to be transformed into a nested object with only necessary data, as such id:{name, image}
	const product = products.find((p) => p.id === Number(productID));

	if (product) res.status(200).json(product);

	res.status(404).json({ message: "That product was not found." });
});

app.get("/api/v1/query", (req, res) => {
	const { search, limit } = req.query;

	// TODO: this part is ultra buggy but it works and it's short
	// i did it this way for a sake of practice of ternary operators
	// i'm glad nobody writes code like this

	// Array.filter() and Array.slice() is suggested to use in the assignment
	// Array.filter() returns an array, i'd rather use find
	const findUser = (name) => people.filter((person) => person.name === name);
	const findLimit = (limit) => products.slice(0, parseInt(limit));

	// may contain search or limit or both or none
	// cover 4 scenarios
	const answer = search
		? limit
			? { user: findUser(search), limit: findLimit(limit) }
			: { user: findUser(search) }
		: limit
		? { limit: findLimit(limit) }
		: `incorrect query, no user, no limit`;

	res.status(200).json(answer);
});

app.get("/api/v2/query", (req, res) => {
	const { search, limit, price } = req.query;

	const json = {};

	if (search) {
		const userInfo = people.filter((person) => person.name.includes(search));
		if (userInfo) json.userInfo = userInfo;
	}

	if (limit) {
		// technically this is bad, cause Array.slice() is only making a shallow copy, yet assignment calls for it
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

	res.status(200).json(json);
});

// TODO: res.end() res.send() res.json
// the instructor on the video is calling for res.send() for errors

app.all("*", (req, res) => {
	res.status(404).end("not found");
});

// TODO: https://youtu.be/ai1zmNO5Z3E?t=1517
// Promise.all() use case
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// check the very end. error handling

app.listen(3000, () => {
	console.log(`listening on port 3000...`);
});
