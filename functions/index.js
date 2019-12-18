const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");

const userRoutes = require("./api/users/routes");
const foodRoutes = require("./api/food/routes");
const dayRoutes = require("./api/days/routes");
const mealRoutes = require("./api/meals/routes");

const { auth } = require("./middleware");

const app = express();

app.use(cors());

app.use("/users", userRoutes);
app.use("/food", auth, foodRoutes);
app.use("/days", auth, dayRoutes);
app.use("/meals", auth, mealRoutes);

exports.api = functions.region("europe-west1").https.onRequest(app);
