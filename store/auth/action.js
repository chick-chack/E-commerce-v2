export const actionTypes = {
    VERIFY_EMAIL_REQUEST: 'VERIFY_EMAIL_REQUEST',
    VERIFY_EMAIL_SUCCESS: 'VERIFY_EMAIL_SUCCESS',
    VERIFY_MOBILE_REQUEST: 'VERIFY_MOBILE_REQUEST',
    VERIFY_MOBILE_SUCCESS: 'VERIFY_MOBILE_SUCCESS',
    FORGET_PASSWORD_REQUEST: 'FORGET_PASSWORD_REQUEST',
    FORGET_PASSWORD_SUCCESS: 'FORGET_PASSWORD_SUCCESS',
    RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST',
    RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    SIGNUP_REQUEST: 'SIGNUP_REQUEST',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
};

export function resetpassword(info) {
    return { type: actionTypes.RESET_PASSWORD_REQUEST, info };
}

export function resetpasswordSuccess(info) {
    return { type: actionTypes.RESET_PASSWORD_SUCCESS, info };
}

export function forgetpassword(info) {
    return { type: actionTypes.FORGET_PASSWORD_REQUEST, info };
}

export function forgetpasswordSuccess(info) {
    return { type: actionTypes.FORGET_PASSWORD_SUCCESS, info };
}

export function login(info) {
    return { type: actionTypes.LOGIN_REQUEST, info };
}

export function loginSuccess(info) {
    return { type: actionTypes.LOGIN_SUCCESS, info };
}

export function signup(info) {
    return { type: actionTypes.SIGNUP_REQUEST, info };
}

export function signupSuccess(info) {
    return { type: actionTypes.SIGNUP_SUCCESS, info };
}

export function verifyemail(info) {
    return { type: actionTypes.VERIFY_EMAIL_REQUEST, info };
}

export function verifyemailSuccess(info) {
    return { type: actionTypes.VERIFY_EMAIL_SUCCESS, info };
}

export function verifymobile(info) {
    return { type: actionTypes.VERIFY_MOBILE_REQUEST, info };
}

export function verifymobileSuccess(info) {
    return { type: actionTypes.VERIFY_MOBILE_SUCCESS, info };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}
