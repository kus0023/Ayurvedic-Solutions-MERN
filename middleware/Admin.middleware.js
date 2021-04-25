const jwt = require("jsonwebtoken");
const Session = require("../models/Session");
const User = require("../models/User");

module.exports = {
  verifyAdminToken: () => {
    return (req, res, next) => {
      const bearer = req.header("Authorization");
      if (!bearer) {
        return res.status(400).json({
          message: "Token is not present in header.",
        });
      }
      const token = bearer.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRETE, async (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: "Token not valid" });
        }
        try {
          const user = await User.findById(decoded.userId);
          if (!user.isValidAdmin()) {
            return res.status(401).json({ message: "You are not admin." });
          }

          req.admin = { createdBy: decoded.userId };
          next();
        } catch (e) {
          console.log(e);
          return res.status(500).json({
            messege: "Internal error",
          });
        }
      });
    };
  },
};
