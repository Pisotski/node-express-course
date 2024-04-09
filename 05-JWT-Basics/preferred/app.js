const express = require("express");
const authorize = require("./routes/main");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { notFoundMiddleware } = require("./middleware/not-found");
const { errorHandlerMiddleware } = require("./middleware/error-handler");

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use("/api/v1", authorize);

const start = async () => {
	try {
		app.listen(port, () => {
			console.log(`app is listening on port ${port}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
