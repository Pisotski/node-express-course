const Task = require("../models/task");
const getAllTasks = (req, res) => {
	res.send(`<h2>get All Tasks</h2>`);
};

const createTask = async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
};

const getTask = (req, res) => {
	res.send({ id: req.params.id });
};

const updateTask = (req, res) => {
	res.send(`<h2>update Task</h2>`);
};

const deleteTask = (req, res) => {
	res.send(`<h2>delete Task</h2>`);
};

module.exports = {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
};
