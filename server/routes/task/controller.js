const Task = require("../../models/taskSchema");

// GET ALL THE Task
const getAllTasks = async function (req, res, next) {
  var fromDate = new Date(req.body.from);
  console.log(fromDate);
  fromDate =
    fromDate.getDate() +
    " - " +
    fromDate.getMonth() +
    " - " +
    fromDate.getFullYear();
  const tasks = await Task.find({ email: req.params.userId }).sort({
    from: "desc",
  });
  if (tasks) {
    res.status(200).send(tasks);
  } else {
    res.status(500).send({ error: "Error" });
  }
};

// CREATE SPECIFIC Task
const createTask = async function (req, res, next) {
  const task = await new Task({
    email: req.body.email,
    taskName: req.body.taskName,
    from: req.body.from,
    to: req.body.to,
    type: req.body.type,
    description: req.body.description,
  });
  console.log(req.body);
  const savedTask = await task.save();
  if (savedTask) {
    res.status(200).send(savedTask);
  } else {
    res.status(500).send({ error: "Found error" });
  }
};

// // GET SPECIFIC Task
const getTask = async function (req, res, next) {
  const task = await Task.findOne({ _id: req.params.taskId });
  if (task) {
    res.status(200).send(task);
  } else {
    res.status(500).send({ error: "Error" });
  }
};

// UPDATE SPECIFIC Task
const updateTask = async function (req, res, next) {
  const updatedTask = await Task.findOneAndUpdate(
    { _id: req.params.taskId },
    {
      $set: {
        taskName: req.body.taskName,
        from: req.body.from,
        to: req.body.to,
        type: req.body.type,
        description: req.body.description,
      },
    }
  );
  if (updatedTask) {
    res.status(200).send(updatedTask);
  } else {
    res.status(500).send({ error: "Error found" });
  }
};

// const updateTask = async function (req, res, next) {
//   const updatedTask = await Tasks.findById(req.params.taskId);
//   updatedTask.taskName = req.body.taskName;
//   updatedTask.from = req.body.from;
//   updatedTask.to = req.body.to;
//   updatedTask.type = req.body.type;
//   updatedTask.description = req.body.description;
//   await updatedTask.save();
//   description;
//   if (updatedTask) {
//     res.status(200).send(updatedTask);
//   } else {
//     res.status(500).send({ error: "something Failed" });
//   }
// };

// DELETE SPECIFIC Task
const deleteTask = async function (req, res, next) {
  console.log(req.params.taskId);
  const deleteTask = await Task.findOneAndDelete({ _id: req.params.taskId });
  console.log(deleteTask);
  if (deleteTask) {
    res.status(200).send("Task Deleted successfully");
  } else {
    res.status(500).send({ error: "Error found" });
  }
};

module.exports = { getAllTasks, createTask, updateTask, getTask, deleteTask };
