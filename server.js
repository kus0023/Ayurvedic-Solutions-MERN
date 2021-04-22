const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//=====================passport and session================
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const mongoOpt = {
  mongoUrl: process.env.DATABASE_MONGO_URL,
  ttl: 14 * 24 * 60 * 60, // = 14 days. Default
};
//middleware
app.use(
  session({
    secret: process.env.SESSION_SECRETE,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create(mongoOpt),
    cookie: { secure: true },
  })
);
require("./config/Passport.config");
app.use(passport.initialize());
app.use(passport.session());

//============================================================

//-----------------DATABASE-----------------------------
//Database connection
require("./database/db");

//Heroku environment settings
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

  app.use(express.static("admin/build"));
  app.get("/admin", (req, res) => {
    res.sendFile(path.resolve(__dirname, "admin", "build", "index.html"));
  });
}

//All route is in one folder related to api
app.use("/api", require("./routes"));

//listener for the app
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server started at: " + PORT);
});
