const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

app.use(cors());
app.use(express.json());

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

app.all("/api", (req, res) => {
  res.status(200).json({
    message: "API working fine.",
  });
});
app.use("/api/products", require("./routes/public/Product.route.js"));

//Database connection
const db = require("./database/db");
db.connnectToDb();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server started at: " + PORT);
});
