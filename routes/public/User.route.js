const logInUser = require("../../helpers/Login.helper");
const { verifySession } = require("../../middleware/Session.middleware");
const User = require("../../models/User");

const router = require("express").Router();

/**
 * @route GET api/user/login
 *
 * @description
 * Login the user and give the token and start the session
 */
router.post("/login", logInUser(false));

/**
 * @route POST api/user/register
 *
 * @description
 * Login the user and give the token and start the session
 */
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!(firstName && lastName && email && password)) {
    return res.status(400).json({
      message:
        "Please provide all required fields [firstName, lastName, email, password] in body.",
    });
  }

  try {
    const isUnique = (await User.findOne({ email })) === null;
    if (!isUnique) {
      return res.status(406).json({
        message: "Email already exists",
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (e) {
    res.status(500).send();
  }
});

/**
 * All private Routes
 */
router.use("/", verifySession(), require("../private/User.route"));

module.exports = router;
