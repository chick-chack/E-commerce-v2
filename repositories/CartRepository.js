import Repository, { baseUrl, options, options_auth } from './Repository';
import axios from 'axios';
import Router from 'next/router';

axios.defaults.withCredentials = true
class CartRepository {
    constructor(callback) {
        this.callback = callback;
    }

    // api return info the specific store
    // async addCart_item(productId, quantity, currentCookie) {
    async addCart_item(productId, quantity) {
        var info = {
            "productChildId": productId,
            "quantity": quantity,
        };
        try {
            const response = await Repository.post(`${baseUrl}/cart/add`, info)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    // api, the most sale products from each category are returned in-store by the store ID
    async deleteallcart(payload) {
        try {
            const response = await Repository.delete(`${baseUrl}/cart/delete-cart`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    // api, VIew all category by store id
    async deletecartitem(id) {
        try {
            const response = await Repository.delete(`${baseUrl}/cart/delete-item/${id}`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    // api, get cart list
    async get_cartlist(payload) {
        var data = {
            url: `/cart/list`,
            method: 'GET',
            // Cookie: localStorage.getItem("currentCookie")
        }

        try {
            const response = await Repository.get(`${baseUrl}/cart/list`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CartRepository();