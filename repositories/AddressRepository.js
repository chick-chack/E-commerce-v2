import Repository, { baseUrl } from './Repository';
import Router from 'next/router';

class AddressRepository {
    constructor(callback) {
        this.callback = callback;
    }

    // add new address

    async add_address(data1, countryVal) {
  
        var info = {

            "name": data1.name,
            "country": countryVal.label,
            "countryCode": countryVal.value,
            "state":  data1.neighborhood,
            "city":data1.city,
            "restAddress": data1.street,
            "postCode":  data1.postCode,
        };
        try {
            const response = await Repository.post(`${baseUrl}/address/add`, info)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }


    // address list
    async address_list() {
        try {
            const response = await Repository.get(`${baseUrl}/address/list`)
            return response.data;
        } catch (error) {
            console.log(error)
        }
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
        try {
            const response = await Repository.put(`${baseUrl}/address/edit`, data)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

}

export default new AddressRepository();