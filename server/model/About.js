const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema({
  info: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
});

const About = mongoose.model("about", AboutSchema);

module.exports  = About;
