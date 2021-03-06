import React from 'react';
// import Head from "next/head";
// import Newsletters from '../../../components/partials/commons/Newletters';
import FooterDefault from '../../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../../components/elements/BreadCrumb';
import Checkout from '../../../components/partials/account/Checkout';
import HeaderMobile from '../../../components/shared/headers/HeaderMobile';
import NavigationList from '../../../components/shared/navigation/NavigationList';
import i18next from 'i18next';
// import { Helmet } from "react-helmet";
const OrderTrackingPage = () => {
    const breadCrumb = [
        {
            text: i18next.t('home'),
            url: '/',
        },
        {
            text: i18next.t('shoppingcart'),
            url: '/account/shopping-cart',
        },
        {
            text: i18next.t('checkoutinfo'),
            url: '/account/checkout',
        },
    ];
    return (
        <div className="site-content">
          
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Checkout />
            </div>
            {/* <Newsletters layout="container" /> */}
            <FooterDefault />
        </div>

    );
};

export default OrderTrackingPage;
