import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_SELLER_MANAGEMENT_API_URL}`

export const createSellerService = async (newSeller) => {

    try {
        let response = await axios.post(BASE_URL + '/add',newSeller);

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const getSellerService = async (id) => {

    try {
        let response = await axios.post(BASE_URL + `/get/${id}`);

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}