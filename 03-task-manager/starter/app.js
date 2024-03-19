const express = require("express");
const { connectDB } = require("./db/connect");
const tasks = require("./routes/tasks");
require("dotenv").config();

const app = express();
const port = 5432;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => console.log(`listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/tasks", tasks);

app.get("*", (_, res) => {
	res.status(404).send(`<h2>page not found</h2>`);
});

start();
