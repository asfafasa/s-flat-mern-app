const createError = require("http-errors");
const router = require("express").Router();

const auth = require("./auth/auth");
const product = require("./product");

router.use("/auth", auth);
router.use("/product", product);

router.get("/test", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

router.get("/ping", (req, res) => {
  res.json({ success: "true", message: "successful request" });
});

module.exports = router;
