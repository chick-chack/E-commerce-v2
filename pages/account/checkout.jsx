import React from 'react';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Checkout from '../../components/partials/account/Checkout';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import i18next from 'i18next';
import { Helmet } from "react-helmet";
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
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <Helmet>
                    <meta charSet="utf-8" />
                    <script src="https://www.paypal.com/sdk/js?client-id=AeLHkpPiNQTJVprDom78nbEtB_6x_YOO9JzxneLbm3cn8Y_dGHkm3BlBOIWxoQVKymM_IOaU4xtUYKty" data-namespace="paypal_sdk"></script>
                </Helmet>
                <BreadCrumb breacrumb={breadCrumb} />
                <Checkout />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>

    );
};

export default OrderTrackingPage;
