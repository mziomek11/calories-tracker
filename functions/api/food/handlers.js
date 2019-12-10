const { db } = require("../../firebase");
const { foodExistsError } = require("../../errors");
const { handleServerError } = require("../../utils");

const collection = "food";

const getAllOwn = async (req, res) => {
  try {
    const userFood = await db
      .collection(collection)
      .where("user", "==", req.user.user_id)
      .get();

    const food = [];

    for (let i = 0; i < userFood.docs.length; i++) {
      const actualFood = userFood.docs[i];
      const { user, ...foodData } = actualFood.data();
      const foodId = actualFood.id;
      const categoryDoc = await db
        .doc(`/categories/${foodData.category}`)
        .get();

      const category = categoryDoc.exists
        ? categoryDoc.data().name
        : "No category";

      food.push({ ...foodData, category: category, id: foodId });
    }

    return res.status(200).json({ food });
  } catch (err) {
    return handleServerError(res, err);
  }
};

const getOne = async (req, res) => {
  try {
    const { user, ...foodData } = req.doc.data();
    return res.status(200).json({ ...foodData });
  } catch (err) {
    return handleServerError(res, err);
  }
};

const create = async (req, res) => {
  try {
    const food = {
      user: req.user.user_id,
      name: req.body.name,
      category: req.body.category ? req.body.category : "No category",
      calories: req.body.calories,
      protein: req.body.protein,
      carbohydrates: req.body.carbohydrates,
      fat: req.body.fat
    };

    const docsWithCurrentUserAndName = await db
      .collection(collection)
      .where("user", "==", req.user.user_id)
      .where("name", "==", req.body.name)
      .get();

    if (!docsWithCurrentUserAndName.empty) {
      return res.status(400).json({ errors: [foodExistsError] });
    }

    const createdDoc = await db.collection(collection).add(food);
    const responseData = { ...food, id: createdDoc.id };

    return res.status(200).json(responseData);
  } catch (err) {
    return handleServerError(res, err);
  }
};

const remove = async (req, res) => {
  try {
    await db.doc(req.docPath).delete();
    return res.status(200).json({ msg: "Success" });
  } catch (err) {
    return handleServerError(res, err);
  }
};

const update = async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      calories: req.body.calories,
      protein: req.body.protein,
      carbohydrates: req.body.carbohydrates,
      fat: req.body.fat
    };

    updateData.category = req.body.category ? req.body.category : "No category";

    await db.doc(req.docPath).update(updateData);
    return res.status(200).json({ msg: "Success" });
  } catch (err) {
    return handleServerError(res, err);
  }
};

module.exports = { create, getAllOwn, getOne, remove, update };
