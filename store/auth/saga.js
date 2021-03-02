import { all, put, call, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import AuthRepository from '../../repositories/AuthRepository';
// import { polyfill } from 'es6-promise';

import {
  actionTypes,
  loginSuccess,
  logOutSuccess,
  signupSuccess,
  forgetpasswordSuccess,
  resetpasswordSuccess,
  verifymobileSuccess,
  verifyemailSuccess,
} from './action';

const modalSuccess = (type) => {
  notification[type]({
    message: 'Wellcome back',
    description: 'You are login successful!',
  });
};

const modalWarning = (type) => {
  notification[type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!',
  });
};

const modalError = (type) => {
  notification[type]({
    message: 'failed',
    description: 'Check your email/mobile or password',
  });
};

// const modalError_code = (type) => {
//   notification[type]({
//     message: 'failed',
//     description: 'Check your code',
//   });
// };

function* verifymobile({ info }) {
  try {
    const data = yield call(AuthRepository.putverifymobile, info);
    yield put(verifymobileSuccess(data));
  } catch (err) {
    modalError('error');
    console.log(err);
  }
}

function* verifyemail({ payload }) {
  try {
    const data = yield call(AuthRepository.putverifyemail, payload);
    yield put(verifyemailSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* resetpassword({ info }) {
  try {
    const data = yield call(AuthRepository.putresetpassword, info);
    yield put(resetpasswordSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* forgetpassword({ info }) {
  try {
    const data = yield call(AuthRepository.putforgetpassword, info);
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
    yield put(signupSuccess(data));
    modalSuccess('success');
  } catch (err) {
    // console.log(err);
  }
}

function* loginSaga(payload) {
  try {
    const data = yield call(AuthRepository.postLogin, payload);
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

function* unityLoginSaga(payload) {
  try {
    const data = yield call(AuthRepository.unityLogin, payload);
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
    yield call(AuthRepository.logout);
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
  yield all([takeEvery(actionTypes.UNITY_LOGIN_REQUEST, unityLoginSaga)]);
  yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
