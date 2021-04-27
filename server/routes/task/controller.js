const Task = require("../../models/taskSchema");

// GET ALL THE Task
const getAllTasks = async function(req, res, next)  {
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
      taskId : req.body.taskId,
      taskName : req.body.taskName,
      to : req.body.to ,
      type : req.body.type,
      description : req.body.description
  });
    
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
    const task = await Task.findOne({taskId : req.params.taskId})
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
  const updateTask = await Task.findOneAndUpdate({taskId:req.params.taskId} , {$set : {taskName : req.body.taskName , type : req.body.type , description : req.body.description}});
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
  const deleteTask = await Task.findOneAndDelete({taskId : req.params.taskId});
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