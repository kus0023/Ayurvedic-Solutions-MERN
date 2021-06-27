const router = require("express").Router();
const { verifyAdminToken } = require("../../middleware/Admin.middleware");
const { verifySession } = require("../../middleware/Session.middleware");
const Pagination = require("../../middleware/Pagination.js");
const Disease = require("../../models/Disease");

/**
 * @route /api/products?page=page&limit=limit
 * @query page @default 1 and limit @default 1
 *
 * Get All the products with pagination
 */
router.get(
  "/",
  Pagination(Disease, null, null, null, "remedies"),
  (req, res) => {
    // console.log(req.results);
    return res.status(200).json({
      pagination: req.pagination,
      diseases: req.results,
    });
  }
);

router.get("/get", async (req, res) => {
  const { id } = req.query;

  const projection = { createdBy: 0, modifyBy: 0, modifyAt: 0 };
  try {
    if (id) {
      const doc = await Disease.findById(id, projection).populate("remedies");
      if (!doc) {
        return res.status(400).json({
          message: "Id is not correct.",
        });
      }

      return res.status(200).json({
        disease: doc,
      });
    }
    const docs = await Disease.find({}, projection, {
      sort: { createdAt: -1 },
    }).populate("remedies");
    console.log(docs);
    return res.status(200).json({
      diseases: docs,
    });
  } catch (e) {
    return res.sendStatus(500);
  }
});

router.get("/names", async (req, res) => {
  const doc = await Disease.find({}, { name: 1, _id: 0 });
  if (doc) {
    const data = [];
    doc.forEach((e) => data.push(e.name));
    return res.json(data);
  } else {
    return res.json([]);
  }
});

router.use(
  "/",
  verifySession(),
  verifyAdminToken(),
  require("../private/Disease.route")
);

module.exports = router;
