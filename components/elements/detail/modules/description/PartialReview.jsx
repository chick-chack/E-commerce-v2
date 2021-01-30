
import React, { Component } from 'react';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Rating from '../../../StarRating';
import { add_review } from '../../../../../store/product/action';
import Rater from 'react-rater';
import { Form, Input, notification } from 'antd';
import i18next from 'i18next';

class PartialReview extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    state={
        value:3
    }

    handleChange = value => {
        this.setState({ value });
      };

    
    handleReviewSubmit = e => {
        console.log("looooooooooooooooooooooooooooooooooooo______________________________________+_______________________", this.state.value);
         //e.preventDefault();

        console.log(e.message)
        this.props.dispatch(add_review(this.props.product.singleProduct.id ,e.message , this.state.value));
        // Router.push('/');
    };
    render() {
        const { value } = this.state;

        return (
            < div >
                {
                    this.props.product.singleProduct && this.props.product.reviewProduct && this.props.product.reviewProduct.review_5 &&
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block--average-rating">
                                <div className="ps-block__header">
                                    <h3>{this.props.product.singleProduct.rate}</h3>
                                    <Rating />
                                    <div className="ps-product__rating">
                                        <span className="rating_num">
                                            <Rater rating={this.props.product.singleProduct.rate ? this.props.product.singleProduct.rate : 0} total={5} interactive={false} />
                                        </span>
                                    </div>
                                    <span>{this.props.product.singleProduct.numberOfRates} Review</span>
                                </div>
                                <div className="ps-block__star">
                                    <span>5 Star</span>
                                    <div className="ps-progress" >
                                        <span style={{width:`${this.props.product.reviewProduct.review_5.percent}%`}}>

                                        </span>
                                    </div>
                                    <span>{this.props.product.reviewProduct.review_5.percent}%</span>
                                </div>
                                <div className="ps-block__star">
                                    <span>4 Star</span>
                                    <div className="ps-progress" >
                                        <span style={{width:`${this.props.product.reviewProduct.review_4.percent}%`}}></span>
                                    </div>
                                    <span>{this.props.product.reviewProduct.review_4.percent}</span>
                                </div>
                                <div className="ps-block__star">
                                    <span>3 Star</span>
                                    <div className="ps-progress" >
                                        <span style={{width:`${this.props.product.reviewProduct.review_3.percent}%`}} ></span>
                                    </div>
                                    <span>{this.props.product.reviewProduct.review_3.percent}</span>
                                </div>
                                <div className="ps-block__star">
                                    <span>2 Star</span>
                                    <div className="ps-progress" >
                                        <span style={{width:`${this.props.product.reviewProduct.review_2.percent}%`}}></span>
                                    </div>
                                    <span>{this.props.product.reviewProduct.review_2.percent}</span>
                                </div>
                                <div className="ps-block__star">
                                    <span>1 Star</span>
                                    <div className="ps-progress" >
                                        <span style={{width:`${this.props.product.reviewProduct.review_1.percent}%`}}></span>
                                    </div>
                                    <span>{this.props.product.reviewProduct.review_1.percent}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
                            <div>
                                {this.props.product.review_orginal ? this.props.product.review_orginal.map((item) => (

                                    <div style={{ marginBottom: "35px" }}>
                                        <aside className="ps-widget--account-dashboard"  >
                                            <div className="ps-widget__header_review">
                                                <img src="/static/img/default_review.jpg" />
                                                <figure>
                                                    <figcaption>{item['customer.firstName']} {item['customer.lastName']}</figcaption>

                                                </figure>
                                            </div>
                                        </aside>
                                        
                                        {/* <Rate defaultValue={item.value} /> */}
                                        <div className="ps-product__rating">
                                            <span className="rating_num">
                                                    <Rater rating={item.value ?  item.value : 0} total={5} interactive={false} />
                                                        {/* ({product.numberOfRates ? product.numberOfRates : 0}) */}
                                                        </span>
                                        </div>
                                        <p>{ new Date(item.createdAt).toDateString() }</p>
                                        <p>{item.review}</p>
                                    </div>

                                )) : ''}
                            </div>

                            <div className="row">
                                {this.props.auth.isLoggedIn &&
                                    <Form className="ps-form--review" onFinish={this.handleReviewSubmit.bind(this)}>
                                        <h4>{i18next.t('submityourreview')}</h4>

                                        <div className="form-group form-group__rating">
                                            <label>{i18next.t('yourrating')}</label>
                                            {/* <Rate defaultValue={0} /> */}
                                            <Rate  onChange={this.handleChange} value={value} />
                                        </div>
                                        <div className="form-group">
                                            <Form.Item
                                                name="message"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "Write your review here",
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder={i18next.t('enteryourreview')}
                                                />
                                            </Form.Item>
                                        </div>

                                        <div className="form-group submit">
                                            <button className="ps-btn">{i18next.t('submitreview')}</button>
                                        </div>
                                    </Form>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

}
export default connect((state) => state)(PartialReview);