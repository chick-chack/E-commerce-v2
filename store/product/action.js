
export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',

    GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
    GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
    GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
    GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
    GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',

    GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
    GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',


    GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
    GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',

    // get product by keyword in store 
    GET_PRODUCTS_BY_KEYWORD_IN_STORE: "GET_PRODUCTS_BY_KEYWORD_IN_STORE",
    GET_PRODUCTS_BY_KEYWORD_IN_STORE_SUCCESS: "GET_PRODUCTS_BY_KEYWORD_IN_STORE_SUCCESS",

    // search home
    ALL_CATEGORY_HOME: 'ALL_CATEGORY_HOME',
    ALL_CATEGORY_HOME_SUCCESS: 'ALL_CATEGORY_HOME_SUCCESS',


    //  sub category 
    GET_SUB_CATEGORY: 'GET_SUB_CATEGORY',
    GET_SUB_CATEGORY_SUCCESS: "GET_SUB_CATEGORY_SUCCESS",



    GET_BRANDS: 'GET_BRANDS',
    GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',

    GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
    GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS',


    // add REVIEW 
    ADD_REVIEW: 'ADD_REVIEW',
    ADD_REVIEW_SUCCESS: 'ADD_REVIEW_SUCCESS',
    ADD_REVIEW_ERROR: 'ADD_REVIEW_ERROR',
};
 
// START ADD REVIEW 
export function add_review(productId, rateMessage, rateValue) {
    console.log("raaaaaaaaaaaaaaaaaaaaaate action ",productId,  rateMessage, rateValue)
    return {
        type: actionTypes.ADD_REVIEW,
        productId,
        rateMessage,
        rateValue
    };
}

export function add_review_Success() {
    return {
        type: actionTypes.ADD_REVIEW_SUCCESS,
   
    };
}

export function add_review_Error(error) {
    return {
        type: actionTypes.ADD_REVIEW_ERROR,
        error,
    };
}
// END ADD REVIEW 


export function getProducts(payload) {
    return { type: actionTypes.GET_PRODUCTS, payload };
}

export function getTotalProducts() {
    return { type: actionTypes.GET_TOTAL_OF_PRODUCTS };
}

export function getBrands() {
    return { type: actionTypes.GET_BRANDS };
}

export function getBrandsSuccess(payload) {
    return { type: actionTypes.GET_BRANDS_SUCCESS, payload };
}

export function getProductCategories() {
    return { type: actionTypes.GET_PRODUCT_CATEGORIES };
}

export function getProductCategoriesSuccess(payload) {
    return { type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS, payload };
}

export function getTotalProductsSuccess(payload) {
    return {
        type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
        payload,
    };
}

export function getProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        data,
    };
}
export function getProductByKeywordsSuccess(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
        payload,
    };
}

export function getSingleProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
        data,
    };
}

export function getProductsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_ERROR,
        error,
    };
}

export function getProductsByCategory(category) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
        category,
    };
}

export function getProductsByBrand(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_BRAND,
        payload,
    };
}

export function getProductsByKeyword(keyword) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
        keyword,
    };
}

// get product using keyworh in store page

export function getProductsByKeyword_inStore(keyword, store_id) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD_IN_STORE,
        keyword,
        store_id
    };
}

export function getProductsByKeyword_inStoreSuccess(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_KEYWORD_IN_STORE_SUCCESS,
        payload,
    };
}


export function getProductsById(id) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID,
        id,
    };
}

export function getProductsByPrice(payload) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
        payload,
    };
}

// start SUB_category
export function all_sub_category(id) {
    console.log('-------------------------------',id)

    return { type: actionTypes.GET_SUB_CATEGORY, id};
}

export function all_sub_categorySuccess(payload) {
    return { type: actionTypes.GET_SUB_CATEGORY_SUCCESS, payload };
}
// end SUB_category'



// start all_category
export function all_category() {
    return { type: actionTypes.ALL_CATEGORY_HOME };
}

export function all_categorySuccess(payload) {
    return { type: actionTypes.ALL_CATEGORY_HOME_SUCCESS, payload };
}
// end all_category'