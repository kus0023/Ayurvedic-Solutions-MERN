const router = require("express").Router();
const { verifyAdminToken } = require("../../middleware/Admin.middleware");
const { verifySession } = require("../../middleware/Session.middleware");
const Disease = require("../../models/Disease");

router.get("/get", async (req, res) => {
  const { id } = req.query;

  const projection = { createdBy: 0, modifyBy: 0, modifyAt: 0 };
  try {
    if (id) {
      const doc = await Disease.findById(id, projection);
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
    return res.status(200).json({
      diseases: docs,
    });
  } catch (e) {
    return res.sendStatus(500);
  }
});

router.use(
  "/",
  verifySession(),
  verifyAdminToken(),
  require("../private/Disease.route")
);

module.exports = router;
