import React, { Component } from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import { Modal } from 'antd';
import Rating from '../Rating';
import { baseUrl } from '../../../repositories/Repository';
import { isStaticData } from '../../../utilities/app-settings';
import i18next from 'i18next';
import Rater from 'react-rater';
import StoreTopRate from './StoreTopRate';


class Store extends Component {
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
                        // href="/store"
                        href="/store/[sid]" as={`/store/${store['traderId']}`} >
                        <a>
                            <LazyLoad>
                                {/* <img src={thumbnail} alt="chickchack" /> */}
                                <img src={store.image ? store.image
                                    : 
                                    "/static/img/store-gray.png"
                                    // "http://45.76.97.89:3000/uploads/bbb75430607f4d43ad26e4467ebdc524.png"
                                }/>
                            </LazyLoad>
                        </a>
                    </Link>

                    <ul className="ps-product__actions" style={{ padding: "0" }}>
                        <li style={{ maxWidth: "none", width: "100%", marginRight: "0" }} >
                            <a
                                // href="#"
                                href="/store/[sid]" as={`/store/${store['traderId']}`}
                                title={i18next.t('showstore')}
                                style={{ borderRadius: "0", width: "100%" }}
                            >
                                {i18next.t('showstore')}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ps-product__container">
                    {/* <Link href="/shop"> */}
                    <Link
                        // href="/shop"
                        // href="/store/[sid]" as={`/store/${StoreTopRate}`}
                        href="/store/[sid]" as={`/store/${store['traderId']}`}
                    >

                        <a className="ps-product__vendor">
                            {store["trader.storeName"]}</a>
                    </Link>
                    <div className="ps-product__content"
                        style={{ direction: "ltr" }}>

                        <h5 className="ps-product__title">
                            {localStorage.getItem("lang") === "ar"
                                ? store["storeType.name_ar"]
                                : store["storeType.name_en"]
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
const mapStateToProps = (state) => {
    return state.setting;
};
export default connect(mapStateToProps)(Store);

