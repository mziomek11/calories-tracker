const { Router } = require("express");

const { create, getAllOwn, getOne, update } = require("./handlers");
const { deleteDoc } = require("../../utils/db");
const { validateCreate, validateUpdate } = require("./validators");
const {
  validationErrors,
  createDocExistsAndIsOwner
} = require("../../middleware");
const docExistsAndIsOwner = createDocExistsAndIsOwner("food");

const router = Router();

router.get("/", getAllOwn);
router.get("/:id", docExistsAndIsOwner, getOne);
router.post("/", validateCreate(), validationErrors, create);
router.put(
  "/:id",
  validateUpdate(),
  validationErrors,
  docExistsAndIsOwner,
  update
);
router.delete("/:id", docExistsAndIsOwner, deleteDoc);

module.exports = router;
