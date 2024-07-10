const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const seller = new Schema({
    
    sellerName: {
        type: String,
        maxlength: 100

    },
    shopName: {
        type: String,
        maxlength: 100
    },

    shopAddress: {
        street: {
            type: String,
            maxlength: 100,
            // required: true,
        },
        city: {
            type: String,
            maxlength: 100,
            // required: true,
        },
        province: {
            type: String,
            maxlength: 100,
            // required: true,
        },
        postalCode: {
            type: String,
            maxlength: 100,
            // required: true,
        },
        country: {
            type: String,
            maxlength: 100,
            // required: true,
        },
        phone: {
            type: String,
            maxlength: 20,
            // required: true,
        },
        email: {
            type: String,
            maxlength: 100,
            // required: true,
        }
    },
    shopCoverImage: {
        public_id: {
            type: String,
            maxlength: 20
        },
        url: {
            type: String,
            maxlength: 100
        }
    },
    Email: {
        type: String,
        maxlength: 50,
        required: true,
    },

    mobileNumber: {
        type: Number,
        maxlength: 10,
        required: true,
    },

})

const Seller = mongoose.model("Seller", seller);
module.exports = Seller;