const router = require("express").Router();

router.all("/", (req, res) => {
  res.status(404).json({
    status: res.statusCode,
    message: "Wrong route",
  });
});

/*
 * Get All the products
 */
router.get("/all", (req, res) => {
  res.json("All products");
});

/*
 * Get only one product of matching productId
 */
router.get("/:id", (req, res) => {
  const productId = req.params.id;

  res.json({
    productId,
  });
});

//Only Admins can Add products hence moved to protected route
router.use("/add", require("../private/Product.route"));

module.exports = router;
