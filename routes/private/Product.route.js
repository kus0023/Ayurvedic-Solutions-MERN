const router = require("express").Router();
const { verifyAdminToken } = require("../../middleware/Admin.middleware");

const Product = require("../../models/Product");
const Disease = require("../../models/Disease");

/**
 * @route POST /api/products/add
 *
 * @query disease
 *
 * @description
 * only admin can add product
 *
 * step 1: create product with data
 * step 2: upload image to cloud and get url
 * step 3: update product to add image url
 */
router.post("/add", verifyAdminToken(), async (req, res) => {
  const diseaseId = req.query.disease;

  if (!diseaseId) {
    return res.status(400).json({
      message: "disease is not specified in the query",
    });
  }

  try {
    const diseaseDoc = await Disease.findById(diseaseId);
    if (!diseaseDoc) {
      return res.status(400).json({
        message: "No disease is found of id: " + diseaseId,
      });
    }

    //validate request
    const { name, description, image, dose, benefits } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ message: "Name is required of the product" });
    }

    //check if product is already present
    let doc = await Product.findOne({ name });

    const alreadyPresent = doc;

    if (!doc) {
      //create if not present
      const newProduct = {
        name,
        description,
        image,
        dose,
        benefits,
        disease: diseaseId,
      };
      doc = await Product.create(newProduct);
    }

    //update the disease remedies section
    const d = await Disease.findOne({ _id: diseaseId });
    const remedies = d.remedies;
    remedies.push(doc._id);

    //add in disease model
    await Disease.findOneAndUpdate({ _id: diseaseId }, { remedies: remedies });

    if (alreadyPresent) {
      return res.status(200).json({
        message: "Product is already exists.",
        product: doc,
      });
    }

    return res.status(200).json({
      message: "New product created.",
      product: doc,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

/**
 * @route POST /api/products/update
 *
 * @description
 * Edit the product
 */
router.post("/update", verifyAdminToken(), async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({
      message: "id of product is not specified in the query",
    });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({
        message: "id is incorrect. no product found",
      });
    }

    //validate request
    const { description, image, dose, benefits } = req.body;

    description && product.set({ description });
    image && product.set({ image });
    dose && product.set({ dose });
    benefits && product.set({ benefits });

    const updated = await product.save({ isNew: false });

    return res.json({
      message: "updated successfully",
      product: updated,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

/**
 * @route DELETE /api/products/delete
 *
 * @description
 * Delete the product
 */
router.delete("/delete", verifyAdminToken(), async (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({
      message: "disease is not specified in the query",
    });
  }

  try {
    //getting the product document
    const doc = await Product.findById(id);

    if (!doc) {
      return res.status(400).json({
        message: "Id is incorrect of product",
      });
    }

    //get the disease doc
    const disease = await Disease.findById(doc.disease);
    //extract the currect product from disease
    const remeds = disease.remedies;
    const result = remeds.filter((e) => e != id);

    //update the disease
    await disease.set({ remedies: result }).save();

    //delete the product
    await Product.deleteOne({ _id: id });

    return res.status(200).json({
      message: "Deleted.",
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
