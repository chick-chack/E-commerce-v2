export const actionTypes = {
    // GET_MALLS: 'GET_MALLS',
    // GET_MALLS_SUCCESS: 'GET_MALLS_SUCCESS',
    // GET_MALLS_ERROR: 'GET_MALLS_ERROR',

    GET_MALL_INFO: 'GET_MALL_INFO',
    GET_MALL_INFO_SUCCESS: 'GET_MALL_INFO_SUCCESS',
    GET_MALL_INFO_ERROR:'GET_MALL_INFO_ERROR',

    // get product by mall id
    GET_PRODUCTS_BY_MALLS: 'GET_PRODUCTS_BY_MALLS',
    GET_PRODUCTS_BY_MALLS_SUCCESS: 'GET_PRODUCTS_BY_MALLS_SUCCESS',
    GET_PRODUCTS_BY_MALLS_ERROR: 'GET_PRODUCTS_BY_MALLS_ERROR',

    // get all products in specific section  by mall id &  product section title
    GET_ALL_PRODUCTS_SECTION_BY_MALLS: 'GET_ALL_PRODUCTS_SECTION_BY_MALLS',
    GET_ALL_PRODUCTS_SECTION_BY_MALLS_SUCCESS: 'GET_ALL_PRODUCTS_SECTION_BY_MALLS_SUCCESS',
    GET_ALL_PRODUCTS_SECTION_BY_MALLS_ERROR: 'GET_ALL_PRODUCTS_SECTION_BY_MALLS_ERROR',

    // get all stores by mall id
    GET_ALL_STORES_BY_MALLS: 'GET_ALL_STORES_BY_MALLS',
    GET_ALL_STORES_BY_MALLS_SUCCESS: 'GET_ALL_STORES_BY_MALLS_SUCCESS',
    GET_ALL_STORES_BY_MALLS_ERROR: 'GET_ALL_STORES_BY_MALLS_ERROR',

    // get top rate stores by mall id
    GET_TOP_STORES_BY_MALLS: 'GET_TOP_STORES_BY_MALLS',
    GET_TOP_STORES_BY_MALLS_SUCCESS: 'GET_TOP_STORES_BY_MALLS_SUCCESS',
    GET_TOP_STORES_BY_MALLS_ERROR: 'GET_TOP_STORES_BY_MALLS_ERROR',

    // get all top rate stores by mall id
    GET_ALL_TOP_STORES_BY_MALLS: 'GET_ALL_TOP_STORES_BY_MALLS',
    GET_ALL_TOP_STORES_BY_MALLS_SUCCESS: 'GET_ALL_TOP_STORES_BY_MALLS_SUCCESS',
    GET_ALL_TOP_STORES_BY_MALLS_ERROR: 'GET_ALL_TOP_STORES_BY_MALLS_ERROR',

    // get total stores in mall

    GET_TOTAL_OF_STORES_BY_MALL: 'GET_TOTAL_OF_STORES_BY_MALL',
    GET_TOTAL_OF_STORES_BY_MALL_SUCCESS: 'GET_TOTAL_OF_STORES_BY_MALL_SUCCESS',




};



// export function getMalls(payload) {
//     return { type: actionTypes.GET_MALLS, payload };
// }

// export function getMallsSuccess(data) {
//     return {
//         type: actionTypes.GET_MALLS_SUCCESS,
//         data,
//     };
// }

// export function getMallsError(error) {
//     return {
//         type: actionTypes.GET_MALLS_ERROR,
//         error,
//     };
// }




// get mall info by mall id
export function getMallInfoById(payload) {
    return { type: actionTypes.GET_MALL_INFO,
         payload};
}

export function getMallInfoByIdSuccess(data) {
    return {
        type: actionTypes.GET_MALL_INFO_SUCCESS,
        data,
    };
}

export function getMallInfoByIdError(error) {
    return {
        type: actionTypes.GET_MALL_INFO_ERROR,
        error,
    };
}





// get products by mall id
export function getProductsByMalls(payload) {
    return { type: actionTypes.GET_PRODUCTS_BY_MALLS,
         payload};
}

export function getProductsByMallsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_MALLS_SUCCESS,
        data,
    };
}

export function getProductsByMallsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_MALLS_ERROR,
        error,
    };
}

// get all stores by mall id

export function getAllStoresMalls(payload , limit, offset) {

    return { type: actionTypes.GET_ALL_STORES_BY_MALLS, 
        payload ,
        limit,
        offset};
}

export function getAllStoresMallsSuccess(data) {
    return {
        type: actionTypes.GET_ALL_STORES_BY_MALLS_SUCCESS,
        data,
    };
}

export function getAllStoresMallsError(error) {
    return {
        type: actionTypes.GET_ALL_STORES_BY_MALLS_ERROR,
        error,
    };
}

// Get total stores in mall

export function getTotalStoresByMall(payload) {
    return { type: actionTypes.GET_TOTAL_OF_STORES_BY_MALL };
}


export function getTotalStoresByMallSuccess(data) {
    return {
        type: actionTypes.GET_TOTAL_OF_STORES_BY_MALL_SUCCESS,
        data,
    };
}


// get top rate stores by mall id

export function getTopStoresByMalls(payload) {
    return { type: actionTypes.GET_TOP_STORES_BY_MALLS, payload };
}

export function getTopStoresByMallsSuccess(data) {
    return {
        type: actionTypes.GET_TOP_STORES_BY_MALLS_SUCCESS,
        data,
    };
}

export function getTopStoresByMallsError(error) {
    return {
        type: actionTypes.GET_TOP_STORES_BY_MALLS_ERROR,
        error,
    };
}


// get  all  top rate stores by mall id

export function getAllTopStoresByMalls(payload , limit, offset) {
    return { type: actionTypes.GET_ALL_TOP_STORES_BY_MALLS, 
                payload,
                limit,
                offset };
}

export function getAllTopStoresByMallsSuccess(data) {
    return {
        type: actionTypes.GET_ALL_TOP_STORES_BY_MALLS_SUCCESS,
        data,
    };
}

export function getAllTopStoresByMallsError(error) {
    return {
        type: actionTypes.GET_ALL_TOP_STORES_BY_MALLS_ERROR,
        error,
    };
}



// get  all products in specific section  by mall id &  product section title

export function getAllProductsSectionByMalls(payload ,sectionTitle, limit, offset) {
    return { type: actionTypes.GET_ALL_PRODUCTS_SECTION_BY_MALLS, 
                payload,
                sectionTitle,
                limit,
                offset };
}

export function getAllProductsSectionByMallsSuccess(data) {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_SECTION_BY_MALLS_SUCCESS,
        data,
    };
}

export function getAllProductsSectionByMallsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_SECTION_BY_MALLS_ERROR,
        error,
    };
}