const router = require("express").Router();

router.all("/api", (req, res) => {
  res.status(200).json({
    message: "API working fine.",
  });
});

router.use("/admin", require("./public/Admin.route"));
router.use("/products", require("./public/Product.route"));

module.exports = router;
