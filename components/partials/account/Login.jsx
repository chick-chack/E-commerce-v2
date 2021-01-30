
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import i18next from 'i18next';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,

        };
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
            console.log(props.isLoggedIn)
            console.log("looooooooooooooooooooooooooooooooooooo", props.userinfo.wCAccessToken);
            localStorage.setItem("currentCookie", props.userinfo.wCAccessToken)
            Router.push('/');
        }
        return false;
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleLoginSubmit = e => {
        this.props.dispatch(login(e));
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
                        onFinish={this.handleLoginSubmit.bind(this)}


                    >
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>{i18next.t("login")}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/register">
                                    <a>{i18next.t('register')}</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5> {i18next.t('loginyouraccount')}</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    i18next.t("plzenteryouremail"),
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder={i18next.t('emailorphone')}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    i18next.t("plzenteryourpass"),
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            placeholder={i18next.t('password')}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div className="ps-checkbox">
                                                <input
                                                    className="form-control"
                                                    type="checkbox"
                                                    id="remember-me"
                                                    name="remember-me"
                                                />
                                                <label htmlFor="remember-me">
                                                    {i18next.t('rememberme')}
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-3">     </div>
                                        <div class="col-md-3    ">
                                            <label>
                                                <a
                                                    href="forgetpassword"
                                                    style={{ color: "red" }}
                                                >
                                                    {i18next.t('forget')}
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        {i18next.t('login')}
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
export default connect(mapStateToProps)(Login);

