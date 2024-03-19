const Task = require("../models/task");
const { writeFile } = require("fs").promises;
const getAllTasks = async (_, res) => {
	try {
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
	} catch (error) {
		res.status(500).json({ Error: error.message });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ Error: error.message });
	}
};

const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findOne({ _id: taskID });
		if (!task) {
			return res.status(404).json({ msg: `No task with id : ${taskID}` });
		}
		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ Error: error.message });
	}
};

const deleteTask = async (req, res) => {
	try {
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
			return res.status(404).json({ msg: `No task with id : ${taskID}` });
		}
		res.status(200).json({ deleted: task });
	} catch (error) {
		res.status(500).json({ Error: error.message });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const { body: taskBody } = req;
		console.log(req.body);
		const task = await Task.findOneAndUpdate({ _id: taskID }, taskBody, {
			new: true,
			runValidators: true,
		});
		if (!task) {
			return res.status(404).json({ msg: `No task with id : ${taskID}` });
		}
		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
};
