import Repository, { baseUrl, options, options_auth } from './Repository';
import axios from 'axios';
import Router from 'next/router';

axios.defaults.withCredentials = true
class AddressRepository {
    constructor(callback) {
        this.callback = callback;
    }

    // add new address
    async add_address(data1) {
        // var info = {
        //     "address": data,
        // };
        var info ={
            "name": data1.name,
            "country": data1.country,
            "city": data1.city,
            "neighborhood": data1.neighborhood,
            "street": data1.street,
            "postCode": data1.postCode
        };

        var data = {
            data: info,
            url: '/address/add',
            method: 'POST'
        };
        var res = axios(options_auth(data))
            .then(response => {
                
                return response.data;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return res;
    }
    

    // address list
    async address_list() {
        var data = {
            url: `/address/list`,
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

    // EDIT ADDRESS
    async edit_address(data) {
        var data = {
            data: {
                "id": 1,
                "name": "home a",
                "country": "PS",
                "city": "Gaza",
                "neighborhood": "alremal",
                "street": "omer aziz",
                "postCode": "12a2d5"
            },
            url: `/address/edit`,
            method: 'PUT'
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

export default new AddressRepository();