const router = require("express").Router();
const Product = require("../../models/Product");
const Pagination = require("../../middleware/Pagination.js");
const { Storage } = require("@google-cloud/storage");
const path = require("path");
const { verifySession } = require("../../middleware/Session.middleware");

/**
 * @route /api/products?page=page&limit=limit
 * @query page @default 1 and limit @default 1
 *
 * Get All the products with pagination
 */
router.get("/", Pagination(Product), (req, res) => {
  // console.log(req.results);
  return res.status(200).json({
    pagination: req.pagination,
    products: req.results,
  });
});

/**
 * @route /api/products/productId/:id
 * Get only one product of matching productId = {id}
 */
router.get("/productId/:id", (req, res) => {
  const productId = req.params.id;
  Product.findById(productId, null, null, (err, doc) => {
    if (err) {
      console.log(err.message);
      return res.sendStatus(500);
    }

    if (!doc) {
      return res.status(204).json({
        message: "Product not found. Check Id of the product.",
      });
    }

    return res.status(200).json({
      product: doc,
    });
  });
});

//Only Admins can Add products hence moved to protected route
router.use("/", verifySession(), require("../private/Product.route"));

module.exports = router;
