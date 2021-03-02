import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import MallDetails from '../../components/partials/mall/MallDetails';
import LayoutMall from '../../components/partials/mall/LayoutMall';
import StoreViewMall from '../../components/partials/mall/StoreMallView';
import MallDefault from '../../components/partials/mall/MallDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import i18next from 'i18next'
import { useRouter } from 'next/router'
import { getAllStoresMalls, getTopStoresByMalls, getProductsByMalls, getMallInfoById} from '../../store/mall/action';
import { getCollections } from '../../store/collection/action';

class MallDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }
    state={
        lang:null
    }
    static async getInitialProps(ctx) {
        console.log("index shop, getinitial", ctx.query);
        return { query: ctx.query };
    }
    componentDidMount() {
        this.setState({
            lang: localStorage.getItem('lang') ||  'en'
        })
        const { query } = this.props;
        if (query) {
            this.props.dispatch(getAllStoresMalls(this.props.query.mallid ,8,0));
            this.props.dispatch(getTopStoresByMalls(this.props.query.mallid));
            this.props.dispatch(getProductsByMalls(this.props.query.mallid));
            this.props.dispatch(getMallInfoById(this.props.query.mallid))      
        }
    }
    render() {
        const {mallInfo}= this.props;
        const breadCrumb = [
            {
                text: i18next.t('home'),
                url: '/',
            },
            {
                text:  mallInfo && (this.state.lang === 'ar'
                    ? mallInfo['name_ar']
                    :mallInfo['name_en']),
                url: mallInfo && (this.state.lang === 'en'
                    ? `/mall?mallname=${mallInfo['name_en']}&mallid=${mallInfo['id']}`
                    : `/mall?mallname=${mallInfo['name_ar']}&mallid=${mallInfo['id']}`),
            },
          
        ];

        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--shop">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-container">
                        <MallDetails />
                        <LayoutMall mall_id={this.props.query.mallid}  mall_name={this.props.query.mallname} />
                        <StoreViewMall mall_id={this.props.query.mallid}  mall_name={this.props.query.mallname}  />
                        <MallDefault  mall_id={this.props.query.mallid}  mall_name={this.props.query.mallname} />
                    </div>
                </div>
                {/* <Newletters layout="container" /> */}
                <FooterDefault />
            </div>
        );
    }
}
export default connect(state => state.mall)(MallDefaultPage);
