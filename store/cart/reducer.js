import { actionTypes } from './action';

export const initCart = {
    // cartItems: [],
    // amount: 0,
    // cartTotal: 0,
    loding_cart_list: false,
    cartItems: [],
    amount: 0,
    cartTotal: 0,
    cartlist: [],

};

function reducer(state = initCart, action) {
    switch (action.type) {

        case actionTypes.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                // ...{ cartlist: action.payload },
            };

        case actionTypes.GET_CART_SUCCESS:
            return {
                ...state,
            };

        case actionTypes.GET_CART_LIST_SUCCESS:
            return {
                ...state,
                ...{ loding_cart_list: true },
                ...{ cartlist: action.data },

            };

        case actionTypes.UPDATE_CART_SUCCESS:
            console.log("jbjb", action.payload)
            return {
                 ...state,
                ...{ cartItems: action.payload },
                // ...{ cartItems: action.payload.cartItems },
                // ...{ amount: action.payload.amount },
                // ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.GET_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };


        case actionTypes.UPDATE_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.DELETE_CART_ITEM_SUCCESS:
            // console.log("get cart list reducer , action payload" , action.data)
            return {
                ...state,
                // ...{ cartlist: action.data },
            }
 
        default:
            return state;
    }
}

export default reducer;
