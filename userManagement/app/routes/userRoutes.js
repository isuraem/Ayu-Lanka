module.exports = function (router) {
  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  const userController = require("../controllers/userController");

  //route for add user
  router.post('/add',
    jsonParser,
    userController.createUserController
  );

  // //route for get Seller details
  // router.post('/get_Seller_details',
  //   jsonParser,
  //   userController.getSellerDetailsController
  // );

}