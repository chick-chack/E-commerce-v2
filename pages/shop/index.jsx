import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import LayoutShop from '../../components/partials/shop/LayoutShop';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ShopBrands from '../../components/partials/shop/ShopBrands';
import ShopBanner from '../../components/partials/shop/ShopBanner';
import ShopCategories from '../../components/partials/shop/ShopCategories';
import ShopWidget from '../../components/partials/shop/modules/ShopWidget';
import {
    
    getProducts,
    getTotalProducts,
    getProductsByCategory,
} from '../../store/product/action';
import { getCollections } from '../../store/collection/action';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        console.log("index shop, getinitial", ctx.query);
        /* brand: (12) ["1", "2", "3", "4", "5", "6", "7", "8", "9", "13", "14", "15"]
            __proto__: Object */
        return { query: ctx.query };
    }

    componentDidMount() {
        console.log("shop index", this.props);
        /* this.props: 
                    app: {isShowDemoPanel: false}
                    auth: {isLoggedIn: false}
                    cart: {cartItems: Array(0), amount: 0, cartTotal: 0}
                    collection:
                                categories: []
                                collection: {}
                                collections: []
                                testproducts: []
                    __proto__: Object
                    compare: {compareItems: Array(0), compareTotal: 0}
                    dispatch: ƒ ()
                    media: {banners: Array(0), promotions: Array(0)}
                    post: {posts: Array(0), featuredPost: null, recentPost: Array(0), categories: Array(0), error: false}
                    product:
                                allProducts: null
                                brands: []
                                categories: null
                                error: false
                                productLoading: true
                                productsLoading: true
                                searchResults: null
                                singleProduct: null
                                singleProductTest: null
                                totalProducts: 0
                    __proto__: Object
                    query: {}
                    setting:
                    currency: {symbol: "$", text: "USD"}
                    __proto__: Object
                    wishlist: {wishlistItems: Array(0), wishlistTotal: 0}
                    _persist: {version: -1, rehydrated: false}
                    __proto__: Object  */
        const { query } = this.props;
        if (query) {
            if (query.category) {
                console.log("if shoooooop", query.category);
                this.props.dispatch(getProductsByCategory(query.category));
            } else {
                console.log("if shooooop", "not category query");
                const params = {
                    _start: 1,
                    _limit: 12,
                };
                this.props.dispatch(getProducts(params));
                /* 1st request returns 12 items */
                this.props.dispatch(getTotalProducts());
                /* 1st request returns 85 */
            }
            const collectionsParams = [
                'shop-best-seller-items',
                'shop-recommend-items',
            ];
            this.props.dispatch(getCollections(collectionsParams));
        }
    }
/* here we have, all products : (12), totaproducts : 85, clooections */
    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop Default',
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
                        <ShopBanner />
                        <ShopBrands />
                        <ShopCategories />

                        
                        <div className="ps-layout--shop">
                            <ShopWidget />

                            <div className="ps-layout__right">
                                <LayoutShop />
                            </div>
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}
export default connect(state => state)(ShopDefaultPage);
