const { db } = require("../../firebase");
const { withTryCatch } = require("../../utils/errors");
const { prepareNumberToDBsave } = require("../../utils");

const collection = "meals";

const getDayMeals = async ({ user: { user_id }, query: { day } }, res) => {
  const query = db
    .collection(collection)
    .where("user", "==", user_id)
    .where("day", "==", day)
    .orderBy("createdAt");
  const userDayMeals = await query.get();

  const meals = userDayMeals.docs.map(doc => {
    const { food, weight } = doc.data();

    return { food, weight, id: doc.id };
  });
  return res.status(200).json({ meals });
};

const create = async (
  { user: { user_id }, body: { food, weight, day } },
  res
) => {
  const meal = {
    user: user_id,
    food,
    weight: prepareNumberToDBsave(weight),
    day,
    createdAt: new Date()
  };
  const createdDoc = await db.collection(collection).add(meal);
  const responseData = { ...meal, id: createdDoc.id };

  return res.status(201).json(responseData);
};

const update = async ({ body: { food, weight }, doc }, res) => {
  const updateData = { food, weight: prepareNumberToDBsave(weight) };
  await doc.ref.update(updateData);

  return res.status(200).json({ msg: "Success" });
};

module.exports = {
  getDayMeals: async (req, res) => await withTryCatch(req, res, getDayMeals),
  create: async (req, res) => await withTryCatch(req, res, create),
  update: async (req, res) => await withTryCatch(req, res, update)
};
