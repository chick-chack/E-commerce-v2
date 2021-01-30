import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Form, Input } from 'antd';
import { order_details } from '../../../store/order/action';
import _ from "lodash";
import i18next from 'i18next';
import dateFormat from 'dateformat';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,
        }
    }

    componentDidMount() {

        console.log("iddddddddddd", this.props.id)

        this.props.dispatch(order_details(this.props.id));

    }

    render() {
        const { order_details } = this.props;
        console.log("order form",order_details)

        return (
  

                <div className="ps-section__content">
                    {!_.isEmpty(order_details) ?
                        // <div className="">
                        //     <Link
                        //         href="/order/[oid]" as={`/order/${order_details.id}`}>
                        //            <img src={order_details['productChild.image']} alt="product"/>
                        //     </Link>
                        //     <h4> color: <span>{order_details['productChild.colorCode']}</span></h4>
                        //     <h4> size:  <span>{order_details['productChild.size']}</span> </h4>
                      
                        // </div>
                        <div className="ps-cart__content">
                        <div className="ps-cart__items">
                                      <div
                                          className="ps-product--cart-mobile"
                                          key={order_details.id}>
                                          <div className="ps-product__thumbnail" style={{maxWidth:"130px"}}>
                                              <Link
                                                  href="/product/[pid]"
                                                //   as={`/product/${product['productChild.id']}`}
                                                as={`/product/${order_details['productChild.id']}`}
                                                  
                                                  >
                                                  <a>
                                                        <img  src={order_details['productChild.image']}     alt="product" />
                                                  </a>
                                              </Link>
                                          </div>
                                          <div className="ps-product__content"
                                          style={{display:"flex", flexFlow:"column", justifyContent:"center", alignItems:"left",}}>
                                           
                                              {/* <Link
                                                  href="/product/[pid]"
                                                  as={`/product/${order_details['productChild.id']}`}>
                                                  <a className="ps-product__title">
                                                  { localStorage.getItem('lang')==="en" ? 
                                                        order_details['productChild.product.name_en'] : order_details['productChild.product.name_ar'] }
                                                  </a>
                                              </Link> */}
                                              <small style={{textAlign:"left", fontSize:"16px"}}>
                                                size: {order_details['productChild.size']}
                                           
                                              </small>
                                              <small style={{textAlign:"left", fontSize:"16px"}}>
                                              color: <span>{order_details['productChild.colorCode']}</span>
                                              </small>
                                          </div>
                                      </div>
                               
                        </div>
                     
                    </div>
                
                        : <div>buy </div>}
                </div>
            
     


        );
    }
}


const mapStateToProps = state => {
    return state.order;
};

export default connect(mapStateToProps)(ProductDetails);