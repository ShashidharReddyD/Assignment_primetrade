const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const {

  createTask,
  getTasks,
  updateTask,
  deleteTask

} = require("../controllers/taskController");

const router = express.Router();


router.post("/", authMiddleware, createTask);

router.get("/", authMiddleware, getTasks);

router.put("/:id", authMiddleware, updateTask);

router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteTask);


module.exports = router;