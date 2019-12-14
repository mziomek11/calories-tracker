const { db } = require("../../firebase");
const { withTryCatch } = require("../../utils/errors");

const collection = "days";

const getOne = async (req, res) => {
  const { user, ...day } = req.doc.data();
  return res.status(200).json({ ...day });
};

const create = async ({ user: { user_id }, body: { date, meals } }, res) => {
  const day = { user: user_id, date };
  const createdDoc = await db.collection(collection).add(day);
  const responseData = { ...day, id: createdDoc.id };

  const mealPromises = meals.map(meal => {
    const newMeal = { user: user_id, day: createdDoc.id, ...meal };
    return db.collection("meals").add(newMeal);
  });

  await Promise.all(mealPromises);

  return res.status(201).json(responseData);
};

module.exports = {
  getOne: async (req, res) => await withTryCatch(req, res, getOne),
  create: async (req, res) => await withTryCatch(req, res, create)
};
