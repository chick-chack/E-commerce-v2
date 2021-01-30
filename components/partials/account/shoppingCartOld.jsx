import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';
import _ from "lodash";

import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';
import i18next from 'i18next';
import i18n from '~/i18next';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        
        this.props.dispatch(decreaseItemQty(product));

    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">
                    <div className="ps-section__header">
                        { !_.isEmpty(currentCartItems) ?
                             <h1> {i18next.t('shoppingcart')}</h1>
                             :<h1>    {i18next.t('emptycart')}</h1> 

                        }
                   
                    </div>
                    <div className="ps-section__content">
                      { !_.isEmpty(currentCartItems) ? 
                         <div className="table-responsive">
                         <table className="table ps-table--shopping-cart">
                             <thead>
                                 <tr>
                                     <th>{i18next.t("product")}</th>
                                     <th>{i18next.t("price")}</th>
                                     <th>{i18next.t("quantity")}</th>
                                     <th>{i18next.t("total")}</th>
                                     <th>{i18next.t("delete")}</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {currentCartItems.map(product => (
                                     <tr key={product.id}>
                                         <td>
                                             <ProductCart product={product}/>
                                             {/*<div className="ps-product--cart">
                                                 <div className="ps-product__thumbnail">
                                                     <Link
                                                         href="/product/[pid]"
                                                         as={`/product/${product.id}`}>
                                                         <a>
                                                             <img
                                                                 src={
                                                                     product.thumbnail
                                                                 }
                                                                 alt="chickchack"
                                                             />
                                                         </a>
                                                     </Link>
                                                 </div>
                                                 <div className="ps-product__content">
                                                     <Link
                                                         href="/product/[pid]"
                                                         as={`/product/${product.id}`}>
                                                         <a className="ps-product__title">
                                                             {product.title}
                                                         </a>
                                                     </Link>
                                                     <p>
                                                         Sold By:
                                                         <strong>
                                                             {product.vendor}
                                                         </strong>
                                                     </p>
                                                 </div>
                                             </div>*/}
                                         </td>
                                         <td className="price">
                                             {/* $ {product.productChildren[0]['price']} */}
                                             $

                                         </td>
                                         <td>
                                             <div className="form-group--number">
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
                                         </td>
                                         <td>
                                             $
                                             {/* {product.quantity *
                                                  product.productChildren[0]['price']} */}
                                         </td>
                                         <td>
                                             <a
                                                 href="#"
                                                 onClick={this.handleRemoveCartItem.bind(
                                                     this,
                                                     product
                                                 )}>
                                                 <i className="icon-cross"></i>
                                             </a>
                                         </td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                     : <div> </div>}
                        <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a>
                                    <i className="icon-arrow-left mr-2"></i>
                                    {i18next.t("backtoshop")}
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ps-section__footer">
                    { !_.isEmpty(currentCartItems) ? 

                        <div className="row justify-content-end">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                <div className="ps-block--shopping-total">
                                    <div className="ps-block__header">
                                        <p>
                                            {i18next.t("subtotal")} <span> ${amount}</span>
                                        </p>
                                    </div>
                                    <div className="ps-block__content">
                                        <ul className="ps-block__product">
                                            {cartItems.length > 0
                                                ? cartItems.map(
                                                      (product, index) => {
                                                          if (index < 3) {
                                                              return (
                                                                  <li
                                                                      key={
                                                                          product.id
                                                                      }>
                                                                      <span className="ps-block__estimate">
                                                                          <Link
                                                                              href="/product/[pid]"
                                                                              as={`/product/${product.id}`}>
                                                                              <a className="ps-product__title">
                                                                                  {
                                                                                      product.title
                                                                                  }
                                                                                  <br />{' '}
                                                                                  x{' '}
                                                                                  {
                                                                                      product.quantity
                                                                                  }
                                                                              </a>
                                                                          </Link>
                                                                      </span>
                                                                  </li>
                                                              );
                                                          }
                                                      }
                                                  )
                                                : ''}
                                        </ul>
                                        <h3>
                                            {i18next.t("total")} <span>${amount}</span>
                                        </h3>
                                    </div>
                                </div>
                                <Link href="/account/checkout">
                                    <a className="ps-btn ps-btn--fullwidth">
                                         {i18next.t("proceedtocheckout")}
                                      
                                    </a>
                                </Link>
                            </div>
                        </div>
                      : <div> </div>}
                    
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(ShoppingCart);
