var express = require("express");
var router = express.Router();

var sellerRoutes = require("./routes/sellerMain");

router.use("/seller",sellerRoutes)

module.exports = router;