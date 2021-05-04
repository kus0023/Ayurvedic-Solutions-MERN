const Session = require("../models/Session");
const {
  extractTokenFromHeader,
  verifyToken,
} = require("../helpers/Token.helper");

const User = require("../models/User");

module.exports = {
  verifySession: () => {
    return async (req, res, next) => {
      const token = extractTokenFromHeader(req);
      if (!token) {
        return res.status(400).json({
          message: "Token is not present in header.",
        });
      }
      try {
        //verify the token
        const payload = await verifyToken(token);

        //verify session exist in database
        const session = await Session.findOne({ _id: payload.session });

        if (!session) {
          return res.status(403).json({
            message: "Session Expired. Please login to get new token",
          });
        }

        const user = await User.findById(payload.user);

        req.session = { user, sessionId: payload.session };
        next();
      } catch (e) {
        return res.status(500).json({
          messege: "Internal error",
          error: e.message,
        });
      }
    };
  },
};
