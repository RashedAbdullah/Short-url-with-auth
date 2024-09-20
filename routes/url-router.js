const express = require("express");
const {
  handleGenerateNewURL,
  handleGetAnalytics,
  handleRedirectUrl,
} = require("../controllers/url");
const urlRouter = express.Router();

// url/
urlRouter.post("/", handleGenerateNewURL);
urlRouter.get("/analytics/:shortId", handleGetAnalytics);
urlRouter.get("/redirect/:shortId", handleRedirectUrl);

module.exports = urlRouter;
