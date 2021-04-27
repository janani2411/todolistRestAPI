const express = require("express");
const IndexRouter = require("./users");
const authRouter = require("./user");
const TaskRouter = require("./task");

let routes = (app) => {
  app.use("/" , IndexRouter);
  app.use("/task" , TaskRouter);
  app.use("/userAuth" , authRouter);
};

module.exports = routes;
