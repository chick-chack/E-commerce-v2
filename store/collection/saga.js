import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import { notification } from 'antd';
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
    getProductByCategortyIdError,
    subscriptionSuccess,
    sendMessageSuccess,
    getHomeBannersSuccess,
    getHomePromotionsSuccess
} from './action';

import CollectionRepository from '../../repositories/CollectionRepository';

polyfill();


const modalSuccess = type => {
    notification[type]({
        message: 'Wellcome',
        description: 'Thank you for your subscribed !',
        duration: 500,
    });
};



const modalError = type => {
    notification[type]({
        message: 'failed',
        description: 'You have already subscribed!',
        duration: 500,
    });
};

const messageSuccess = type => {
    notification[type]({
        message: 'Wellcome',
        description: 'Thank you for your Message !',
        duration: 500,
    });
};


const messageError = type => {
    notification[type]({
        message: 'failed',
        description: 'Something Wrong! please retry send your message!',
        duration: 500,
    });
};
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


/* home page */
function* getHomeBanners({ payload }) {
    try {
        const data = yield call(CollectionRepository.getHomeBanners);
        yield put(getHomeBannersSuccess(data));
    } catch (err) {
        // console.log(err);
    }
}

function* getHomePromotions({ payload }) {
    try {
        const data = yield call(CollectionRepository.getHomePromotions,);
        yield put(getHomePromotionsSuccess(data));
    } catch (err) {
        // console.log(err);
    }
}


// get  productsBY CATEGORY ID

function* getProductByCategortyId({ cat_id, limit, offset}){
    console.log('saga cat', cat_id, limit, offset)

    try {
        const data = yield call(CollectionRepository.getProductsByCatId, cat_id , limit, offset);
        yield put(getProductByCategortyIdSuccess(data));
    } catch (err) {
        yield put(getProductByCategortyIdError(err));
    }
}

// subscription api
function* subscription(payload) {
    try {
        const data = yield call(CollectionRepository.postSubscription, payload);
        if (data.status == 200) {
            yield put(subscriptionSuccess(data.data));
            modalSuccess('success');
        } else {
            modalError('error');
        }

    } catch (err) {
        console.log(err);
    }
}

// subscription api
function* sendmessage(payload) {
    try {
        const data = yield call(CollectionRepository.sendMessage, payload);
        if (data.status == 200) {
            yield put(subscriptionSuccess(data.data));
            messageSuccess('success');
        } else {
            messageError('error');
        }

    } catch (err) {
        console.log(err);
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
    yield all([takeEvery(actionTypes.GET_HOME_BANNERS, getHomeBanners)]);
    yield all([takeEvery(actionTypes.GET_HOME_PROMOTIONS, getHomePromotions)]);

    yield all([takeEvery(actionTypes.GET_PRODUCTS_BY_CAT_ID, getProductByCategortyId)]);

    // subscription api
    yield all([takeEvery(actionTypes.SUBSCRIPTION, subscription)]);
    // send message api
    yield all([takeEvery(actionTypes.SEND_MESSAGE, sendmessage)]);
}
