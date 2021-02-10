import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { Form, Input, Radio, DatePicker } from 'antd';
import { logOut } from '../../../store/auth/action';
import Router from 'next/router';

class UserInformation extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout = e => {
        e.preventDefault();
        this.props.dispatch(logOut());
        Router.push('/account/login')
    };

    render() {
        const { compare, wishlist, auth } = this.props;
        console.log(auth.isLoggedIn)
        if (!auth.isLoggedIn) {
            // Router.push('/login')

        }
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
                active: true,
            },
            // {
            //     text: 'Notifications',
            //     url: '/account/notifications',
            //     icon: 'icon-alarm-ringing',
            // },
            // {
            //     text: 'Invoices',
            //     url: '/account/invoices',
            //     icon: 'icon-papers',
            // },
            // {
            //     text: 'Address',
            //     url: '/account/addresses',
            //     icon: 'icon-map-marker',
            // },
            // {
            //     text: 'Recent Viewed Product',
            //     url: '/account/recent-viewed-product',
            //     icon: 'icon-store',
            // },
            // {
            //     text: 'Wishlist',
            //     url: '/account/wishlist',
            //     icon: 'icon-heart',
            // },
        ];
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container" >
                    {auth.userinfo && <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        {/* <img src="/static/img/users/3.jpg" /> */}
                                        <figure>
                                            <figcaption>Hello</figcaption>
                                            <p v-if={auth.userinfo.data}>{auth.userinfo.data.email}</p>
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            {accountLinks.map(link => (
                                                <li
                                                    key={link.text}
                                                    className={
                                                        link.active
                                                            ? 'active'
                                                            : ''
                                                    }>
                                                    <Link href={link.url}>
                                                        <a>
                                                            <i
                                                                className={
                                                                    link.icon
                                                                }></i>
                                                            {link.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link href="/account/my-account">

                                                    <a
                                                        href="#"
                                                        onClick={this.handleLogout.bind(this)}>
                                                        Logout
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <Form
                                    className="ps-form--account-setting"
                                    onSubmit={this.handleLoginSubmit}>
                                    <div className="ps-form__header">
                                        <h3>Account Information</h3>
                                    </div>
                                    <div className="ps-form__content">

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="first Name"
                                                        name="firstName"
                                                        initialValue={auth.userinfo.data.firstName}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your last name!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="first Name"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Last Name"
                                                        name="lastName"
                                                        initialValue={auth.userinfo.data.lastName}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your first name!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Last Name"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Phone Number"
                                                        name="phone"
                                                        initialValue={auth.userinfo.data.mobile}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your name!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter your phone number"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Email"
                                                        name="email"
                                                        initialValue={auth.userinfo.data.email}
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Username or email address"
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Birthday</label>
                                                    <DatePicker />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Gender"
                                                        name="gender"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        <Radio.Group>
                                                            <Radio value="male">
                                                                Male
                                                            </Radio>
                                                            <Radio value="female">
                                                                Female
                                                            </Radio>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="form-group submit">
                                            <button className="ps-btn">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>}
                </div>
            </section >
        );
    }
}
const mapStateToProps = state => {
    console.log(state)
    return state;
};

export default connect(mapStateToProps)(UserInformation);
