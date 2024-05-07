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
module.exports.getOneProductDetailsService = async (requestBody) => {
  try {
    const productId = requestBody.productId;
    console.log("data", requestBody)
    const productObj = await Product.findOne({ "_id" :productId });

    if(!productObj){
      throw new BadRequestException("Error in product details !!!");
    }
    // Make a request to the seller service to get seller details
    const sellerResponse = await axios.post(`${process.env.sellerApi_link}/get_Seller_details`, {
      seller_id: productObj.shop
    });

    // Assuming the response contains seller 
    const product_details = {
      sellerDetails: sellerResponse.data,
      productDetails: productObj
    }

    return {
      msg: "success",
      data: product_details
    };

  } catch (err) {
    throw err;
  }
};

//create Product service for get Product details
module.exports.getAllProductDetailsService = async (requestBody) => {
  try {
    
    const productObj = await Product.find();

    if(!productObj){
      throw new BadRequestException("Error in product details !!!");
    }

    return {
      msg: "success",
      data: productObj
    };

  } catch (err) {
    throw err;
  }
};
