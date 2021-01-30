
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { forgetpassword } from '../../../store/auth/action';

import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import i18next from 'i18next';

class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        console.log('__________________________+++++++++++++++++++++___________________________')
        console.log(props)
        console.log('__________________________+++++++++++++++++++++___________________________')
        this.state = {
            lang: null,

        };
    }

    static getDerivedStateFromProps(props) {
        if (props.isLoggedIn === true) {
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

    handleforgetpasswordSubmit = e => {
        this.props.dispatch(forgetpassword(e));
         Router.push('/account/ResetPassword');
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
                        onFinish={this.handleforgetpasswordSubmit.bind(this)}


                    >
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/forgetpassword">
                                    <a>{i18next.t("forgetpassword")}</a>
                                </Link>
                            </li>

                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5> {i18next.t('forgetpassword')}</h5>
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
                                            placeholder={i18next.t('plzenteryouremail')}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        {i18next.t('forgetpassword')}
                                    </button>
                                </div>
                            </div>
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
export default connect(mapStateToProps)(Forgetpassword);

