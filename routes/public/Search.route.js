const router = require("express").Router();
const Fuse = require("fuse.js");
const Product = require("../../models/Product");
const Disease = require("../../models/Disease");

router.get("/product", async (req, res) => {
  const search = req.query.search || "";

  try {
    const list = await Product.find(
      {},
      { name: 1, description: 1, dose: 1, benefit: 1 }
    );

    const options = {
      keys: ["name", "description"],
    };

    const fuse = new Fuse(list, options);

    const result = fuse.search(search);

    res.status(200).json({
      result,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get("/disease", async (req, res) => {
  const search = req.query.search || "";

  try {
    const list = await Disease.find(
      {},
      { name: 1, commeonNames: 1, description: 1, symptoms: 1, causes: 1 }
    );

    const options = {
      keys: ["name", "commonNames", "description", "symptoms", "causes"],
    };

    const fuse = new Fuse(list, options);

    const result = fuse.search(search);

    res.status(200).json({
      result,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
