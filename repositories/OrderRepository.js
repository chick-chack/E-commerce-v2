import Repository, { baseUrl } from './Repository';
import axios from 'axios';
import Router from 'next/router';

axios.defaults.withCredentials = true
class OrdertRepository {
    constructor(callback) {
        this.callback = callback;
    }

    // add new orders
    async add_orders(addressId, paymentType, paypalData) {

        console.log(addressId, paymentType, paypalData)
        var info = {
            "addressId": addressId,
            "paymentType": paymentType,
            "paypalData": paypalData
        };
        console.log(info)
        try {
            const response = await Repository.post(`${baseUrl}/order/add`, info)
            console.log('------------------------7--------------------------------')
            console.log(response)
            console.log('------------------------7--------------------------------')
            return response.data;
        } catch (error) {
            console.log('------------------------8--------------------------------')
            console.log(error)
            console.log('------------------------8--------------------------------')
            return error
        }
    }

    // orders list
    async orders_list() {
        try {
            const response = await Repository.get(`${baseUrl}/order/list`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    // orders details
    async orders_details(id) {
        try {
            const response = await Repository.get(`${baseUrl}/order/order-details/${id}`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    /*================================================
    ||||||||||||||| order list group |||||||||||||||||
    ================================================*/

    async order_list_group(id) {
        try {
            const response = await Repository.get(`${baseUrl}/order/group-list/${id}`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }



}

export default new OrdertRepository();