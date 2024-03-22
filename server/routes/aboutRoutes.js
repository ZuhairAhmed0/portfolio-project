const { getAboutMe, updateAboutInfo } = require("../controller/aboutController");

const router = require("express").Router();

router.route("/").get(getAboutMe).post(updateAboutInfo);

module.exports = router;
