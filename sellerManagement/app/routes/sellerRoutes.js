module.exports = function (router) {
  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  const sellerController = require("../controllers/sellerController");

  //route for add Seller
  router.post('/add',
    jsonParser,
    sellerController.createSellerController
  );

}