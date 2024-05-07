const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cart = new Schema({

    item: [{
        itemId: {
            type: Schema.Types.ObjectId
        },
        quantity: {
            type: Number,
            require: true,
        },
        itemPrice: {
            type: Number,
            required: true,
        },    
    }],
    userId: {
        type: String,
    },

    total: {
        type: Number,
    },

    status: {
        type: String, // 0 -> pending, 10 -> completed 
        default: 0
    }

})

const Cart = mongoose.model("Cart", cart);
module.exports = Cart;