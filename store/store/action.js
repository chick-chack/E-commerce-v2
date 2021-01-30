export const actionTypes = {
    // get store details by  id
    GET_STORE_BY_ID: 'GET_SORE_BY_ID',
    GET_STORE_BY_ID_SUCCESS: 'GET_STORE_BY_ID_SUCCESS',
    GET_STORE_BY_ID_ERROR: 'GET_STORE_BY_ID_ERROR',

    // get all stores by mall id
    GET_PRODUCTS_BY_STORE_ID: 'GET_PRODUCTS_BY_STORE_ID',
    GET_PRODUCTS_BY_STORE_ID_SUCCESS: 'GET_PRODUCTS_BY_STORE_ID_SUCCESS',
    GET_PRODUCTS_BY_STORE_ID_ERROR: 'GET_PRODUCTS_BY_STORE_ID_ERROR',

    // get all pgroducts in specific store by category id
    GET_ALL_PRODUCTS_BY_CATEGORY: 'GET_ALL_PRODUCTS_BY_CATEGORY',
    GET_ALL_PRODUCTS_BY_CATEGORY_SUCCESS: 'GET_ALL_PRODUCTS_BY_CATEGORY_SUCCESS',
    GET_ALL_PRODUCTS_BY_CATEGORY_ERROR: 'GET_ALL_PRODUCTS_BY_CATEGORY_ERROR',


/* =========================================================
||||||||||||||| get all category for store |||||||||||||||||
==========================================================*/

    ALL_CATEGORY_STORE: 'ALL_CATEGORY_STORE',
    ALL_CATEGORY_STORE_SUCCESS: 'ALL_CATEGORY_STORE_SUCCESS',



};



/* =========================================================
||||||||||||||| get all category for store |||||||||||||||||
==========================================================*/

export function all_category(id) {
    return { type: actionTypes.ALL_CATEGORY_STORE,id };
}

export function all_categorySuccess(data) {
    return { type: actionTypes.ALL_CATEGORY_STORE_SUCCESS, data };
}
// end all_category



// start get store details by  id
export function getStoresById(id) {
    console.log(id)
    return { type: actionTypes.GET_STORE_BY_ID, id };
}
export function getStoresByIdSuccess(data) {
    return {
        type: actionTypes.GET_STORE_BY_ID_SUCCESS,
        data,
    };
}
export function getStoresByIdError(error) {
    return {
        type: actionTypes.GET_STORE_BY_ID_ERROR,
        error,
    };
}
// end get store details by  id


// get products by store id
export function getProductsByStores(id) {
    
    return { type: actionTypes.GET_PRODUCTS_BY_STORE_ID, id };
}
export function getProductsByStoresSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_STORE_ID_SUCCESS,
        data,
    };
}
export function getProductsByStoresError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_STORE_ID_ERROR,
        error,
    };
}




/*=========================================================================================
|||||||||||||| get all category products by store id and subcategory id ||||||||||||||||||||
==========================================================================================*/

export function getAllProductsByCategory( storeId ,subcategoryId, limit, offset ) {
    return { type: actionTypes.GET_ALL_PRODUCTS_BY_CATEGORY, 
                storeId,
                subcategoryId,
                limit,
                offset };
}

export function getAllProductsByCategorySuccess(data) {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_BY_CATEGORY_SUCCESS,
        data,
    };
}

export function getAllProductsByCategoryError(error) {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_BY_CATEGORY_ERROR,
        error,
    };
}



// get  all products in specific section  by mall id &  product section title

// export function getAllProductsByCategory(payload ,categoryId, limit, offset) {
//     console.log("view all top stores action", payload ,categoryId, limit, offset);
//     return { type: actionTypes.GET_ALL_PRODUCTS_BY_CATEGORY, 
//                 payload,
//                 categoryId,
//                 limit,
//                 offset };
// }

// export function getAllProductsByCategorySuccess(data) {
//     console.log("view all top stores succes  action",data);
//     return {
//         type: actionTypes.GET_ALL_PRODUCTS_BY_CATEGORY_SUCCESS,
//         data,
//     };
// }

// export function getAllProductsByCategoryError(error) {
//     return {
//         type: actionTypes.GET_PRODUCTS_BY_CATEGORY_ERROR,
//         error,
//     };
// }


// get products by store id




// export const actionTypes = {
//     // get store details by  id
//     GET_STORE_BY_ID: 'GET_SORE_BY_ID',
//     GET_STORE_BY_ID_SUCCESS: 'GET_STORE_BY_ID_SUCCESS',
//     GET_STORE_BY_ID_ERROR: 'GET_STORE_BY_ID_ERROR',

//     // get all stores by mall id
//     GET_PRODUCTS_BY_STORE_ID: 'GET_PRODUCTS_BY_STORE_ID',
//     GET_PRODUCTS_BY_STORE_ID_SUCCESS: 'GET_PRODUCTS_BY_STORE_ID_SUCCESS',
//     GET_PRODUCTS_BY_STORE_ID_ERROR: 'GET_PRODUCTS_BY_STORE_ID_ERROR',
// };

// // start get store details by  id
// export function getStoresById(payload) {
//     return { type: actionTypes.GET_STORE_BY_ID, payload };
// }
// export function getStoresByIdSuccess(data) {
//     return {
//         type: actionTypes.GET_STORE_BY_ID_SUCCESS,
//         data,
//     };
// }
// export function getStoresByIdError(error) {
//     return {
//         type: actionTypes.GET_STORE_BY_ID_ERROR,
//         error,
//     };
// }
// // end get store details by  id


// // get products by store id
// export function getProductsByStores(payload) {
//     return { type: actionTypes.GET_PRODUCTS_BY_STORE_ID, payload };
// }
// export function getProductsByStoresSuccess(data) {
//     return {
//         type: actionTypes.GET_PRODUCTS_BY_STORE_ID_SUCCESS,
//         data,
//     };
// }
// export function getProductsByStoresError(error) {
//     return {
//         type: actionTypes.GET_PRODUCTS_BY_STORE_ID_ERROR,
//         error,
//     };
// }
// // get products by store id