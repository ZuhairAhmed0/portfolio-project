const { body } = require("express-validator");

function messageValidator() {
  return [
    body("name")
      .isString()
      .notEmpty()
      .withMessage("this field is required")
      .trim()
      .escape(),
    body("email")
      .isEmail()
      .withMessage("please enter valid email")
      .normalizeEmail()
      .notEmpty()
      .withMessage("this field is required")
      .trim()
      .escape(),
    body("message")
      .isString()
      .notEmpty()
      .withMessage("this field is required")
      .trim()
      .escape(),
  ];
}

module.exports = messageValidator;
