

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
import Rater from 'react-rater';
import i18next from 'i18next';

// import 'react-rater/lib/react-rater.css';
class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuickView: false,
        };
    }

    handleAddItemToCart = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItem(product));
        
    };

    handleAddItemToCompare = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToWishlist(product));
    };

    handleShowQuickView = e => {
        e.preventDefault();
        this.setState({ isQuickView: true });
    };

    handleHideQuickView = e => {
        e.preventDefault();
        this.setState({ isQuickView: false });
    };

    render() {
        const { currency } = this.props;
        const product = this.props.product;
        return (
            <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a>
                            <LazyLoad>
                                <img src={product.productChildren[0]['image']} alt="chickchack" />
                            </LazyLoad>
                        </a>
                    </Link>
                    <ul className="ps-product__actions" style={{ padding: "0" }}>
                        <li style={{ maxWidth: "none", width: "100%", marginRight: "0" }} >
                            <a
                                href={`/product/${product.id}`}
                                title={i18next.t('showproduct')}
                                style={{ borderRadius: "0", width: "100%" }}
                            >
                                {i18next.t('showproduct')}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ps-product__container">
                    <Link  href="/product/[pid]" as={`/product/${product.id}`} >
                        <a className="ps-product__vendor">
                            {localStorage.getItem('lang') === "en" ?
                                product.name_en : product.name_ar}</a>
                    </Link>
                    <div className="ps-product__content">
                        {product.productChildren[0]['isOffer'] === true ? (
                            <p className="ps-product__price sale" style={{ display: "flex" }}>
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.productChildren[0]['price'] - ((product.productChildren[0]['price'] * product.productChildren[0]['offerRatio']) / 100))}
                                <del className="ml-2">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(product.productChildren[0]['price'])}
                                </del>
                                <small>{product.productChildren[0]['offerRatio']}% off</small>

                            </p>
                        ) : (
                                <p className="ps-product__price">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(product.productChildren[0]['price'])}
                                </p>
                            )}
                        <Link
                            href="/product/[pid]" as={`/product/${product.id}`}
                            
                            >
                            <a className="ps-product__title">
                                {localStorage.getItem('lang') === "en" ?
                                    product.descriptionPoint_en[0]
                                    : product.descriptionPoint_ar[0]}</a>
                        </Link>

                        <div className="ps-product__rating">
                   <span className="rating_num">
                               <Rater rating={product.rate ?  product.rate : 0} total={5} interactive={false} />
                                ({product.numberOfRates ? product.numberOfRates : 0})</span>
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
export default connect(mapStateToProps)(ProductItem);


