const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../models/User");

router.all("/", (req, res) => res.sendStatus(200));

/*
Takes email and password of admin
*/
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (email === undefined || password === undefined) {
    return res.sendStatus(400);
  }

  await passport.authenticate("local", async (err, user) => {
    if (err) {
      console.log(err);
      return res.json({ message: err.message });
    }

    await req.logIn(user, function (err) {
      if (err) {
        return res.json({ message: err.message });
      }

      return res.status(200).json({
        message: "Login Success",
      });
    });
  })(req, res);
});

// router.post("/reg", async (req, res) => {
//   const user = req.body;
//   const createdUser = await User.create(user);
//   res.status(200).json({
//     user: createdUser,
//   });
// });

module.exports = router;
