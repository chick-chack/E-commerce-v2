import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Form, Input, Radio } from 'antd';
import { add_order } from '../../../../store/order/action';
import { getcartlist } from '../../../../store/cart/action';
import { address_list, add_address } from '../../../../store/address/action'
import _ from "lodash";
import { notification } from 'antd';
import i18next from 'i18next';

const   modalWarning = (type) => {
    notification[type]({
        message: 'Warning',
        description: "please choose your address ",
        duration: 3,
    });
};

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);

        this.state={
            lang:null,
            test:this.props.cart.cartlist,
            value:null,
            paymentValue:1,
            show:"none"
        }
    }

    componentDidMount(){
        this.setState({lang: localStorage.getItem('lang')|| 'en' })
        this.props.dispatch(address_list())
        const val=  this.props.address.address_list;
        // this.props.address.address_list ? 
        // this.setState({
        //     value:val[0].id
        // }): ''

    }

   onChange = (e) => {
        console.log('radio checked', e.target.value);
        // setValue(e.target.value);
        this.setState({
            value:e.target.value,
            show:"none"
        })
      };

    onPayChange= (e)=>{
        this.setState({
            paymentValue:e.target.value
        })

      }

    handleLoginSubmit = (e) => {
        console.log(e);
        const newAddress = {
            "name": e.name,
            "country": e.country,
            "city":e.city,
            "neighborhood": e.neighborhood,
            "street": e.street,
            "postCode": e.postCode,
        }
        // this.props.cart.cartlist.push(this.props.product.singleProduct.productChildren[0])
        this.props.address.address_list.push(newAddress)

    
        // this.props.address.address_list.push()
         this.props.dispatch(add_address(e))
        // // this.props.dispatch(getcartlist())
        // const {cartlist } = this.props.cart;
        // this.setState({
        //     test: cartlist
        // })

        // Router.push('/account/shipping');
    };

    addOrder=()=> {
if(this.state.value==null){
    modalWarning('warning');
    this.setState({
        show:"block"
    })}
    else{
        this.props.dispatch(add_order(this.state.value, this.state.paymentValue))
    }  }

  

    render() {
        const { amount, cartItems, cartTotal, cartList} = this.props.cart;
        const {address_list} = this.props.address;
console.log("ghghghgh", address_list)
        return (
            <div
                className="ps-form--checkout"
                // onFinish={this.handleLoginSubmit}
                
                >
                <div className="ps-form__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-form__billing-info">
                           
                           <div className="address-list" style={{marginBottom:"25px"}}>
                           <h3 className="ps-form__heading">
                                   {i18next.t('choosetheaddress')}
                                </h3>

                                {
                                    !_.isEmpty(address_list) ?
                                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                                        {address_list.map((item, index)=>
                                          <Radio 
                                          key={index} value={item.id}>{item.name}, {item.country}, {item.city}, {item.neighborhood},{item.street}, PostCode {item.postCode}
                                          </Radio>
                                        
                                        )}
                                    </Radio.Group>
                                    :
                                    <p style={{fontSize:"18px"}}> {i18next.t('noaddress')}</p>

                                }
                                {/* <span style={{display:`${this.state.show}`, color:"red"}}> choose your address </span> */}
                           </div>

                                <Form   
                                style={{marginBottom:"25px"}}
                                onFinish={this.handleLoginSubmit} >
                                <div className="ps-form__billing-info">
                           <h3 className="ps-form__heading">
                              {i18next.t('addnewaddress')}
                               </h3>
                                
                            </div>
                            <div className="form-group">
                                    <Form.Item
                                    
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Enter the label of your address, please',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="For Example: Home, Office, etc....."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Form.Item
                                                // label="First Name"
                                                name="country"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Enter your country!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="country"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Form.Item
                                                // label="Last Name"
                                                name="city"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Enter your city!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="City"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Form.Item
                                                // label="First Name"
                                                name="neighborhood"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Enter your neighborhoode!',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Neighborhood"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <Form.Item
                                                // label="Last Name"
                                                name="street"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            'Enter your street',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Street"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                               
                               
                                <div className="form-group">
                                    <Form.Item
                                        name="postCode"
                                        rules={[
                                            {
                                                required: true,
                                                message: i18next.t('postCode'),
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder={i18next.t('postCode')}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="ps-form__submit">
                                    <div className="ps-block__footer">
                                        <button className="ps-btn">
                                            {i18next.t('addaddress')}
                                        </button>
                                    </div>
                                </div>

                                </Form>

                                <div className="address-list" style={{marginBottom:"25px"}}>
                           <h3 className="ps-form__heading">
                                   {i18next.t('choosepaymentpay')}
                                </h3>
                                <Radio.Group onChange={this.onPayChange} value={this.state.paymentValue}>
                                      
                                          <Radio  value={1}>
                                              Pay Pal
                                          </Radio>
                                          <Radio  value={0}> Cash
                                          </Radio>
                                    </Radio.Group>

                             
                           </div>
                                
                                <div className="ps-form__submit">
                                    <Link href="/account/cart">
                                        <a>
                                            <i className="icon-arrow-left mr-2"></i>
                                           {i18next.t('returntocart')}
                                        </a>
                                    </Link>
                                    <div className="ps-block__footer">
                                        <button onClick={this.addOrder} className="ps-btn">
                                            {i18next.t('continuetoshipping')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <div className="ps-form__orders">
                                <h3>{i18next.t('urorder')}</h3>
                                <div className="ps-block--checkout-order">
                                    <div className="ps-block__content">
                                        <figure>
                                            <figcaption>
                                                <strong>{i18next.t('product')}</strong>
                                                <strong>{i18next.t('total')}</strong>
                                            </figcaption>
                                        </figure>
                                        <figure className="ps-block__items">
                                            {this.props.cart.cartlist &&
                                            this.props.cart.cartlist.map(product => (
                                                <Link
                                                    href="/"
                                                    key={product['productChild.id']}>
                                                    <a>
                                                        <strong>
                                                            {this.state.lang==="ar"?
                                                            product['productChild.product.name_ar']
                                                            : product['productChild.product.name_en']
                                                            
                                                        }
                                                            {/* {product.title} */}
                                                            <span>
                                                                    x
                                                                {
                                                                    product.quantity
                                                                }
                                                                </span>
                                                        </strong>
                                                        <small>
                                                            $
                                                            {product.quantity *
                                                            // product['productChild.price']
                                                            (product['productChild.isOffer'] 
                                                            ?product['productChild.price'] - ((product['productChild.price'] *product['productChild.offerRatio'])/100 )
                                                            : product['productChild.price'])
                                                            
                                                            }


                                                        </small>
                                                    </a>
                                                </Link>
                                            ))}
                                        </figure>
                                        <figure>
                                            <figcaption>
                                                <strong>{i18next.t('subtotal')}</strong>
                                                <small>$
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
{/*                                                     
                                                    {amount} */}
                                                    
                                                    </small>
                                            </figcaption>
                                        </figure>
                                        <figure className="ps-block__shipping">
                                            <h3>{i18next.t('shipping')}</h3>
                                            <p>{i18next.t('calculatedatnextstep')}</p>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                </div>
            </div>
        );
    }
}

// export default FormCheckoutInformation;

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(FormCheckoutInformation);