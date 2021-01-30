import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';
import i18next from 'i18next';


class ShoppingCart extends Component {
    constructor(props) {
        super(props);
 
       
    }
    state={
        test:this.props.car
    }

    componentDidMount() {
        this.props.dispatch(getcartlist());

        this.setState({
            test:this.props.cartlist
          })

    }
 
    handleIncreaseItemQty(product) {
      const {cartlist } = this.props;
      this.setState({
          test: cartlist
      })
    
      let existItem = this.props.cartlist.find(
        (item) => item['productChild.id']=== product['productChild.id'] )

        if (existItem) {
            existItem.quantity ++;
        }

         this.props.dispatch(add_to_cart(product['productChild.id'] , 1))
        // this.props.dispatch(getcartlist());

    }

    handleDecreaseItemQty(product) {
        const {cartlist } = this.props;
        this.setState({
            test: cartlist
        })

         if ( product.quantity===1){
             
            let index = this.props.cartlist.findIndex(
                (item) => item['productChild.id']=== product['productChild.id']
            );

            this.props.cartlist.splice(index, 1);
            this.props.dispatch(deletecartitem(product.id));
        }
        else{
            let existItem =this.props.cartlist.find(
                (item) => item['productChild.id']=== product['productChild.id'])
                console.log("leeeeeeeeeeeeko", existItem);
                if (existItem) {
                    existItem.quantity --;
                }
            this.props.dispatch(add_to_cart( product['productChild.id'], -1))
        }
    //     this.props.dispatch(getcartlist());
    //    this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = product => {
        const {cartlist } = this.props;
        this.setState({
            test: cartlist
        })
               
        let index = this.props.cartlist.findIndex(
            // (item) => item.id === product.id
            (item) => item['productChild.id']=== product['productChild.id']
        );

        this.props.cartlist.splice(index, 1);
        this.props.dispatch(deletecartitem(product.id));
    }

    render() {
        const { amount, cartTotal, cartItems  } = this.props;
        const { cartlist}= this.props;
        const {test}= this.state;

        let currentCartItems = [];
        if ( this.props.cartlist &&  this.props.cartlist.length > 0) {

        }
        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">
                    <div className="ps-section__header">
                        { !_.isEmpty(this.props.cartlist) ?
                             <h1> {i18next.t('shoppingcart')}</h1>
                             :<h1>    {i18next.t('emptycart')}</h1> 
                        }
                   
                    </div>
                    <div className="ps-section__content">
                      { !_.isEmpty(this.props.cartlist) ? 
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
                                 {this.props.cartlist.map((product, index) => (
                                     
                                     <tr key={index}>
                                         <td>
                                             <ProductCart product={product}/>
                                          
                                       
                                         </td>
                                         <td className="price">
                                             $ 
                                             {/* {product['productChild.price']} */}
                                             {product['productChild.isOffer'] 
                                                        ?product['productChild.price'] - ((product['productChild.price'] *product['productChild.offerRatio'])/100 )
                                                        : product['productChild.price']}
                                             

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
                                             {product.quantity *
                                                //   product['productChild.price']
                                                (product['productChild.isOffer'] 
                                                        ?product['productChild.price'] - ((product['productChild.price'] *product['productChild.offerRatio'])/100 )
                                                        : product['productChild.price'])}
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
                    { !_.isEmpty(this.props.cartlist) ? 

                        <div className="row justify-content-end">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                <div className="ps-block--shopping-total">
                                    {/* <div className="ps-block__header">
                                        <p>
                                            {i18next.t("subtotal")} <span> ${amount}</span>
                                        </p>
                                    </div> */}
                                    <div className="ps-block__content">
                                        {/* <ul className="ps-block__product">
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
                                        </ul> */}
                                        <h3>
                                            {i18next.t("total")} <span>$
                                            {/* {
                                         this.props.cartlist? 
                                         Object.values(this.props.cartlist)
                                         .reduce((acc, obj) => acc + (obj.quantity * obj['productChild.price'] ), 0)
                                         .toFixed(2) : "nooooooooooooooooooo"
                                    } */}
                                         {this.props.cartlist? 
                                         Object.values(this.props.cartlist)
                                         .reduce((acc, obj) => acc + (obj.quantity * (obj['productChild.isOffer']
                                                                                ? obj['productChild.price'] -( ( obj['productChild.price'] * obj['productChild.offerRatio'])/100)
                                                                                : obj['productChild.price'] )), 0)
                                         .toFixed(2) : "nooooooooooooooooooo"}
                                                
                                                {/* {amount} */}
                                                
                                                </span>
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
