const mongoose = require("mongoose");

const ProjectsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  liveDemo: {
    type: String,
    required: true,
  },
  sourceCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tools: {
    type: [String],
    required: true,
  }
});

const Projects = mongoose.model("projects", ProjectsSchema);

module.exports = Projects;
