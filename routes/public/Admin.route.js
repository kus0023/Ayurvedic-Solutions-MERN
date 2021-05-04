const router = require("express").Router();
const logInUser = require("../../helpers/Login.helper");
const { verifyAdminToken } = require("../../middleware/Admin.middleware");

router.all("/", (req, res) => res.sendStatus(200));

/**
 * @route api/admin/login
 *
 * @method POST
 *
 * @body
 * email, password
 *
 * @description
 * Login for the users
 * return a access token to be used for session
 * put the token in header
 *
 * Autherization=Bearer <TOKEN>
 */
router.post("/login", logInUser(true));

router.use("/", verifyAdminToken(), require("../private/Admin.route"));

module.exports = router;
