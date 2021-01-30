import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import LayoutMall from '../../components/partials/mall/LayoutMall';
import StoreViewMall from '../../components/partials/mall/StoreMallView';
import MallDefault from '../../components/partials/mall/MallDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';


import { useRouter } from 'next/router'
import { getAllStoresMalls, getTopStoresByMalls, getProductsByMalls } from '../../store/mall/action';
// import ShopBrands from '../../components/partials/shop/ShopBrands';
// import ShopBanner from '../../components/partials/shop/ShopBanner';
// import ShopCategories from '../../components/partials/shop/ShopCategories';
// import ShopWidget from '../../components/partials/shop/modules/ShopWidget';



// import {
//     getStores,
//     getTotalStores,
//     getStoresByCategory,
// } from '../../store/store/action';
import { getCollections } from '../../store/collection/action';




class MallDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }


    // static async getInitialProps(ctx) {
    //     console.log("index shop, getinitial", ctx.query);
    //     const mallname=ctx.query;

    //     /* brand: (12) ["1", "2", "3", "4", "5", "6", "7", "8", "9", "13", "14", "15"]
    //         __proto__: Object */
    //     return { query: ctx.query };
    // }

    static async getInitialProps(ctx) {
        console.log("index shop, getinitial", ctx.query);
        /* brand: (12) ["1", "2", "3", "4", "5", "6", "7", "8", "9", "13", "14", "15"]
            __proto__: Object */
        return { query: ctx.query };
    }


    componentDidMount() {
        //console.log("shop index", this.props);

        //console.log("ooooooooooooocvfxvbfgdbgfooooooooooo", this.props.query.mallid);




        const { query } = this.props;
        if (query) {

            this.props.dispatch(getAllStoresMalls(this.props.query.mallid ,8,0));
            // this.props.dispatch(getTopStoresByMalls(this.props.query.mallid,8,0));
            this.props.dispatch(getTopStoresByMalls(this.props.query.mallid));
            this.props.dispatch(getProductsByMalls(this.props.query.mallid));
           




        }
    }
    /* here we have, all products : (12), totaproducts : 85, clooections */
    render() {

        //console.log("shopppppppppppppppppppppppppppppp index", this.props);
        // const router = useRouter()
        //console.log("hhhhhhhhhhhhhh",router.query);
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: this.props.query.mallname,
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

            
                        <LayoutMall  mall_id={this.props.query.mallid}   />
                        <StoreViewMall />
                        <MallDefault />
               


                        {/* <ShopBanner />
                        <ShopBrands />
                        <ShopCategories />
                        <LayoutMall />
                                        */}
                        {/* <div className="ps-layout--shop">
                            <ShopWidget />

                            <div className="ps-layout__right">
                                <LayoutMall />
                            </div>
                        </div> */}
                    </div>
                </div>
                <Newletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}
export default connect(state => state.mall)(MallDefaultPage);
