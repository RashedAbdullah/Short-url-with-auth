const { getUser } = require("../service/auth");

const restrictToLogedinUserOnly = async (req, res, next) => {
  console.log(req.cookies.uid);
  const userId = req.cookies.uid;

  if (!userId) {
    return res.redirect("/signin");
  }

  const user = getUser(userId);
  if (!user) {
    return res.redirect("/signin");
  }

  req.user = user;
  next();
};

module.exports = { restrictToLogedinUserOnly };
