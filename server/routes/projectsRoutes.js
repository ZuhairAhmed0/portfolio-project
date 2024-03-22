const {
  getProjects,
  updateProjects,
  addProjects,
  deleteProject,
} = require("../controller/projectsControllor");
const upload = require("../middleware/uploadFile");

const router = require("express").Router();

router.route("/").get(getProjects).post(upload.single("image"), addProjects);
router.route("/edit").put(upload.single("image"), updateProjects);
router.route("/delete/:id").delete(deleteProject);

module.exports = router;
