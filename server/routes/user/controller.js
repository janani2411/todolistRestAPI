// Route creation
const express = require("express");

//Getting route function from express module
const authRoutes = express.Router();

//Import models userSchema js file here
const User = require("../../models/userSchema");

// Import hashing js file
const { hashGenerate } = require("../helpers/hashing.js");
const { hashValidator } = require("../helpers/hashing.js");

//INport Tokenjs file
const { tokenGenerator } = require("../helpers/token.js");
const authVerify = require("../helpers/authVerfiy");

// function for signup or create new user
const newUser = async (req, res) => {
  const hashPassword = await hashGenerate(req.body.password);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });
  const savedUser = await user.save();
  if (savedUser) {
    res.status(200).send("user created successfully");
  } else {
    res.status(500).send({ error: "something Failed" });
  }
};

//signin
const signinUser = async function (req, res) {
  const existingUser = await User.findOne({ email: req.body.email });
  if (!existingUser) {
    res.send("Email is invalid");
  } else {
    const checkUser = await hashValidator(
      req.body.password,
      existingUser.password
    );
    console.log(req.body.password);
    console.log(existingUser.password);
    if (!checkUser) {
      res.send("Password is invalid");
      res.status(401).send({ error: "Unauthorized user" });
    } else {
      const jwtToken = await tokenGenerator(existingUser.email); // calling tokenGernerator to create token
      const userToken = { token: jwtToken, email: existingUser.email };
      res.cookie("jwt", jwtToken); //token stored in cookies as jwt
      res.status(200).send(userToken);
    }
  }
};

// only login user can have access to this path
// authVerfy is a middleware function = verfication process before callback function
const protected = (req, res) => {
  res.send("I am protected route");
};

const signoutUser = function (req, res) {
  res.clearCookie("jwt");
  res.send("cookie clear");
};
//export authRoutes
module.exports = { newUser, signinUser, protected, signoutUser };
