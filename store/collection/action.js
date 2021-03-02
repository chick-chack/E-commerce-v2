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

  /* get banner for home page */
  GET_HOME_BANNERS: 'GET_HOME_BANNERS',
  GET_HOME_BANNERS_SUCCESS: 'GET_HOME_BANNERS_SUCCESS',

  /* get promotion for home page */
  GET_HOME_PROMOTIONS: 'GET_HOME_PROMOTIONS',
  GET_HOME_PROMOTIONS_SUCCESS: 'GET_HOME_PROMOTIONS_SUCCESS',

    // GET PRODUCTS BY CATEGORY ID
    GET_PRODUCTS_BY_CAT_ID:'GET_PRODUCTS_BY_CAT_ID',
    GET_PRODUCTS_BY_CAT_ID_SUCCESS:'GET_PRODUCTS_BY_CAT_ID_SUCCESS',
    GET_PRODUCTS_BY_CAT_ID_ERROR:'GET_PRODUCTS_BY_CAT_ID_ERROR',

    // SUBSCRIPTION api
    SUBSCRIPTION:'SUBSCRIPTION',
    SUBSCRIPTION_SUCCESS:'SUBSCRIPTION_SUCCESS',

    //SEND MESSAGE
    SEND_MESSAGE:"SEND_MESSAGE",
    SEND_MESSAGE_SUCCESS:"SEND_MESSAGE_SUCCESS"


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




/* HOME PAGE */

export function getHomeBanners() {
    return { type: actionTypes.GET_HOME_BANNERS, };
}

export function getHomeBannersSuccess(payload) {
    return {
        type: actionTypes.GET_HOME_BANNERS_SUCCESS,
        payload
    };
}


export function getHomePromotions() {
    return { type: actionTypes.GET_HOME_PROMOTIONS, };
}

export function getHomePromotionsSuccess(payload) {
    return {
        type: actionTypes.GET_HOME_PROMOTIONS_SUCCESS,
        payload
    };
}


// get   all products by category id

export function getProductByCategortyId(cat_id, limit, offset) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_CAT_ID,
        cat_id,
        limit,
        offset
    };
}

export function getProductByCategortyIdSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_CAT_ID_SUCCESS,
        data,
    };
}

export function getProductByCategortyIdError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_BY_CAT_ID_ERROR,
        error,
    };
}

// Subscription  api

export function subscription(sub_email) {
    return { type: actionTypes.SUBSCRIPTION, sub_email };
}

export function subscriptionSuccess(info) {
    return { type: actionTypes.SUBSCRIPTION_SUCCESS, info };
}

// send message  api

export function sendMessage(  fullname,email,message) {
    return { type: actionTypes.SEND_MESSAGE, fullname,email,message};
}

export function sendMessageSuccess(info) {
    return { type: actionTypes.SEND_MESSAGE_SUCCESS, info };
}
