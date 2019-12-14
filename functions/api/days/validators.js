const { body } = require("express-validator");

const { hasUserDocWithVal, docExistsAndIsOwner } = require("../../utils/db");

const dayIsNotTaken = async (val, { req: { user } }) => {
  const isTaken = await hasUserDocWithVal("days", user.user_id, "date", val);
  if (isTaken) return Promise.reject("Day already exists");
};

const mealsAreValid = async (val, { req: { user } }) => {
  if (!Array.isArray(val)) return Promise.reject("Please send meal array");

  for (let i = 0; i < val.length; i++) {
    const { weight, food } = val[i];
    if (!weight || typeof weight !== "number" || weight <= 0) {
      return Promise.reject("Invalid weight");
    }

    if (!food) return Promise.reject("Food does not exists");
    const foodExists = await docExistsAndIsOwner(`/food/${food}`, user.user_id);

    if (!foodExists) return Promise.reject("Food does not exists");
  }
};

const validateCreate = () => [
  body("date")
    .isISO8601({ strict: true })
    .withMessage("Date is not valid")
    .custom(dayIsNotTaken),
  body("meals").custom(mealsAreValid)
];

const validateUpdate = () => [body("meals").custom(mealsAreValid)];

module.exports = {
  validateCreate,
  validateUpdate
};
