const express = require("express");
const { connectDB } = require("./db/connect");
require("dotenv").config();
const tasks = require("./routes/tasks");
const { notFound } = require("./middleware/not-found");
const { errorHandlerMiddleware } = require("./middleware/errorHandler");
const app = express();
const port = process.env.PORT || 5432;

const start = async () => {
	try {
		connectDB(process.env.MONGO_URI);
		app.listen(port, () => console.log(`listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

start();
