import React from 'react';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Shipping from '../../components/partials/account/Shipping';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import i18next from 'i18next';

const ShippingPage = () => {
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
            text: i18next.t('checkinfo'),
            url: '/account/checkout',
        },
        {
            text: i18next.t('shipping'),
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Shipping />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default ShippingPage;
