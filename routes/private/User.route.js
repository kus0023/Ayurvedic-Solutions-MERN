const router = require("express").Router();

/**
 * @description
 * Cart routes specific to users
 */
router.use("/cart", require("./Cart.route"));

module.exports = router;
