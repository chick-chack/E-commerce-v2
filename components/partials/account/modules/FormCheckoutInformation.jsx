import React, { Component, useMemo } from 'react';
// import Select from 'react-select';
import countryList from 'react-select-country-list';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Collapse, Form, Input, Radio, Select } from 'antd';
import { add_order, order_preview } from '../../../../store/order/action';
import { address_list, add_address } from '../../../../store/address/action';
import _ from 'lodash';
import { notification } from 'antd';
import i18next from 'i18next';
import { PayPalButton } from 'react-paypal-button-v2';
import BounceLoader from 'react-spinners/BounceLoader';

const { Panel } = Collapse;
const modalSuccess = (type) => {
  notification[type]({
    message: 'Success',
    description: 'Transaction completed',
  });
};

const modalWarning_ = (type) => {
  notification[type]({
    message: 'failed',
    description: 'Transaction failed',
  });
};

const modalWarning = (type) => {
  notification[type]({
    message: 'Warning',
    description: 'please choose your address ',
    duration: 3,
  });
};

class FormCheckoutInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: null,
      test: this.props.cart.cartlist,
      value: null,
      paymentValue: 1,
      show: 'none',
      countryVal: null,
      first_state: false,
      second_state: false,
      show_load: true,
    };
  }

  return_total() {
    return this.props.cart.cartlist
      ? Object.values(this.props.cart.cartlist)
          .reduce(
            (acc, obj) =>
              acc +
              obj.quantity *
                (obj['productChild.isOffer']
                  ? obj['productChild.price'] -
                    (obj['productChild.price'] *
                      obj['productChild.offerRatio']) /
                      100
                  : obj['productChild.price']),
            0
          )
          .toFixed(2)
      : 'nooooooooooooooooooo';
  }

  createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: this.props.order.order_preview.totalPrice,
          },
        },
      ],
    });
  }

  onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      this.props.dispatch(add_order(this.state.value, 1, details));
      modalSuccess('success');
      Router.push('/order/MyOrders');
    });
  };

  onCancel = () => {
    modalWarning_('warning');
  };

  componentDidMount() {
    this.setState({
      lang: localStorage.getItem('lang') || 'en',
      show_load: false,
    });
    this.props.dispatch(address_list());
    const val = this.props.address.address_list;
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
      show: 'none',
    });
  };

  onPayChange = (e) => {
    this.setState({
      paymentValue: e.target.value,
    });
  };

  handlesaveSubmit = (e) => {
    console.log(e);
    const newAddress = {
      name: e.name,
      country: e.country,
      city: e.city,
      neighborhood: e.neighborhood,
      street: e.street,
      postCode: e.postCode,
    };
    this.props.address.address_list.push(newAddress);
    this.props.dispatch(add_address(e));
  };

  f_first_state = () => {
    console.log('gffffffffffffffffffffff');
    this.setState({ show_load: true });
    if (this.state.value == null) {
      modalWarning('warning');
      this.setState({
        show: 'block',
        show_load: false,
      });
    } else {
      var info = {
        addressId: this.state.value,
        paymentType: this.state.paymentValue,
      };
      const t = this.props.dispatch(order_preview(info));
      this.setState({
        first_state: true,
        second_state: false,
        show_load: false,
      });
    }
  };

  f_second_state = () => {
    this.setState({ second_state: true, first_state: false });
  };

  changeHandler = (value) => {
    this.setState({
      countryVal: value,
    });
  };

  render() {
    const { amount, cartItems, cartTotal, cartList } = this.props.cart;
    const { address_list } = this.props.address;
    const options = countryList().getData();
    const countryCodes = require('country-codes-list');

    const myCountryCodesObject = countryCodes.customList(
      'countryCode',
      'countryNameEn'
    );
    return (
      <div className="ps-form--checkout">
        {this.state.show_load && (
          <div className="ps-section__header">
            <div className="ps-form__orders">
              <BounceLoader color="#BA915E" loading={true} size={150} />
            </div>
          </div>
        )}
        {!this.state.show_load && (
          <div className="ps-form--checkout">
            {!this.state.second_state && !this.state.first_state && (
              <div
                className="ps-section__header"
                style={{ paddingBottom: '40px' }}>
                <h2>{i18next.t('checkoutInfo')}</h2>
              </div>
            )}
            <div className="row">
              {!this.state.second_state && !this.state.first_state && (
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="ps-form__billing-info">
                    <div
                      className="address-list list_add"
                      style={{ marginBottom: '25px' }}>
                      <h3 className="ps-form__heading">
                        {i18next.t('choosetheaddress')}
                      </h3>

                      {!_.isEmpty(address_list) ? (
                        <Radio.Group
                          onChange={this.onChange}
                          value={this.state.value}>
                          {address_list.map((item, index) => (
                            <Radio key={index} value={item.id}>
                              {item.name}, {item.country}, {item.city},{' '}
                              {item.neighborhood},{item.street}, PostCode{' '}
                              {item.postCode}
                            </Radio>
                          ))}
                        </Radio.Group>
                      ) : (
                        <p style={{ fontSize: '18px' }}>
                          {' '}
                          {i18next.t('noaddress')}
                        </p>
                      )}
                      {/* <span style={{display:`${this.state.show}`, color:"red"}}> choose your address </span> */}
                    </div>

                    <Form
                      style={{ marginBottom: '25px' }}
                      onFinish={this.handleLoginSubmit}>
                      <div className="ps-form__billing-info">
                        <h3
                          className="ps-form__heading"
                          style={{ paddingBottom: '20px' }}>
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
                            <Select
                              placeholder="select country"
                              className="form-control"
                              options={options}
                              value={this.state.countryVal}
                              onChange={this.changeHandler}
                            />
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
                                  message: 'Enter your city!',
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
                                  message: 'Enter your neighborhoode!',
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
                                  message: 'Enter your street',
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

                    <div
                      className="address-list"
                      style={{ marginBottom: '25px' }}>
                      <h3 className="ps-form__heading">
                        {i18next.t('choosepaymentpay')}
                      </h3>
                      <Radio.Group
                        onChange={this.onPayChange}
                        value={this.state.paymentValue}>
                        <Radio value={1}>Pay Pal</Radio>
                        <Radio value={0}> Cash</Radio>
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
                        <button onClick={this.f_first_state} className="ps-btn">
                          {i18next.t('continuetoshipping')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {this.state.first_state && this.props.order.order_preview && (
                <div className="col-xl-12 col-lg-12 col-sm-12 col-12 ps-block--checkout-order">
                  <div className="ps-form__orders">
                    <h3>{i18next.t('urorder')}</h3>
                    <div className="ps-block--checkout-order">
                      <div className="ps-block__content">
                        {/* <Preview_order /> */}
                        <figure>
                          <figcaption>
                            <strong>{i18next.t('groups')}</strong>
                            <strong>{i18next.t('total')}</strong>
                          </figcaption>
                        </figure>
                        <figure className="ps-block__items">
                          {this.props.order.order_preview.addedGroupData &&
                            this.props.order.order_preview.addedGroupData.map(
                              (item, index) => (
                                <Collapse key={index}>
                                  <Panel
                                    header={item.groupName}
                                    //  key={index}
                                    extra={`$${
                                      item.price + item.deliveryPrice
                                    }`}>
                                    <figcaption>
                                      <strong>{i18next.t('price')}</strong>
                                      <strong> {i18next.t('delivery')} </strong>
                                    </figcaption>
                                    <div
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                      }}>
                                      <strong>$ {item.price}</strong>
                                      <strong>$ {item.deliveryPrice}</strong>
                                    </div>

                                    {/* <Link
                                                                            href="/"
                                                                         >
                                                                            <a>
                                                                                <strong>
                                                                                   $ { item.price}
                                                                                 
                                                                                </strong>
                                                                                <strong>
                                                                                    $ {item.deliveryPrice}

                                                                                </strong>
                                                                            </a>
                                                                        </Link> */}
                                    <hr />

                                    <figcaption>
                                      <strong>{i18next.t('product')}</strong>
                                      <strong> {i18next.t('price')} </strong>
                                    </figcaption>
                                    {item.details.map((product) => (
                                      <Link
                                        href={`/product/${product['productId']}?id=${product['productChildId']}`}
                                        key={product['productChildId']}>
                                        <a>
                                          <strong>
                                            {this.state.lang === 'ar'
                                              ? product['name_ar']
                                              : product['name_en']}
                                            <span> x {product.quantity} </span>
                                          </strong>
                                          <strong>$ {product.price}</strong>
                                        </a>
                                      </Link>
                                    ))}
                                  </Panel>
                                </Collapse>
                              )
                            )}
                        </figure>
                        <figure>
                          <figcaption>
                            <strong style={{ fontSize: '20px' }}>
                              {i18next.t('price')}
                            </strong>
                            <strong style={{ fontSize: '20px' }}>
                              $ {this.props.order.order_preview.totalPrice}
                            </strong>
                          </figcaption>
                          <figcaption>
                            <strong style={{ fontSize: '20px' }}>
                              {i18next.t('delivery')}
                            </strong>
                            <strong style={{ fontSize: '20px' }}>
                              ${' '}
                              {
                                this.props.order.order_preview
                                  .totalDeliveryPrice
                              }
                            </strong>
                          </figcaption>
                        </figure>
                        <figure>
                          <figcaption>
                            <strong style={{ fontSize: '20px' }}>
                              {i18next.t('total')}
                            </strong>
                            <strong style={{ fontSize: '20px' }}>
                              ${' '}
                              {this.props.order.order_preview.totalPrice +
                                this.props.order.order_preview
                                  .totalDeliveryPrice}
                            </strong>
                          </figcaption>
                        </figure>
                        {/* <figure className="ps-block__shipping">
                                                    <h3>{i18next.t('shipping')}</h3>
                                                    <p>{i18next.t('calculatedatnextstep')}</p>
                                                </figure> */}

                        <div className="ps-form__submit">
                          <div className="ps-block__footer">
                            <button
                              onClick={this.f_second_state}
                              className="ps-btn">
                              {i18next.t('continue')}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {this.state.second_state && (
              <PayPalButton
                createOrder={(data, actions) => this.createOrder(data, actions)}
                onApprove={(data, actions) => this.onApprove(data, actions)}
                onCancel={() => this.onCancel()}
                options={{
                  clientId:
                    'AeLHkpPiNQTJVprDom78nbEtB_6x_YOO9JzxneLbm3cn8Y_dGHkm3BlBOIWxoQVKymM_IOaU4xtUYKty',
                }}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(FormCheckoutInformation);
