const express = require("express");

const validate = require("../../../middleware/validate");
const admin = require("../../../middleware/admin");

const {
  addProduct,
  allProducts,
  myProducts,
  deleteProduct,
} = require("../../../controller");

const router = express.Router();

router.post("/add", validate, addProduct);
router.get("/my-products", validate, myProducts);
router.get("/all", allProducts);
router.get("/:slug", allProducts);
router.delete("/:id", deleteProduct);

module.exports = router;
