const Task = require("../../models/taskSchema");

// GET ALL THE Task
const getAllTasks = async function(req, res, next)  {
    try
    {
      const tasks = await Task.find().sort({from:"desc"});
      res.send(tasks);
    }
    catch(err)
    {
      res.send(err);
    }
};

// CREATE SPECIFIC Task
const createTask = async function(req, res, next) {

    try
    {
    const task = await new Task({
        taskId : req.body.taskId,
        taskName : req.body.taskName,
        to : req.body.to ,
        type : req.body.type,
        description : req.body.description
    });
    
        const savedTask = await task.save();
        res.send(savedTask);
    }
    
    catch(error)
    {
        res.send(error);
    }
};

  
// // GET SPECIFIC Task
const getTask  = async function (req, res, next){
    try
    {
      const task = await Task.findOne({taskId : req.params.taskId})
      res.send(task);
    }
    catch(err)
    {
      res.send(err);
    }
};
 
// UPDATE SPECIFIC Task
const updateTask  = async function(req, res, next) {
    try
    {
      const updateTask = await Task.findOneAndUpdate({taskId:req.params.taskId} , {$set : {taskName : req.body.taskName , type : req.body.type , description : req.body.description}});
      res.send(updateTask);
    }catch(err)
    {
      res.send(err);
    }
};

// DELETE SPECIFIC Task
const deleteTask = async function(req, res, next) {
    try
    {
        const deleteTask = await Task.findOneAndDelete({taskId : req.params.taskId});
        res.send("Task Deleted successfully");
    }
    catch(err)
    {
      res.send(err);
    }
};

    
  


  
module.exports = { getAllTasks , createTask , updateTask , getTask , deleteTask };