const { body } = require("express-validator");

const validateCreate = () => [
  body("email")
    .isLength({ min: 1 })
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),
  body("password")
    .isLength({ min: 1 })
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password is too weak"),
  body("confirmPassword")
    .isLength({ min: 1 })
    .withMessage("Confirm password is required")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords must match")
];

const validateLogin = () => [
  body("email")
    .isLength({ min: 1 })
    .withMessage("Email is required"),
  body("password")
    .isLength({ min: 1 })
    .withMessage("Password is required")
];

module.exports = {
  validateCreate,
  validateLogin
};
