const express = require("express");
const app = express();

app.get("/", (req, res) => {
	console.log("user hit the resource");
	res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
	res.status(200).send("About Page");
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>resource not found</h1>");
});

app.listen(5000, () => {
	console.log("server is listening on port 5000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// const express = require("express");
// require("colors");
// const app = express();
// const port = 5432;

// app.get("/", (req, res) => {
// 	console.log("home page hit".cyan);
// 	res.status(200).send("Home Page");
// });

// app.get("/about", (req, res) => {
// 	console.log("about page hit".cyan);
// 	res.status(200).send("About Page");
// });

// app.all("*", (req, res) => {
// 	res.status(400).send("<h1>page not found</h1>");
// });

// app.listen(port, () => {
// 	console.log(`server is listening on port ${port}`.magenta);
// });

// // app.get
// // app.post
// // app.put
// // app.delete

// // app.all
// // app.use
