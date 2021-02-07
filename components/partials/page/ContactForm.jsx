import i18next from 'i18next';
import React from 'react';

const ContactForm = () => (
    <div className="ps-contact-form">
            <form className="ps-form--contact-us" action="/" method="get">
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
                            />
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                rows="5"
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

export default ContactForm;
