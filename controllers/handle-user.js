const userModel = require("../models/user-mode");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

const handleUserSignup = async (req, res) => {
  const { name, email, password } = req.body;
  await userModel.create({
    name,
    email,
    password,
  });

  return res.render("/", { name, email });
};

const handleUserSignin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });

  if (!user) {
    return res.render("signin", {
      error: "Invalid user or password",
    });
  }

  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
};

module.exports = { handleUserSignup, handleUserSignin };
