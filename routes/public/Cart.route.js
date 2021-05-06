const { verifySession } = require("../../middleware/Session.middleware");

const router = require("express").Router();

router.use("/", verifySession(), require("../private/Cart.route"));

module.exports = router;
