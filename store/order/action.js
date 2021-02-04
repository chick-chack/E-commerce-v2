export const actionTypes = {
    // add to cart 
    ADD_ORDER: 'ADD_ORDER',
    ADD_ORDER_SUCCESS: 'ADD_ORDER_SUCCESS',
    ADD_ORDER_ERROR: 'ADD_ORDER_ERROR',

    // delete all carts
    ORDER_DETAILS: 'ORDER_DETAILS',
    ORDER_DETAILS_SUCCESS: 'ORDER_DETAILS_SUCCESS',
    ORDER_DETAILS_ERROR: 'ORDER_DETAILS_ERROR',

    // order list
    ORDER_LIST: 'ORDER_LIST',
    ORDER_LIST_SUCCESS: 'ORDER_LIST_SUCCESS',
    ORDER_LIST_ERROR: 'ORDER_LIST_ERROR',

    // order list group
    ORDER_LIST_GROUP: 'ORDER_LIST_GROUP',
    ORDER_LIST_GROUP_SUCCESS: 'ORDER_LIST_GROUP_SUCCESS',
    ORDER_LIST_GROUP_ERROR: 'ORDER_LIST_GROUP_ERROR',

};

export function add_order(addressId, paymentType, paypalData) {
    return {
        type: actionTypes.ADD_ORDER,
        addressId,
        paymentType,
        paypalData
    };
}

export function add_order_Success() {
    return {
        type: actionTypes.ADD_ORDER_SUCCESS,
    };
}

export function add_order_Error(error) {
    return {
        type: actionTypes.ADD_ORDER_ERROR,
        error,
    };
}

export function order_details(id) {
    return { type: actionTypes.ORDER_DETAILS, id };
}

export function order_details_Success(data) {

    return {
        type: actionTypes.ORDER_DETAILS_SUCCESS, data
    };
}

export function order_details_Error(error) {
    return {
        type: actionTypes.ORDER_DETAILS_ERROR,
        error,
    };
}

export function order_list() {
    return { type: actionTypes.ORDER_LIST };
}

export function order_list_Success(data) {
    return {
        type: actionTypes.ORDER_LIST_SUCCESS,
        data
    };
}

export function order_list_Error(error) {
    return {
        type: actionTypes.ORDER_LIST_ERROR,
        error,
    };
}
/*=======================================================
|||||||||||||||||| order list group |||||||||||||||||||||
=======================================================*/

export function order_list_group(id) {
    return {
        type: actionTypes.ORDER_LIST_GROUP,
        id,
    };
}

export function order_list_group_Success(data) {
    return {
        type: actionTypes.ORDER_LIST_GROUP_SUCCESS,
        data
    };
}

export function order_list_group_Error(error) {
    return {
        type: actionTypes.ORDER_LIST_GROUP_ERROR,
        error,
    };
}

