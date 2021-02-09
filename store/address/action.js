export const actionTypes = {

    // add address 
    ADD_ADDRESS: 'ADD_ADDRESS',
    ADD_ADDRESS_SUCCESS: 'ADD_ADDRESS_SUCCESS',
    ADD_ADDRESS_ERROR: 'ADD_ADDRESS_ERROR',

    // EDIT ADDRESS
    EDIT_ADDRESS: 'EDIT_ADDRESS',
    EDIT_ADDRESS_SUCCESS: 'EDIT_ADDRESS_SUCCESS',
    EDIT_ADDRESS_ERROR: 'EDIT_ADDRESS_ERROR',

    // GET ADDRESS LIST
    ADDRESS_LIST: 'ADDRESS_LIST',
    ADDRESS_LIST_SUCCESS: 'ADDRESS_LIST_SUCCESS',
    ADDRESS_LIST_ERROR: 'ADDRESS_LIST_ERROR',

};

export function add_address(data, countryVal) {
    console.log("daaaaaaaaaaaaaaaa", data, "co", countryVal)
    return {
        type: actionTypes.ADD_ADDRESS,
        data,
        countryVal,
    };
}

export function add_address_Success() {
    return {
        type: actionTypes.ADD_ADDRESS_SUCCESS,
    };
}

export function add_address_Error(error) {
    return {
        type: actionTypes.ADD_ADDRESS_ERROR,
        error,
    };
}

export function edit_address(data) {
    return { type: actionTypes.EDIT_ADDRESS };
}

export function edit_address_Success() {
    return {
        type: actionTypes.EDIT_ADDRESS_SUCCESS,
    };
}

export function edit_address_Error(error) {
    return {
        type: actionTypes.EDIT_ADDRESS_ERROR,
        error,
    };
}

export function address_list() {
    return { type: actionTypes.ADDRESS_LIST };
}

export function address_list_Success(data) {
    return {
        type: actionTypes.ADDRESS_LIST_SUCCESS,
        data:data.data
    };
}

export function address_list_Error(error) {
    return {
        type: actionTypes.ADDRESS_LIST_ERROR,
        error,
    };
}