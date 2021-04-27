const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskId :{
        type : Number ,
        required : true 
    },
    taskName : {
        type : String , 
        required : true ,
        min : 5 , 
        max : 150 
    },
    from :
    {
        type: Date ,
        default : () => Date.now()
    },
    to : 
    {
        type : Date , 
        
    },
    type : 
    {
        type : String , 
        required : true , 
    },
    description : {
        type : String , 
        required : true ,
        min : 25 , 
        max : 250 
    },

});

module.exports = mongoose.model("Task" , taskSchema); 