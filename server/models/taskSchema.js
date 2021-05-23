const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  // userId: {
  //   type: Number,
  //   required: true,
  // },
  email: {
    type: String,
    required: true,
  },
  taskName: {
    type: String,
    required: true,
    min: 5,
    max: 150,
  },
  from: {
    type: Date,
    format: "%m-%d-%Y",
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 25,
    max: 250,
  },
});

module.exports = mongoose.model("Task", taskSchema);
