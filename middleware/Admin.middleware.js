const {
  extractTokenFromHeader,
  verifyToken,
} = require("../helpers/Token.helper");
const User = require("../models/User");

module.exports = {
  verifyAdminToken: () => {
    return (req, res, next) => {
      const token = extractTokenFromHeader(req);
      if (!token) {
        return res.status(400).json({
          message: "Token is not present in header.",
        });
      }

      verifyToken(token)
        .then(async (payload) => {
          try {
            console.log(payload);
            const user = await User.findById(payload.user);
            if (!user.isValidAdmin()) {
              return res.status(401).json({ message: "You are not admin." });
            }

            req.session = { user, sessionId: payload.session };
            next();
          } catch (e) {
            console.log(e);
            return res.status(500).json({
              messege: "Internal error",
            });
          }
        })
        .catch((e) => {
          console.log(e);
          return res.status(500).json({
            messege: "Internal error",
          });
        });
    };
  },
};