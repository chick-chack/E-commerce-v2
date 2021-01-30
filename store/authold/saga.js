import { all, put, call, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import AuthRepository from '../../repositories/AuthRepository';
import { polyfill } from 'es6-promise';

import {
    actionTypes,
    loginSuccess,
    logOutSuccess,
    signupSuccess,
    forgetpasswordSuccess,
    resetpasswordSuccess,
    verifymobileSuccess,
    verifyemailSuccess
} from './action';



const modalSuccess = type => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};


const modalError = type => {
    console.log(type)
    notification[type]({
        message: 'failed',
        description: 'Check your email/mobile or password',
    });
};

function* verifymobile({ payload }) {
    try {
        const data = yield call(AuthRepository.putverifymobile, payload);
        console.log(data);
        yield put(verifymobileSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* verifyemail({ payload }) {
    try {
        const data = yield call(AuthRepository.putverifyemail, payload);
        console.log(data);
        yield put(verifyemailSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* resetpassword({ payload }) {
    try {
        const data = yield call(AuthRepository.putresetpassword, payload);
        console.log(data);
        yield put(resetpasswordSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* forgetpassword({ payload }) {
    try {
        const data = yield call(AuthRepository.putforgetpassword, payload);
        console.log(data);
        yield put(forgetpasswordSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

// function* signup({ payload }) {
//     try {
//         const data = yield call(AuthRepository.postSignUp, payload);
//         console.log(data);
//         yield put(signupSuccess(data));
//     } catch (err) {
//         console.log(err);
//     }
// }

function* signUp(payload) {
    try {
        const data = yield call(AuthRepository.postSignUp, payload);
        // yield put(loginSuccess());
        // modalSuccess('success');
    } catch (err) {
        // console.log(err);
    }
}

function* loginSaga(payload) {
    try {
        const data = yield call(AuthRepository.postLogin, payload);
        console.log(data.data)
        if (data.status == 200) {
            yield put(loginSuccess(data.data));
            modalSuccess('success');
        } else {
            modalError('error');
        }

    } catch (err) {
        console.log(err);
    }
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.VERIFY_EMAIL_REQUEST, verifyemail)]);
    yield all([takeEvery(actionTypes.VERIFY_MOBILE_REQUEST, verifymobile)]);
    yield all([takeEvery(actionTypes.FORGET_PASSWORD_REQUEST, forgetpassword)]);
    yield all([takeEvery(actionTypes.RESET_PASSWORD_REQUEST, resetpassword)]);
    yield all([takeEvery(actionTypes.SIGNUP_REQUEST, signUp)]);
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}