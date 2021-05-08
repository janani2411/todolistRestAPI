const Task = require("../../models/taskSchema");

// GET ALL THE Task
const getAllTasks = async function(req, res, next)  {
  var fromDate = new Date(req.body.from);
  console.log(fromDate);
  fromDate = fromDate.getDate() + " - " + fromDate.getMonth() + " - " + fromDate.getFullYear();
  const tasks = await Task.find().sort({from:"desc"});
  if(tasks)
  {
    res.status(200).send(tasks);
  }
  else
  {
    res.status(500).send({error:"Error"});
  } 
};

// CREATE SPECIFIC Task
const createTask = async function(req, res, next) {
  const task = await new Task({
      userId : req.body.userId,
      taskName : req.body.taskName,
      from : req.body.from,
      // (req.body.from.getFullYear()+'-' + (req.body.from..getMonth()+1) + '-'+req.body.from..getDate()),
      to : req.body.to ,
      type : req.body.type,
      description : req.body.description
  });
  console.log(req.body); 
  const savedTask = await task.save();
  if(savedTask)
  {
    res.status(200).send(savedTask);
  }
  else
  {
    res.status(500).send({error : "Found error"});
  }
  
};

  
// // GET SPECIFIC Task
const getTask  = async function (req, res, next){
    const task = await Task.findOne({taskName : req.params.taskName})
    if(task)
    {
      res.status(200).send(task);
    }  
    else
    {
      res.status(500).send({error : "Error"});
    }
};
 
// UPDATE SPECIFIC Task
const updateTask  = async function(req, res, next) {
  const updateTask = await Task.findOneAndUpdate({taskId: req.params._id} , {$set : {taskName : req.body.taskName , type : req.body.type , description : req.body.description}});
  if(updateTask)
  {
    res.status(200).send("Task update successfully");
  }
  else
  {
    res.status(500).send({error : "Error found"});
  }
};

// DELETE SPECIFIC Task
const deleteTask = async function(req, res, next) {
  console.log("hai");
  const deleteTask = await Task.findOneAndDelete({taskId: req.params._id});
  console.log(deleteTask);
  if(deleteTask) 
  {
    res.status(200).send("Task Deleted successfully");
  }   
  else
  {
    res.status(500).send({error : "Error found"});
  }
};

  
module.exports = { getAllTasks , createTask , updateTask , getTask , deleteTask };