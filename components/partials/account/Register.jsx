
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';
import { signup } from '../../../store/auth/action';
import PhoneInput from 'react-phone-input-2'
import { Form, Input, Checkbox } from 'antd';
import { connect } from 'react-redux';
import i18next from 'i18next';
import i18n from '~/i18next';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null
        };
    }

    // handleSubmit = values => {
    //     //e.preventDefault();
    //    // this.props.form.validateFields((err, values) => {
    //         console.log('testttttttttttttttttttttttttt',values);
    //         // if (!err) {
    //             console.log('testttttttttttttttttttttttttt props',this.props);   
    //        this.props.dispatch(login());
    //         Router.push('/account/login');
    //         // } else {
    //         // }
    //    // });
    // };


    handleSubmit = values => {
        this.props.dispatch(signup(values));
        Router.push('/account/verify-phone');
    };

    componentDidMount() {

        this.setState({ lang: localStorage.getItem('lang') || 'en' })
        i18next.changeLanguage(this.state.lang);

    }
    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        // onSubmit={this.handleSubmit}
                        onFinish={values =>
                            //console.log(values)
                            this.handleSubmit(values)}
                    >
                        <ul className="ps-tab-list">
                            <li>
                                <Link href="/account/login">
                                    <a>{i18next.t("login")}</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="/account/register">
                                    <a>{i18next.t('register')}</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="register">
                            <div className="ps-form__content">
                                <h5>{i18next.t('registanaccount')}</h5>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Form.Item
                                                name="firstName"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            i18next.t('inputurfn'),
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder={i18next.t('fname')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Form.Item
                                                name="lastName"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            i18next.t('inputurln'),
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder={i18next.t('lname')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            i18next.t('plzenteryouremail'),
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="email"
                                                    placeholder={i18next.t('email')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group num">
                                            <Form.Item
                                                name="phone"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            i18next.t('plzenteryourphone'),
                                                    },
                                                    {
                                                        validator: (_, value) =>
                                                            value.length < 10 ? Promise.reject(i18next.t('phonenotvalid')) : Promise.resolve(),
                                                    },


                                                ]}>
                                                <PhoneInput
                                                    country={'us'}
                                                    className="ant-input form-control"


                                                />
                                            </Form.Item>



                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group form-forgot">
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            i18next.t('plzenteryourpass'),
                                                    },
                                                ]}
                                                hasFeedback>
                                                <Input
                                                    className="form-control"
                                                    type="password"
                                                    placeholder={i18next.t('password')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group form-forgot">
                                            <Form.Item
                                                name="confirm_password"
                                                dependencies={['password']}
                                                hasFeedback
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            i18next.t('confirmurpass'),
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(rule, value) {
                                                            if (!value || getFieldValue('password') === value) {
                                                                return Promise.resolve();
                                                            }

                                                            return Promise.reject(i18next.t('passnotmuch'));
                                                        },
                                                    }),
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="password"
                                                    placeholder={i18next.t('confirmpass')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <Form.Item
                                            name="agreement"
                                            valuePropName="checked"
                                            rules={[
                                                {
                                                    validator: (_, value) =>
                                                        value ? Promise.resolve() : Promise.reject(i18next.t('shouldacceptaggrement')),
                                                },
                                            ]}

                                        >
                                            <Checkbox>
                                                {i18next.t('iraed')} <a href="">{i18next.t('agreement')}</a>
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                </div>



                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        {i18next.t('register')}
                                    </button>
                                </div>
                            </div>
                            {/* <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        
                         */}
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Register);
