import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import StoreRepository from '../../repositories/StoreRepository';

import {
    getStoresById,
    actionTypes,
    getStoresByIdSuccess,
    getStoresByIdError,
    getProductsByStores,
    getProductsByStoresSuccess,
    getProductsByStoresError,
    all_categorySuccess, 
    getAllProductsByCategorySuccess,
    getAllProductsByCategoryError


} from './action';
polyfill();



/* =========================================================
||||||||||||||| get all category for store |||||||||||||||||
==========================================================*/


function* all_category_store({ id }) {

    try {
        const data = yield call(StoreRepository.getAllcategory_store, id);
        yield put(all_categorySuccess(data));
    } catch (err) {
        console.log(err);
    }
}



// get store info by id
function* getStoresById_({ id }) {
    try {
        const store = yield call(StoreRepository.getStoreinfo, id);
        yield put(getStoresByIdSuccess(store));
    } catch (err) {
        yield put(getStoresByIdError(err));
    }
}

// get products by store id

function* getproductbystoreal({ id }) {
    try {
        const products = yield call(StoreRepository.getStoreproductsMostSale, id);
        yield put(getProductsByStoresSuccess(products));
    } catch (err) {
        yield put(getProductsByStoresError(err));
    }
}

// // get all products section  by mall id and product section title

// function* getAllProductsByCategory({payload ,categoryId, limit, offset }) {
//     console.log("view all top stores saga", payload ,categoryId, limit, offset);
//     try {
//         const data = yield call(StoreRepository.getAllProductsByCategory, payload ,categoryId, limit, offset );
//         yield put(getAllProductsByCategorySuccess(data));
//     } catch (err) {
//         yield put(getAllProductsByCategoryError(err));
//     }
// }


/*=========================================================================================
|||||||||||||| get all category products by store id and subcategory id ||||||||||||||||||||
==========================================================================================*/


function* getAllProductsByCategory({ storeId ,subcategoryId, limit, offset }) {
    try {
        const data = yield call(StoreRepository.getAllProductsByCategory,  storeId ,subcategoryId, limit, offset);
        yield put(getAllProductsByCategorySuccess(data));
    } catch (err) {
        yield put(getAllProductsByCategoryError(err));
    }
}



export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_STORE_BY_ID, getStoresById_)]);
    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_STORE_ID, getproductbystoreal)]);
    // yield all([takeEvery(actionTypes.GET_TOP_STORES_BY_MALLS, gettopstoresbymall)]);
    yield all([takeEvery(actionTypes.ALL_CATEGORY_STORE, all_category_store)]);
    yield all([takeEvery(actionTypes.GET_ALL_PRODUCTS_BY_CATEGORY, getAllProductsByCategory)]);
}



// import { all, put, takeEvery, call } from 'redux-saga/effects';
// import { polyfill } from 'es6-promise';
// import MallRepository from '../../repositories/MallRepository';

// import {
//     getStoresById,
//     getStoresByIdSuccess,
//     getStoresByIdError,
//     getProductsByStores,
//     getProductsByStoresSuccess,
//     getProductsByStoresError,
// } from './action';
// polyfill();
// // get store info by id
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


// export default function* rootSaga() {
//     yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_MALLS, getproductsbyStores)]);
//     yield all([takeEvery(actionTypes.GET_ALL_STORES_BY_MALLS, getallstoresbymall)]);
//     yield all([takeEvery(actionTypes.GET_TOP_STORES_BY_MALLS, gettopstoresbymall)]);
// }