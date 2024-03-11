const express = require("express");
const { logger } = require("./logger");
const app = express();

app.use(logger);

app.get("/", (req, res) => {
	res.send("hi");
});

app.get("/about", (_, res) => {
	res.send("About");
});

app.get("/api/products", (_, res) => {
	res.send("Products");
});

app.get("/api/items", (_, res) => {
	res.send("Items");
});

app.listen(3000, () => {
	console.log(`server is listening on port 3000...`);
});
