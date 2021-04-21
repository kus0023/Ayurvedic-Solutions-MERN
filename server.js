const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

app.use(cors());
app.use(express.json());

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

//Database connection
const db = require("./database/db");
db.connnectToDb();

//listener for the app
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server started at: " + PORT);
});
