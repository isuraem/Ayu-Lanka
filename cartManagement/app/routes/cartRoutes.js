// const router = require("express").Router();
// const CartController = require("../controllers/cartController");

// router.route("/addItem").post((req, res) => {
//   const response = CartController.addItemToCartController(req.body, res);
// });

// //route for view Product
// router.route("/viewCart").get((req, res) => {
//   const response = CartController.viewCartController(
//     req.body.data,
//     res
//   );
// });


// router.route("/updateItem").put((req, res) => {
//   console.log("req>>>>", req.body)

//   const response = CartController.updateCartItemController(req.body, res);

// });

// router.route("/deleteItem").post((req, res) => {
//   console.log("req>>>>", req.body)
//   const response = CartController.deleteCartItemController(req.body, res);

// });



// module.exports = router;
module.exports = function (router) {
  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  const cartController = require("../controllers/cartController");

  //route for add user
  router.post('/create_cart',
    jsonParser,
    cartController.createCartController
  );

  // //route for get Seller details
  // router.post('/get_Seller_details',
  //   jsonParser,
  //   userController.getSellerDetailsController
  // );

}
