const { createReadStream } = require("fs");

//The program should initialize a counter to 0.???

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
	// 	highWaterMark: 2000, 85 chunks received
	// 	highWaterMark: 200000, 1 chunks received
	console.log(`${counter} chunks received`);
});
stream.on("error", (err) => {
	console.log(err);
});
