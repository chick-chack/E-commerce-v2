import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';
import ConumerElectronics from '../components/partials/homepage/home-default/ConumerElectronics';
import Clothings from '../components/partials/homepage/home-default/Clothings';
import GardenAndKitchen from '../components/partials/homepage/home-default/GardenAndKitchen';
import HomeAds from '../components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '../components/partials/commons/DownLoadApp';
import NewArrivals from '../components/partials/homepage/home-default/NewArrivals';
import Newletters from '../components/partials/commons/Newletters';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import MallsView from '../components/partials/homepage/home-default/MallView';
import StoreView from '../components/partials/homepage/home-default/StoreView';
import HomeDefaultDealOfDay from '../components/partials/homepage/home-default/HomeDefaultDealOfDay';
import BestOffers from '../components/partials/homepage/home-default/BestOffers';
import HomeDefaultTopCategories from '../components/partials/homepage/home-default/HomeDefaultTopCategories';
import TestProducts from '../components/partials/homepage/home-default/TestProducts';
import SubscribePopup from '../components/shared/SubscribePopup';
import { getCollections } from '../store/collection/action';
import { getBannersBySlugs, getPromotionsBySlugs } from '../store/media/action';
import SwicherDemo from '~/components/shared/switcher-demo/SwitcherDemo';
import { switchDemoPanel } from '~/store/app/action';
import { getMalls_Home, getProduct_Home,getAllHomePromotions, getAllHomeBanners } from '../store/collection/action';
import { Helmet } from "react-helmet";
import { getCollectionsfortest } from '../store/collection/action';
import HomeDefault from '../components/partials/homepage/home-default/HomeDefault';

// import '../i18next';
import i18next from 'i18next';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false,
        };
    }


    static async getInitialProps(ctx) {

        return { query: ctx.query };

    }

    componentDidMount() {

        const { query } = this.props;

        if (query) {

            const bannerSlugs = ['banner-home-fullwidth'];
            const promotionSlugs = ['home_fullwidth_promotions'];
            this.props.dispatch(getBannersBySlugs(bannerSlugs));
            this.props.dispatch(getPromotionsBySlugs(promotionSlugs));
            this.props.dispatch(switchDemoPanel(false));
            this.props.dispatch(getMalls_Home());
            this.props.dispatch(getCollectionsfortest());
        }

        setTimeout(() => {
            this.setState({ subscribe: false });
        }, 10000);
    }

    render() {
        const { subscribe } = this.state;
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-1">
                    <HomeBanner />
                    <MallsView />
                    <HomeDefaultTopCategories />
                    <StoreView />
                    <HomeDefault />
                    <DownLoadApp />
                    {/* <Newletters /> */}
                </main>
                <FooterFullwidth />
                <SwicherDemo />
            </div>
        );
    }
}

export default connect(state => state.collection)(Index);
