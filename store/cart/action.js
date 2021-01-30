export const actionTypes = {
    GET_CART: 'GET_CART',
    GET_CART_SUCCESS: 'GET_CART_SUCCESS',
    GET_CART_ERROR: 'GET_CART_ERROR',

    GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
    GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',

    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',

    CLEAR_CART: 'CLEAR_CART',
    CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
    CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',

    INCREASE_QTY: 'INCREASE_QTY',
    INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
    INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',

    DECREASE_QTY: 'DECREASE_QTY',

    UPDATE_CART: 'UPDATE_CART',

    UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
    UPDATE_CART_ERROR: 'UPDATE_CART_ERROR',


    /*************************************************************
     |||||||||| start  New api for cart ||||||||||||||||||||||||
     ***********************************************************/


    // add to cart 
    ADD_TO_CART: 'ADD_TO_CART',
    ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',
    ADD_TO_CART_ERROR: 'ADD_TO_CART_ERROR',

    // delete all carts
    DELETE_ALL_CARTS: 'DELETE_ALL_CARTS',
    DELETE_ALL_CARTS_SUCCESS: 'DELETE_ALL_CARTS_SUCCESS',
    DELETE_ALL_CARTS_ERROR: 'DELETE_ALL_CARTS_ERROR',

    // delete cart item 
    DELETE_CART_ITEM: 'DELETE_CART_ITEM',
    DELETE_CART_ITEM_SUCCESS: 'DELETE_CART_ITEM_SUCCESS',
    DELETE_CART_ITEM_ERROR: 'DELETE_CART_ITEM_ERROR',

    // get cart list
    GET_CART_LIST: 'GET_CART_LIST',
    GET_CART_LIST_SUCCESS: 'GET_CART_LIST_SUCCESS',
    GET_CART_LIST_ERROR: 'GET_CART_LIST_ERROR',

    
};

/**********************************************************
|||||||||| start  New api for cart ||||||||||||||||||||||||
**********************************************************/

// export function add_to_cart( productId , quantity , currentCookie) {
//     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", productId ,"||||||", quantity , "||||||", currentCookie)
//     return { type: actionTypes.ADD_TO_CART,
//             productId,
//             quantity,
//             currentCookie  };
// }

export function add_to_cart( productId , quantity ) {
  //  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", productId ,"||||||", quantity , "||||||")
    return { type: actionTypes.ADD_TO_CART,
            productId,
            quantity };
}

export function add_to_cart_Success() {
    return {
        type: actionTypes.ADD_TO_CART_SUCCESS,
    };
}

export function add_to_cart_Error(error) {
    return {
        type: actionTypes.ADD_TO_CART_ERROR,
        error,
    };
}

// 

export function deleteallcart() {
    return { type: actionTypes.DELETE_ALL_CARTS };
}

export function deleteallcartSuccess() {
    return {
        type: actionTypes.DELETE_ALL_CARTS_SUCCESS,
    };
}

export function deleteallcartError(error) {
    return {
        type: actionTypes.DELETE_ALL_CARTS_ERROR,
        error,
    };
}

/********************************************************
|||||||||| delete item from cart ||||||||||||||||||||||||
********************************************************/

export function deletecartitem(productId) {

    return { type: actionTypes.DELETE_CART_ITEM,
                productId };
}

export function deletecartitemSuccess() {
    return {
        type: actionTypes.DELETE_CART_ITEM_SUCCESS,
    };
}

export function deletecartitemError(error) {
    return {
        type: actionTypes.DELETE_CART_ITEM_ERROR,
        error,
    };
}

// 

export function getcartlist() {
    return { type: actionTypes.GET_CART_LIST };
}

export function getcartlistSuccess(data) {
    return {
        type: actionTypes.GET_CART_LIST_SUCCESS,
        data:data.data
    };
}

export function getcartlistError(error) {
    return {
        type: actionTypes.GET_CART_LIST_ERROR,
        error,
    };
}


    /*************************************************************
     |||||||||| end  New api for cart ||||||||||||||||||||||||
     ***********************************************************/


export function getCart() {
    return { type: actionTypes.GET_CART };
}

export function getCartSuccess() {
    return {
        type: actionTypes.GET_CART_SUCCESS,
    }; 
}

export function getCartError(error) {
    return {
        type: actionTypes.GET_CART_ERROR,
        error,
    };
}

export function addItem(product, productSelected) {
    return { type: actionTypes.ADD_ITEM,
         product,
         productSelected
         };
}

// export function addItem(product, specificItem, quantity) {
//     console.log("action add item to cart", product, " specific item", specificItem, " quantity", quantity);
//     return { type: actionTypes.ADD_ITEM,
//          product,
//          specificItem,
//          quantity
//          };
// }

export function removeItem(product) {
    return { type: actionTypes.REMOVE_ITEM, product };
}

export function increaseItemQty(product) {
    return { type: actionTypes.INCREASE_QTY,
        product };
}

export function decreaseItemQty(product) {
    return { type: actionTypes.DECREASE_QTY, product };
}

export function updateCartSuccess(payload) {

    return {
        type: actionTypes.UPDATE_CART_SUCCESS,
        payload,
    };
}

export function updateCartError(payload) {
    return {
        type: actionTypes.UPDATE_CART_ERROR,
        payload,
    };
}
