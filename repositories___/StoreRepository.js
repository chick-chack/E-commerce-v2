import Repository, { baseUrl, serializeQuery } from './Repository';

class StoreRepository {
    constructor(callback) {
        this.callback = callback;
    }
    // api return info the specific store
    async getStoreinfo(payload) {
        const reponse = await Repository.get(`${baseUrl}/common/store/${payload}/store-info`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    // // api, the most sale products from each category are returned in-store by the store ID
    // async getStoreproductsMostSale(payload) {
    //     const reponse = await Repository.get(`${baseUrl}common/home/products`)
    //         .then(response => {
    //             console.log(response)
    //             return response.data;
    //         })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return reponse;
    // }

    // api, the most sale products from each category are returned in-store by the store ID
    async getStoreproductsMostSale(id) {
        var data = [];
        const reponse = await Repository.get(`${baseUrl}/common/store/${id}/products-most-sale-with-category`)
            .then(response => {
                for (var i = 0; i < response.data.data.length; i++) {
                    for (var j = 0; j < response.data.data[i].length; j++) {
                        var item = {
                            'title_en': response.data.data[i][j].subCategory.name_en,
                            'title_ar': response.data.data[i][j].subCategory.name_ar,
                            'id': response.data.data[i][j].subCategory.id,
                            'products': response.data.data[i]
                        };
                        if( data.find(item => item.title_en === response.data.data[i][j].subCategory.name_en )){

                        }
                        else{ data.push(item);}
                    }
                }
                return data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


        // get  all products in specific category  by store id 

        async getAllProductsByCategory(  storeId ,subcategoryId, limit, offset){
    
            const response = await Repository.get(`${baseUrl}/common/store/${storeId}/products-most-sale-by-sub-category?subCategoryId=${subcategoryId}&limit=${limit}&offset=${offset}`)
            .then(response => {
                return response.data;
            })
                .catch(error => ({ error: JSON.stringify(error) }));
            return response;
        
            }
    
    

    // // get  all products in specific category  by store id 

    // async getAllProductsByCategory(payload, subcategoryId, limit, offset){

    //     const reponse = await Repository.get(`${baseUrl}/common/store/${payload}/products-most-sale-by-sub-category?title=${subcategoryId}&limit=${limit}&offset=${offset}`)
    //     .then(response => {
    //         console.log(response)
    //         return response.data;
    //     })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return reponse;
    
    //     }


    // api, VIew all category by store id
    // async getAllcategory_store(id) {
    //     // const reponse = await Repository.get(`${baseUrl}/${id}`)
    //     //     .then(response => {
    //             return id;
    //     //     })
    //     //     .catch(error => ({ error: JSON.stringify(error) }));
    //     // return reponse;
    // }



/* =========================================================
||||||||||||||| get all category for store |||||||||||||||||
==========================================================*/

    async getAllcategory_store(id) {
         const response = await Repository.get(`${baseUrl}/common/store/${id}/products-most-sale-with-category`)
             .then(response => {
                return response.data;
             })
             .catch(error => ({ error: JSON.stringify(error) }));
         return response.data;
    }

}



export default new StoreRepository();
