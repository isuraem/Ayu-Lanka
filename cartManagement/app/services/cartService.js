const { response } = require("express");
const mongoose = require("mongoose");
const Cart = require("../models/cart");
const BadRequestException = require("../util/exceptions/badRequestException");
const axios = require('axios');

module.exports.createCartService = async (requestBody) => {
  try {
    console.log("data",requestBody )
    const itemId = requestBody.itemId;
    const userId = requestBody.userId;

    const productResponse = await axios.post(`${process.env.Product_API_LINK}/get_one_product_details`, {
      productId: itemId
    });

    if(!productResponse){
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

    const cartId = requestBody.cartId;
    const itemId = requestBody.itemId;
    const userId = requestBody.userId;

    const cartObj = await Cart.findOne({ '_id': cartId , status: 0 });

    if(!cartObj){
      throw new BadRequestException("Cart not found!!")
    }

    const productResponse = await axios.post(`${process.env.Product_API_LINK}/get_one_product_details`, {
      productId: itemId
    });

    if(!productResponse){
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
    
    for(let i=0; i < itemArray.length; i++){
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

    const userId = requestBody.userId;

    const cartObj = await Cart.findOne({ 'userId': userId , status: 0 });

    if(!cartObj){
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

module.exports.removeItemFromCartService  = async(requestBody) => {
  try {

      let itemID = requestBody.itemId;
      let cartID = requestBody.cartId;

      // Find the cart by its ID and update it
      const updatedCart = await Cart.findOneAndUpdate(
          { _id: cartID }, // Find cart by ID
          { $pull: { item: { itemId: itemID } } }, // Remove item by itemId
          { new: true } // Return the updated cart
      );


      return {
        msg: "success",
        data: updatedCart,
      };
  } catch (error) {
      console.error("Error removing item from cart:", error);
      throw error;
  }
}


// //view Cart service for view all CArt details
// module.exports.viewCartService = async (req, res) => {
//   try {
//     let response = await Cart.find();
//     // console.log("response", response);
//     let cartArraye = [];

//     for (let index = 0; index < response.length; index++) {
//       let id = response[index].itemId;
//       console.log("id", id);
//       let productResponse = await Product.findOne({ _id: id })
//       console.log("productRes", productResponse);

//       if (productResponse) {
//         let cartObject = {
//           productDetails: productResponse,
//           cartDetails: response[index],
//         }

//         cartArraye.push(cartObject);
//       }

//     };

//     if (response) {
//       return {
//         msg: "success",
//         data: cartArraye,
//       };
//     } else {
//       return {
//         msg: "faild",
//         data: response,
//       };
//     }
//   } catch {
//     throw err;
//   }
// };

// module.exports.updateCartItemService = async (req, res) => {
//   console.log(">>>>>>>>", req)
//   try {
//     let response = await Cart.findOneAndUpdate(
//       { itemId: req.itemId },
//       { $set: { cartQuantity: req.cartQuantity } },

//     );
//     console.log("res>>", response)

//     if (response) {
//       return {
//         msg: "success",
//         data: response,
//       };
//     } else {
//       return {
//         msg: "fail",
//         data: null,
//       };
//     }
//   } catch (err) {
//     throw err;
//   }
// };


// module.exports.deleteCartItemService = async (req, res) => {
//   try {
//     console.log("request", req)
//     let response = await Cart.findOneAndDelete(
//       { itemId: req.itemId },

//     );

//     if (response) {
//       return {
//         msg: "success",
//         data: response,
//       };
//     } else {
//       return {
//         msg: "fail",
//         data: null,
//       };
//     }
//   } catch (err) {
//     throw err;
//   }
// };
