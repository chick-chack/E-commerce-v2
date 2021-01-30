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
    //     var info = {
    //         "productChildId": productId,
    //         "quantity": quantity,
    //     };
    //     var data = {
    //         data: info,
    //         url: '/cart/add',
    //         method: 'POST',
    //         Cookie: currentCookie
    //     }
    //     var res = axios(options_auth(data))
    //         .then(response => {
    //             return response.data;
    //         })
    //         .catch(error => (console.log(error), {
    //             error: JSON.stringify(error)
    //         }));
    //     return res;
    // }

    
    async addCart_item(productId, quantity) {
        var info = {
            "productChildId": 52,
            "quantity": 5,
        };
        try {
            const response = await Repository.post(`https://check-chack-v2.herokuapp.com/api/v2/ecommerce/cart/add`, info)
            return response;
        } catch (error) {
            console.log(error)
        }
    }


    // api, the most sale products from each category are returned in-store by the store ID
    async deleteallcart(payload) {
        // const reponse = await Repository.delete(`${baseUrl}/cart/delete-cart`, { headers: { Cookie: `wCAccessToken=${payload.Cookie}` } })
        //     .then(response => {
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;

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

        // const currentCookie = localStorage.getItem("currentCookie");
        // const reponse = await Repository.delete(`${baseUrl}/cart/delete-item/${id}`)
        //     .then(response => {
        //         console.log(response.data)
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;
        var data = {
            url: `/cart/delete-item/${id}`,
            method: 'DELETE',
            Cookie: localStorage.getItem("currentCookie")
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
        // const reponse = await Repository.get(`${baseUrl}/cart/list`, { headers: { Cookie: `wCAccessToken=${payload.Cookie}` } })
        //     .then(response => {
        //         console.log(response.data)
        //         return response.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;
        var data = {
            url: `/cart/list`,
            method: 'GET',
            Cookie: localStorage.getItem("currentCookie")
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

export default new CartRepository();




// import Repository, { baseUrl } from './Repository';
// import Router from 'next/router';

// class CartRepository {
//     constructor(callback) {
//         this.callback = callback;
//     }


//     // api return info the specific store
//     async addCart_item( productId , quantity , currentCookie ) {
//         console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^0", productId , quantity , currentCookie );
//         let _data = {
//             productChildId: 50,
//             quantity:2
//           }

//           var options = {
//               'headers': {
//                 'Cookie': 'wCAccessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY3VzdG9tZXItd2ViIiwiaWQiOjEsImZpcnN0TmFtZSI6ImFtaW4xIiwibGFzdE5hbWUiOiJhbWluMiIsImVtYWlsIjoiYW1pbmtpbmcxNDBAZ21haWwuY29tIiwiY291bnRyeSI6IlBTIiwibW9iaWxlIjoiMDU5NTE0MDMzNCIsInZlcmlmeUVtYWlsIjp0cnVlLCJ2ZXJpZnlNb2JpbGUiOnRydWUsImF2YXRhckluZGV4IjowLCJpc0RqIjp0cnVlLCJmaXJiYXNlVG9rZW4iOm51bGwsImlhdCI6MTYwOTg5Njk2OH0.NOyM_Qz0zZpaAmqZWl7Sem5YdDCvbRi6TQwDtqs7xBE',
              
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({"productChildId":50,"quantity":6})
            
//             };
            

//        const response = await Repository.post(`${baseUrl}/cart/add`,options)
//        { 'headers': {
//             'Cookie': 'wCAccessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY3VzdG9tZXItd2ViIiwiaWQiOjEsImZpcnN0TmFtZSI6ImFtaW4xIiwibGFzdE5hbWUiOiJhbWluMiIsImVtYWlsIjoiYW1pbmtpbmcxNDBAZ21haWwuY29tIiwiY291bnRyeSI6IlBTIiwibW9iaWxlIjoiMDU5NTE0MDMzNCIsInZlcmlmeUVtYWlsIjp0cnVlLCJ2ZXJpZnlNb2JpbGUiOnRydWUsImF2YXRhckluZGV4IjowLCJpc0RqIjp0cnVlLCJmaXJiYXNlVG9rZW4iOm51bGwsImlhdCI6MTYwOTg5Njk2OH0.NOyM_Qz0zZpaAmqZWl7Sem5YdDCvbRi6TQwDtqs7xBE',
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY3VzdG9tZXItd2ViIiwiaWQiOjEsImZpcnN0TmFtZSI6ImFtaW4xIiwibGFzdE5hbWUiOiJhbWluMiIsImVtYWlsIjoiYW1pbmtpbmcxNDBAZ21haWwuY29tIiwiY291bnRyeSI6IlBTIiwibW9iaWxlIjoiMDU5NTE0MDMzNCIsInZlcmlmeUVtYWlsIjp0cnVlLCJ2ZXJpZnlNb2JpbGUiOnRydWUsImF2YXRhckluZGV4IjowLCJpc0RqIjp0cnVlLCJmaXJiYXNlVG9rZW4iOm51bGwsImlhdCI6MTYwOTg5NjI5Nn0.JGKyQzZi-K5qNbg7aUvs2rBPwksbf1K2rImU5mI4U_k',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({"productChildId":50,"quantity":6})
        
//         })
        

//        { body: JSON.stringify(_data),
//         headers: {"Content-type": "application/json; charset=UTF-8"}  }

//          { headers: { Cookie: `wCAccessToken=${currentCookie}` },
//          body: JSON.stringify(_data)
//          body:{
//             productChildId: 50,
//             quantity: 5
//         }
      
//          body: JSON.stringify({
//             productChildId: 50,
//             quantity:2
//           })
//         body: JSON.stringify(_data)
//        } 
 


        
//             .then(response => {
//                 if (response.data.data == null) {
//                     Router.push('/page/page-404');
//                 } else {
//                     return response.data;
//                 }
//             })
//             .catch(error => ({ error: JSON.stringify(error) }));
//             console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^0", response)
//        return response;
//     }

//     // api, the most sale products from each category are returned in-store by the store ID
//     async deleteallcart(payload) {
//         const reponse = await Repository.delete(`${baseUrl}/cart/delete-cart`, { headers: { Cookie: `wCAccessToken=${payload.Cookie}` } })
//             .then(response => {
//                 return response.data;
//             })
//             .catch(error => ({ error: JSON.stringify(error) }));
//         return reponse;
//     }

//     // api, VIew all category by store id
//     async deletecartitem(id) {
//         const reponse = await Repository.delete(`${baseUrl}/cart/delete-item/${id}`)
//             .then(response => {
//                 console.log(response.data)
//                 return response.data;
//             })
//             .catch(error => ({ error: JSON.stringify(error) }));
//         return reponse;
//     }

//     // api, get cart list
//     async get_cartlist(payload) {
//         const reponse = await Repository.get(`${baseUrl}/cart/list`, { headers: { Cookie: `wCAccessToken=${payload.Cookie}` } })
//             .then(response => {
//                 console.log(response.data)
//                 return response.data;
//             })
//             .catch(error => ({ error: JSON.stringify(error) }));
//         return reponse;
//     }

// }

// export default new CartRepository();
