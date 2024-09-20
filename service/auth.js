const jwt = require("jsonwebtoken");

const setUser = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    "process.env.SECRET_KEY"
  );
};

const getUser = (token) => {
  if (!token) return null;
  jwt.verify(token, "process.env.SECRET_KEY");
};

module.exports = { setUser, getUser };
