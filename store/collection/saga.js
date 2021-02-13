import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import {
    actionTypes,
    getCategoriesSuccess,
    getCollectionsSuccess,
    getCollectionsfortestSuccess,
    getCollectionshomemallsSuccess,
    getCollectionsMallInfoSuccess,
    getMalls_HomeSuccess,
    getProduct_HomeSuccess,
    getAllProductsSectionSuccess,
    getAllProductsSectionError,
    getAllHomeTopStoresSuccess,
    getAllHomeTopStoresError,
    getAllHomePromotionsSuccess,
    getAllHomePromotionsError,
    getAllHomeBannersSuccess,
    getAllHomeBannersError,
    getProductByCategortyIdSuccess,
    getProductByCategortyIdError
} from './action';

import CollectionRepository from '../../repositories/CollectionRepository';

polyfill();

// START HOME PAGE
function* getMalls_Home({ payload }) {
    try {
        const data = yield call(CollectionRepository.getMalls_Home, payload);
        yield put(getMalls_HomeSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* getporducts_Home({ payload }) {
    try {
        const data = yield call(CollectionRepository.getporducts_Home, payload);
        yield put(getProduct_HomeSuccess(data));
    } catch (err) {
        console.log(err);
    }
}
// END HOME PAGE
function* getCollections({ payload }) {
    try {
        const data = yield call(CollectionRepository.getCollections, payload);
        yield put(getCollectionsSuccess(data));
    } catch (err) {
        console.log(err);
    }
}
function* getCollectionsfortest({ payload }) {
    try {
        const data = yield call(CollectionRepository.getCollectionsfortest, payload);
        yield put(getCollectionsfortestSuccess(data));
    } catch (err) {
        console.log(err);
    }
}
function* getCollectionshomemalls({ payload }) {
    try {
        const data = yield call(CollectionRepository.getCollectionshomemalls, payload);
        yield put(getCollectionshomemallsSuccess(data));
    } catch (err) {
        console.log(err);
    }
}
function* getCollectionsMallInfo({ payload }) {
    try {
        const data = yield call(CollectionRepository.getCollectionsMallInfo, payload);
        yield put(getCollectionsMallInfoSuccess(data));
    } catch (err) {
        console.log(err);
    }
}
function* getCollectionByCategories({ payload }) {
    try {
        const data = yield call(
            CollectionRepository.getCategoriesBySlug,
            payload
        );
        yield put(getCategoriesSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* getMalls({ payload }) {
    try {
        const data = yield call(
            CollectionRepository.getMalls
        );
        yield put(getMallsSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

// get all products section  by mall id and product section title

function* getAllProductsSection({ sectionTitle, limit, offset }) {

    try {
        const data = yield call(CollectionRepository.getAllProductsSection, sectionTitle , limit, offset);
        yield put(getAllProductsSectionSuccess(data));
    } catch (err) {
        yield put(getAllProductsSectionError(err));
    }
}

// get all home top stores

function* getAllHometopstores({ limit, offset }) {
    try {
        const data = yield call(CollectionRepository.getAllHomeTopStores,limit, offset);
        yield put(getAllHomeTopStoresSuccess(data));
    } catch (err) {
        yield put(getAllHomeTopStoresError(err));
    }
}


// get home promotions
function* getHomePromotions({ }) {
    console.log("saga promotions")
    try {
        const data = yield call(CollectionRepository.getHomePromotions);
        yield put(getAllHomePromotionsSuccess(data));
    } catch (err) {
        yield put(getAllHomePromotionsError(err));
    }
}


// get home Banners
function* getHomeBanners({ }) {
    console.log("saga banners")
    try {
        const data = yield call(CollectionRepository.getHomeBanners);
        yield put(getAllHomeBannersSuccess(data));
    } catch (err) {
        yield put(getAllHomeBannersError(err));
    }
}


// get  productsBY CATEGORY ID

function* getProductByCategortyId({ cat_id, limit, offset}){
    console.log('saga cat', cat_id, limit, offset)

    try {
        const data = yield call(CollectionRepository.getProductsByCatId, cat_id , limit, offset);
        console.log("saaaaaaaga cat data", data)
        yield put(getProductByCategortyIdSuccess(data));
    } catch (err) {
        yield put(getProductByCategortyIdError(err));
    }
}



export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_COLLECTIONS, getCollections)]);
    yield all([takeEvery(actionTypes.GET_COLLECTIONSFORTEST, getCollectionsfortest)]);
    yield all([takeEvery(actionTypes.GET_COLLECTIONSHOMEMALLS, getCollectionshomemalls)]);
    yield all([takeEvery(actionTypes.GET_COLLECTIONSMALLINFO, getCollectionsMallInfo)]);
    yield all([takeEvery(actionTypes.GET_ALLMALLS, getMalls)]);
    yield all([takeEvery(actionTypes.GET_CATEGORIES, getCollectionByCategories)]);
    yield all([takeEvery(actionTypes.GET_ALL_PRODUCTS_SECTION, getAllProductsSection)]);
    yield all([takeEvery(actionTypes.GET_ALL_HOME_TOP_STORES, getAllHometopstores)]);
    // HOME PAGE
    yield all([takeEvery(actionTypes.GET_MALLS_HOME, getMalls_Home)]);
    yield all([takeEvery(actionTypes.GET_PRODUCTS_HOME, getporducts_Home)]);
    // END HOME PAGE
    yield all([takeEvery(actionTypes.GET_HOME_PROMOTIONS, getHomePromotions)]);
    yield all([takeEvery(actionTypes.GET_HOME_BANNERS, getHomeBanners)]);
    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_CAT_ID, getProductByCategortyId)]);
}
