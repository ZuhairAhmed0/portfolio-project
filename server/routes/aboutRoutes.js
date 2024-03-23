const { getAboutMe, updateAboutInfo } = require("../controller/aboutController");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = require("express").Router();

router.route("/").get(getAboutMe).post(isAuthenticated, updateAboutInfo);

module.exports = router;
