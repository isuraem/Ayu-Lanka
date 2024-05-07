var express = require('express');
var router = express.Router();

require('./sellerRoutes')(router);

module.exports = router;