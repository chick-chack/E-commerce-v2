import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
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
import { getProductsById ,all_sub_category} from '../../store/product/action';
import HeaderStore from '../../components/shared/headers/HeaderStore';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import Rater from 'react-rater';
import i18next from 'i18next';

class StoreDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        lang: null
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
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
            this.props.dispatch(all_sub_category(sid));
        }

        Router.events.on('routeChangeStart', url => {
            const nextPid = url.split('/').pop();
            if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
                this.props.dispatch(getProductsById(nextPid));
            }
        });
    }

    render() {
        const { storeinfo, list_category_store } = this.props.store;
        const {sub_list_category} = this.props.product
        console.log('sub',sub_list_category)
        console.log('list',list_category_store)
        const breadCrumb = [
            {
                text: i18next.t('home'),
                url: '/',
            },

            {
                text: this.props.store.storeinfo ? this.state.lang === 'ar'
                    ? this.props.store.storeinfo['mall.name_ar']
                    : this.props.store.storeinfo['mall.name_en']
                    : "Mall",
                url:
                    this.props.store.storeinfo ?
                        `/mall?mallname=${this.props.store.storeinfo['mall.name_en']}&mallid=${this.props.store.storeinfo['mall.id']}`
                        : `/mall?mallname=Dubai&mallid=1`,

            },

            {
                text: this.props.store.storeinfo ? this.props.store.storeinfo['trader.storeName'] : "Store",
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
                        <div className="ps-page__left">
                            {this.props.store.storeinfo && this.props.store.storeinfo.image != null
                                ? <div className="store_img"  >
                                    <img
                                        src={this.props.store.storeinfo.image} alt={this.props.store.storeinfo.mall.name_en} />
                                </div>
                                : <div className="store_img" >
                                    <img
                                        src="/static/img/store-gray.png" alt="Snow" />
                                </div>}
                            {this.props.store.storeinfo
                                ? <div className="store_content_" >
                                    <p>{i18next.t('welcome')}<span>{storeinfo['trader.storeName']} </span></p>
                                    <p> {i18next.t('tradetype')} <span>  {this.state.lang === "en" ? storeinfo['storeType.name_en'] : storeinfo['storeType.name_ar']}</span>
                                    </p>
                                    <div className="ps-product__rating">
                                        <span className="rating_num">
                                            <Rater rating={storeinfo.rate ? storeinfo.rate : 0} total={5} interactive={false} />
                                    ({storeinfo.numberOfRates ? storeinfo.numberOfRates : 0})</span>
                                    </div>
                                </div>
                                : <div className="store_img" style={{ height: "100%" }}>

                                </div>}
                            <div className="ps-black-driver"></div>

                            {storeinfo ?
                                <div className="store_content_ se">

                                    <p className="prev">
                                        {i18next.t('store_desc')}

                                    </p>
                                    <p className="prev">
                                        {i18next.t('store_desc_2')}
                                    </p>
                                </div>
                                : ''

                            }
                        </div>
                        <div className="ps-page__right">
                            <h3 style={{ marginBottom: "30px" }}>{i18next.t('categories_')}</h3>
                            <div className="row">
                                { sub_list_category && storeinfo ? sub_list_category.map((category, index)=>
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6 col" key={index}>
                                        <div className="ps-block--category">
                                            <Link 
                                              href={{
                                                pathname: '/store/ProductsByCategory', query: { 
                                                    mallid: storeinfo['mall.id'],
                                                    mallname:storeinfo['mall.name_en'],
                                                    storeid:storeinfo['traderId'],
                                                    SectionId:category.id},}  
                                            } >
                                                <a className="ps-block__overlay"></a>
                                            </Link>
                                            <img src="/static/img/categories/1.jpg" alt="chickchack" />
                                            <p>{this.state.lang=='en'? category['subCategory.name_en']  : category['subCategory.name_ar'] }</p>
                                        </div>
                                    </div>
                                    ) : <div>no data </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <Section_product />
                {/* <Newletters /> */}
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state)(StoreDefaultPage);

