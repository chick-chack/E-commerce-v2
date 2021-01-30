
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { resetpassword } from '../../../store/auth/action';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import i18next from 'i18next';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,

        };
    }

    static getDerivedStateFromProps(props) {
        console.log("helllo", props.isLoggedIn)
        // if (props.isLoggedIn === true) {
        //     // console.log(props.isLoggedIn)
        //     // console.log("looooooooooooooooooooooooooooooooooooo", props.userinfo.wCAccessToken);
        //     // localStorage.setItem("currentCookie", props.userinfo.wCAccessToken)
        //     // Router.push('/');
        // }
        // return false;
    }

    handleFeatureWillUpdate(e) {
        console.log("helllo", props.isLoggedIn)
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleResetSubmit = values => {
        this.props.dispatch(resetpassword(values));
        // Router.push('/');
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
                        onFinish={values =>
                            this.handleResetSubmit(values)}
                    >
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/forgetpassword">
                                    <a>{i18next.t("resetpassword")}</a>
                                </Link>
                            </li>

                        </ul>

                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5> {i18next.t('resPass')}</h5>
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
                                        <div className="form-group">
                                            <Form.Item
                                                name="code"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            i18next.t('plzenteryourcode'),
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="num"
                                                    placeholder={i18next.t('code')}
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        {i18next.t('resetpassword')}
                                    </button>
                                </div>
                            </div>
                            {/* <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="twitter"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        
                         */}
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(ResetPassword);

