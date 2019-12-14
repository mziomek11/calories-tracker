const { db } = require("../../firebase");
const { withTryCatch } = require("../../utils/errors");

const collection = "meals";

const create = async (
  { user: { user_id }, body: { food, weight, day } },
  res
) => {
  const meal = { user: user_id, food, weight, day };
  const createdDoc = await db.collection(collection).add(meal);
  const responseData = { ...meal, id: createdDoc.id };

  return res.status(201).json(responseData);
};

const update = async ({ body: { food, weight }, doc }, res) => {
  const updateData = { food, weight };
  await doc.ref.update(updateData);

  return res.status(200).json({ msg: "Success" });
};

module.exports = {
  create: async (req, res) => await withTryCatch(req, res, create),
  update: async (req, res) => await withTryCatch(req, res, update)
};
