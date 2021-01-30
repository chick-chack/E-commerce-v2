import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { isStaticData } from '../../../utilities/app-settings';
import { formatCurrency } from '../../../utilities/product-helper';
import { baseUrl } from '../../../repositories/Repository';
import Rater from 'react-rater';


class StoretWide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuickView: false,
        };
    }

 

    handleShowQuickView = e => {
        e.preventDefault();
        this.setState({ isQuickView: true });
    };

    handleHideQuickView = e => {
        e.preventDefault();
        this.setState({ isQuickView: false });
    };

    render() {
        const { store} = this.props;
        let productRating = null;

        return (
            <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                    <Link href="/store"
                    href="/store/[sid]" as={`/store/${store['traderId']}`}>
                        <a>
                        <img src={store.image ? store.image 
                                    : "http://45.76.97.89:3000/uploads/bbb75430607f4d43ad26e4467ebdc524.png" }/>
                        </a>
                    </Link>
                </div>
                <div className="ps-product__container">
                <Link
                        // href="/shop"
                        href="/store/[sid]" as={`/store/${store['traderId']}`}
                    >

                        <a className="ps-product__vendor">
                            {store["trader.storeName"]}</a>
                    </Link>

                    <div className="ps-product__content"
                        style={{ direction: "ltr" }}>

                        <h5 className="ps-product__title">
                            {localStorage.getItem("lang")==="ar" 
                            ? store["storeType.name_ar"]
                            :store["storeType.name_en"] 
                            }
                        
                          </h5>

                        <div className="ps-product__rating">

                            <span className="rating_num">
                                <Rater rating={store.rate ?  store.rate : 0} total={5} interactive={false} />
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
export default connect(mapStateToProps)(StoretWide);
