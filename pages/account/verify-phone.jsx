import React from 'react';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Verifyphone from '../../components/partials/account/Verifyphone';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import i18next from 'i18next';

const VerifyphonePage = () => {
    const breadCrumb = [
        {
            text: i18next.t('home'),
            url: '/',
        },
        {
            text: i18next.t('login'),
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Verifyphone />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default VerifyphonePage;
