const { body } = require("express-validator");

const validateName = () => [
  body("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
];

module.exports = {
  validateCreate: validateName,
  validateUpdate: validateName
};
