const { response } = require("express");
const mongoose = require("mongoose");
const Cart = require("../models/cart");
const BadRequestException = require("../util/exceptions/badRequestException");
const axios = require('axios');

module.exports.createCartService = async (requestBody) => {
  try {
    console.log("data", requestBody)
    const itemId = requestBody.itemId;
    const userId = requestBody.userId;

    const productResponse = await axios.post(`${process.env.Product_API_LINK}/get_one_product_details`, {
      productId: itemId
    });

    if (!productResponse) {
      throw new BadRequestException("Error in product data fetching!!")
    }
    console.log("new", productResponse.data.data)
    const productDetail = productResponse.data.data.productDetails;
    const cartQuantity = 1;
    const itemPrice = productDetail.productPrice
    const itemArray = [];

    let oneItem = {
      itemId: itemId,
      itemPrice: itemPrice,
      quantity: cartQuantity
    }

    itemArray.push(oneItem);

    let total = itemPrice * cartQuantity;

    const newCartItem = new Cart({
      userId,
      item: itemArray,
      total
    });

    const cartItem = await newCartItem.save();

    return {
      msg: "success",
      data: cartItem,
    };
  } catch (err) {
    throw err;
  }
};

module.exports.addItemToCartService = async (requestBody) => {
  try {
    console.log("data", requestBody)
    const cartId = requestBody.cartId;
    const itemId = requestBody.itemId;
    const userId = requestBody.userId;

    const cartObj = await Cart.findOne({ '_id': cartId, status: 0 });

    if (!cartObj) {
      throw new BadRequestException("Cart not found!!")
    }

    const productResponse = await axios.post(`${process.env.Product_API_LINK}/get_one_product_details`, {
      productId: itemId
    });

    if (!productResponse) {
      throw new BadRequestException("Error in product data fetching!!")
    }


    const productDetail = productResponse.data.data.productDetails;
    const cartQuantity = 1;
    const itemPrice = productDetail.productPrice
    const itemArray = cartObj.item;

    let oneItem = {
      itemId: itemId,
      itemPrice: itemPrice,
      quantity: cartQuantity
    }

    itemArray.push(oneItem);
    let total = 0;

    for (let i = 0; i < itemArray.length; i++) {
      total += itemArray[i].itemPrice * itemArray[i].quantity;
    }

    cartObj.item = itemArray;
    cartObj.total = total;
    await cartObj.save();

    return {
      msg: "success",
      data: cartObj,
    };
  } catch (err) {
    throw err;
  }
};



module.exports.checkAvailableCartService = async (requestBody) => {
  try {
    console.log("data", requestBody)
    const userId = requestBody.userId;

    const cartObj = await Cart.findOne({ 'userId': userId, status: 0 });

    if (!cartObj) {
      throw new BadRequestException("Cart not found!!")
    }

    return {
      msg: "success",
      data: cartObj,
    };
  } catch (err) {
    throw err;
  }
};

module.exports.removeItemFromCartService = async (requestBody) => {
  try {

    let itemID = requestBody.itemId;
    let cartID = requestBody.cartId;

    // Find the cart by its ID and update it
    const updatedCart = await Cart.findOneAndUpdate(
      { _id: cartID }, // Find cart by ID
      { $pull: { item: { itemId: itemID } } }, // Remove item by itemId
      { new: true } // Return the updated cart
    );

    let total = 0;
    for (const item of updatedCart.item) {
      total += item.quantity * item.itemPrice;
    }

    // Update total in the cart
    updatedCart.total = total;

    // Save the updated cart
    await updatedCart.save();

    return {
      msg: "success",
      data: updatedCart,
    };
  } catch (error) {
    console.error("Error removing item from cart:", error);
    throw error;
  }
}

module.exports.updateItemQuantityService = async (requestBody) => {
  try {

    let itemID = requestBody.itemId;
    let cartID = requestBody.cartId;
    let newQuantity = requestBody.quantity;

    // Find the cart by its ID and update it
    const updatedCart = await Cart.findOneAndUpdate(
      { _id: cartID, "item.itemId": itemID }, // Find cart by ID and itemId
      { $set: { "item.$.quantity": newQuantity } }, // Update quantity of the specified item
      { new: true } // Return the updated cart
    );

    let total = 0;
    for (const item of updatedCart.item) {
      total += item.quantity * item.itemPrice;
    }

    // Update total in the cart
    updatedCart.total = total;

    // Save the updated cart
    await updatedCart.save();

    return {
      msg: "success",
      data: updatedCart,
    };
  } catch (error) {
    // Handle error
    console.error("Error updating item quantity:", error);
    throw error; // Optionally rethrow the error for handling further up the call stack
  }
}
