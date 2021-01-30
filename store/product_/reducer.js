import { actionTypes } from './action';

export const initialState = {
    allProducts: null,
    singleProduct: null,
    error: false,
    totalProducts: 0,
    categories: null,
    brands: [],
    productsLoading: true,
    productLoading: true,
    searchResults: null,
    list_category: [],
    sub_list_category:[],
    StoreSearchResult:null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{ allProducts: action.data, productsLoading: false },
            };
        case actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{ totalProducts: action.payload },
            };
        case actionTypes.GET_BRANDS_SUCCESS:
            return {
                ...state,
                ...{ brands: action.payload },
            };
        case actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{ categories: action.payload },
            };
        case actionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                ...{ singleProduct: action.data, productLoading: false },
            };

        case actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS:
            console.log(" reducer search word successed", action.payload)
            return {
                ...state,
                ...{ searchResults: action.payload.rows },
            };

        // store search result
        case actionTypes.GET_PRODUCTS_BY_KEYWORD_IN_STORE_SUCCESS:
            console.log(" reducer store search word successed", action.payload)
            return {
                ...state,
                ...{ StoreSearchResult: action.payload.rows },
            };

        case actionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.ALL_CATEGORY_HOME_SUCCESS:
            console.log("red cat success", action.payload)
            return {
                ...state,
                ...{ list_category: action.payload },
            };

            case actionTypes.GET_SUB_CATEGORY_SUCCESS:
                console.log(" sub category success", action.payload)
                return {
                    ...state,
                    ...{ sub_list_category: action.payload },
                };

        default:
            return state;
    }
}

export default reducer;





// import { actionTypes } from './action';

// export const initialState = {
//     allProducts: null,
//     singleProduct: null,
//     error: false,
//     totalProducts: 0,
//     categories: null,
//     brands: [],
//     productsLoading: true,
//     productLoading: true,
//     searchResults: null,
// };

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case actionTypes.GET_PRODUCTS_SUCCESS:
//             return {
//                 ...state,
//                 ...{ allProducts: action.data, productsLoading: false },
//             };
//         case actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS:
//             return {
//                 ...state,
//                 ...{ totalProducts: action.payload },
//             };
//         case actionTypes.GET_BRANDS_SUCCESS:
//             return {
//                 ...state,
//                 ...{ brands: action.payload },
//             };
//         case actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS:
//             return {
//                 ...state,
//                 ...{ categories: action.payload },
//             };
//         case actionTypes.GET_PRODUCT_BY_ID_SUCCESS:
//             return {
//                 ...state,
//                 ...{ singleProduct: action.data, productLoading: false },
//             };
//         case actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS:
//             return {
//                 ...state,
//                 ...{ searchResults: action.payload },
//             };

//         case actionTypes.GET_PRODUCTS_ERROR:
//             return {
//                 ...state,
//                 ...{ error: action.error },
//             };

//         default:
//             return state;
//     }
// }

// export default reducer;
