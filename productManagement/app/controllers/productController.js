// const { response } = require("express");
// const ProductService = require("../services/productService");

// //controller for add Product
// module.exports.createProductController = async (req, res) => {
//     try {
//       let serviceResponse = await ProductService.createProductService(req);
//       if ((serviceResponse.msg = "success")) {
//         // return serviceResponse
//         return res.status(200).send({ message: "New Product is added" });
//       } else {
//         return res.status(300).send({ message: "Cannot add new Product !" });
//       }
//     } catch (err) {
//       return res
//         .status(300)
//         .send({ message: "Cannot add new Product !", err: err.message });
//     }
//   };

//   //controller for view Product
// module.exports.viewProductController = async (req, res) => {
//     try {
//       let serviceResponse = await ProductService.viewProductService(req);
//       if ((serviceResponse.msg = "success")) {
//         // return serviceResponse
//         return res.status(200).send({
//           message: "Product details retrieved",
//           data: serviceResponse.data,
//         });
//       } else {
//         return res.status(300).send({ message: "Cannot view Product!" });
//       }
//     } catch (err) {
//       return res
//         .status(300)
//         .send({ message: "Cannot view Product !", err: err.message });
//     }
//   };

//   //controller for get one Seller products
// module.exports.getOneSellerProductsController = async (req, res) => {
  
//     try {
//         let serviceResponse = await ProductService.viewSellerProductService(req);
    
//         if ((serviceResponse.msg = "success")) {
//           // return serviceResponse
//           return res.status(200).send({
//             message: "Seller product details retrived",
//             data: serviceResponse.data,
//           });
//         } else {
//           return res.status(300).send({ message: "Cannot retrive seller's products!" });
//         }
//       } catch (err) {
//         return res
//           .status(300)
//           .send({ message: "Cannot retrive seller's products !", err: err.message });
//       }
// };

const ProductService = require("../services/productService");
const { ResponseStatusCodes } = require('../util/constants/responseStatusCodes');
const { ResponseCommonMessages } = require('../util/constants/responseCommonMessages');
const Logger = require('../util/logging/logger');

//controller for add Product
module.exports.createProductController = async (req, res) => {
    try {
		const productResponse = await ProductService.createProductService(req.body);
		return res.status(200).json({ success: true, data: productResponse.data, showMessage: false });
	} catch (err) {
		Logger.log('createProductService', null, null,err);
		return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR });
	}
   
};

//controller for get Product details
module.exports.getProductDetailsController = async (req, res) => {
    try {
		const productResponse = await ProductService.getProductDetailsService(req.body);
		return res.status(200).json({ success: true, data: productResponse.data, showMessage: false });
	} catch (err) {
		Logger.log('getProductDetailsService', null, null,err);
		return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR });
	}
   
};
