const { db } = require("../../firebase");

module.exports = async (path, userId) => {
  const document = await db.doc(path).get();

  return document.exists && document.data().user === userId;
};
