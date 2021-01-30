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
        var data = {
            data: info,
            url: '/cart/add',
            method: 'POST'
            // ,
            // Cookie: currentCookie
        }

        var res = axios(options_auth(data))
            .then(response => {
                return response.data;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return res;
    }

    // api, the most sale products from each category are returned in-store by the store ID
    async deleteallcart(payload) {
        var data = {
            url: '/cart/delete-cart',
            method: 'DELETE',
            Cookie: payload.Cookie
        }
        var res = axios(options_auth(data))
            .then(response => {
                return response.data;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return res;
    }

    // api, VIew all category by store id
    async deletecartitem(id) {


        var data = {
            url: `/cart/delete-item/${id}`,
            method: 'DELETE',
            // Cookie: localStorage.getItem("currentCookie")
        }
        var res = axios(options_auth(data))
            .then(response => {
                return response.data;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return res;
    }

    // api, get cart list
    async get_cartlist(payload) {
        var data = {
            url: `/cart/list`,
            method: 'GET',
            // Cookie: localStorage.getItem("currentCookie")
        }

        var res = axios(options_auth(data))
            .then(response => {
                
            //    const sum = Object.values(response.data)
            //    .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
            //    .toFixed(2);
                       
        // console.log("get cart list repo data response", sum )
                return response.data;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return res;
    }
}

export default new CartRepository();