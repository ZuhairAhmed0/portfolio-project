const Projects = require("../model/Projects");
const fs = require("fs");
const path = require("path");

async function getProjects(req, res) {
  try {
    const projects = await Projects.find();

    if (!projects) return res.status(404).json({ message: "data not found" });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateProjects(req, res) {
  try {
    const { _id, name, description, tools, sourceCode, liveDemo, image } =
      req.body;

    const project = await Projects.findByIdAndUpdate(
      { _id },
      {
        name,
        description,
        tools: tools.split(","),
        sourceCode,
        liveDemo,
        image,
      }
    );
    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ message: "Project has been successfully updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function addProjects(req, res) {
  try {
    const { name, description, tools, sourceCode, liveDemo, image } = req.body;

    const project = await Projects.create({
      name,
      description,
      tools: tools.split(","),
      sourceCode,
      liveDemo,
      image,
    });
    if (!project)
      return res.status(404).json({ message: "Create project falid" });

    res.status(200).json({ message: "Project has been added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteProject(req, res) {
  try {
    const { id } = req.params;
    const project = await Projects.findByIdAndDelete(id);

    if (!project) return res.status(404).json({ message: "project not found" });

    fs.rm(path.join("public", "image", project.image), (err) => {
      if (err) console.log(err);

      res
        .status(200)
        .json({ message: "project has been  deleted successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getProjects, updateProjects, addProjects, deleteProject };
