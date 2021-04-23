const router = require("express").Router();

const { createToken } = require("../../helpers/Token.helper");
const Session = require("../../models/Session");
const User = require("../../models/User");

router.all("/", (req, res) => res.sendStatus(200));

/*
Takes email and password of admin
*/
router.post("/login", (req, res, next) => {
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

    if (!user.isValidAdmin(password)) {
      return res.status(403).json({
        message: "Not valid user",
      });
    }

    const session = await Session.findOne({ userId: user._id });
    console.log(session);
    if (session) {
      return res.status(200).json({
        message: "Already logged in.",
        token: session.token,
        user,
      });
    }

    const token = createToken({ userId: user._id });

    await Session.create({
      userId: user._id,
      token,
    });

    res.status(202).json({
      token,
      user,
    });
  });
});

router.use("/", require("../private/Admin.route"));

module.exports = router;
