const { body } = require("express-validator");
const { db } = require("../../firebase");

const { hasUserDocWithVal } = require("../../utils/db");

const foodDoesNotExists = async (val, { req: { user } }) => {
  const exists = await hasUserDocWithVal("food", user.user_id, "name", val);
  if (exists) return Promise.reject("Food already exists");
};

const foodDoesNotExistsAndIsNotCurrent = async (
  val,
  { req: { user, params } }
) => {
  const res = await db
    .collection("food")
    .where("user", "==", user.user_id)
    .where("name", "==", val)
    .get();

  if (!res.empty && res.docs[0].id !== params.id) {
    return Promise.reject("Food already exists");
  }
};

const validateCreateName = body("name")
  .isLength({ min: 1 })
  .withMessage("Name is required")
  .custom(foodDoesNotExists);

const validateUpdateName = body("name")
  .isLength({ min: 1 })
  .withMessage("Name is required")
  .custom(foodDoesNotExistsAndIsNotCurrent);

const validateCalories = body("calories")
  .isLength({ min: 1 })
  .withMessage("Calories are required")
  .isNumeric()
  .withMessage("Calories must be a number")
  .custom(value => value >= 0)
  .withMessage("Calories can't be less than 0");

const validateProtein = body("protein")
  .isLength({ min: 1 })
  .withMessage("Protein is required")
  .isNumeric()
  .withMessage("Protein must be a number")
  .custom(value => value >= 0)
  .withMessage("Protein can't be less than 0");

const validateFat = body("fat")
  .isLength({ min: 1 })
  .withMessage("Fat is required")
  .isNumeric()
  .withMessage("Fat must be a number")
  .custom(value => value >= 0)
  .withMessage("Fat can't be less than 0");

const validateCarbs = body("carbohydrates")
  .isLength({ min: 1 })
  .withMessage("Carbohydrates are required")
  .isNumeric()
  .withMessage("Carbohydrates must be a number")
  .custom(value => value >= 0)
  .withMessage("Carbohydrates can't be less than 0");

module.exports = {
  validateCreate: () => [
    validateCreateName,
    validateCalories,
    validateProtein,
    validateFat,
    validateCarbs
  ],
  validateUpdate: () => [
    validateUpdateName,
    validateCalories,
    validateProtein,
    validateFat,
    validateCarbs
  ]
};
