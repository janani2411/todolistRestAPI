const express = require("express");
let router = express.Router();
const controller = require("./controller");
const authVerify = require("../helpers/authVerfiy");

/* GET users listing. */
router.get('/', authVerify , controller.getAllTasks);

//Create new task
router.post('/', authVerify , controller.createTask);

//Get single user by id
router.get('/:taskId', authVerify ,controller.getTask);

//Update User details using PATCH method
router.patch('/:taskId', authVerify ,controller.updateTask);

//Delete user by using DELETE method
router.delete('/:taskId', authVerify ,controller.deleteTask);

module.exports = router;