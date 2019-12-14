const { Router } = require("express");

const { create, getOne } = require("./handlers");
const { deleteDoc } = require("../../utils/db");
const { validateCreate } = require("./validators");
const {
  validationErrors,
  createDocExistsAndIsOwner
} = require("../../middleware");
const docExistsAndIsOwner = createDocExistsAndIsOwner("days");

const router = Router();
router.get("/:id", docExistsAndIsOwner, getOne);
router.post("/", validateCreate(), validationErrors, create);
router.delete("/:id", docExistsAndIsOwner, deleteDoc);

module.exports = router;
