const { db } = require("../../firebase");

module.exports = async (collection, userId, preventExecuting) => {
  const query = db.collection(collection).where("user", "==", userId);

  if (preventExecuting) return Promise.resolve(query);
  else return await query.get();
};
