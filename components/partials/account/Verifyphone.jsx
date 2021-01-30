
import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { verifymobile } from '../../../store/auth/action';
// import 404.js from
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import i18next from 'i18next';

class verifyphonee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,

        };
    }

    static getDerivedStateFromProps(props) {
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleverifymobileSubmit = e => {
        var data = {
            'mobile': this.props.auth.userinfo.data.mobile,
            'code': e.verifyphone
        }
        this.props.dispatch(verifymobile(data));
        Router.push('/');
    };

    componentDidMount() {
        this.setState({ lang: localStorage.getItem('lang') || 'en' })
        i18next.changeLanguage(this.state.lang);

    }
    render() {
        const { auth } = this.props;
        return (
            <div className="ps-my-account">
                {auth && auth.userinfo && auth.userinfo.data && !auth.userinfo.data.verifyMobile &&
                    <div className="container">
                        <Form
                            className="ps-form--account"
                            onFinish={this.handleverifymobileSubmit.bind(this)}
                        >
                            <ul className="ps-tab-list">
                                <li className="active">
                                    <Link href="">
                                        <a>{i18next.t("verifyphone")}</a>
                                    </Link>
                                </li>
                            </ul>
                            <div className="ps-tab active" id="sign-in">
                                <div className="ps-form__content">
                                    <h5> {i18next.t('verifyphone')}</h5>
                                    <div className="form-group">
                                        <Form.Item
                                            name="verifyphone"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        i18next.t("plzenteryouremailcode"),
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder={i18next.t('plzenteryouremailcode')}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="form-group submit">
                                        <button
                                            type="submit"
                                            className="ps-btn ps-btn--fullwidth">
                                            {i18next.t('verifyphone')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                }
            </div >
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(verifyphonee);

