const Services = require("../model/Services");

async function getServices(req, res) {
  try {
    const services = await Services.find();

    if (!services) return res.status(404).json({ message: "services not found" });

    res.status(200).json(services);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function addService(req, res) {
  try {
    const { name, description, icon } = req.body;
    const service = await Services.create({ name, description, icon });
    if (!service) return res.status(404).json({ message: "data add falied" });

    res.status(200).json({ message: "data has been added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function updateService(req, res) {
  try {
    const { _id, name, description, icon } = req.body;
    const service = await Services.findByIdAndUpdate(
      { _id },
      { name, description, icon }
    );
    if (!service) return res.status(404).json({ message: "service not found" });

    res.status(200).json({ message: "service has  updated been successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteService(req, res) {
  try {
    const { id } = req.params;
    const service = await Services.findByIdAndDelete(id);
    if (!service) return res.status(404).json({ message: "service not found" });

    res.status(200).json({ message: "service has been  deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getServices, addService, updateService, deleteService };
