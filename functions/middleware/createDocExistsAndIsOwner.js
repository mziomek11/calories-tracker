const { db } = require("../firebase");
const { handleServerError, handleAuthError } = require("../utils");

module.exports = category => async (req, res, next) => {
  try {
    const documentPath = `/${category}/${req.params.id}`;
    const document = await db.doc(documentPath).get();

    if (!document.exists) return res.status(404).json({ msg: "Not found" });
    if (document.data().user !== req.user.user_id) {
      return handleAuthError(res);
    }

    req.docPath = documentPath;
    req.doc = document;
    next();
  } catch (err) {
    return handleServerError(res, err);
  }
};
