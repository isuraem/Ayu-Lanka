
let mongoose = require("mongoose");
let Seller = require("../models/seller");
const BadRequestException = require('../util/exceptions/badRequestException');


module.exports.createSellerService = async (requestBody) => {

  try {
    console.log("data",requestBody)
    const sellerName = requestBody.SellerName;
    const shopName = requestBody.ShopName;
    const street = requestBody.street;
    const city = requestBody.city;
    const province = requestBody.province;
    const postalCode = requestBody.postalCode;
    const country = requestBody.country;
    const Email = requestBody.Email;
    const mobileNumber = requestBody.mobileNumber;
    const image = requestBody.image;

//     const result = await cloudinary.uploader.upload(image, {
//       folder: "seller",
//     })

//     const request = client
// .post("send", {'version': 'v3.1'})
// .request({
//   "Messages":[
//     {
//       "From": {
//         "Email": "madiwilage.ie@gmail.com",
//         "Name": "Isura"
//       },
//       "To": [
//         {
//           "Email": Email,
//           "Name": sellerName
//         }
//       ],
//       "Subject": "Welcome to AYULANKA.",
//       "TextPart": "Your account has created sucessfully",
//       "HTMLPart": `<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Welcome to AYULANKA</title></head><body style='background-color: #f9f9f9;'><table style='max-width: 600px; padding: 20px; margin: 0 auto; border-collapse: collapse;'><tr><td style='background-color: #ffffff; text-align: center; padding: 0;'><a href='http://localhost:3000/sellerHome' style='display: block; margin: 0 auto;'><img src='https://res.cloudinary.com/dpkh0olnh/image/upload/v1682708869/AyuLankaNew-removebg-preview_cfuuii.png' alt='AYULANKA Logo' style='max-width: 100%; margin: 20px;'></a></td></tr><tr><td style='background-color: #ffffff;'><div style='color: #777777; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif;'><h2 style='color: #212121; margin: 0 0 7px;'>Welcome to AYULANKA, ${sellerName}!</h2><p style='margin: 2px; font-size: 15px;'>Your account has been created successfully.</p><p style='margin: 2px; font-size: 15px;'>We are thrilled to have you onboard and can't wait to see what you'll achieve with our platform.</p><p style='margin: 2px; font-size: 15px;'>If you have any questions or concerns, please feel free to reach out to our support team at support@ayulanka.com.</p><a href='http://localhost:3000/sellerHome' style='background-color: #3ebf9b; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; border-radius: 5px; margin-top: 20px;'>Go to AYULANKA</a></div></td></tr><tr><td style='background-color: #3ebf9b; text-align: center;'><p style='color: #ffffff; margin: 0;'>&copy; 2023 AYULANKA. All Rights Reserved.</p></td></tr></table></body></html>`
//     }
//   ]
// })
// request
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })

    // const tranEmailApi = new Sib.TransactionalEmailsApi()

    // const sender = {
    //   email: 'madiwilage.ie@gmail.com',
    //   name: "isura"
    // }

    // const receivers = [
    //   {
    //     email: Email,
    //   },
    // ];
    // try {
    //   const sendEmail = await tranEmailApi.sendTransacEmail({
    //     sender,
    //     to: receivers,
    //     subject: "Test Email",
    //     textContent: "new added",
    //   });
    //   console.log(sendEmail)
    // } catch (error) {
    //   console.log(error)
    // }

    const newSeller = new Seller({
      sellerName,
      shopName,
      shopAddress: {
        street: street,
        city: city,
        province: province,
        postalCode: postalCode,
        country: country,
        email: Email,
        phone: mobileNumber,
      },
      Email,
      mobileNumber,
      // shopCoverImage: {
      //   public_id: result.public_id,
      //   url: result.secure_url
      // },
    });
    let reponse = await newSeller.save();

    return {
      msg: "success",
      data: reponse,
    };
    // if (reponse) {
    //   return {
    //     msg: "success",
    //     data: reponse,
    //   };
    // } else {
    //   msg: "failed";
    //   data: reponse;
    // }
  } catch (err) {
    throw err;
  }
};

// module.exports.getOneSellerService = async (req, res) => {
//   try {
//     let id = req.id;

//     let response = await Seller.find({ _id: id });

//     if (response) {
//       return {
//         msg: "success",
//         data: response,
//       };
//     } else {
//       return {
//         msg: "faild",
//         data: response,
//       };
//     }
//   } catch (err) {
//     throw err;
//   }
// };

// module.exports.getOneSellerProductsService = async (req, res) => {
//   try {
//     let id = req.id;

//     let sellerObj = await Seller.find({ _id: id });

//     let response = await Product.find({ shop: _id});

//     if (response) {
//       return {
//         msg: "success",
//         data: response,
//       };
//     } else {
//       return {
//         msg: "faild",
//         data: response,
//       };
//     }
//   } catch (err) {
//     throw err;
//   }
// };

