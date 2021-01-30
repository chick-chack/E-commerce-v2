import { actionTypes } from './action';

export const initCart = {
    // cartItems: [],
    // amount: 0,
    // cartTotal: 0,

    cartItems: [],
    amount: 0,
    cartTotal: 0,
    cartlist: [],
    
};

function reducer(state = initCart, action) {
    switch (action.type) {

        case actionTypes.ADD_TO_CART_SUCCESS:
          //  console.log("cart list :",action)
            return {
                ...state,
                // ...{ cartlist: action.payload },
            };

        case actionTypes.GET_CART_SUCCESS:
            return {
                ...state,
            };

        case actionTypes.GET_CART_LIST_SUCCESS:
          //  console.log("get cart list reducer , action payload" , action.data)
            return {
                ...state,
                ...{ cartlist: action.data },

            };

        case actionTypes.UPDATE_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
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
            return{
                ...state,
                // ...{ cartlist: action.data },
            }
        // case actionTypes.GET_CART_SUCCESS:
        //     return {
        //         ...state,
        //     };

        // case actionTypes.UPDATE_CART_SUCCESS:
        //     // console.log("reducer cart updated...........(action.payload.cartItems )...........!",action.payload.cartItems[0].product );
        //     // {
        //     //     action.payload.cartItems.map(item => {
        //     //         console.log("hellllo", item.productSelected.id)
        //     //     })
        //     // }
        //     console.log("reducer cart updated...........(action.payload.amount )...........!",action.payload.amount )
        //     console.log("reducer cart updated...........(cartTotal: action.payload.cartTotal)...........!",action.payload.cartTotal )
        //     return {
        //         ...state,
        //         ...{ cartItems: action.payload.cartItems },
        //         ...{ amount: action.payload.amount },
        //         ...{ cartTotal: action.payload.cartTotal },
        //     };
        // case actionTypes.CLEAR_CART_SUCCESS:
        //     return {
        //         ...state,
        //         ...{ cartItems: action.payload.cartItems },
        //         ...{ amount: action.payload.amount },
        //         ...{ cartTotal: action.payload.cartTotal },
        //     };
        // case actionTypes.GET_CART_ERROR:
        //     return {
        //         ...state,
        //         ...{ error: action.error },
        //     };
        // case actionTypes.UPDATE_CART_ERROR:
        //     return {
        //         ...state,
        //         ...{ error: action.error },
        //     };
        default:
            return state;
    }
}

export default reducer;
