import React from 'react';
import Link from 'next/link';
import i18next from 'i18next';


const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">{i18next.t('contactus')}</h4>
            <div className="widget_content">
                <p>{i18next.t('callus')}</p>
                <h3><a href="tel:+97145762549">+971 45 76 25 49</a></h3>
                <p>
                    {i18next.t('address')} <br />
                    <a href="mailto:contact@chickchack.co">info@chickchack.com</a>
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a 
                         className="facebook" 
                        href="https://www.facebook.com/ChickChackMall/" target="_blank">
                                <span className="fa fa-facebook"></span>
                            {/* <i className="fa fa-facebook"></i> */}
                        </a>
                    </li>
                    <li>
                        <a 
                        className="twitter" 
                        href="https://twitter.com/chickchack7">
                            <span className="fa fa-twitter"></span>
                            {/* <i className="fa fa-twitter"></i> */}
                        </a>
                    </li>
                    {/* <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li> */}
                       <li>
                        <a 
                        className="linkedin"
                         href="https://www.linkedin.com/in/chick-chack-3231901b2/">
                              <span className="fa fa-linkedin"></span>
                            {/* <i className="fa fa-linkedin"></i> */}
                        </a>
                    </li>
                
                    <li>
                        <a 
                        className="instagram"
                         href="https://www.instagram.com/chickchack2/?hl=en" target="_blank">
                            {/* <i className="fa fa-instagram"></i> */}
                            <span className="fa fa-instagram"></span>
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
