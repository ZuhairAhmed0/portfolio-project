const mongoose = require("mongoose");

const ServicesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const Services = mongoose.model("service", ServicesSchema);

module.exports = Services;
