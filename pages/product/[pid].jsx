import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import ProductDetailFullwidth from '../../components/elements/detail/ProductDetailFullwidth';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import { getProductsById } from '../../store/product/action';
import HeaderProduct from '../../components/shared/headers/HeaderProduct';
import { getCollections } from '../../store/collection/action';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import i18next from 'i18next';

class ProductDefaultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childern: '',
            lang:null
        };
    }


    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {

        console.log("^%^%%^^^%%^%%^%^%%^^%^%^", this.props);

        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })
        if (this.props.query.id) {
            this.setState({ childern: this.props.query.id })
        }
        const { pid } = this.props.query;
        const { query } = this.props;
        if (isNaN(pid)) {
            Router.push('/page/page-404');
        }

        if (query) {
            const collectionsParams = [
                'customer_bought',
                'shop-recommend-items',
                'widget_same_brand',
            ];
            this.props.dispatch(getProductsById(pid));
            // this.props.dispatch(getProductsByIdForTesting(37));
            this.props.dispatch(getCollections(collectionsParams));
        }
        Router.events.on('routeChangeStart', url => {
            const nextPid = url.split('/').pop();
            if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
                this.props.dispatch(getProductsById(nextPid));
            }
        });
    }

    render() {
        const { singleProductTest } = this.props;
        const { singleProduct } = this.props;
        const breadCrumb = [
            {
                text: i18next.t('home'),
                url: '/',
            },
            {
                text:singleProduct && (this.state.lang==='ar'
                        ? singleProduct.trader.mall.name_ar 
                        : singleProduct.trader.mall.name_en),
                url: singleProduct && ( this.state.lang==='en'
                ? `/mall?mallname=${singleProduct.trader.mall.name_en }&mallid=${singleProduct.trader.mall.id}`
                : `/mall?mallname=${singleProduct.trader.mall.name_ar }&mallid=${singleProduct.trader.mall.id}`),
            },
            {
                text: singleProduct &&( singleProduct.trader.storeName),
                url: singleProduct && ( `/store/${singleProduct.traderId}`) ,
            },
            {
                 text: singleProduct && (  this.state.lang==='en'?  singleProduct.name_en
                 :  singleProduct.name_ar ),
                //  dif:'text',
                 url: singleProduct && ( `/product/${singleProduct.id}`) ,
            },
        ];

        return (
            <div className="layout--product">
                {/* {singleProduct ? (<HeaderProduct productData={singleProduct } child={this.state.childern}   />
                ) : (
                        ''
                    )} */}
                     <HeaderDefault />


                    <HeaderMobile />
                {/* <HeaderMobileProduct /> */}
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--product">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__left">
                                <ProductDetailFullwidth childern_ID={this.state.childern} id={this.props.query.id} />
                            </div>
                            <div className="ps-page__right">
                                <ProductWidgets collectionSlug="widget_same_brand" />
                            </div>
                        </div>
                        {/* <CustomerBought
                            layout="fullwidth"
                            collectionSlug="customer_bought"
                        />
                        <RelatedProduct
                            layout="fullwidth"
                            collectionSlug="shop-recommend-items"
                        /> */}
                    </div>
                </div>
                <Newletters />
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.product)(ProductDefaultPage);

