import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import MallRepository from '../../repositories/MallRepository';

import {
    // getMalls,
    // getMallsSuccess,
    // getMallsError,
    actionTypes,
    getMallInfoByIdSuccess,
    getMallInfoByIdError,
    getProductsByMalls,
    getProductsByMallsSuccess,
    getProductsByMallsError,
    getAllStoresMallsSuccess,
    getAllStoresMallsError,
    getTopStoresByMallsSuccess,
    getTopStoresByMallsError,
    getAllTopStoresByMallsSuccess,
    getAllTopStoresByMallsError,
    getAllProductsSectionByMallsSuccess,
    getAllProductsSectionByMallsError,

} from './action';
polyfill();

// function* getMalls({ payload }) {
//     try {
//         const data = yield call(MallRepository.getMalls, payload);
//         yield put(getMallsSuccess(data));
//     } catch (err) {
//         yield put(getProductsError(err));
//     }
// }




function* getmallinfo({ payload}) {
    console.log("saga malllllllllllllllllllll", payload)
    try {

        const data = yield call(MallRepository.getMallInfoByMallId, payload);
        yield put(getMallInfoByIdSuccess(data));
    } catch (err) {
        yield put(getMallInfoByIdError(err));
    }
}



function* getproductsbymall({ payload}) {
    try {
        const data = yield call(MallRepository.getAllProductsByMallId, payload);
        yield put(getProductsByMallsSuccess(data));
    } catch (err) {
        yield put(getProductsByMallsError(err));
    }
}

function* getallstoresbymall({ payload , limit, offset }) {
    console.log("mallllll repos", payload, "offset", offset, " limi", limit)
    try {
        const data = yield call(MallRepository.getAllStoresByMallId, payload,limit, offset);
        console.log("mallllll data repos", data)
        yield put(getAllStoresMallsSuccess(data));
    } catch (err) {
        yield put(getAllStoresMallsError(err));
    }
}

function* gettopstoresbymall({ payload }) {
    try {
        const data = yield call(MallRepository.getTopStoresByMallId, payload);
        yield put(getTopStoresByMallsSuccess(data));
    } catch (err) {
        yield put(getTopStoresByMallsError(err));
    }
}

// get all top stores by mall id

function* getalltopstoresbymall({ payload , limit, offset }) {
    console.log("view all top stores saga", payload , limit, offset);
    
    try {
        const data = yield call(MallRepository.getAllTopStoresByMallId, payload,limit, offset);
        yield put(getAllTopStoresByMallsSuccess(data));
    } catch (err) {
        yield put(getAllTopStoresByMallsError(err));
    }
}

// get all products section  by mall id and product section title

function* getAllProductsSectionByMalls({ payload , sectionTitle, limit, offset }) {
    console.log("view all top stores saga", payload , sectionTitle , limit, offset);
    try {
        const data = yield call(MallRepository.getAllProductsSectionByMallId, payload, sectionTitle , limit, offset);
        yield put(getAllProductsSectionByMallsSuccess(data));
    } catch (err) {
        yield put(getAllProductsSectionByMallsError(err));
    }
}



export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_MALL_INFO, getmallinfo)]);
    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_MALLS, getproductsbymall)]);
    yield all([takeEvery(actionTypes.GET_ALL_STORES_BY_MALLS, getallstoresbymall)]);
    yield all([takeEvery(actionTypes.GET_TOP_STORES_BY_MALLS, gettopstoresbymall)]);
    yield all([takeEvery(actionTypes.GET_ALL_TOP_STORES_BY_MALLS, getalltopstoresbymall)]);
    yield all([takeEvery(actionTypes.GET_ALL_PRODUCTS_SECTION_BY_MALLS, getAllProductsSectionByMalls)]);

 
}