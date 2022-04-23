const router = require("express").Router();
const { getThoughts } = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getThoughts);

module.exports = router;
