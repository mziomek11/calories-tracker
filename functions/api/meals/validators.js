const { body } = require("express-validator");

const { docExistsAndIsOwner } = require("../../utils/db");

const foodExists = async (val, { req: { user } }) => {
  const { user_id } = user;
  const path = `/food/${val}`;

  if (!val || !(await docExistsAndIsOwner(path, user_id))) {
    return Promise.reject("Food doesn't exists");
  }
};

const dayExists = async (val, { req: { user } }) => {
  const { user_id } = user;
  const path = `/days/${val}`;

  if (!val || !(await docExistsAndIsOwner(path, user_id))) {
    return Promise.reject("Day doesn't exists");
  }
};

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

const dayValidation = body("day")
  .isLength({ min: 1 })
  .withMessage("Day is required")
  .custom(dayExists);

const validateCreate = () => [foodValidation, weightValidation, dayValidation];
const validateUpdate = () => [foodValidation, weightValidation];

module.exports = {
  validateCreate,
  validateUpdate
};
