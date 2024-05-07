const SellerService = require("../services/sellerService");
const { ResponseStatusCodes } = require('../util/constants/responseStatusCodes');
const { ResponseCommonMessages } = require('../util/constants/responseCommonMessages');
const Logger = require('../util/logging/logger');

//controller for add Seller
module.exports.createSellerController = async (req, res) => {
    try {
		const serviceResponse = await SellerService.createSellerService(req.body);
		return res.status(200).json({ success: true, data: serviceResponse.data, showMessage: false });
	} catch (err) {
		Logger.log('createSellerService', null, null,err);
		return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR });
	}
   
};

//controller for get Seller details
module.exports.getSellerDetailsController = async (req, res) => {
    try {
		const serviceResponse = await SellerService.getSellerDetailsService(req.body);
		return res.status(200).json({ success: true, data: serviceResponse.data, showMessage: false });
	} catch (err) {
		Logger.log('getSellerDetailsService', null, null,err);
		return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR });
	}
   
};
