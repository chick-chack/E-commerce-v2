import { actionTypes } from './action';

export const initCart = {
    order_list: [],
    order_list_group:[],
    order_details: []
};

function reducer(state = initCart, action) {
    switch (action.type) {
        case actionTypes.ADD_ORDER_SUCCESS:
            return {
                ...state,
            };

        case actionTypes.ADD_ORDER_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                ...{ order_details: action.data.data },
            };

        case actionTypes.ORDER_DETAILS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.ORDER_LIST_SUCCESS:
            return {
                ...state,
                ...{ order_list: action.data.data }
            };

        case actionTypes.ORDER_LIST_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        /*=======================================================
        ||||||||||||||| order list group ||||||||||||||||||||||||
        =======================================================*/

        case actionTypes.ORDER_LIST_GROUP_SUCCESS:
            return {
                ...state,
                ...{ order_list_group: action.data.data }
            };

        case actionTypes.ORDER_LIST_GROUP_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };


        default:
            return state;
    }
}

export default reducer;
