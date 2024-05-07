const { response } = require("express");
const mongoose = require("mongoose");
let Product = require("../models/product");
const axios = require('axios');
const BadRequestException = require("../util/exceptions/badRequestException");

//create Product service for add Product
module.exports.createProductService = async (requestBody) => {
  try {
    const productTitle = requestBody.productTitle;
    const productName = requestBody.productName;
    const productCode = requestBody.productCode;
    const shop = requestBody.shop;
    const productPrice = Number(requestBody.productPrice);
    const productDiscount = Number(requestBody.productDiscount);
    const productQuantity = Number(requestBody.productQuantity);
    const productDescription = requestBody.productDescription;
    const productCategory = requestBody.productCategory;
    const cashOnDelivery = requestBody.cashOnDelivery;

    const newProduct = new Product({
      productTitle,
      productName,
      productCode,
      shop,
      productPrice,
      productDiscount,
      productQuantity,
      productDescription,
      productCategory,
      cashOnDelivery,
    });
    let reponse = await newProduct.save();


    return {
      msg: "success",
      data: reponse,
    };

  } catch (err) {
    throw err;
  }
};


//create Product service for get Product details
module.exports.getProductDetailsService = async (requestBody) => {
  try {
    const productId = requestBody.productId;
    console.log("data", requestBody)
    const productObj = await Product.findOne({ "_id" :productId });

    if(!productObj){
      throw new BadRequestException("Error in product details !!!");
    }
    // Make a request to the seller service to get seller details
    const sellerResponse = await axios.post('http://localhost:3004/api/seller/get_Seller_details', {
      seller_id: productObj.shop
    });

    // Assuming the response contains seller details
    const sellerDetails = sellerResponse.data;

    return {
      msg: "success",
      data: sellerDetails
    };

  } catch (err) {
    throw err;
  }
};

//view product service for view all product details
module.exports.viewProductService = async (req, res) => {
  try {
    let response = await Product.find();

    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "faild",
        data: response,
      };
    }
  } catch {
    throw err;
  }
};

//view product service for view each seller product details
module.exports.viewSellerProductService = async (req, res) => {
  try {

    let id = req.id;
    let response = await Product.find({ shop: id });

    if (response) {
      return {
        msg: "success",
        data: response,
      };
    } else {
      return {
        msg: "faild",
        data: response,
      };
    }
  } catch {
    throw err;
  }
};
