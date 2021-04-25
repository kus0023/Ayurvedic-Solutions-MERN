const router = require("express").Router();
const { verifyAdminToken } = require("../../middleware/Admin.middleware");
const Pagination = require("../../middleware/Pagination");
const User = require("../../models/User");
const { verifySession } = require("../../middleware/Session.middleware");

/**
 * @route api/admin/register
 *
 * @method POST
 *
 * @body
 * firstName, lastName, email, password, isAdmin
 *
 * @header
 * Autherization = Bearer <TOKEN>
 *
 *
 * @description
 * Only admin can add new users manually
 */
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
      createdBy,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (e) {
    res.status(500).send();
  }
});

/**
 * @route api/admin/users?page=page&limit=limit
 *
 * @param page and limit
 *
 * @method GET
 *
 * @description
 * Give list of users
 */
router.get(
  "/users",
  verifyAdminToken(),
  verifySession(),
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

/**
 * @route api/admin/admins?page=page&limit=limit
 *
 * @param page and limit
 *
 * @method GET
 *
 * @description
 * Give list of admins
 */
router.get(
  "/admins",
  verifyAdminToken(),
  verifySession(),
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
