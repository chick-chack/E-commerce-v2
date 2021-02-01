import Repository, { baseUrl, options, options_auth } from './Repository';
import axios from 'axios';
import Router from 'next/router';

axios.defaults.withCredentials = true
class OrdertRepository {
    constructor(callback) {
        this.callback = callback;
    }

    // add new orders
    async add_orders(addressId, paymentType) {
        var info = {
            "addressId":addressId,
            "paymentType":paymentType
        };
        var data = {
            data: info,
            url: '/order/add',
            method: 'POST'
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

    // orders list
    async orders_list() {
        var data = {
            url: `/order/list`,
            method: 'GET'
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

    // orders details
    async orders_details(id) {
        var data = {
            // data: info,
            url: `/order/order-details/${id}`,
            method: 'GET'
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

/*================================================
||||||||||||||| order list group |||||||||||||||||
================================================*/

async order_list_group(id) {
    var data = {
        // data: info,
        url: `/order/group-list/${id}`,
        method: 'GET'
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



}

export default new OrdertRepository();