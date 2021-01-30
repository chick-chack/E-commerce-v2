import { all, put, takeEvery ,call} from 'redux-saga/effects';
import { notification } from 'antd';
import CartRepository from '../../repositories/CartRepository';


import {
    actionTypes,
    getCartError,
    getCartSuccess,
    updateCartSuccess,
    updateCartError, 
    add_to_cart_Success, 
    deleteallcartSuccess, 
    deletecartitemSuccess, 
    getcartlistSuccess
} from './action';




const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        message: 'Remove A Item',
        description: 'This product has been removed from your cart!',
        duration: 1,
    });
};

export const calculateAmount = (obj) =>
    Object.values(obj)
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2);


// start new api for cart

function* add_to_cart({ productId , quantity}) {
    try {
        const data = yield call(CartRepository.addCart_item,  productId , quantity  );
        yield put(add_to_cart_Success(data));
    } catch (err) {
        console.log(err);
    }
}


function* deleteallcart({ payload }) {
    try {
        const data = yield call(CartRepository.deleteallcart, payload);
        yield put(deleteallcartSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* deletecartitem({ productId }) {
    try {
        const data = yield call(CartRepository.deletecartitem, productId);

        yield put(deletecartitemSuccess(data));
    } catch (err) {
        console.log(err);
    }
}

function* getcartlist({ payload }) {
    try {
        const data = yield call(CartRepository.get_cartlist, payload);
        yield put(getcartlistSuccess(data));
    } catch (err) {
        console.log(err);
    }
}
// end new api for cart

function* getCartSaga() {
    try {
        yield put(getCartSuccess());
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* addItemSaga(payload) {
    try {

        const { product } = payload;
        const localCart = JSON.parse(localStorage.getItem('persist:chickchack'))
            .cart;
        let currentCart = JSON.parse(localCart);
        let existItem = currentCart.cartItems.find(
            (item) => item.id === product.id
        );
        if (existItem) {
            existItem.quantity += product.quantity;
        } else {
            if (!product.quantity) {
                product.quantity = 1;
            }

            currentCart.cartItems.push(product);
     
        }
        currentCart.amount = calculateAmount(currentCart.cartItems);
        currentCart.cartTotal++;
        yield put(updateCartSuccess(currentCart));
        modalSuccess('success');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* removeItemSaga(payload) {
    try {
        const { product } = payload;
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:chickchack')).cart
        );
        let index = localCart.cartItems.findIndex(
            (item) => item.id === product.id
        );
        localCart.cartTotal = localCart.cartTotal - product.quantity;
        localCart.cartItems.splice(index, 1);
        localCart.amount = calculateAmount(localCart.cartItems);
        if (localCart.cartItems.length === 0) {
            localCart.cartItems = [];
            localCart.amount = 0;
            localCart.cartTotal = 0;
        }
        yield put(updateCartSuccess(localCart));
        modalWarning('warning');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increaseQtySaga(payload) {

    try {
        const { product } = payload;
        
        // let localCart = JSON.parse(
        //     JSON.parse(localStorage.getItem('persist:chickchack')).cart
        // );
        // let selectedItem = localCart.cartItems.find(
        //     (item) => item.id === product.id
        // );
        // if (selectedItem) {
        //     selectedItem.quantity++;
        //     localCart.cartTotal++;
        //     localCart.amount = calculateAmount(localCart.cartItems);
        // }
        product.quantity++
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* decreaseItemQtySaga(payload) {
    try {
        const { product } = payload;
        const localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:chickchack')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.id === product.id
        );

        if (selectedItem) {
            if (selectedItem.quantity === 1) {

                let index = localCart.cartItems.findIndex(
                    (item) => item.id === product.id
                );
                localCart.cartTotal = localCart.cartTotal - product.quantity;
                localCart.cartItems.splice(index, 1);
                localCart.amount = calculateAmount(localCart.cartItems);
                if (localCart.cartItems.length === 0) {
                    localCart.cartItems = [];
                    localCart.amount = 0;
                    localCart.cartTotal = 0;
                }
            } else {
                selectedItem.quantity--;
                localCart.cartTotal--;
                localCart.amount = calculateAmount(localCart.cartItems);
            }
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* clearCartSaga() {
    try {
        const emptyCart = {
            cartItems: [],
            amount: 0,
            cartTotal: 0,
        };
        yield put(updateCartSuccess(emptyCart));
    } catch (err) {
        yield put(updateCartError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CART, getCartSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_QTY, increaseQtySaga)]);
    yield all([takeEvery(actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
    yield all([takeEvery(actionTypes.ADD_TO_CART,add_to_cart)]);
    yield all([takeEvery(actionTypes.DELETE_ALL_CARTS,deleteallcart)]);
    yield all([takeEvery(actionTypes.DELETE_CART_ITEM,deletecartitem)]);
    yield all([takeEvery(actionTypes.GET_CART_LIST,getcartlist)]);
}
