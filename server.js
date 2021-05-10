const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//-----------------DATABASE-----------------------------
// Database connection
require("./database/db");

//All route is in one folder related to api
app.use("/api", require("./routes"));

//Heroku environment settings
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static("admin/build"));
  app.get("/admin*", (req, res) => {
    return res.sendFile(
      path.resolve(__dirname, "admin", "build", "index.html")
    );
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
