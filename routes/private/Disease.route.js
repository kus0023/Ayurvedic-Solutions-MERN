const Disease = require("../../models/Disease");
const Product = require("../../models/Product");

const router = require("express").Router();

router.get("/get_detail", async (req, res) => {
  const { id } = req.query;

  const projection = {};
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
      collation: { locale: "en" },
      sort: { name: 1 },
    });
    return res.status(200).json({
      diseases: docs,
    });
  } catch (e) {
    return res.sendStatus(500);
  }
});

router.post("/add", async (req, res) => {
  const disease = req.body;
  if (!disease.name) {
    return res.status(400).json({
      message: "Name is required.",
    });
  }

  try {
    const doc = await Disease.findOne({ name: disease.name });
    if (doc) {
      return res.status(400).json({
        message:
          "Disease already exists with name: " +
          disease.name +
          " (id: " +
          doc._id +
          ").",
      });
    }

    const currentUser = req.session.user._id;

    const newDisease = {
      name: disease.name,
      commonNames: disease.commonNames || [],
      description: disease.description || "",
      causes: disease.causes || [],
      symptoms: disease.symptoms || [],
      createdBy: currentUser,
      modifyBy: currentUser,
    };

    const created = await Disease.create(newDisease);

    return res.status(200).json({ message: "Created", disease: created });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post("/update", async (req, res) => {
  const diseaseId = req.query.id;
  if (!diseaseId) {
    return res.status(400).json({
      message: "id is not provided in query.",
    });
  }

  try {
    const doc = await Disease.findById(diseaseId);
    if (!doc) {
      return res.status(404).json({
        message: "No disease is found. Id is not correct.",
      });
    }

    const { name, causes, description, symptoms, remedies } = req.body;

    name && doc.set({ name });
    commonNames && doc.set({ commonNames });
    causes && doc.set({ causes });
    description && doc.set({ description });
    symptoms && doc.set({ symptoms });
    remedies && doc.set({ remedies });

    const currentUser = req.session.user._id;
    doc.set({ modifyBy: currentUser });
    doc.set({ modifyAt: Date.now() });

    const updated = await doc.save({ isNew: false });

    return res.status(200).json({
      message: "Updated Successfully.",
      disease: updated,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.delete("/delete", async (req, res) => {
  const diseaseId = req.query.id;
  if (!diseaseId) {
    return res.status(400).json({
      message: "id is not provided in query.",
    });
  }

  try {
    const doc = await Disease.findById(diseaseId);
    if (!doc) {
      return res.status(404).json({
        message: "No disease is found. Id is not correct.",
      });
    }

    const remedies = doc.remedies;

    await doc.deleteOne();
    return res.status(200).json({
      message: "Deleted Successfully.",
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
