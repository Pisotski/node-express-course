console.log("Express Tutorial");
const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
	const url = req.url;

	switch (url) {
		case "/":
			res.writeHead(200, {
				"content-type": "text/html",
			});
			res.write(homePage);
			res.end();
			break;
		case "/styles.css":
			res.writeHead(200, {
				"content-type": "text/css",
			});
			res.write(homeStyles);
			res.end();
			break;
		case "/logo.svg":
			res.writeHead(200, {
				"content-type": "image/svg+xml",
			});
			res.write(homeImage);
			res.end();
			break;
		case "/browser-app.js":
			res.writeHead(200, {
				"content-type": "text/javascript",
			});
			res.write(homeLogic);
			res.end();
			break;
		default:
			res.writeHead(400, {
				"content-type": "text/html",
			});
			res.write("<h1>page not found</h1>");
			res.end();
	}
});

const port = 5432;
server.listen(port);
