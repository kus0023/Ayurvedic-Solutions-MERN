const Session = require("../models/Session");

module.exports = {
  verifySession: () => {
    return (req, res, next) => {
      const token = req.header("Authorization").split(" ")[1];
      Session.findOne({ token })
        .then((doc) => {
          if (!doc) {
            return res.status(403).json({
              message: "Session Expired. Please login to get new token",
            });
          }

          next();
        })
        .catch((e) => {
          console.log(e);
          next(e);
        });
    };
  },
};
