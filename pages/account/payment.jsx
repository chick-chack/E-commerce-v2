import React from 'react';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Payment from '../../components/partials/account/Payment';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import i18next from 'i18next';


const PaymentPage = () => {
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
            text: i18next.t('payment'),
            
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Payment />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default PaymentPage;
