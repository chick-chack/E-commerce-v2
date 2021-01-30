import { actionTypes } from './action';

export const initialState = {
    storeinfo: null,
    storeLoading: false,
    sections_product_store: [],
    list_category_store: null,
    category_products: [],
};

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case actionTypes.ALL_CATEGORY_STORE_SUCCESS:
            return {
                ...state,
                ...{ list_category_store: action.data },
            };
        // section store
        case actionTypes.GET_STORE_BY_ID_SUCCESS:
            return {
                ...state,
                ...{ storeinfo: action.data.data, storeLoading: true },
            };
        case actionTypes.GET_STORE_BY_ID_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        // end section store

        // section product store
        case actionTypes.GET_PRODUCTS_BY_STORE_ID_SUCCESS:
            return {
                ...state,
                ...{ sections_product_store: action.data },
            };

        case actionTypes.GET_PRODUCTS_BY_STORE_ID_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        //  end section product store

        
        
        // get all most sale product in specific store by category id

        case actionTypes.GET_ALL_PRODUCTS_BY_CATEGORY_SUCCESS:
            return {
                        ...state,
                        ...{ category_products: action.data, mallsLoading: false },
                    };
        case actionTypes.GET_ALL_PRODUCTS_BY_CATEGORY_ERROR:
            return {
                        ...state,
                        ...{ error: action.error },
                    };
        
        //  end get all most sale product in specific store by category id


        default:
            return state;
    }
}

export default reducer;



// import { actionTypes } from './action';

// export const initialState = {
//     storeinfo: null,
//     storeLoading: false,
//     sections_product_store: []
// };

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         // section store
//         case actionTypes.GET_STORE_BY_ID_SUCCESS:
//             return {
//                 ...state,
//                 ...{ storeinfo: action.data, storeLoading: true },
//             };
//         case actionTypes.GET_STORE_BY_ID_ERROR:
//             return {
//                 ...state,
//                 ...{ error: action.error },
//             };
//         // end section store

//         // section product store
//         case actionTypes.GET_PRODUCTS_BY_STORE_ID_SUCCESS:
//             return {
//                 ...state,
//                 ...{ sections_product_store: action.data },
//             };

//         case actionTypes.GET_PRODUCTS_BY_STORE_ID_ERROR:
//             return {
//                 ...state,
//                 ...{ error: action.error },
//             };
//         //  end section product store

//         default:
//             return state;
//     }
// }

// export default reducer;
