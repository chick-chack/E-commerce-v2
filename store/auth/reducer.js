import { actionTypes } from './action';

export const initState = {
    isLoggedIn: false,
    verifyEmail: false,
    verifyMobile: false,
    forgetPassword: false,
    resetPassword: false,
    needverifyphone: false,
    signup: false, userinfo: false
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true, userinfo: action['info'] },
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false, userinfo: false },
            };
        case actionTypes.VERIFY_EMAIL_SUCCESS:
            return {
                ...state,
                ...{ verifyEmail: action.info },
            };
        case actionTypes.VERIFY_MOBILE_SUCCESS:
            return {
                ...state,
                ...{ verifyMobile: action.info },
            };
        case actionTypes.FORGET_PASSWORD_SUCCESS:
            return {
                ...state,
                ...{ forgetPassword: action.info },
            };
        case actionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                ...{ resetPassword: action.info },
            };
        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                ...{
                    signup: action.info,
                    needverifyphone: true,
                    isLoggedIn: true,
                    userinfo: action['info']
                },
            };
        default:
            return state;
    }
}

export default reducer;
