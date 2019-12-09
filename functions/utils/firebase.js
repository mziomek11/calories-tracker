const firebase = require("firebase");
const firebaseAdmin = require("firebase-admin");
const firebaseConfig = require("./config");

firebase.initializeApp(firebaseConfig);
firebaseAdmin.initializeApp();

module.exports = {
  firebase: firebase,
  admin: firebaseAdmin,
  db: firebaseAdmin.firestore()
};
