const router = require("express").Router();

/**
 * @route /api
 *
 * @description
 * It just says that API working fine.
 */
router.all("/", (req, res) => {
  res.status(200).json({
    message: "API working fine.",
  });
});

/**
 * @description
 * Admin routes which contains following
 * - Add New user and admins
 * - Add Product to database which are seen by users
 */
router.use("/admin", require("./public/Admin.route"));

/**
 * @description
 * All the users related authentication routes
 */
router.use("/user", require("./public/User.route"));

/**
 * @description
 * Product routes which does following
 * - @protected CRUD operation on product (Only for Admins)
 * - Get All Products (With pagination feature)
 */
router.use("/products", require("./public/Product.route"));

module.exports = router;
