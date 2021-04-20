const express = require("express");
const cors = require("cors");
const path = require("path");

//to use .env file
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    console.log("GET /");
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

  app.use(express.static("admin/build"));
  app.get("/admin/", (req, res) => {
    console.log("GET /admin/");
    res.sendFile(path.resolve(__dirname, "admin", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Server is working Fine");
});

//Database connection
const db = require("./database/db");
db.connnectToDb();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server started at: " + PORT);
});
