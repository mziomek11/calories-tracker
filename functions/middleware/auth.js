const { admin } = require("../firebase");
const { auth } = admin;
const {
  handleServerError,
  isAuthError,
  handleAuthError
} = require("../utils/errors");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  let idToken;
  if (authorization && authorization.startsWith("Bearer ")) {
    [, idToken] = authorization.split("Bearer ");
  } else return handleAuthError(res);

  try {
    const decodedToken = await auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (err) {
    if (isAuthError(err)) return handleAuthError(res);

    return handleServerError(res, err);
  }
};
