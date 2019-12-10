const { handleServerError, isAuthError } = require("../../utils");
const { wrongCredentialsError, emailInUseError } = require("../../errors");
const { firebase } = require("../../firebase");
const { auth } = firebase;

const create = async (req, res) => {
  try {
    const { email, password } = req.body;
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
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
