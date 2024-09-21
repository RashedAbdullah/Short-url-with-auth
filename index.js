const express = require("express");
const path = require("path");
const urlRouter = require("./routes/url-router");
const connectWithMongoDB = require("./connect");
const staticRouter = require("./routes/static-router");
const userRouter = require("./routes/user-route");
const cookieParser = require("cookie-parser");
const {
  restrictToLogedinUserOnly,
  checkAuth,
} = require("./middlewares/auth-middleware");
const app = express();
const PORT = 3000;

// Database connection
connectWithMongoDB("mongodb://localhost:27017/short_url")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(`MongoDB Error: ${err}`));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/", staticRouter);
app.use("/user", checkAuth, userRouter);
app.use("/url", restrictToLogedinUserOnly, urlRouter);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
