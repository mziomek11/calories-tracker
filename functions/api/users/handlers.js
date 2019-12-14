const { handleServerError, isAuthError } = require("../../utils/errors");
const { wrongCredentialsError, emailInUseError } = require("../../errors");
const { firebase } = require("../../firebase");
const { auth } = firebase;

const create = async ({ body: { email, password } }, res) => {
  try {
    const data = await auth().createUserWithEmailAndPassword(email, password);
    const token = await data.user.getIdToken();
    return res.status(201).json({ token });
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      return res.status(400).json({ errors: [emailInUseError] });
    }

    return handleServerError(res, err);
  }
};

const login = async ({ body: { email, password } }, res) => {
  try {
    const data = await auth().signInWithEmailAndPassword(email, password);
    const token = await data.user.getIdToken();
    return res.status(200).json({ token });
  } catch (err) {
    if (isAuthError(err)) {
      return res.status(403).json({ errors: [wrongCredentialsError] });
    }

    return handleServerError(res, err);
  }
};

module.exports = {
  create,
  login
};
