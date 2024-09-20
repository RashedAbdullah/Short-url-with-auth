const shortId = require("shortid");
const urlModel = require("../models/url-model");

const handleGenerateNewURL = async (req, res) => {
  const body = req.body;
  const shortID = shortId();
  if (!body.url) return res.status(400).json({ err: "URL is required" });
  await urlModel.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", { id: shortID });
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;

  const result = await urlModel.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

const handleRedirectUrl = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await urlModel.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );

  res.redirect(entry.redirectUrl);
};

module.exports = {
  handleGenerateNewURL,
  handleGetAnalytics,
  handleRedirectUrl,
};
