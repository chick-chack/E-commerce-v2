export const actionTypes = {
    GET_BANNERS: 'GET_BANNERS',
    GET_BANNERS_SUCCESS: 'GET_BANNERS_SUCCESS',

    GET_PROMOTIONS: 'GET_PROMOTIONS',
    GET_PROMOTIONS_SUCCESS: 'GET_PROMOTIONS_SUCCESS',

    /* get banner for home page */
    GET_HOME_BANNERS: 'GET_HOME_BANNERS',
    GET_HOME_BANNERS_SUCCESS: 'GET_HOME_BANNERS_SUCCESS',
    /* get promotion for home page */
    GET_HOME_PROMOTIONS: 'GET_HOME_PROMOTIONS',
    GET_HOME_PROMOTIONS_SUCCESS: 'GET_HOME_PROMOTIONS_SUCCESS',


};

export function getBannersBySlugs(payload) {
    return { type: actionTypes.GET_BANNERS, payload };
}

export function getBannersSuccess(payload) {
    return {
        type: actionTypes.GET_BANNERS_SUCCESS,
        payload,
    };
}


export function getPromotionsBySlugs(payload) {
    return { type: actionTypes.GET_PROMOTIONS, payload };
}

export function getPromotionsSuccess(payload) {
    return {
        type: actionTypes.GET_PROMOTIONS_SUCCESS,
        payload,
    };
}

