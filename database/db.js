const mongoose = require("mongoose");

module.exports = {
  connnectToDb: () => {
    const uri = process.env.DATABASE_MONGO_URL;

    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    };
    mongoose.connect(uri, options, (err) => {
      if (err) {
        console.error("Database connection failed.");
        console.error(err);
      } else {
        console.log("Connected to database.");
        // console.log(conn);
      }
    });
  },
};
