const { Router } = require("express");

const { create, getOwn, remove, update } = require("./handlers");
const { validateCreate, validateUpdate } = require("./validators");
const {
  validationErrors,
  createDocExistsAndIsOwner
} = require("../../middleware");
const docExistsAndIsOwner = createDocExistsAndIsOwner("categories");

const router = Router();

router.get("/", getOwn);
router.post("/", validateCreate(), validationErrors, create);
router.put(
  "/:id",
  validateUpdate(),
  validationErrors,
  docExistsAndIsOwner,
  update
);
router.delete("/:id", docExistsAndIsOwner, remove);

module.exports = router;
