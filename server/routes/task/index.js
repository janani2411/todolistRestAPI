const express = require("express");
let router = express.Router();
const controller = require("./controller");
// const authVerify = require("../helpers/authVerfiy");

/* GET users listing. */
router.get("/:userId", controller.getAllTasks);

//Create new task
router.post("/", controller.createTask);

//Get single user by id
router.get("/:taskId", controller.getTask);

//Update User details using PATCH method
router.patch("/:taskId", controller.updateTask);

//Delete user by using DELETE method
router.delete("/:taskId", controller.deleteTask);

module.exports = router;
