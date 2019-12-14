const { body } = require("express-validator");

const { hasUserDocWithVal } = require("../../utils/db");

const foodDoesNotExists = async (val, { req: { user } }) => {
  const exists = await hasUserDocWithVal("food", user.user_id, "name", val);
  if (exists) return Promise.reject("Food already exists");
};

const validateFood = () => [
  body("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .custom(foodDoesNotExists),
  body("calories")
    .isLength({ min: 1 })
    .withMessage("Calories are required")
    .isNumeric()
    .withMessage("Calories must be a number")
    .custom(value => value >= 0)
    .withMessage("Calories can't be less than 0"),
  body("protein")
    .isLength({ min: 1 })
    .withMessage("Protein is required")
    .isNumeric()
    .withMessage("Protein must be a number")
    .custom(value => value >= 0)
    .withMessage("Protein can't be less than 0"),
  body("carbohydrates")
    .isLength({ min: 1 })
    .withMessage("Carbohydrates are required")
    .isNumeric()
    .withMessage("Carbohydrates must be a number")
    .custom(value => value >= 0)
    .withMessage("Carbohydrates can't be less than 0"),
  body("fat")
    .isLength({ min: 1 })
    .withMessage("Fat is required")
    .isNumeric()
    .withMessage("Fat must be a number")
    .custom(value => value >= 0)
    .withMessage("Fat can't be less than 0")
];

module.exports = {
  validateFood
};
