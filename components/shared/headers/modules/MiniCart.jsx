import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem, getcartlist, deletecartitem } from '../../../../store/cart/action';
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
        
        // console.log("&&&& mini cart  remove product ", product['productChild.id'])
        // this.props.dispatch(deletecartitem(product.id));
      //  this.props.dispatch(getcartlist());
    };

    render() {
        const { amount, cartTotal, cartItems , cartlist} = this.props.cart;
 
        // const amount =this.props.cart.cartlist.map(product=>(

        //     product.quantity *
        //     product['productChild.price']
        // ))
        // const amount = cartlist.array.forEach(element => {
            
        // });


//   console.log("l;lkklklkl",   this.props.cart.cartlist? 
//   Object.values(this.props.cart.cartlist)
//   .reduce((acc, obj) => acc + (obj.quantity * obj['productChild.price'] ), 0)
//   .toFixed(2) : "nooooooooooooooooooo")


//  arr.reduce(function (acc, obj) { return acc + obj.quantity; }, 0));
//  [{x:1}, {x:2}, {x:4}].reduce(function (acc, obj) { return acc + obj.x; }, 0));
//  [1,2,3,4,5].reduce((acc, current)=>acc+current, 0)); 
//  cartlist.reduce(function ( acc , obj ){ return acc + ( obj.quantity )}));
//  Object.values(cartlist)
//      .reduce((acc, { quantity, price }) => acc + .quantity * product['productChild.price'], 0)
//      .toFixed(2))
        
        return (
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

                                            //   href={{
                                            //     pathname: '/store/ProductsByCategory', query: {
                                            //         // mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                     
                                            //          mallid: storeinfo['mall.id'],
                                            //           mallname:storeinfo['mall.name_en'],
                                            //         SectionId:product.id},}  
                                            // }
                                              
                                              
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
                                    {/* {amount ? amount : 0} */}
                                    {/* {
                                         this.props.cart.cartlist? 
                                         Object.values(this.props.cart.cartlist)
                                         .reduce((acc, obj) => acc + (obj.quantity * obj['productChild.price'] ), 0)
                                         .toFixed(2) : "nooooooooooooooooooo"
                                    } */}
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
        
        
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(MiniCart);
