import Repository, { baseUrl, serializeQuery } from './Repository';
import axios from 'axios';
class AuthRepository {

    constructor(callback) {
        this.callback = callback;
    }

    async postLogin(payload) {
        var info = {
            "email": payload.info.email,
            "password": payload.info.password,
        };

        try {
            const response = await Repository.post(`${baseUrl}/auth/login`, info)
            return response;
        } catch (error) {
            return error;
        }

    }

    async logout() {
        try {
            const response = await Repository.get(`${baseUrl}/auth/log-out`)
            return response.data;
        } catch (error) {
            console.log(error)
        }

    }


    async postSignUp(payload) {
        var info = {
            "firstName": payload.info.firstName,
            "lastName": payload.info.lastName,
            "email": payload.info.email,
            "password": payload.info.password,
            "country": "PAL",
            "mobile": payload.info.phone
        };
        try {
            const response = await Repository.post(`${baseUrl}/auth/sign-up`, info)
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }


    async putverifyemail(payload) {

        const reponse = await Repository.put(`${baseUrl}/auth/verify-email`, payload)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    async putverifymobile(info) {
        const reponse = await Repository.put(`${baseUrl}/auth/verify-mobile`, info)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    async putresetpassword(payload) {
        const reponse = await Repository.put(`${baseUrl}/auth/reset-password`, payload)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    async putforgetpassword(info) {
        const reponse = await Repository.put(`${baseUrl}/auth/forget-password`, info)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    async getisauth(payload) {

        const reponse = await Repository.get(`${baseUrl}/auth/is-auth`,)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    // async getMallCategories(payload) {
    //     const reponse = await Repository.get(`${baseUrl}/mallcategories/${payload}`)
    //         .then(response => {
    //             return response.data;
    //         })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return reponse;
    // }

}

export default new AuthRepository();



