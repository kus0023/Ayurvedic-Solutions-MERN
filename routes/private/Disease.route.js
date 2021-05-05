const Disease = require("../../models/Disease");

const router = require("express").Router();

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

    const newDisease = {
      name: disease.name,
      commonNames: [...disease.commonNames],
      description: disease.description,
      causes: [...disease.causes],
      symptoms: [...disease.symptoms],
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

    const updated = await doc
      .set({ name, causes, description, symptoms, remedies })
      .save({ isNew: false });

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
