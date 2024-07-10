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

  //route for create cart
  router.post('/create_cart',
    jsonParser,
    cartController.createCartController
  );

  //route for add item
  router.post('/add_item',
    jsonParser,
    cartController.addItemController
  );

  //route for add item
  router.post('/check_available_cart',
    jsonParser,
    cartController.checkAvailableCartController
  );

  //route for add item
  router.post('/add_item_to_cart',
    jsonParser,
    cartController.addItemToCartController
  );

  //route for add item
  router.post('/remove_item_from_cart',
    jsonParser,
    cartController.removeItemFromCartController
  );

  //route for add item
  router.post('/update_item_from_cart',
    jsonParser,
    cartController.updateItemQuantityController
  );

  // //route for get Seller details
  // router.post('/get_Seller_details',
  //   jsonParser,
  //   userController.getSellerDetailsController
  // );

}
