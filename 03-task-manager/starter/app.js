const express = require("express");
const router = require("./routes/router");
const { test } = require("./controllers/taskControllers");

const app = express();
const port = 5432;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.use("/api/v1", router);

app.get("*", (_, res) => {
	res.status(404).send(`<h2>page not found</h2>`);
});

app.listen(port, () => console.log(`listening on port ${port}...`));
