import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { addItemToCompare } from '../../../store/compare/action';
import { addItemToWishlist } from '../../../store/wishlist/action';
import Link from 'next/link';
import { Modal } from 'antd';
import ProductDetailQuickView from '../detail/ProductDetailQuickView';
import Rating from '../Rating';
import { baseUrl } from '../../../repositories/Repository';
import { formatCurrency } from '../../../utilities/product-helper';
import { isStaticData } from '../../../utilities/app-settings';
import LazyLoad from 'react-lazyload';
import i18next from 'i18next';
import Rater from 'react-rater';
import default_img from '../../../public/static/img/bbb75430607f4d43ad26e4467ebdc524.png'

class StoreTopRate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuickView: false,
        };
    }


    render() {
        const { store } = this.props;
        return (
            <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                    <Link
                        // href="/shop"
                        href="/store/[sid]" as={`/store/${store.traderId}`}
                    >
                        <a>
                            <LazyLoad>
                                {/* <img src={thumbnail} alt="chickchack" /> */}
                                <img src={store.image ? store.image : default_img} />
                            </LazyLoad>
                        </a>
                    </Link>

                    <ul className="ps-product__actions" style={{ padding: "0" }}>
                        <li style={{ maxWidth: "none", width: "100%", marginRight: "0" }} >
                            <a
                                // href="#"
                                href={`/store/${store.traderId}`}
                                title={i18next.t('showstore')}
                                style={{ borderRadius: "0", width: "100%" }}
                            >
                                {i18next.t('showstore')}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ps-product__container">
                    <Link  href="/store/[sid]" as={`/store/${store.traderId}`}>
                        <a className="ps-product__vendor">

                            {store["trader.storeName"]}</a>
                    </Link>
                    <div className="ps-product__content"
                        style={{ direction: "ltr" }}>

                        <h5 className="ps-product__title">
                            {localStorage.getItem("lang") === "ar"
                                ? store["trader.storeType.name_ar"]
                                : store["trader.storeType.name_en"]
                            }
                        </h5>

                        <div className="ps-product__rating">

                            <span className="rating_num">
                                <Rater rating={store.rate ? store.rate : 0} total={5} interactive={false} />
                                                            ({store.numberOfRates ? store.numberOfRates : 0})</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.setting;
};



export default connect(mapStateToProps)(StoreTopRate);
// connect(state => state.mall)


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addItem } from '../../../store/cart/action';
// import { addItemToCompare } from '../../../store/compare/action';
// import { addItemToWishlist } from '../../../store/wishlist/action';
// import Link from 'next/link';
// import { Modal } from 'antd';
// import ProductDetailQuickView from '../detail/ProductDetailQuickView';
// import Rating from '../Rating';
// import { baseUrl } from '../../../repositories/Repository';
// import { formatCurrency } from '../../../utilities/product-helper';
// import { isStaticData } from '../../../utilities/app-settings';
// import LazyLoad from 'react-lazyload';
// import i18next from 'i18next';
// import Rater from 'react-rater';
// import 'react-rater/lib/react-rater.css';

// class StoreTopRate extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isQuickView: false,
//         };
//     }


//     render() {
//         const { store } = this.props;
//       //  console.log("stooooooooooooooooooooooooooooooooooooore", this.props);


//         return (
//             <div className="ps-product ps-product--inner">
//                 <div className="ps-product__thumbnail">
//                     <Link
//                         href="/shop"
//                     // href="/shop/[pid]" as={`/shop/${store.id}`}
//                     >
//                         <a>
//                             <LazyLoad>
//                                 {/* <img src={thumbnail} alt="chickchack" /> */}
//                                 <img src={store.image ? store.image : "http://45.76.97.89:3000/uploads/bbb75430607f4d43ad26e4467ebdc524.png" }/>
//                             </LazyLoad>
//                         </a>
//                     </Link>

//                     <ul className="ps-product__actions" style={{padding:"0"}}>
//                         <li style={{ maxWidth: "none", width: "100%", marginRight:"0"}} >
//                             <a
//                                 href="#"
//                                 title={i18next.t('showstore')}
//                                 style={{ borderRadius: "0", width: "100%" }}
//                             >
//                                 {i18next.t('showstore')}
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="ps-product__container">
//                     <Link href="/shop">
//                         <a className="ps-product__vendor">
//                             {store["trader.storeName"]}</a>
//                     </Link>
//                     <div className="ps-product__content"
//                         style={{ direction: "ltr" }}>

//                         <h5 className="ps-product__title">
//                             {localStorage.getItem("lang")==="ar" 
//                             ? store["trader.storeType.name_ar"]
//                             :store["trader.storeType.name_en"]
//                             }
//                           </h5>

//                         <div className="ps-product__rating">

//                             <span className="rating_num">
//                                 <Rater rating={store.rate ?  store.rate : 0} total={5} interactive={false} />
//                                                             ({store.numberOfRates ? store.numberOfRates : 0})</span>

//                         </div>
                      
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// const mapStateToProps = state => {
//     return state.setting;
// };



// export default connect(mapStateToProps)(StoreTopRate);
// // connect(state => state.mall)
