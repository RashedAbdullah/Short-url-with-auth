const { getUser } = require("../service/auth");

const restrictToLogedinUserOnly = async (req, res, next) => {
  const userId = req.cookies.uid;

  if (!userId) {
    return res.redirect("/signin");
  }

  const user = getUser(userId);
  if (!user) {
    return res.redirect("/signin");
  }
  console.log(user);
  req.user = user;
  next();
};

const checkAuth = async (req, res, next) => {
  const userId = req.cookies.uid;
  const user = getUser(userId);
  req.user = user;
  next();
};

module.exports = { restrictToLogedinUserOnly, checkAuth };
