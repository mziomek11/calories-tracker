const { db } = require("../../firebase");
const { categoryExistsError } = require("../../errors");
const { handleServerError } = require("../../utils");

const collection = "categories";

const getAllOwn = async (req, res) => {
  try {
    const userCategories = await db
      .collection(collection)
      .where("user", "==", req.user.user_id)
      .get();

    const categories = userCategories.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name
    }));

    return res.status(200).json({ categories });
  } catch (err) {
    return handleServerError(res, err);
  }
};

const create = async (req, res) => {
  try {
    const category = {
      user: req.user.user_id,
      name: req.body.name
    };

    const docsWithCurrentUserAndName = await db
      .collection(collection)
      .where("user", "==", req.user.user_id)
      .where("name", "==", req.body.name)
      .get();

    if (!docsWithCurrentUserAndName.empty) {
      return res.status(400).json({ errors: [categoryExistsError] });
    }

    const createdDoc = await db.collection(collection).add(category);
    const responseData = { ...category, id: createdDoc.id };

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
    const updateData = { name: req.body.name };
    await db.doc(req.docPath).update(updateData);
    return res.status(200).json({ msg: "Success" });
  } catch (err) {
    return handleServerError(res, err);
  }
};

module.exports = { create, getAllOwn, remove, update };
