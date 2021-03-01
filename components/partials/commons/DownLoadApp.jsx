import React, { Component } from 'react';
import i18next from 'i18next';
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import {subscription} from '../../../store/collection/action';




class DownloadApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,
        };
    }

    subscriptionByUser = e => {
        e.preventDefault();
       this.props.dispatch(subscription(e.target.email.value));
        
    };
    componentDidMount() {
        this.setState({ lang: localStorage.getItem('lang') || 'en' })
        i18next.changeLanguage(this.state.lang);
    }

    render() {
        return (
    <section className="ps-download-app">
        <div className="ps-container">
            <div className="ps-block--download-app" style={{ padding:"30px 0"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__thumbnail" style={{width:"100%", height:"100%"}}>
                                <img src="/static/img/chickchackmall-logo.svg"
                                 style={{width:"65%", height:"100%"}} alt="chickchack" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-block__content">
                                <h3>{i18next.t('downloadapp')}</h3>
                                <p>
                                   {i18next.t('shopping_p')}
                                </p>
                                <form
                                    className="ps-form--download-app"
                                    onSubmit={this.subscriptionByUser.bind(this)}
                                    //  action="/"
                                    // method="post"
                                    >
                                    <div className="form-group--nest">
                                        <input
                                            className="form-control"
                                            type="Email"
                                            placeholder={i18next.t('emailaddress')}
                                            required
                                            name="email"
                                        />
                                        <button type="submit" className="ps-btn">
                                            {i18next.t('subcribe')}
                                            </button>
                                    </div>
                                </form>
                                <p className="download-link">
                                    <a href="https://play.google.com/store/apps/details?id=com.ChickChack.ChickChackMall" target="_blank">
                                        <img src="/static/img/google-play.png" alt="chickchack" />
                                    </a>
                                    <a href="#">
                                        <img src="/static/img/app-store.png" alt="chickchack" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
                                    }}

const mapStateToProps = state => {
    return state.collection;
};

export default connect(mapStateToProps)(DownloadApp);