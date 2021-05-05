const Session = require("../models/Session");
const User = require("../models/User");
const { createToken } = require("./Token.helper");

/**
 * @required
 * @param {boolean} forAdmin
 *
 * It create session and also geves user a token if credentials are correct
 */
const logInUser = (forAdmin) => {
  return (req, res) => {
    //validate the user
    const { email, password } = req.body;

    if (email === undefined || password === undefined) {
      return res.status(400).json({
        message: "Provide email and password",
      });
    }

    User.findOne({ email }).then(async (user) => {
      if (!user) {
        return res.status(404).json({
          message: "Email is not valid",
        });
      }

      if (!user.validPassword(password)) {
        return res.status(403).json({
          message: "Password is incorrect.",
        });
      }

      if (forAdmin && !user.isValidAdmin(password)) {
        return res.status(403).json({
          message: "Not valid user",
        });
      }

      const session = await Session.findOne({ user: user._id });

      if (session) {
        return res.status(202).json({
          message: "Already logged in.",
          token: session.token,
          user,
        });
      }

      //create new session

      const s = new Session();
      const token = createToken({ user: user._id, session: s._id });
      await s
        .set({
          user: user._id,
          token,
        })
        .save();

      res.status(202).json({
        token,
        user,
      });
    });
  };
};

module.exports = logInUser;
