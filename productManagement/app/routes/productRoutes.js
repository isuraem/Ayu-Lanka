// const router = require("express").Router();
// const ProductController = require("../controllers/productController");

// router.route("/add").post((req, res) => {
//     const response = ProductController.createProductController(req.body, res);
//   });

//   //route for view Product
// router.route("/view").get((req, res) => {
//     const response = ProductController.viewProductController(
//       req.body.data,
//       res
//     );
//   });

//     //route for view seller Product
// router.route("/sellerProducts/:id").post((req, res) => {
//     let id = req.params.id;

//     let searchData = {
//         id: id,
//         body: req.body,
//       };
//     const response = ProductController.getOneSellerProductsController(searchData,res);
//   });
//   module.exports = router;

module.exports = function (router) {
  var bodyParser = require('body-parser');
  var jsonParser = bodyParser.json();

  const productController = require("../controllers/productController");

  //route for add Product
  router.post('/add',
    jsonParser,
    productController.createProductController
  );

  //route for get Product details
  router.post('/get_details',
    jsonParser,
    productController.getProductDetailsController
  );

}