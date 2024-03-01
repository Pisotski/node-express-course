const { createReadStream } = require("fs");

const stream = createReadStream("../content/big.txt", {
	highWaterMark: 2000,
	encoding: "utf8",
});

let counter = 0;
stream.on("data", (result) => {
	counter += 1;
	console.log(counter);
});
stream.on("end", () => {
	console.log(`${counter} chunks received`);
});
stream.on("error", (err) => {
	console.log(err);
});
