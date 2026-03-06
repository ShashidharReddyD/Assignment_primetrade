const Task = require("../models/Task");


/* CREATE TASK */

exports.createTask = async (req, res) => {

  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
    createdBy: req.user.id
  });

  res.status(201).json(task);

};


/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: List of tasks
 */

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 */


/* GET ALL TASKS */

exports.getTasks = async (req, res) => {

  const tasks = await Task.find();

  res.json(tasks);

};


/* UPDATE TASK */

exports.updateTask = async (req, res) => {

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);

};


/* DELETE TASK */

exports.deleteTask = async (req, res) => {

  await Task.findByIdAndDelete(req.params.id);

  res.json({ message: "Task deleted" });

};