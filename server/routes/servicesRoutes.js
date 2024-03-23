const {
  getServices,
  updateService,
  addService,
  deleteService,
} = require("../controller/servicesController");
const isAuthenticated = require("../middleware/isAuthenticated");
const router = require("express").Router();

router.route("/").get(getServices).post(isAuthenticated, addService);
router.route("/edit").put(isAuthenticated, updateService);
router.route("/delete/:id").delete(isAuthenticated, deleteService);

module.exports = router;
