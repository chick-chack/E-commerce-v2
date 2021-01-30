import { all, put, takeEvery, call } from 'redux-saga/effects';
import { notification } from 'antd';
import AddressRepository from '../../repositories/AddressRepository';

import {
    actionTypes,
    add_address_Success,
    add_address_Error,
    edit_address_Success,
    edit_address_Error,
    address_list_Success,
    address_list_Error,
} from './action';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This address has been created successfully!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        message: 'Error',
        description: 'Failed add this address!',
        duration: 1,
    });
};

// Address api's

function* add_address({ data }) 
{
    try {
        const data1 = yield call(AddressRepository.add_address, data);
        modalSuccess('success');
        yield put(add_address_Success(data1));
    } catch (err) {
        console.log(err);

        // modalWarning('warning');
        // yield put(add_address_Error(data1));
    }
}


function* address_list({ }) {
    try {
        const data = yield call(AddressRepository.address_list);
        yield put(address_list_Success(data));
    } catch (err) {
        console.log(err);
    }
}

function* edit_address({ data }) {
    try {
        const data1 = yield call(AddressRepository.edit_address, data);
        yield put(edit_address_Success(data1));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.ADD_ADDRESS, add_address)]);
    yield all([takeEvery(actionTypes.ADDRESS_LIST, address_list)]);
    yield all([takeEvery(actionTypes.EDIT_ADDRESS,  edit_address)]);
}
