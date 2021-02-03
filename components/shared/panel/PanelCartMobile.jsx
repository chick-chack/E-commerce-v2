import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getCart, removeItem } from '../../../store/cart/action';
import Link from 'next/link';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl } from '../../../repositories/Repository';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
    getcartlist,
    add_to_cart,
    deletecartitem  
} from '../../../store/cart/action';
import _ from "lodash";
// import ProductCart from '../../elements/products/ProductCart';
import i18next from 'i18next';

class PanelCartMobile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };


    render() {
        const { amount, cartItems , auth} = this.props;
        const { cartlist}= this.props.cart;
        return (
            
            <div className="ps-cart--mobile">
                <div className="ps-cart__content">
                    {cartlist && cartlist.length > 0 ? (
                        cartlist.map((product, index) => (
                            <div
                                className="ps-product--cart-mobile"
                                key={index}>
                                <div className="ps-product__thumbnail">
                                    <Link
                                     href="/product/[pid]" as={`/product/${product['productChild.productId']}?id=${product['productChild.id']}`}
                                        // href="/product/[pid]"
                                        // as={`/product/${product.id}`}
                                        >
                                        <a>
                                        <img src={product['productChild.image']}    alt="product" />
                                            {/* <img
                                                src={
                                                    isStaticData === true
                                                        ? product.thumbnail.url
                                                        : `${baseUrl}${product.thumbnail.url}`
                                                }
                                                alt="chickchack"
                                            /> */}
                                        </a>
                                    </Link>
                                </div>
                                <div className="ps-product__content">
                                    <a
                                        className="ps-product__remove"
                                        onClick={this.handleRemoveCartItem.bind(
                                            this,
                                            product
                                        )}>
                                        <i className="icon-cross"></i>
                                    </a>
                                    <Link
                                        // href="/product/[pid]"
                                        // as={`/product/${product.id}`}
                                        href="/product/[pid]" as={`/product/${product['productChild.productId']}?id=${product['productChild.id']}`}
                                        
                                        >


                                        <a className="ps-product__title">
                                            {/* {product.title} */}
                                            { localStorage.getItem('lang')==="en" ? 
                        product['productChild.product.name_en'] : product['productChild.product.name_ar'] }
                                        </a>
                                    </Link>
                                    {/* <p>
                                        <strong>Sold by:</strong>{' '}
                                        {product.vendor}
                                    </p> */}
                                    <small>
                                        {/* {product.quantity} x ${product.price} */}
                                        {product.quantity *
                                                //   product['productChild.price']
                                                (product['productChild.isOffer'] 
                                                        ?product['productChild.price'] - ((product['productChild.price'] *product['productChild.offerRatio'])/100 )
                                                        : product['productChild.price'])}
                                    </small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="ps-cart__items">
                            <span>No products in cart</span>
                        </div>
                    )}
                </div>
                {cartlist && cartlist.length > 0 ? (
                    <div className="ps-cart__footer">
                        <h3>
                            {/* Sub Total:<strong>${amount}</strong> */}
                            {i18next.t("total")} <span>$
                                            {/* {
                                         this.props.cartlist? 
                                         Object.values(this.props.cartlist)
                                         .reduce((acc, obj) => acc + (obj.quantity * obj['productChild.price'] ), 0)
                                         .toFixed(2) : "nooooooooooooooooooo"
                                    } */}
                                         {this.props.cart.cartlist? 
                                         Object.values(this.props.cart.cartlist)
                                         .reduce((acc, obj) => acc + (obj.quantity * (obj['productChild.isOffer']
                                                                                ? obj['productChild.price'] -( ( obj['productChild.price'] * obj['productChild.offerRatio'])/100)
                                                                                : obj['productChild.price'] )), 0)
                                         .toFixed(2) : "nooooooooooooooooooo"}
                                                
                                                {/* {amount} */}
                                                
                                                </span>
                        </h3>
                        <figure>
                            <Link href="/account/shopping-cart">
                                <a className="ps-btn">View Cart</a>
                            </Link>
                            <Link href="/account/checkout">
                                <a className="ps-btn">Checkout</a>
                            </Link>
                        </figure>
                    </div>
                ) : (
                    <div className="ps-cart__footer">
                        <Link href="/">
                            <a className="ps-btn ps-btn--fullwidth">Shop now</a>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(PanelCartMobile);
