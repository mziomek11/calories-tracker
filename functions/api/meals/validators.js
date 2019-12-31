const { body, query } = require("express-validator");

const { docExistsAndIsOwner } = require("../../utils/db");

const foodExists = async (val, { req: { user } }) => {
  const { user_id } = user;
  const path = `/food/${val}`;

  if (!val || !(await docExistsAndIsOwner(path, user_id))) {
    return Promise.reject("Food doesn't exists");
  }
};

const queryDayValidation = query("day")
  .isLength({ min: 1 })
  .withMessage("Day is required")
  .isISO8601({ strict: true })
  .withMessage("Day is not valid");

const foodValidation = body("food")
  .isLength({ min: 1 })
  .withMessage("Food type is required")
  .custom(foodExists);

const weightValidation = body("weight")
  .isLength({ min: 1 })
  .withMessage("Weight is required")
  .isNumeric()
  .withMessage("Weight must be a number")
  .custom(value => value >= 0)
  .withMessage("Weight can't be less than 0");

const dayWalidation = body("day")
  .isLength({ min: 1 })
  .withMessage("Day is required")
  .isISO8601({ strict: true })
  .withMessage("Day is not valid");

const validateGet = () => [queryDayValidation];
const validateCreate = () => [foodValidation, weightValidation, dayWalidation];
const validateUpdate = () => [foodValidation, weightValidation];

module.exports = {
  validateGet,
  validateCreate,
  validateUpdate
};
