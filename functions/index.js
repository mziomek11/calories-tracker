const express = require("express");
const functions = require("firebase-functions");

const userRoutes = require("./api/users/routes");

const app = express();

app.use("/users", userRoutes);

exports.api = functions.region("europe-west1").https.onRequest(app);
