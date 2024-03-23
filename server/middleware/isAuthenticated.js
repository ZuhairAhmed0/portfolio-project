const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json("No access token provided");
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    next();
  } catch (error) {
    return res.status(401).json("you must log in again!");
  }
};

module.exports = isAuthenticated;
