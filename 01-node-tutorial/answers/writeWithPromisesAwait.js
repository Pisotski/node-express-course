const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
	try {
		await writeFile("./temp.txt", `Hello, I love you, `);
		await writeFile("./temp.txt", `won't you tell me your name\n`, {
			flag: "a",
		});
		await writeFile("./temp.txt", `Hello, I love you!`, {
			flag: "a",
		});
	} catch (err) {
		console.log(err);
	}
};

const reader = async () => {
	try {
		const result = await readFile("./temp.txt", "utf8");
		console.log(result);
	} catch (err) {
		console.log(err);
	}
};

const readWrite = async () => {
	try {
		await writer();
		await reader();
	} catch (err) {
		console.log(err);
	}
};

readWrite();
