import React from 'react';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import EditAddress from '../../components/partials/account/EditAddress';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import i18next from 'i18next';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: i18next.t('home'),
            url: '/',
        },
        {
            text: i18next.t('editaddress'),
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <EditAddress />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default MyAccountPage;
