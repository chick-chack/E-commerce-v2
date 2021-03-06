import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import StoreView from '../../components/partials/store/StoreView';
import StoreWidgets from '../../components/partials/store/StoreWidgets';
import Section_product from '../../components/partials/store/Section_product';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import StoreNavigationList from '../../components/shared/navigation/StoreNavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import { getStoresById } from '../../store/store/action';
import { getProductsByStores } from '../../store/store/action';
import { all_category } from '../../store/store/action';
import { getProductsById } from '../../store/product/action';
import HeaderStore from '../../components/shared/headers/HeaderStore';
// import { getCollections } from '../../store/collection/action';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import i18next from 'i18next';

class StoreDefaultPage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }

    state={
        lang:null
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        console.log(this.props.query)
        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })
        const { sid } = this.props.query;
        const { query } = this.props;
        if (isNaN(sid)) {
            Router.push('/page/page-404');
        }
        if (query) {
             this.props.dispatch(getStoresById(sid));
             this.props.dispatch(all_category(sid));
        }

        Router.events.on('routeChangeStart', url => {
            const nextPid = url.split('/').pop();
            if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
                this.props.dispatch(getProductsById(nextPid));
            }
        });
    }

    render() {
        const { storeinfo , list_category_store} = this.props;
        const breadCrumb = [
            {
                text: i18next.t('home'),
                url: '/',
            },

             {
                text:  this.props.storeinfo ? this.state.lang==='ar'
                        ? this.props.storeinfo['mall.name_ar']
                        : this.props.storeinfo['mall.name_en']
                : "Mall" ,
                 url:
                 this.props.storeinfo ?
                        `/mall?mallname=${ this.props.storeinfo['mall.name_en']}&mallid=${this.props.storeinfo['mall.id']}`
                        : `/mall?mallname=Dubai&mallid=1`,
                 
             },
            
            {
                text: this.props.storeinfo ? this.props.storeinfo['trader.storeName'] :  "Store",
                 url: `/store/${this.props.query.sid ? this.props.query.sid : ""}`,
            },
            
        ];

        return (
            <div className="site-content">
                
                {storeinfo ? (
                    <HeaderStore productData={storeinfo} />
                ) : (
                        ''
                    )}
                <HeaderMobileProduct />
                <StoreNavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--store">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__right store_mall">
                                <StoreView />
                                {/* <ProductWidgets collectionSlug="widget_same_brand" /> */}
                            </div>
                            <div className="ps-page__left">
                                <StoreWidgets />
                            </div>
                        </div>
                        <Section_product />
                    </div>
                </div>
                {/* <Newletters /> */}
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.store)(StoreDefaultPage);
