const express = require("express");
const taskController = require("../controllers/task");
const taskRouter = express.Router();
 
taskRouter.use("/tasks/post", taskController.postTask);
taskRouter.use("/tasks/create", taskController.addTask);
taskRouter.use("/tasks", taskController.getTasks);
taskRouter.use("/admin", taskController.getTasksAdmin);
taskRouter.use("/tasks/get", taskController.getTask);
taskRouter.use("/edit", taskController.getTask);


 
module.exports = taskRouter;