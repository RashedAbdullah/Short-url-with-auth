const express = require("express");
const urlModel = require("../models/url-model");
const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {
  const urls = await urlModel.find({});
  const headers = {
    title: "Short URL",
    description: "This is the Short url",
  };
  return res.render("home", {
    urls,
    headers,
  });
});

staticRouter.get("/signup", (req, res) => {
  return res.render("signup");
});

staticRouter.get("/signin", (req, res) => {
  return res.render("signin");
});
module.exports = staticRouter;
