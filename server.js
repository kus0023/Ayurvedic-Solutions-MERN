const express = require("express");
const cors = require("cors");
//to use .env file
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is working Fine");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server started at: " + PORT);
});
