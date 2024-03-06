const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
	res.status(404).send("resource not found");
});

app.listen(5000, () => {
	console.log("server is listening on port 5000....");
});

// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 5432;

// // app.use for setting middleware
// app.use(express.static("./public"));

// // app.get("/", (req, res) => {
// // 	console.log(`homepage hit`);
// // 	res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// //     adding static asset
// // });

// app.all("*", (req, res) => {
// 	res.status(400).send("<h1>Page not found</h1>");
// });

// app.listen(port, () => {
// 	console.log(`listening to port ${port}...`);
// });
