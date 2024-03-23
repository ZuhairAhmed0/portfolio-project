const About = require("../model/About");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await About.find({ email, password });

    if (!user) return res.status(401).json("Unauthorized");

    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    res.json(token);
  } catch (error) {
    res.status(401).json("Unauthorized");
  }
};

module.exports = login;
