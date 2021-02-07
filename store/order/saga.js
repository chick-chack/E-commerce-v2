import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification } from 'antd';
import OrderRepository from '../../repositories/OrderRepository';

import {
    actionTypes,
    add_order_Success,
    add_order_Error,
    order_details_Success,
    order_details_Error,
    order_list_Success,
    order_list_Error,
    order_list_group_Success,
    order_list_group_Error,
} from './action';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This order has been created successfully!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        message: 'Error',
        description: 'Failed create this request!',
        duration: 1,
    });
};

// start new api for cart

function* add_order({ addressId, paymentType, paypalData }) {
    try {
        const data1 = yield call(OrderRepository.add_orders, addressId, paymentType, paypalData);
        console.log("sssssssssssss",data1)
        modalSuccess('success');
        yield put(add_order_Success(data1));
    } catch (err) {
        modalWarning('warning');
        yield put(add_order_Error(err));
    }
}


function* orders_list({ }) {
    try {
        const data = yield call(OrderRepository.orders_list);
        yield put(order_list_Success(data));
    } catch (err) {
        console.log(err);
    }
}

function* orders_details({ id }) {

    try {
        const data = yield call(OrderRepository.orders_details, id);
        yield put(order_details_Success(data));
    } catch (err) {
        console.log(err);
    }
}

/*=========================================================
||||||||||||||| order list group ||||||||||||||||||||||||||
=========================================================*/

function* order_list_group({ id }) {
    try {
        const data = yield call(OrderRepository.order_list_group, id);
        yield put(order_list_group_Success(data));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.ADD_ORDER, add_order)]);
    yield all([takeEvery(actionTypes.ORDER_LIST, orders_list)]);
    yield all([takeEvery(actionTypes.ORDER_DETAILS, orders_details)]);
    yield all([takeEvery(actionTypes.ORDER_LIST_GROUP, order_list_group)]);
}
