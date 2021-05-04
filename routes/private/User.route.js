const router = require("express").Router();

/**
 * @description
 * Cart routes specific to users
 */
router.use("/cart", require("./Cart.route"));

router.get("/logout", (req, res) => {
  const sessionId = req.session.sessionId;
  Session.findByIdAndDelete(sessionId)
    .then(() => {
      return res.status(200).json({ message: "successfuly logout" });
    })
    .catch((e) => {
      console.log(e);
      return res.sendStatus(500);
    });
});

module.exports = router;
