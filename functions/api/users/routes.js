const { Router } = require("express");

const { createUser, loginUser } = require("./handlers");
const { validateCreateUser, validateLogin } = require("./validators");
const { validationErrors } = require("../../middleware");

const router = Router();

router.post("/create", validateCreateUser(), validationErrors, createUser);
router.post("/login", validateLogin(), validationErrors, loginUser);

module.exports = router;
