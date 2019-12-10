const firebase = require("firebase");
const firebaseAdmin = require("firebase-admin");

firebase.initializeApp(require("./config/firebaseApi.json"));
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(
    require("./config/serviceAccount.json")
  )
});

module.exports = {
  firebase: firebase,
  admin: firebaseAdmin,
  db: firebaseAdmin.firestore()
};
