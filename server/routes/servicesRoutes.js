const {
  getServices,
  updateService,
  addService,
  deleteService,
} = require("../controller/servicesController");

const router = require("express").Router();

router.route("/").get(getServices).post(addService);
router.route("/edit").put(updateService);
router.route("/delete/:id").delete(deleteService);

module.exports = router;
