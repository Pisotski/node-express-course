const { writeFile } = require("fs");

console.log("fist");
const callback = (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("third");
	writeFile(
		"./temporary/fileB.txt",
		`won't you tell me your name?\n`,
		{ flag: "a" },
		(err) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log("fifth");
			writeFile(
				"./temporary/fileB.txt",
				`Hello, I love you!`,
				{ flag: "a" },
				(err) => {
					if (err) {
						console.log(err);
					}
				}
			);
		}
	);
	console.log("fourth");
};

writeFile("./temporary/fileB.txt", `Hello, I love you, `, callback);
console.log("second");
