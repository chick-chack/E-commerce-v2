import Repository, { baseUrl,options_auth, serializeQuery } from './Repository';
import axios from 'axios';

class ProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getRecords(params) {
        var mainCategoryId = '';
        if (params.mainCategoryId == 'All' || params.mainCategoryId == undefined) { } else { mainCategoryId = params.mainCategoryId }
        const reponse = await Repository.get(
            `${baseUrl}/common/mall/1/search?name_en=${params.title_contains}&name_ar=${params.title_contains}&mainCategoryId=${mainCategoryId}`
        )
            .then(response => {
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }


    // records for store search

    async getRecordsForStore(params, store_id) {
        var mainCategoryId = '';
        if (params.mainCategoryId == 'All' || params.mainCategoryId == undefined) { } else { mainCategoryId = params.mainCategoryId }

        const reponse = await Repository.get(
            `${baseUrl}/common/store/${store_id}/search?name_en=${params.title_contains}&name_ar=${params.title_contains}&subCategoryId=${mainCategoryId}`
        )
            .then(response => {
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getBrands() {
        const reponse = await Repository.get(`${baseUrl}/brands`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductCategories() {
        const reponse = await Repository.get(`${baseUrl}/product-categories`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getTotalRecords() {
        const reponse = await Repository.get(`${baseUrl}/products/count`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    // async getProductsById(payload) {
    //     const reponse = await Repository.get(`${baseUrl}/products/${payload}`
    //     //, { headers: { Cookie: 'cGAccessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY3VzdG9tZXItd2ViIiwiaWQiOjM3LCJmaXJzdE5hbWUiOiJhbWluIiwibGFzdE5hbWUiOiJraW5nIiwiZW1haWwiOiJhbWlua2luZzE0MEBnbWFpbC5jb20iLCJjb3VudHJ5IjoiUGFsZXN0aW5lLCBTdGF0ZSBvZiIsIm1vYmlsZSI6IjAwOTcwNTk1MTQwMzM0IiwidmVyaWZ5RW1haWwiOiJmYWxzZSIsInZlcmlmeU1vYmlsZSI6ZmFsc2UsImlhdCI6MTYwMzk3NDg2Mn0.0Yd9RKd1YLPFenKopnHOSJkfcC7aN--0NBVdUW4CyzU' } }
    //     )
    //         .then(response => {
    //             return response.data;
    //         })
    //         .catch(error => ({ error: JSON.stringify(error) }));
    //     return reponse;
    // }
    async getProductsById(payload) {
        const reponse = await Repository.get(`${baseUrl}/common/product/product-info/${payload}`
            //, { headers: { Cookie: 'cGAccessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiY3VzdG9tZXItd2ViIiwiaWQiOjM3LCJmaXJzdE5hbWUiOiJhbWluIiwibGFzdE5hbWUiOiJraW5nIiwiZW1haWwiOiJhbWlua2luZzE0MEBnbWFpbC5jb20iLCJjb3VudHJ5IjoiUGFsZXN0aW5lLCBTdGF0ZSBvZiIsIm1vYmlsZSI6IjAwOTcwNTk1MTQwMzM0IiwidmVyaWZ5RW1haWwiOiJmYWxzZSIsInZlcmlmeU1vYmlsZSI6ZmFsc2UsImlhdCI6MTYwMzk3NDg2Mn0.0Yd9RKd1YLPFenKopnHOSJkfcC7aN--0NBVdUW4CyzU' } }
        )
            .then(response => {
                var product_attributes_color = [];
                var product_attributes_size = [];
                var raty_1 = [];
                var raty_2 = [];
                var raty_3 = [];
                var raty_4 = [];
                var raty_5 = [];
                var review_5 = {};
                var review_4 = {};
                var review_3 = {};
                var review_2 = {};
                var review_1 = {};
                let products = response.data;
                if (products.data.productChildren.length == 1) {
                    product_attributes_color.push(response.data.data.productChildren[0])

                } else {
                    for (let i = 0; i < products.data.productChildren.length; i++) {
                        var size = [];
                        var images = [];
                        if (products.data.productChildren[i].colorName_en != null) {

                            var state1 = true;
                            for (let e = 0; e < product_attributes_color.length; e++) {
                                if (product_attributes_color[e].colorName_en == products.data.productChildren[i].colorName_en) {
                                    state1 = false;
                                }
                            }
                            if (state1) {
                                var item = {
                                    "id": products.data.productChildren[i].id,
                                    "colorName_ar": products.data.productChildren[i].colorName_ar,
                                    "colorName_en": products.data.productChildren[i].colorName_en,
                                    "colorCode": products.data.productChildren[i].colorCode,
                                    "price": products.data.productChildren[i].price,
                                    "isOffer": products.data.productChildren[i].isOffer,
                                    "offerRatio": products.data.productChildren[i].offerRatio,
                                    "quantity": products.data.productChildren[i].quantity,
                                    "noOfSale": products.data.productChildren[i].noOfSale,
                                    "productId": products.data.id
                                };
                                var size1 = {
                                    'price': products.data.productChildren[i].price,
                                    'size': products.data.productChildren[i].size,
                                    'quantity': products.data.productChildren[i].quantity,
                                    'id': products.data.productChildren[i].id
                                }
                                size.push(size1)
                                images.push(products.data.productChildren[i].image)
                                for (let j = 0; j < products.data.productChildren.length; j++) {
                                    if (products.data.productChildren[j].colorName_en == products.data.productChildren[i].colorName_en && products.data.productChildren[j].id != products.data.productChildren[i].id) {
                                        var size2 = {
                                            'price': products.data.productChildren[j].price,
                                            size: products.data.productChildren[j].size,
                                            'quantity': products.data.productChildren[j].quantity,
                                            'id': products.data.productChildren[j].id
                                        }
                                        size.push(size2)
                                        images.push(products.data.productChildren[j].image)
                                    }
                                }
                                item['images'] = images;
                                item['sizes'] = size;
                                product_attributes_color.push(item)
                            }
                        }
                    }
                    for (let i = 0; i < products.data.productChildren.length; i++) {
                        var size = [];
                        var images = [];
                        if (products.data.productChildren[i].size != null) {
                            var state1 = true;
                            for (let e = 0; e < product_attributes_size.length; e++) {
                                if (product_attributes_size[e].size == products.data.productChildren[i].size) {
                                    state1 = false;
                                }
                            }
                            if (state1) {
                                var item = {
                                    "id": products.data.productChildren[i].id,
                                    "colorName_ar": products.data.productChildren[i].colorName_ar,
                                    "size": products.data.productChildren[i].size,
                                    "colorCode": products.data.productChildren[i].colorCode,
                                    "price": products.data.productChildren[i].price,
                                    "isOffer": products.data.productChildren[i].isOffer,
                                    "offerRatio": products.data.productChildren[i].offerRatio,
                                    "quantity": products.data.productChildren[i].quantity,
                                    "noOfSale": products.data.productChildren[i].noOfSale,
                                    "productId": products.data.id
                                };
                                var size1 = {
                                    'price': products.data.productChildren[i].price,
                                    'colorName_en': products.data.productChildren[i].colorName_en,
                                    'colorName_ar': products.data.productChildren[i].colorName_ar,
                                    'quantity': products.data.productChildren[i].quantity,
                                    'id': products.data.productChildren[i].id
                                }
                                size.push(size1)
                                images.push(products.data.productChildren[i].image)
                                for (let j = 0; j < products.data.productChildren.length; j++) {
                                    if (products.data.productChildren[j].size == products.data.productChildren[i].size && products.data.productChildren[j].id != products.data.productChildren[i].id) {
                                        var size2 = {
                                            'price': products.data.productChildren[j].price,
                                            'colorName_ar': products.data.productChildren[j].colorName_ar,
                                            'colorName_en': products.data.productChildren[j].colorName_en,
                                            'quantity': products.data.productChildren[j].quantity,
                                            'id': products.data.productChildren[j].id
                                        }
                                        size.push(size2)
                                        images.push(products.data.productChildren[j].image)
                                    }
                                }
                                item['images'] = images;
                                item['colors'] = size;
                                product_attributes_size.push(item)
                            }
                        }
                    }
                }
                var datee = {
                    'id': response.data.data.id,
                    'name_ar': response.data.data.name_ar,
                    'name_en': response.data.data.name_en,
                    'description_ar': response.data.data.description_ar,
                    'description_en': response.data.data.description_en,
                    'metaTitle_ar': response.data.data.metaTitle_ar,
                    'metaTitle_en': response.data.data.metaTitle_en,
                    'metaDescription_ar': response.data.data.metaDescription_ar,
                    'metaDescription_en': response.data.data.metaDescription_en,
                    'metaImage': response.data.data.metaImage,
                    'specification': response.data.data.specification,
                    'descriptionPoint_ar': response.data.data.descriptionPoint_ar,
                    'descriptionPoint_en': response.data.data.descriptionPoint_en,
                    'tags': response.data.data.tags,
                    'images': response.data.data.images,
                    'rate': response.data.data.rate,
                    'numberOfRates': response.data.data.numberOfRates,
                    'showInStore': response.data.data.showInStore,
                    'noOfSale': response.data.data.noOfSale,
                    'quantity': response.data.data.quantity,
                    'createdAt': response.data.data.createdAt,
                    'updatedAt': response.data.data.updatedAt,
                    'traderId': response.data.data.traderId,
                    'mainCategoryId': response.data.data.mainCategoryId,
                    'subCategoryId': response.data.data.subCategoryId,
                    'subSubCategoryId': response.data.data.subSubCategoryId,
                    'libraryId': response.data.data.libraryId,
                    'productChildren': product_attributes_color,
                    'productChildren_orginal': response.data.data.productChildren,
                    'productChildren_size': product_attributes_size,
                    'mainCategory': response.data.data.mainCategory,
                    'subCategory': response.data.data.subCategory,
                    'subSubCategory': response.data.data.subSubCategory,
                    'trader': response.data.data.trader
                }
                if (response.data.reviews.length > 0) {
                    for (var i = 0; i < response.data.reviews.length; i++) {
                        if (response.data.reviews[i].value == 5) { raty_5.push(response.data.reviews[i]) }
                        else if (response.data.reviews[i].value == 4) { raty_4.push(response.data.reviews[i]) }
                        else if (response.data.reviews[i].value == 3) { raty_3.push(response.data.reviews[i]) }
                        else if (response.data.reviews[i].value == 2) { raty_2.push(response.data.reviews[i]) }
                        else if (response.data.reviews[i].value == 1) { raty_1.push(response.data.reviews[i]) }
                    }
                }
                review_5 = {
                    value: 5,
                    percent: (raty_5.length / datee.numberOfRates) * 100,
                    data: raty_5
                }
                review_4 = {
                    value: 4,
                    percent: (raty_4.length / datee.numberOfRates) * 100,
                    data: raty_4
                }
                review_3 = {
                    value: 3,
                    percent: (raty_3.length / datee.numberOfRates) * 100,
                    data: raty_3
                }
                review_2 = {
                    value: 2,
                    percent: (raty_2.length / datee.numberOfRates) * 100,
                    data: raty_2
                }
                review_1 = {
                    value: 1,
                    percent: (raty_1.length / datee.numberOfRates) * 100,
                    data: raty_1
                }
                let info = {
                    'review': {
                        'review_5': review_5,
                        'review_4': review_4,
                        'review_3': review_3,
                        'review_2': review_2,
                        'review_1': review_1,
                    },
                    'product': datee,
                    'review_orginal':response.data.reviews
                }
                return info;

            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByCategory(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/product-categories?slug=${payload}`
        )
            .then(response => {
                return response.data[0].products;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByBrands(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `id_in=${item}`;
            } else {
                query = query + `&id_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/brands?${query}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsByPriceRange(payload) {
        const reponse = await Repository.get(
            `${baseUrl}/products?${serializeQuery(payload)}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    // add new orders
    async add_review(productId, rateMessage, rateValue) {
        var info = {
            "review": rateMessage,
            "value": rateValue,
            "productId": productId,
        };
        var data = {
            data: info,
            url: '/rate-product',
            method: 'POST'
        };
        var respose = axios(options_auth(data)) 
            .then(response => {
                return response;
            })
            .catch(error => (console.log(error), {
                error: JSON.stringify(error)
            }));
        return respose;
    }

}

export default new ProductRepository();

