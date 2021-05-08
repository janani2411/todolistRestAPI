const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userId :
    {
        type : Number ,
        required : true 
    },
    // taskId :{
    //     type : Number ,
    //     required : true 
    // },
    taskName : {
        type : String , 
        required : true ,
        min : 5 , 
        max : 150 
    },
    from :
    {
        type: Date ,
        default : () => Date.now(),
        required : true 
    },
    to : 
    {
        type : Date , 
        required : true ,
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