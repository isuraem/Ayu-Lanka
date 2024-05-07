const { response } = require("express");
const mongoose = require("mongoose");
let User = require("../models/user");
const BadRequestException = require('../util/exceptions/badRequestException');

//create user service for add user
module.exports.createUserService = async (requestBody) => {
    try {
        const name = requestBody.name;
        const street = requestBody.street;
        const city = requestBody.city;
        const province = requestBody.province;
        const postalCode = requestBody.postalCode;
        const country = requestBody.country;
        const Email = requestBody.Email;
        const mobileNumber = requestBody.mobileNumber;

        const newUser = new Seller({
            name,
            address: {
                street: street,
                city: city,
                province: province,
                postalCode: postalCode,
                country: country
            },
            Email,
            mobileNumber
        });

        let reponse = await newUser.save();

        return {
            msg: "success",
            data: reponse,
        };

    } catch (err) {
        throw err;
    }
};

