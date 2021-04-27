const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
let Routes = require("./routes");

var app = express();
dotenv.config();
mongoose.connect(process.env.DB_URL , { useNewUrlParser: true , useUnifiedTopology: true }, () => {
    console.log("Database Connected ...");
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
Routes(app);
module.exports = app;