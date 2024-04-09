const express = require("express");
const authorize = require("./routes/main");
require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", authorize);
app.listen(port, () => {
	console.log(`app is listening on port ${port}...`);
});
