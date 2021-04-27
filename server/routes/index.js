const express = require("express");
const IndexRouter = require("./users");
const TaskRouter = require("./task");

let routes = (app) => {
  app.use("/", IndexRouter);
  app.use("/task", TaskRouter);
};

module.exports = routes;
