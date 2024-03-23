const {
  getProjects,
  updateProjects,
  addProjects,
  deleteProject,
} = require("../controller/projectsControllor");
const isAuthenticated = require("../middleware/isAuthenticated");
const upload = require("../middleware/uploadFile");

const router = require("express").Router();

router.route("/").get(getProjects).post(isAuthenticated, upload.single("image"), addProjects);
router.route("/edit").put(isAuthenticated, upload.single("image"), updateProjects);
router.route("/delete/:id").delete(isAuthenticated, deleteProject);

module.exports = router;
