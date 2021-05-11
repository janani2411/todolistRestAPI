const express = require("express");
const router = express.Router();
const controller = require("./controller");

const authVerify = require("../helpers/authVerfiy");
/* GET home page. */

router.post("/signup", controller.newUser );
router.post("/signin", controller.signinUser);
router.get("/protected" , authVerify , controller.protected);
router.get("/signout", controller.signoutUser);

module.exports = router;