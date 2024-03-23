const About = require("../model/About");

async function getAboutMe(req, res) {
  try {
    const about = await About.find();
    if (!about) return res.status(404).json({ message: "data not found" });

    res.status(200).json(about[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function updateAboutInfo(req, res) {
  try {
    const { _id, info, bio, skills, email, password } = req.body;
    const about = await About.findByIdAndUpdate(
      { _id },
      { info, bio, skills, email, password }
    );
    if (!about) return res.status(404).json({ message: "data not found" });

    res.status(200).json({ message: "data has been successfully updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAboutMe, updateAboutInfo };
