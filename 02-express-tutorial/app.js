const express = require("express");
const app = express();
const morgan = require("morgan");
const people = require("./routes/people");
const auth = require("./routes/auth");

app.use(morgan("tiny"));
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);

app.get("/", (_, res) => {
	res.send("hi");
});

app.listen(3000, () => {
	console.log(`server is listening on port 3000...`);
});
