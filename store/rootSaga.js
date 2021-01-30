import { all } from 'redux-saga/effects';
import PostSaga from './post/saga';
import ProductSaga from './product/saga';
import SettingSaga from './setting/saga';
import CartSaga from './cart/saga';
import OrderSaga from './order/saga';
import AuthSaga from './auth/saga';
import CompareSaga from './compare/saga';
import WishlistSaga from './wishlist/saga';
import CollectionSaga from './collection/saga';
import MediaSaga from './media/saga';
import App from './app/saga';
import Mall from './mall/saga';
import Store from './store/saga'
import Address from './address/saga'

export default function* rootSaga() {
    yield all([
        PostSaga(),
        ProductSaga(),
        SettingSaga(),
        CartSaga(),
        AuthSaga(),
        CompareSaga(),
        WishlistSaga(),
        CollectionSaga(),
        MediaSaga(),
        App(),
        OrderSaga(),
        Mall(),
        Store(),
        Address(),
    ]);
}
