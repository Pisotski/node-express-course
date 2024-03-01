// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// setInterval(() => {
// 	emitter.emit("timer", "hi there");
// }, 2000);
// emitter.on("timer", (msg) => console.log(msg));

const EventEmitter = require("events");
const emitter = new EventEmitter();
const waitForEvent = () => {
	return new Promise((resolve) => {
		emitter.on("happens", (msg) => resolve(msg));
	});
};
const waitForAnotherEvent = async (msg3) => {
	try {
		const result = await new Promise((resolve) => {
			emitter.on("happens", (msg) => resolve(`${msg} ${msg3}`));
		});
		return result;
	} catch (err) {
		console.log(err);
	}
};
const doWait = async () => {
	// const msg = await waitForEvent();
	const msg2 = await waitForAnotherEvent("Dance!");
	console.log("We got an event! Here it is: ", msg2);
};
doWait();
emitter.emit("happens", "Hello World!");
