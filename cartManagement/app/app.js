var express = require("express");
var router = express.Router();

var cartRoutes = require("./routes/cartMain");

router.use("/cart",cartRoutes)

module.exports = router;