const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

router.get("/", supplierController.index);
router.get("/new", supplierController.newForm);
router.post("/new", supplierController.create);
router.get("/:id/edit", supplierController.editForm);
router.post("/:id/edit", supplierController.update);
router.get("/:id/delete", supplierController.delete);

module.exports = router;