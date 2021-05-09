const Session = require("../../models/Session");

const router = require("express").Router();

/**
 * @description
 * Cart routes specific to users
 */
router.use("/cart", require("./Cart.route"));

router.use("/getAuth", (req, res) => {
  const { user, token } = req.session;
  return res.status(200).json({
    message: "Verified",
    user,
    token,
  });
});

router.get("/logout", (req, res) => {
  const sessionId = req.session.sessionId;
  Session.findByIdAndDelete(sessionId)
    .then(() => {
      return res.status(200).json({ message: "successfuly logout" });
    })
    .catch((e) => {
      console.log(e);
      return res.status(500).json({ error: e });
    });
});

module.exports = router;
