var express = require('express');
var router = express.Router();

require('./userRoutes')(router);

module.exports = router;