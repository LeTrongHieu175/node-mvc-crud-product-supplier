const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/new", productController.newForm);
router.post("/new", productController.create);
router.get("/:id/edit", productController.editForm);
router.post("/:id/edit", productController.update);
router.get("/:id/delete", productController.delete);

module.exports = router;