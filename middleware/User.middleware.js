const {
  extractTokenFromHeader,
  verifyToken,
} = require("../helpers/Token.helper");
const User = require("../models/User");

module.exports = {
  /**
   *
   * @description
   * User's token is verified and if correct then
   * all the current user information is put into req.user
   *
   */
  verifyUserToken: () => {
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
            const user = await User.findById(payload.user);

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
