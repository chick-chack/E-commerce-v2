import React from 'react';
import Link from 'next/link';
import i18next from 'i18next';


const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">{i18next.t('contactus')}</h4>
            <div className="widget_content">
                <p>{i18next.t('callus')}</p>
                <h3>00971 45 76 25 49</h3>
                <p>
                {i18next.t('address')} <br />
                    <a href="mailto:contact@chickchack.co">info@chickchack.com</a>
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title"> {i18next.t('quicklinks')}</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/privacy">
                        <a>{i18next.t('policy')}</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/terms">
                        <a>{i18next.t('condition&terms')}</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/page/blank">
                        <a>{i18next.t('shipping')}</a>
                    </Link>
                </li> */}
                {/* <li>
                    <Link href="/page/blank">
                        <a>{i18next.t('return')}</a>
                    </Link>
                </li> */}
                <li>
                    <Link href="/page/faqs">
                        <a>{i18next.t('faqs')}</a>
                    </Link>
                </li>
            </ul>
        </aside>

        <aside className="widget widget_footer">
            <h4 className="widget-title">{i18next.t('chickchack')}</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/">
                        <a>{i18next.t('home')}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/about-us">
                        <a>{i18next.t('aboutus')}</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/page/blank">
                        <a>Career</a>
                    </Link>
                </li> */}
                <li>
                    <Link href="/page/contact-us">
                        <a>{i18next.t('contact')}</a>
                    </Link>
                </li>
            </ul>
        </aside>
        {/* <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>Our Press</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/checkout">
                        <a>Checkout</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>My account</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Shop</a>
                    </Link>
                </li>
            </ul>
        </aside> */}
    </div>
);

export default FooterWidgets;
