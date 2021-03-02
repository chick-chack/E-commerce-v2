import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
    getcartlist,
    add_to_cart,
    deletecartitem,
    updateCartSuccess

} from '../../../store/cart/action';
import _ from "lodash";

import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';
import i18next from 'i18next';
import BounceLoader from "react-spinners/BounceLoader";

import { notification } from 'antd';

const modalWarning = (type, item) => {
    notification[type]({
        message: 'Warning',
        description: "you can't add more, Only " + item + " left in stock",
        duration: 3,
    });
};

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        test: this.props.cart.car,
        loding_cart_list: this.props.cart.loding_cart_list
    }

    componentDidMount() {
        this.props.dispatch(getcartlist());
        this.setState({
            test: this.props.cart.cartlist
        })
    }

    handleIncreaseItemQty(product) {
        const { cartlist } = this.props.cart;
        this.setState({
            test: cartlist
        })


        let existItem = this.props.cart.cartlist.find(
            (item) => item['productChild.id'] === product['productChild.id'])
        if (existItem) {
            if (existItem['productChild.quantity'] <= existItem.quantity) {
                modalWarning('warning', existItem.quantity);
            } else {
                existItem.quantity++;
                this.props.dispatch(add_to_cart(product['productChild.id'], 1))
            }
        }

    }

    handleDecreaseItemQty(product) {
        const { cartlist } = this.props.cart;
        this.setState({
            test: cartlist
        })

        if (product.quantity === 1) {

            let index = this.props.cart.cartlist.findIndex(
                (item) => item['productChild.id'] === product['productChild.id']
            );

            this.props.cart.cartlist.splice(index, 1);
            this.props.dispatch(deletecartitem(product.id));
        }
        else {
            let existItem = this.props.cart.cartlist.find(
                (item) => item['productChild.id'] === product['productChild.id'])
            if (existItem) {
                existItem.quantity--;
            }
            this.props.dispatch(add_to_cart(product['productChild.id'], -1))
        }
    }

    handleRemoveCartItem = product => {
        const { cartlist } = this.props.cart;
        this.setState({
            test: cartlist
        })

        let index = this.props.cart.cartlist.findIndex(
            (item) => item['productChild.id'] === product['productChild.id']
        );
        this.props.cart.cartlist.splice(index, 1);
        this.props.dispatch(deletecartitem(product.id));
    }

    /*********************************************************
    ||||||||||||||||| local storage cart |||||||||||||||||||||
     ********************************************************/

    handleIncreaseLocalItemQty(product) {
        const { cartItems } = this.props.cart;
        this.setState({
            test: cartItems
        })


        let existItem = this.props.cart.cartItems.find(
            (item) => item['productChild.id'] === product['productChild.id'])
        if (existItem) {
            if (existItem['productChild.quantity'] <= existItem.quantity) {
                modalWarning('warning', existItem.quantity);
            } else {
                existItem.quantity++;
                // this.props.dispatch(add_to_cart(product['productChild.id'], 1))
                this.props.dispatch(updateCartSuccess(this.props.cart.cartItems))
            }
        }

    }

    handleDecreaseLocalItemQty(product) {
        const { cartItems } = this.props.cart;
        this.setState({
            test: cartItems
        })

        if (product.quantity === 1) {

            let index = this.props.cart.cartItems.findIndex(
                (item) => item['productChild.id'] === product['productChild.id']
            );

            this.props.cart.cartItems.splice(index, 1);
            // this.props.dispatch(deletecartitem(product.id));
            this.props.dispatch(updateCartSuccess(this.props.cart.cartItems))
        }
        else {
            let existItem = this.props.cart.cartItems.find(
                (item) => item['productChild.id'] === product['productChild.id'])
            if (existItem) {
                existItem.quantity--;
            }
            this.props.dispatch(updateCartSuccess(this.props.cart.cartItems))
        }
    }

    handleRemoveLocalCartItem = product => {
        const { cartItems } = this.props.cart;
        this.setState({
            test: cartItems
        })

        let index = this.props.cart.cartItems.findIndex(
            (item) => item['productChild.id'] === product['productChild.id']
        );
        this.props.cart.cartItems.splice(index, 1);
        this.props.dispatch(updateCartSuccess(this.props.cart.cartItems))
    }


    render() {

        if (this.props.auth.isLoggedIn && Boolean(this.props.auth.isLoggedIn) === true ){ 

        if (!this.props.cart.loding_cart_list) {
            return (
                <div className="ps-section--shopping ps-shopping-cart">
                    <div className="ps-container">
                        <div className="ps-section__header">
                            <BounceLoader color='#BA915E' loading={true} size={150} />
                        </div>
                    </div>
                </div>

            )
        }
        else  {
            return (
                <div className="ps-section--shopping ps-shopping-cart">
                    <div className="ps-container">
                        <div className="ps-section__header">
                            {!_.isEmpty(this.props.cart.cartlist) ?
                                <h1> {i18next.t('shoppingcart')}</h1>
                                : <h1>    {i18next.t('emptycart')}</h1>}
                        </div>
                        <div className="ps-section__content">
                            {!_.isEmpty(this.props.cart.cartlist) ?
                            <div>
                            <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                {this.props.cart.cartlist 
                                    ? this.props.cart.cartlist.map(product => (
                                          <div
                                              className="ps-product--cart-mobile"
                                              key={product['productChild.id']}>
                                              <div className="ps-product__thumbnail">
                                                  <Link  href={{
                                                      pathname:`/product/${product['productChild.productId']}`,
                                                      query: 
                                                      {
                                                          id: product['productChild.id'],
                                                      }
                                                  }}
                                                  >
                                                    <a>
                                                        <img src={product['productChild.image']} alt="product" />
                                                    </a>
                                                  </Link>
                                              </div>
                                              <div className="ps-product__content">

                                                  <Link 
                                                    href={{
                                                        pathname:`/product/${product['productChild.productId']}`,
                                                        query: 
                                                        {
                                                            id: product['productChild.id'],
                                                        }
                                                    }}>
                                                      <a className="ps-product__title">
                                                      { localStorage.getItem('lang')==="en" ? 
                                                            product['productChild.product.name_en'] : product['productChild.product.name_ar'] }
                                                      </a>
                                                  </Link>
                                                  <small>
                                                  {i18next.t('items')}:  <div className="form-group--number">
                                                            <button
                                                                className="up"
                                                                onClick={this.handleIncreaseItemQty.bind(
                                                                    this,
                                                                    product
                                                                )}>
                                                                +
                                                     </button>
                                                            <button
                                                                className="down"
                                                                onClick={this.handleDecreaseItemQty.bind(
                                                                    this,
                                                                    product
                                                                )}>
                                                                -
                                                     </button>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="1"
                                                                value={product.quantity}
                                                                readOnly={true}
                                                            />
                                                        </div>    
                                                  </small>
                                                  { product['productChild.product.size']!=null ?
                                                                       <small>{i18next.t('size')} : { product['productChild.product.size']}</small>
                                                                       :''

                                                                       }
                                                                       { product['productChild.product.colorCode']!=null ?

                                                                       <small>{i18next.t('color')} : {localStorage.getItem('lang')=='en' 
                                                                       ?  product['productChild.product.colorName_en']
                                                                    :
                                                                    product['productChild.product.colorName_ar']}</small>
                                                                       :''}
                                                  <p>{i18next.t('price')} :$
                                                      {product['productChild.isOffer'] 
                                                            ?product['productChild.price'] - ((product['productChild.price'] *product['productChild.offerRatio'])/100 )
                                                            : product['productChild.price']} </p>
                                                            <p>
                                                                {i18next.t('total')} :    $
                                                 {product.quantity *
                                                            (product['productChild.isOffer']
                                                                ? (product['productChild.price'] - ((product['productChild.price'] * product['productChild.offerRatio']) / 100).toFixed(2)).toFixed(2)
                                                                : (product['productChild.price']).toFixed(2)
                                                                )
                                                                }
                                                            </p>
                                                            <button
                                                            className="ps-btn" onClick={this.handleRemoveCartItem.bind(
                                                                this,
                                                                product
                                                            )}>
                                                                    {i18next.t('delete')}
                                                            </button>
                                                            
                                                    
                                              </div>
                                          </div>
                                      ))
                                    : ''}
                            </div>
                        </div>
                    
                    
                                </div>
                                : <div> </div>
                                
                                }
                        </div>
                        <div className="ps-section__footer">
                            {!_.isEmpty(this.props.cart.cartlist) ?

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-col-sm-12 col-12">
                                        <div className="ps-block--shopping-total">

                                            <div className="ps-block__content">
                                                <h3>
                                                    {i18next.t("total")} <span>$
                                                        {this.props.cart.cartlist ?
                                                            Object.values(this.props.cart.cartlist)
                                                                .reduce((acc, obj) => acc + (obj.quantity * (obj['productChild.isOffer']
                                                                    ? obj['productChild.price'] - ((obj['productChild.price'] * obj['productChild.offerRatio']) / 100)
                                                                    : obj['productChild.price'])), 0)
                                                                .toFixed(2) : "nooooooooooooooooooo"}
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                   
                                     
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-col-sm-12 col-12" style={{margin:"auto"}}>
                                    <Link href="/account/checkout">
                                            <a className="ps-btn ps-btn--fullwidth">
                                                {i18next.t("proceedtocheckout")}

                                            </a>
                                        </Link>
                                  
                                    </div>
                                    <div className="ps-section__cart-actions">
                                        <Link href="/">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                                {i18next.t("backtoshop")}
                                            </a>
                                        </Link>
                            </div>

                                </div>
                                : <div>
                                         <div className="ps-section__cart-actions">
                                        <Link href="/">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                                {i18next.t("backtoshop")}
                                            </a>
                                        </Link>
                            </div>
                                </div>
                            }

                        </div>

                    </div>
                
                </div>
            );
        }

    } else{

            return (
                <div className="ps-section--shopping ps-shopping-cart">
                   <div className="ps-container">
                        <div className="ps-section__header">
                            {!_.isEmpty(this.props.cart.cartItems) ?
                                <h1> {i18next.t('shoppingcart')}</h1>
                                : <h1>    {i18next.t('emptycart')}</h1>}
                        </div>
                        <div className="ps-section__content">
                            {!_.isEmpty(this.props.cart.cartItems) ?
                            <div>
                            <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                {this.props.cart.cartItems 
                                    ? this.props.cart.cartItems.map(product => (
                                          <div
                                              className="ps-product--cart-mobile"
                                              key={product['productChild.id']}>
                                              <div className="ps-product__thumbnail">
                                                  <Link  href={{
                                                      pathname:`/product/${product['productChild.productId']}`,
                                                      query: 
                                                      {
                                                          id: product['productChild.id'],
                                                      }
                                                  }}
                                                  >
                                                    <a>
                                                        <img src={product['productChild.image']}    alt="product" />
                                                    </a>
                                                  </Link>
                                              </div>
                                              <div className="ps-product__content">

                                                  <Link 
                                                    href={{
                                                        pathname:`/product/${product['productChild.productId']}`,
                                                        query: 
                                                        {
                                                            id: product['productChild.id'],
                                                        }
                                                    }}>
                                                      <a className="ps-product__title"
                                                      
                                                      >
                                                      { localStorage.getItem('lang')==="en" ? 
                                                            product['productChild.product.name_en'] : product['productChild.product.name_ar'] }
                                                      </a>
                                                  </Link>
                                                  <small>
                                                  {i18next.t('items')}:  <div className="form-group--number">
                                                            <button
                                                                className="up"
                                                                onClick={this.handleIncreaseLocalItemQty.bind(
                                                                    this,
                                                                    product
                                                                )}>
                                                                +
                                                     </button>
                                                            <button
                                                                className="down"
                                                                onClick={this.handleDecreaseLocalItemQty.bind(
                                                                    this,
                                                                    product
                                                                )}>
                                                                -
                                                     </button>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="1"
                                                                value={product.quantity}
                                                                readOnly={true}
                                                            />
                                                        </div>
                                                  </small>
                                                  { product['productChild.product.size']!=null ?
                                                                       <small>{i18next.t('size')} : { product['productChild.product.size']}</small>
                                                                       :''

                                                                       }
                                                                       { product['productChild.product.colorCode']!=null ?

                                                                       <small>{i18next.t('color')} : {localStorage.getItem('lang')=='en' 
                                                                       ?  product['productChild.product.colorName_en']
                                                                    :
                                                                    product['productChild.product.colorName_ar']}</small>
                                                                       :''}
                                                  <p >{i18next.t('price')} :$
                                                      {/* {product['productChild.price']} */}
                                                     
                                                      {product['productChild.isOffer'] 
                                                            ?product['productChild.price'] - ((product['productChild.price'] *product['productChild.offerRatio'])/100 )
                                                            : product['productChild.price']} </p>
                                                            <p>
                                                                {i18next.t('total')} :    $
                                                 {product.quantity *
                                                            (product['productChild.isOffer']
                                                                ? (product['productChild.price'] - ((product['productChild.price'] * product['productChild.offerRatio']) / 100).toFixed(2)).toFixed(2)
                                                                : (product['productChild.price']).toFixed(2)
                                                                )
                                                                }
                                                            </p>
                                                            <button
                                                            className="ps-btn" onClick={this.handleRemoveLocalCartItem.bind(
                                                                this,
                                                                product
                                                            )}>
                                                                    {i18next.t('delete')}
                                                            </button>
                                                            
                                                    
                                              </div>
                                          </div>
                                      ))
                                    : ''}
                            </div>
                        </div>
                    
                    
                                </div>
                                : <div> </div>
                                
                                }
                        </div>
                        <div className="ps-section__footer">
                            {!_.isEmpty(this.props.cart.cartItems) ?

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-col-sm-12 col-12">
                                        <div className="ps-block--shopping-total">

                                            <div className="ps-block__content">
                                                <h3>
                                                    {i18next.t("total")} <span>$
                                                        {this.props.cart.cartItems ?
                                                            Object.values(this.props.cart.cartItems)
                                                                .reduce((acc, obj) => acc + (obj.quantity * (obj['productChild.isOffer']
                                                                    ? obj['productChild.price'] - ((obj['productChild.price'] * obj['productChild.offerRatio']) / 100)
                                                                    : obj['productChild.price'])), 0)
                                                                .toFixed(2) : "nooooooooooooooooooo"}
                                                    </span>
                                                </h3>
                                            </div>
                                        </div>
                                   
                                     
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-col-sm-12 col-12" style={{margin:"auto"}}>
                                    <Link href="/account/checkout">
                                            <a className="ps-btn ps-btn--fullwidth">
                                                {i18next.t("proceedtocheckout")}

                                            </a>
                                        </Link>
                                  
                                    </div>
                                    <div className="ps-section__cart-actions">
                                        <Link href="/">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                                {i18next.t("backtoshop")}
                                            </a>
                                        </Link>
                            </div>

                                </div>
                                : <div>
                                         <div className="ps-section__cart-actions">
                                         <Link href="/account/login">
                                    <a className="ps-btn ps-btn--fullwidth">
                                        {i18next.t("proceedtocheckout")}

                                        </a>
                                    </Link>
                            </div>
                                </div>
                            }

                        </div>

                    </div>
                
                
                </div>
            );
        }

    }
}


const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(ShoppingCart);
