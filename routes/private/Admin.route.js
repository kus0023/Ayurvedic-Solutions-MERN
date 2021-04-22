const router = require("express").Router();
const { verifyAdminToken } = require("../../middleware/Admin.middleware");
const Pagination = require("../../middleware/Pagination");
const User = require("../../models/User");

router.post("/register", verifyAdminToken(), async (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body;
  const createdBy = req.admin.createdBy;

  if (!(firstName && lastName && email && password)) {
    return res.status(400).json({
      message:
        "Please provide all required fields [firstName, lastName, email, password, {isAdmin: Optional}] in body.",
    });
  }

  try {
    const isUnique = (await User.findOne({ email })) === null;
    if (!isUnique) {
      return res.status(406).json({
        message: "Email already exists",
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      isAdmin,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (e) {
    res.status(500).send();
  }
});

router.get(
  "/users",
  verifyAdminToken(),
  Pagination(User, {
    isAdmin: false,
  }),
  (req, res) => {
    res.json({
      pagination: req.pagination,
      results: req.results,
    });
  }
);

router.get(
  "/admins",
  verifyAdminToken(),
  Pagination(User, {
    isAdmin: true,
  }),
  (req, res) => {
    res.json({
      pagination: req.pagination,
      results: req.results,
    });
  }
);

module.exports = router;
