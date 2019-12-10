const express = require("express");
const functions = require("firebase-functions");

const userRoutes = require("./api/users/routes");
const categoryRoutes = require("./api/categories/routes");

const { auth } = require("./middleware");

const app = express();

app.use("/users", userRoutes);
app.use("/categories", auth, categoryRoutes);

exports.api = functions.region("europe-west1").https.onRequest(app);
