const express = require("express");
const {
  handleUserSignup,
  handleUserSignin,
} = require("../controllers/handle-user");
const userRouter = express.Router();

userRouter.post("/", handleUserSignup);
userRouter.post("/signin", handleUserSignin);

module.exports = userRouter;
