const express = require("express");
const Task = require("../models/taskModel");
const { GetAllTasks, CreateTask } = require("../controllers/taskController");
const router = express.Router();

// Create Task
router.post("/api/v1/task", CreateTask);
// Get All Tasks
router.get("/api/v1/task", GetAllTasks);

module.exports = router;
