import React from 'react';
import i18next from 'i18next';

const DownloadApp = () => (
    <section className="ps-download-app">
        <div className="ps-container">
            <div className="ps-block--download-app" style={{ padding:"60px 0"}}>
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
                                    action="do_action"
                                    method="post">
                                    <div className="form-group--nest">
                                        <input
                                            className="form-control"
                                            type="Email"
                                            placeholder={i18next.t('emailaddress')}
                                        />
                                        <button className="ps-btn">
                                            {/* {i18next.t('subcribe')} */}
                                            </button>
                                    </div>
                                </form>
                                <p className="download-link">
                                    <a href="#">
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

export default DownloadApp;
