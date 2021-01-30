import { actionTypes } from './action';

export const initialState = {
    allProducts: null,
    singleProduct: null,
    reviewProduct: null,
    review_orginal: null,
    error: false,
    totalProducts: 0,
    categories: null,
    brands: [],
    productsLoading: true,
    productLoading: true,
    searchResults: null,
    list_category: [],
    sub_list_category: [],
    StoreSearchResult: null,
    add_review: false,
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
                ...{
                    singleProduct: action.data.product,
                    reviewProduct: action.data.review,
                    review_orginal: action.data.review_orginal,
                    productLoading: false
                },
            };

        case actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS:
            return {
                ...state,
                ...{ searchResults: action.payload.rows },
            };

        // store search result
        case actionTypes.GET_PRODUCTS_BY_KEYWORD_IN_STORE_SUCCESS:
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
            return {
                ...state,
                ...{ list_category: action.payload },
            };

        case actionTypes.GET_SUB_CATEGORY_SUCCESS:
            return {
                ...state,
                ...{ sub_list_category: action.payload },
            };

        case actionTypes.ADD_REVIEW_SUCCESS:
            return {
                ...state,
                ...{
                    add_review: action.info,
                },
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
