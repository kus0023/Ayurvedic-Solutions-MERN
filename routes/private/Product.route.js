const router = require("express").Router();
const { verifyAdminToken } = require("../../middleware/Admin.middleware");

const Product = require("../../models/Product");

/**
 * @route POST /api/products/add
 *
 * @description
 * only admin can add product
 *
 * step 1: create product with data
 * step 2: upload image to cloud and get url
 * step 3: update product to add image url
 */
router.post("/add", verifyAdminToken(), (req, res) => {
  const { file } = req;
  if (file) console.log(file);

  Product.create({ ...req.body })
    .then((v) => res.send(v))
    .catch((e) => res.send(e));
});

/**
 * @route POST /api/products/edit
 *
 * @description
 * Edit the product
 */
router.post("/edit", verifyAdminToken(), (req, res) => {});

/**
 * @route DELETE /api/products/delete
 *
 * @description
 * Delete the product
 */
router.delete("/delete", verifyAdminToken(), (req, res) => {});

module.exports = router;
