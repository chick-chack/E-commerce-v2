import Repository, { baseUrl, serializeQuery, options , options_ } from './Repository';
import axios from 'axios';
class AuthRepository {

    constructor(callback) {
        this.callback = callback;
    }


    // async postLogin(payload) {
    //     try {
    //         // const response = await Repository.post(`${baseUrl}/auth/login`, {data: payload.info, withCredentials: true})
    //         const response = await Repository.post(`${baseUrl}/auth/login`,payload.info)
    //         return response;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    async postLogin(payload) {
        var info = {
            "email": payload.info.email,
            "password": payload.info.password,
        };

        var data = {
            data: info,
            url: '/auth/login',
            method: 'POST'
        };
        var res = axios(options(data)) 
            .then(response => {   
                return response.data;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return res;

    }

    async logout() {

        var data = {
            url: '/auth/log-out',
            method: 'GET',
        };

        var res = axios(options_(data)) 
            .then(response => {  
                return response.data;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return res;

        // try{
        // const response = await Repository.get(`${baseUrl}/auth/log-out`)
        // return response;}
        // catch (error) {
        //     console.log(error)
        // }

    }

    async logout(){
        axios({
            method:  'GET',
            withCredentials: false,
            // headers: {
            //     Accept: 'application/json',
            // }, 
            url: "https://check-chack-v2.herokuapp.com/api/v2/ecommerce/auth/log-out",

        }).then( response  => {  
            return response.data;
        })
    }

      // async postLogin(payload) {
    //     try {
    //         // const response = await Repository.post(`${baseUrl}/auth/login`, {data: payload.info, withCredentials: true})
    //         const response = await Repository.post(`${baseUrl}/auth/login`,payload.info)
    //         return response;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    async postSignUp(payload) {
        var info = {
            "firstName": payload.info.firstName,
            "lastName": payload.info.lastName,
            "email": payload.info.email,
            "password": payload.info.password,
            "country": "PAL",
            "mobile": payload.info.phone
        };
        var data = {
            data: info,
            url: '/auth/sign-up',
            method: 'POST'
        }
        var res = axios(options(data)) 
            .then(response => {
                return response.data;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return res;
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



