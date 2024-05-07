const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
    
    name: {
        type: String,
        maxlength: 100,
        required: true,

    },

    address: {
        street: {
            type: String,
            maxlength: 100
        },
        city: {
            type: String,
            maxlength: 100
        },
        province: {
            type: String,
            maxlength: 100
        },
        postalCode: {
            type: String,
            maxlength: 100
        },
        country: {
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

    password: {
        type: String,
        maxlength: 50,
    }

})

const User = mongoose.model("User", user);
module.exports = User;