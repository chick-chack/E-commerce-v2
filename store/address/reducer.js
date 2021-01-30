import { actionTypes } from './action';

export const initCart = {
    address_list: [],
};

function reducer(state = initCart, action) {
    switch (action.type) {
        case actionTypes.ADD_ADDRESS_SUCCESS:
            return {
                ...state,
            };

        case actionTypes.ADD_ADDRESS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
         
         
        case actionTypes.EDIT_ADDRESS_SUCCESS:
            return {
                ...state,
                ...{ address_list: action.payload },
            };

        case actionTypes.EDIT_ADDRESS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.ADDRESS_LIST_SUCCESS:
            return {
                ...state,
                ...{ address_list: action.data }
            };

        case actionTypes.ADDRESS_LIST_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        default:
            return state;
    }
}

export default reducer;
