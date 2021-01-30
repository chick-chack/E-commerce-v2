import Repository, { baseUrl, serializeQuery } from './Repository';

class MallRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getProductCategories() {
        const reponse = await Repository.get(`${baseUrl}/product-categories`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    



    // get  specific mall info 

  // mall page api 1     api to returns all stores in specific mall, with pagination 

    async getMallInfoByMallId(payload) {
        const response = await Repository.get(`${baseUrl}/common/mall/${payload}/mall-info`)
            .then(response => {
                return response.data
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;

        //return data
    }



    // mall page api 1     api to returns all stores in specific mall, with pagination 

    async getAllStoresByMallId(payload,limit, offset) {
        const response = await Repository.get(`${baseUrl}/common/mall/${payload}/stores?offset=${offset}&limit=${limit}`)
            .then(response => {
                return response.data
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return response;

        //return data
    }


    // mall page api 2    api for products
    async getproductsByMallId(payload) {
        const reponse = await Repository.get(`${baseUrl}/common/mall/${payload}/products`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;

    }

    // mall page api 3    api for best store rating in the specific mall
    async getTopStoresByMallId(payload) {
        const reponse = await Repository.get(`${baseUrl}/common/mall/${payload}/stores-top-rate`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


 

    // api to returns all best store rating in specific mall
    async getAllTopStoresByMallId(payload, limit, offset){
        const reponse = await Repository.get(`${baseUrl}/common/mall/${payload}/stores-top-rate?limit=${limit}&offset=${offset}`)
        .then(response => {
            console.log(response)
            return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return reponse;

    }



// get  all products in specific section  by mall id &  product section title

    async getAllProductsSectionByMallId(payload, sectionTitle,  limit, offset){
        const reponse = await Repository.get(`${baseUrl}/common/mall/${payload}/products-by-title?title=${sectionTitle}&limit=${limit}&offset=${offset}`)
        .then(response => {
            console.log(response)
            return response.data;
        })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    
        }


    async getAllProductsByMallId(payload) {
        const reponse = await Repository.get(`${baseUrl}/common/mall/${payload}/products`)
            .then(response => {
                console.log(response)

                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    // api, VIew all by category in mall
    async getViewAllMallSection(payload) {
        const reponse = await Repository.get(`${baseUrl}/common/mall/${payload.id}/products-by-title?title=${payload.title}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

}

export default new MallRepository();
