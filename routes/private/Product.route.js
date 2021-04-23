const router = require("express").Router();
const { verifyAdminToken } = require("../../middleware/Admin.middleware");
const multer = require("multer");

/**
 * @route /api/products/add
 *
 * @description only admin can add product
 * @todo validate the product information before adding to the database
 *
 */
router.post(
  "/add",
  verifyAdminToken(),
  multer().single("image-cover"),
  (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.status(200).json({
      message: "Under construction.",
    });
  }
);

module.exports = router;
