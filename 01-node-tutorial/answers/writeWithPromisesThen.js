const { writeFile, readFile } = require("fs").promises;

writeFile("./temp.txt", `Hello, I love you, `)
	.then(() =>
		writeFile("./temp.txt", `won't you tell me your name\n`, { flag: "a" })
	)
	.then(() => writeFile("./temp.txt", `Hello, I love you`, { flag: "a" }))
	.then(() => readFile("./temp.txt", "utf8"))
	.then((result) => console.log(result))
	.catch((err) => console.log(err));
