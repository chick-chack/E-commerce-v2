import { actionTypes } from './action';

export const initialState = {
    // allMalls: null,
    singlMall: null,
    mallInfo:null,
    error: false,
    totalMalls: 0,
    totalStoresByMall: 0,
    categories: null,
    brands: [],
    mallsLoading: true,
    mallLoading: true,
    searchResults: null,
    top_stores: [],
    all_top_stores:[],
    all_stores: [],
    sections_product: [],
    specific_section_products:[]

};

function reducer(state = initialState, action) {
    switch (action.type) {
        // case actionTypes.GET_MALLS_SUCCESS:
        //     return {
        //         ...state,
        //         ...{ allMalls: action.data, mallsLoading: false },
        //     };
        // case actionTypes.GET_MALLS_BY_ID_SUCCESS:
        //     return {
        //         ...state,
        //         ...{ singlMall: action.data, mallLoading: false },
        //     };
        // case actionTypes.GET_MALLS_ERROR:
        //     return {
        //         ...state,
        //         ...{ error: action.error },
        //     };


        // get specific mall info

        case actionTypes.GET_MALL_INFO_SUCCESS:
            return{
                ...state,
                ...{ mallInfo: action.data.data}
            }

        // top stores
        case actionTypes.GET_TOP_STORES_BY_MALLS_SUCCESS:
            return {
                ...state,
                ...{ top_stores: action.data.data.rows, mallsLoading: false },
            };
        case actionTypes.GET_TOP_STORES_BY_MALLS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        //  end top stores

        // all top stores
        case actionTypes.GET_ALL_TOP_STORES_BY_MALLS_SUCCESS:
            return {
                        ...state,
                        ...{ all_top_stores: action.data.data, mallsLoading: false },
                    };
        case actionTypes.GET_ALL_TOP_STORES_BY_MALLS_ERROR:
            return {
                        ...state,
                        ...{ error: action.error },
                    };
        
        //  end all top stores

        // all stores
        case actionTypes.GET_ALL_STORES_BY_MALLS_SUCCESS:
            return {
                ...state,
                ...{ all_stores: action.data.data, mallsLoading: false },
            };

            
        case actionTypes.GET_ALL_STORES_BY_MALLS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        //  end all stores

        // total stores by mall

        case actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{ totalStoresByMall: action.payload },
            };



        // section product
        case actionTypes.GET_PRODUCTS_BY_MALLS_SUCCESS:
            return {
                ...state,
                ...{ sections_product: action.data.data, mallsLoading: false },
            };

        case actionTypes.GET_PRODUCTS_BY_MALLS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        //  end section product

        
        // all products in specific section  by mall id &  product section title

        case actionTypes.GET_ALL_PRODUCTS_SECTION_BY_MALLS_SUCCESS:
            return {
                        ...state,
                        ...{ specific_section_products: action.data.data, mallsLoading: false },
                    };
        case actionTypes.GET_ALL_PRODUCTS_SECTION_BY_MALLS_ERROR:
            return {
                        ...state,
                        ...{ error: action.error },
                    };
        
        //  end all products in specific section  by mall id &  product section title


        default:
            return state;
    }
}

export default reducer;
