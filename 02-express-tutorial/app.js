const express = require("express");
const { logger } = require("./logger");
const { authorize } = require("./authorize");
const app = express();

app.use([authorize, logger]);

app.get("/", (_, res) => {
	res.send("hi");
});

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

app.listen(3000, () => {
	console.log(`server is listening on port 3000...`);
});
