import React, { Component } from 'react';

import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import MyAccount from '../../components/partials/account/MyAccount';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import i18next from 'i18next';

class MyAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadCrumb: [
                {
                    text: i18next.t('home'),
                    url: '/',
                },

                {
                    text: i18next.t('myaccount'),
                },
            ],
        };
    }

    render() {
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={this.state.breadCrumb} />
                    <MyAccount />
                </div>
                <Newsletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}

export default MyAccountPage;
