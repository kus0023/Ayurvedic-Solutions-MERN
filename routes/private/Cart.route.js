const Pagination = require("../../middleware/Pagination");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const router = require("express").Router();

router.get(
  "/get",
  Pagination(Cart, {}, {}, {}, "product"),
  async (req, res) => {
    try {
      //deleting non existing product's cart reference
      for (item in req.results) {
        if (item.product === null) {
          await Cart.deleteOne({ _id: item._id });
        }
      }

      //result cleanup
      const result = req.results.filter((item) => item.product !== null);

      res.status(200).json({
        pagination: req.pagination,
        cart: result,
      });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
);

router.post("/add", (req, res) => {
  const { productId } = req.body;
  const userId = req.session.user._id;

  if (!productId) {
    return res.status(400).json({
      message: "productId is missing.",
    });
  }

  Product.findById(productId)
    .then((doc) => {
      if (!doc) {
        return res.status(404).json({
          message: "invalid product id",
        });
      }

      Cart.create({
        product: productId,
        user: userId,
      })
        .then((value) => {
          return res.status(203).json({
            message: "Product Added successfully",
          });
        })
        .catch((err) => {
          console.log(err);
          return res.sendStatus(500);
        });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

router.delete("/delete", (req, res) => {
  const { cartId } = req.body;
  Cart.deleteOne({ _id: cartId })
    .then((value) => {
      return res.status(200).json({
        value,
        message: "Deleted Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(500);
    });
});

module.exports = router;
