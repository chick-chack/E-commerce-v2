import React, { Component } from 'react';
import i18next from 'i18next';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { sendMessage } from '../../../store/collection/action';
import { Form, Input, notification } from 'antd';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,
        };
    }

    componentDidMount() {
        this.setState({ lang: localStorage.getItem('lang') || 'en' })
        i18next.changeLanguage(this.state.lang);
    }

    contact = e => {
        e.preventDefault();
        this.props.dispatch(sendMessage( e.target.fullname.value, e.target.email.value, e.target.message.value));
        Router.push('/');
    };

    render() {
        return (
            <div className="ps-contact-form">
                <form className="ps-form--contact-us"
                         onSubmit={this.contact.bind(this)}
                     >

                    <h3>{i18next.t('contuctus')} </h3>
                    <p>{i18next.t('contuctus_p')}</p>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={i18next.t('fullname')}
                                    name="fullname"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={i18next.t('email')}
                                    name="email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    required
                                    name="message"
                                    placeholder={i18next.t('message')} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="form-group submit">
                        <button className="ps-btn">{i18next.t('sendmessage')}</button>
                    </div>
                </form>



            </div>
        );
    }
}


const mapStateToProps = state => {
    return state.collection;
};

export default connect(mapStateToProps)(ContactForm);
