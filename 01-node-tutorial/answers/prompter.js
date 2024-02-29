const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
	const decode = new StringDecoder("utf-8");
	let body = "";
	req.on("data", function (data) {
		body += decode.write(data);
	});
	req.on("end", function () {
		body += decode.end();
		const body1 = decodeURI(body);
		const bodyArray = body1.split("&");
		const resultHash = {};
		bodyArray.forEach((part) => {
			const partArray = part.split("=");
			resultHash[partArray[0]] = partArray[1];
		});
		callback(resultHash);
	});
};

// here, you could declare one or more variables to store what comes back from the form.
let number;
let item = "Enter something below.";
let h1Text = "Form";
let color = "coral";

// 5. edit prompter add a comment
// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
	return `
  <body style="background-color:${color};">
  <h1>${h1Text}</h1>
  <p>${item}</p>
  <form method="POST">
  <input name="item"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
	console.log("req.method is ", req.method);
	console.log("req.url is ", req.url);
	if (req.method === "POST") {
		getBody(req, (body) => {
			console.log("The body of the post is ", body);
			// here, you can add your own logic
			if (body["item"]) {
				const value = body["item"];
				if (isNaN(Number(value))) {
					item = `if it didn't work, html knows no color as ${value}`;
					color = value;
				} else {
					number = value;
					item = "must be a string";
					console.error(
						`alarm, a number ${number} was entered, Mayday, Mayday`
					);
				}
			} else {
				item = "Nothing was entered.";
			}
			// Your code changes would end here
			res.writeHead(303, {
				Location: "/",
			});
			res.end();
		});
	} else {
		res.end(form());
	}
});

const port = "3002";
server.listen(port);
console.log(`The server is listening on port ${port}.`);
