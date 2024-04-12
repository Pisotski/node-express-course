const Task = require("../models/task");
const { writeFile } = require("fs").promises;
const { asyncWrapper } = require("../middleware/async");
const { createCustomError } = require("../errors/error-handler");
const getAllTasks = asyncWrapper(async (_, res) => {
	const tasks = await Task.find({});

	// this is done for practicing previous material |async/await + fs system|
	// and for to have easy access to id's when using postman
	const idsAndNames = await tasks.map((task) => {
		const { id, name } = task;
		return JSON.stringify({ id, name }, null, " ");
	});
	writeFile("./tasksIds.txt", idsAndNames, (error) => {
		if (error) throw error;
		console.log("The file has been saved!");
	});
	// practice ends

	res.status(200).json({ tasks });
	// res.status(200).json({ tasks, amount: tasks.length });
	// res
	// 	.status(200)
	// 	.json({ success: true, data: { tasks }, amount: tasks.length });
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOne({ _id: taskID });
	if (!task) {
		return next(createCustomError(`wrong id ${taskID}`, 404));
	}
	res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;

	// ==================================================
	// this also works. tried myself before the instructor
	// the difference between findOneAndDelete and deleteOne is that
	// findOneAndDelete return the content of deleted item

	// const deleted = await Task.deleteOne({ _id: taskID });
	// if (!deleted.deletedCount)
	// 	return res.status(404).json({ msg: `No task with id : ${taskID} found` });
	// ===================================================
	const task = await Task.findOneAndDelete({ _id: taskID });
	if (!task) {
		return next(createCustomError(`wrong id ${taskID}`, 404));
	}
	res.status(200).json({ deleted: task });
});

const updateTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;
	const { body: taskBody } = req;
	console.log(req.body);
	const task = await Task.findOneAndUpdate({ _id: taskID }, taskBody, {
		new: true,
		runValidators: true,
	});
	if (!task) {
		return next(createCustomError(`wrong id ${taskID}`, 404));
	}
	res.status(200).json({ task });
});

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
};
