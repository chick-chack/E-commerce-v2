import { actionTypes } from './action';

export const initialState = {
    collections: [],
    collectionsfortest: [],
    Collectionshomemalls: [],
    categories: [],
    collection: {},
    collectionsmallinfo: [],
    product_home: [],
    malls_home: [],
    specific_home_section_products:[],
    all_home_top_stores:[],
    homeBanners:[],
    homePromotions:[],
    productListByCategory:[],
    isSubscribed: false,
    isSended:false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        // home 
        case actionTypes.GET_PRODUCTS_HOME_SUCCESS:
            return {
                ...state,
                ...{ product_home: action.payload },
            };
        case actionTypes.GET_MALLS_HOME_SUCCESS:
            return {
                ...state,
                ...{ malls_home: action.payload },
            };
        // end home
        case actionTypes.GET_COLLECTIONS_SUCCESS:
            return {
                ...state,
                ...{ collections: action.payload },
            };
        case actionTypes.GET_COLLECTIONSFORTEST_SUCCESS:
            return {
                ...state,
                ...{ collectionsfortest: action.payload.data },
            };

        case actionTypes.GET_COLLECTIONSHOMEMALLS_SUCCESS:
            return {
                ...state,
                ...{ Collectionshomemalls: action.payload },
            };
        case actionTypes.GET_COLLECTION_SUCCESS:
            return {
                ...state,
                ...{ collection: action.payload },
            };
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                ...{ categories: action.payload },
            };
        case actionTypes.GET_ALLMALLS_SUCCESS:
            return {
                ...state,
                ...{ allmalls: action.payload },
            };
        case actionTypes.GET_COLLECTIONSMALLINFO_SUCCESS:

            return {
                ...state,
                ...{ collectionsmallinfo: action.payload },
            };

        // all products in specific section  by  product section title

        case actionTypes.GET_ALL_PRODUCTS_SECTION_SUCCESS:
            
            return {
                        ...state,
                        ...{ specific_home_section_products: action.data.data, mallsLoading: false },
                    };
        case actionTypes.GET_ALL_PRODUCTS_SECTION_ERROR:
            return {
                        ...state,
                        ...{ error: action.error },
                    };
        
        //  end all products in specific section  by product section title

        
        // all home top stores
        case actionTypes.GET_ALL_HOME_TOP_STORES_SUCCESS:
            
            return {
                        ...state,
                        ...{ all_home_top_stores: action.data.data, mallsLoading: false },
                    };
        case actionTypes.GET_ALL_HOME_TOP_STORES_ERROR:
            return {
                        ...state,
                        ...{ error: action.error },
                    };
        
        //  end all home top stores

      /* home page */
      case actionTypes.GET_HOME_BANNERS_SUCCESS:
        return {
            ...state,
            ...{ homeBanners: action.payload.data },
        };
    case actionTypes.GET_HOME_PROMOTIONS_SUCCESS:
        return {
            ...state,
            ...{ homePromotions: action.payload.data },
        };
     
        case actionTypes.GET_PRODUCTS_BY_CAT_ID_SUCCESS:
            return {
                        ...state,
                        ...{ productListByCategory: action.data.data },
                    };
        case actionTypes.GET_PRODUCTS_BY_CAT_ID_ERROR:
            return {
                        ...state,
                        ...{ error: action.error },
                    };

        // subscribtion api
        case actionTypes.SUBSCRIPTION_SUCCESS:
            return {
                    ...state,
                    ...{ isSubscribed: true },
                        };
        // subscribtion api
        case actionTypes.SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                ...{ isSended: true },
                                };


        default:
            return state;
    }
}

export default reducer;
