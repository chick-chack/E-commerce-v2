import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem, getcartlist, deletecartitem,updateCartSuccess } from '../../../../store/cart/action';
import { isStaticData } from '../../../../utilities/app-settings';
import { baseUrl } from '../../../../repositories/Repository';
import i18next from 'i18next';

class MiniCart extends Component {
    constructor(props) {
        super(props);
    }
        state={
        test:this.props.cartlist,
        amount:0
    }
   
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        this.props.dispatch(getcartlist());
    }

   /*********************************************
    |||||||||||||| log in case ||||||||||||||||||
    ********************************************/
   handleRemoveCartItem = product => {
   
    const {cartlist } = this.props;
    this.setState({
        test: cartlist
    })
    
        let index = this.props.cart.cartlist.findIndex(
            (item) => item.id === product.id
        );

        this.props.cart.cartlist.splice(index, 1);
        this.props.dispatch(deletecartitem(product.id));
};

/*********************************************
|||||||||||||| un log in case |||||||||||||||
********************************************/
handleRemoveLocalCartItem = product => {
   
    const {cartItems } = this.props.cart;
    this.setState({
        test: cartItems
    })
    
        let index = this.props.cart.cartItems.findIndex(
            (item) => item.id === product.id
        );

        this.props.cart.cartItems.splice(index, 1);
        console.log("cart itimes after splice", this.props.cart.cartItems)
        console.log("index splice", index)
         this.props.dispatch(updateCartSuccess(this.props.cart.cartItems))
        // this.props.dispatch(deletelocalcartitem(product.id));
};

    render() {
        const { amount, cartTotal, cartItems , cartlist} = this.props.cart;
        const {  auth } = this.props;   

      
        return (
          
            <div >
                  {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                    <div className="ps-cart--mini">
                    <a className="header__extra" href="#">
                        <i className="icon-bag2"></i>
                        <span>
                            <i>{this.props.cart.cartlist ? this.props.cart.cartlist.length : 0}</i>
                        </span>
                    </a>
                    {this.props.cart.cartlist && this.props.cart.cartlist.length > 0 ? (
                        <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                {this.props.cart.cartlist 
                                    ? this.props.cart.cartlist.map(product => (
                                          <div
                                              className="ps-product--cart-mobile"
                                              key={product['productChild.id']}>
                                              <div className="ps-product__thumbnail">
                                                  <Link 
                                                //   href="/product/[pid]" 
                                                //   as={`/product/${product['productChild.productId']}?id=${product['productChild.id']}`}
                    
                                                  href={{
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
                                                  <a
                                                      className="ps-product__remove"
                                                      onClick={this.handleRemoveCartItem.bind(
                                                          this,
                                                          product
                                                      )}>
                                                      <i className="icon-cross"></i>
                                                  </a>
                                                  <Link 
                                                    href={{
                                                        pathname:`/product/${product['productChild.productId']}`,
                                                        query: 
                                                        {
                                                            id: product['productChild.id'],
                                                        }
                                                    }}
                                                //    href="/product/[pid]" as={`/product/${product['productChild.productId']}?id=${product['productChild.id']}`}
                                                   
                                                   >
                                                      <a className="ps-product__title">
                                                      { localStorage.getItem('lang')==="en" ? 
                                                            product['productChild.product.name_en'] : product['productChild.product.name_ar'] }
                                                      </a>
                                                  </Link>
                                                  <small>
                                                      {product.quantity} x $
                                                      {/* {product['productChild.price']} */}
                                                     
                                                      {product['productChild.isOffer'] 
                                                            ?product['productChild.price'] - ((product['productChild.price'] *product['productChild.offerRatio'])/100 )
                                                            : product['productChild.price']}
                                                  </small>
                                              </div>
                                          </div>
                                      ))
                                    : ''}
                            </div>
                            <div className="ps-cart__footer">
                                <h3>
                                   {i18next.t('subtotal')}
                                    <strong>$   
                                             {this.props.cart.cartlist? 
                                             Object.values(this.props.cart.cartlist)
                                             .reduce((acc, obj) => acc + (obj.quantity * (obj['productChild.isOffer']
                                                                                    ? obj['productChild.price'] -( ( obj['productChild.price'] * obj['productChild.offerRatio'])/100)
                                                                                    : obj['productChild.price'] )), 0)
                                             .toFixed(2) : "nooooooooooooooooooo"}
                                        </strong>
                                </h3>
                                <figure>
                                    <Link href="/account/shopping-cart">
                                        <a className="ps-btn">{i18next.t('viewcart')}</a>
                                    </Link>
                                    <Link href="/account/checkout">
                                        <a className="ps-btn">{i18next.t('checkout')}</a>
                                    </Link>
                                </figure>
                            </div>
                        </div>
                    
                    
                    ) : (
                        <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                <span>{i18next.t('noproductsincart')}</span>
                            </div>
                        </div>
                    )}
                    </div>
                    
                    
                ) : (
                    <div className="ps-cart--mini">
                    <a className="header__extra" href="#">
                        <i className="icon-bag2"></i>
                        <span>
                            <i>{this.props.cart.cartItems ? this.props.cart.cartItems.length : 0}</i>
                        </span>
                    </a>
                    {this.props.cart.cartItems && this.props.cart.cartItems.length > 0 ? (
                        <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                {this.props.cart.cartItems 
                                    ? this.props.cart.cartItems.map(product => (
                                          <div
                                              className="ps-product--cart-mobile"
                                              key={product['productChild.id']}>
                                              <div className="ps-product__thumbnail">
                                                  <Link 
                                                  href={{
                                                      pathname:`/product/${product['productChild.productId']}`,
                                                      query: 
                                                      {
                                                          id: product['productChild.id'],
                                                      }
                                                  }}        >
                                                      <a>
                                                            <img src={product['productChild.image']}    alt="product" />
                                                      </a>
                                                  </Link>
                                              </div>
                                              <div className="ps-product__content">
                                                  <a
                                                      className="ps-product__remove"
                                                      onClick={this.handleRemoveLocalCartItem.bind(
                                                          this,
                                                          product
                                                      )}>
                                                      <i className="icon-cross"></i>
                                                  </a>
                                                  <Link 
                                                    href={{
                                                        pathname:`/product/${product['productChild.productId']}`,
                                                        query: 
                                                        {
                                                            id: product['productChild.id'],
                                                        }
                                                    }}
                                                //    href="/product/[pid]" as={`/product/${product['productChild.productId']}?id=${product['productChild.id']}`}
                                                   
                                                   >
                                                      <a className="ps-product__title">
                                                      { localStorage.getItem('lang')==="en" ? 
                                                            product['productChild.product.name_en'] : product['productChild.product.name_ar'] }
                                                      </a>
                                                  </Link>
                                                  <small>
                                                      {product.quantity} x $
                                                      {/* {product['productChild.price']} */}
                                                     
                                                      {product['productChild.isOffer'] 
                                                            ?product['productChild.price'] - ((product['productChild.price'] *product['productChild.offerRatio'])/100 )
                                                            : product['productChild.price']}
                                                  </small>
                                              </div>
                                          </div>
                                      ))
                                    : ''}
                            </div>
                            <div className="ps-cart__footer">
                                <h3>
                                   {i18next.t('subtotal')}
                                    <strong>$                                 

                                             {this.props.cart.cartItems? 
                                             Object.values(this.props.cart.cartItems)
                                             .reduce((acc, obj) => acc + (obj.quantity * (obj['productChild.isOffer']
                                                                                    ? obj['productChild.price'] -( ( obj['productChild.price'] * obj['productChild.offerRatio'])/100)
                                                                                    : obj['productChild.price'] )), 0)
                                             .toFixed(2) : "nooooooooooooooooooo"}
                                        </strong>
                                </h3>
                                <figure>
                                    <Link href="/account/shopping-cart">
                                        <a className="ps-btn">{i18next.t('viewcart')}</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="ps-btn">{i18next.t('checkout')}</a>
                                    </Link>
                                </figure>
                            </div>
                        </div>
                    
                    
                    ) : (
                        <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                <span>{i18next.t('noproductsincart')}</span>
                            </div>
                        </div>
                    )}
                    </div>
                   
                )}

            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(MiniCart);

