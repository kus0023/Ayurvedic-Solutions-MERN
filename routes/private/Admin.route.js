const router = require("express").Router();
const Pagination = require("../../middleware/Pagination");
const Session = require("../../models/Session");
const User = require("../../models/User");

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
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body;
  const createdBy = req.session.user._id;

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

router.get("/logout", (req, res) => {
  const sessionId = req.session.sessionId;
  Session.findByIdAndDelete(sessionId)
    .then(() => {
      return res.status(200).json({ message: "successfuly logout" });
    })
    .catch((e) => {
      console.log(e);
      return res.sendStatus(500);
    });
});

module.exports = router;
