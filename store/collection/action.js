export const actionTypes = {
    GET_COLLECTIONSFORTEST: 'GET_COLLECTIONSFORTEST',
    GET_COLLECTIONSFORTEST_SUCCESS: 'GET_COLLECTIONSFORTEST_SUCCESS',

    GET_COLLECTIONSHOMEMALLS: 'GET_COLLECTIONSHOMEMALLS',
    GET_COLLECTIONSHOMEMALLS_SUCCESS: 'GET_COLLECTIONSHOMEMALLS_SUCCESS',

    GET_COLLECTIONSMALLINFO: 'GET_COLLECTIONSMALLINFO',
    GET_COLLECTIONSMALLINFO_SUCCESS: 'GET_COLLECTIONSMALLINFO_SUCCESS',

    GET_COLLECTIONS: 'GET_COLLECTIONS',
    GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',

    GET_COLLECTION: 'GET_COLLECTION',
    GET_COLLECTION_SUCCESS: 'GET_COLLECTION_SUCCESS',

    GET_CATEGORIES: 'GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',

    GET_ALLMALLS: 'GET_ALLMALLS',
    GET_ALLMALLS_SUCCESS: 'GET_ALLMALLS_SUCCESS',

    // start home page
    GET_PRODUCTS_HOME: 'GET_PRODUCTS_HOME',
    GET_PRODUCTS_HOME_SUCCESS: 'GET_PRODUCTS_HOME_SUCCESS',

    GET_MALLS_HOME: 'GET_MALLS_HOME',
    GET_MALLS_HOME_SUCCESS: 'GET_MALLS_HOME_SUCCESS',
    // end home page

    // product test
    GET_COLLECTIONSFORTEST: 'GET_COLLECTIONSFORTEST',
    GET_COLLECTIONSFORTEST_SUCCESS: 'GET_COLLECTIONSFORTEST_SUCCESS',

    // get all products in specific section  by  product section title
    GET_ALL_PRODUCTS_SECTION: 'GET_ALL_PRODUCTS_SECTION',
    GET_ALL_PRODUCTS_SECTION_SUCCESS: 'GET_ALL_PRODUCTS_SECTION_SUCCESS',
    GET_ALL_PRODUCTS_SECTION_ERROR: 'GET_ALL_PRODUCTS_SECTION_ERROR',

    // get all home  top rate stores by mall id
    GET_ALL_HOME_TOP_STORES: 'GET_ALL_HOME_TOP_STORES',
    GET_ALL_HOME_TOP_STORES_SUCCESS: 'GET_ALL_HOME_TOP_STORES_SUCCESS',
    GET_ALL_HOME_TOP_STORES_ERROR: 'GET_ALL_HOME_TOP_STORES_ERROR',

};

// START API HOME
export function getMalls_Home() {
    return { type: actionTypes.GET_MALLS_HOME };
}

export function getMalls_HomeSuccess(payload) {
    return { type: actionTypes.GET_MALLS_HOME_SUCCESS, payload };
}

export function getProduct_Home() {
    return { type: actionTypes.GET_PRODUCTS_HOME };
}

export function getProduct_HomeSuccess(payload) {
    return { type: actionTypes.GET_PRODUCTS_HOME_SUCCESS, payload };
}
// END API FOR HOME

export function getCollections(payload) {
    return { type: actionTypes.GET_COLLECTIONS, payload };
}

export function getCollectionsMallInfo(payload) {
    return { type: actionTypes.GET_COLLECTIONSMALLINFO, payload };
}

export function getCollectionsMallInfoSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONSMALLINFO_SUCCESS,
        payload,
    };
}
export function getCollectionshomemalls() {
    return { type: actionTypes.GET_COLLECTIONSHOMEMALLS };
}

export function getCollectionshomemallsSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONSHOMEMALLS_SUCCESS,
        payload,
    };
}
export function getCollectionsfortest() {
    return { type: actionTypes.GET_COLLECTIONSFORTEST };
}

export function getCollectionsfortestSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONSFORTEST_SUCCESS,
        payload,
    };
}

export function getCollectionsSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONS_SUCCESS,
        payload,
    };
}

export function getMalls(payload) {
    return { type: actionTypes.GET_ALLMALLS, payload };
}

export function getMallsSuccess(payload) {
    return {
        type: actionTypes.GET_ALLMALLS_SUCCESS,
        payload,
    };
}

export function getCategories(payload) {
    return { type: actionTypes.GET_CATEGORIES, payload };
}

export function getCategoriesSuccess(payload) {
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload,
    };
}

export function getCollection(payload) {
    return { type: actionTypes.GET_COLLECTIONS, payload };
}

export function getCollectionSuccess(payload) {
    return {
        type: actionTypes.GET_COLLECTIONS_SUCCESS,
        payload,
    };
}




// get  all products in specific section by  product section title

export function getAllProductsSection(sectionTitle, limit, offset) {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_SECTION,
        sectionTitle,
        limit,
        offset
    };
}

export function getAllProductsSectionSuccess(data) {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_SECTION_SUCCESS,
        data,
    };
}

export function getAllProductsSectionError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_SECTION_ERROR,
        error,
    };
}

// get  all  home  top rate stores 
export function getAllHomeTopStores(limit, offset) {
    return {
        type: actionTypes.GET_ALL_HOME_TOP_STORES,
        limit,
        offset
    };
}

export function getAllHomeTopStoresSuccess(data) {
    return {
        type: actionTypes.GET_ALL_HOME_TOP_STORES_SUCCESS,
        data,
    };
}

export function getAllHomeTopStoresError(error) {
    return {
        type: actionTypes.GET_ALL_HOME_TOP_STORES_ERROR,
        error,
    };
}