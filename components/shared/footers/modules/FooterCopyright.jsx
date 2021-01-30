import React from 'react';
import i18next from 'i18next';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>{i18next.t('copyright')}</p>

        {/* <p>
            <span>We Using Safe Payment For:</span>
            <a href="#">
                <img src="/static/img/payment-method/1.jpg" alt="chickchack" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/2.jpg" alt="chickchack" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/3.jpg" alt="chickchack" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/4.jpg" alt="chickchack" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/5.jpg" alt="chickchack" />
            </a>
        </p> */}
    </div>
);

export default FooterCopyright;
