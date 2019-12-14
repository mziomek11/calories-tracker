const { db } = require("../../firebase");

module.exports = async (collection, userId, prop, value) => {
  const docs = await db
    .collection(collection)
    .where("user", "==", userId)
    .where(prop, "==", value)
    .get();

  return !docs.empty;
};
