const { Router } = require("express");

const { create, login } = require("./handlers");
const { validateCreate, validateLogin } = require("./validators");
const { validationErrors } = require("../../middleware");

const router = Router();

router.post("/create", validateCreate(), validationErrors, create);
router.post("/login", validateLogin(), validationErrors, login);

module.exports = router;
