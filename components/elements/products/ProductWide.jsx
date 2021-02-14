import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { addItemToCompare } from '../../../store/compare/action';
import { addItemToWishlist } from '../../../store/wishlist/action';
import { isStaticData } from '../../../utilities/app-settings';
import { formatCurrency } from '../../../utilities/product-helper';
import { baseUrl } from '../../../repositories/Repository';
import Rater from 'react-rater';
import i18next from 'i18next';


class ProductWide extends Component {
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
        const { product, currency } = this.props;
        let productRating = null;
        if (product.badge) {
            product.badge.map(badge => {
                if (badge.type === 'sale') {
                    return (productRating = (
                        <div className="ps-product__badge">{badge.value}</div>
                    ));
                } else if (badge.type === 'outStock') {
                    return (productRating = (
                        <div className="ps-product__badge.out-stock">
                            {badge.value}
                        </div>
                    ));
                } else {
                    return (productRating = (
                        <div className="ps-product__badge.hot">
                            {badge.value}
                        </div>
                    ));
                }
            });
        }
        return (
            <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a>
                            <img
                               src={product.productChildren[0]['image']} alt="chickchack" 
                            />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__container">
                    <div className="ps-product__content">
                        <Link
                            href="/product/[pid]"
                            as={`/product/${product.id}`}>
                            <a className="ps-product__title">{product.title}</a>
                        </Link>
                        <p className="ps-product__vendor">
                            Sold by:
                            <Link href="/shop">
                                <a>{product.vendor}</a>
                            </Link>
                        </p>
                        {/* <ul className="ps-product__desc">
                            {product.descriptionPoint_en.map(item => <li>
                                {item}
                            </li>)}
                        </ul> */}
                         <ul  className="ps-product__desc">
                             {localStorage.getItem('lang') === "en" ? 
                                     product.descriptionPoint_en.map( ( item, index)=>
                                     <li className="ps-product__title" key={index}>
                                        {  JSON.parse(item).value}
                                     </li>
                                     ) :
                                     product.descriptionPoint_ar.map( ( item, index)=>
                                     <li className="ps-product__title" key={index}>
                                        {  JSON.parse(item).value}
                                     </li>) }
                            
                        </ul>
                    </div>
                    <div className="ps-product__shopping">
                        {/* {product.is_sale === true ? (
                            <p className="ps-product__price sale">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.price)}
                                <del className="ml-1">
                                    {currency ? currency.symbol : '$'}
                                    {product.sale_price}{' '}
                                </del>
                            </p>
                        ) : (
                                <p className="ps-product__price">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(product.price)}
                                </p>
                            )} */}
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

                        <div className="ps-product__rating">
                            <span className="rating_num">
                                <Rater rating={product.rate ? product.rate : 0} total={5} interactive={false} />
                                ({product.numberOfRates ? product.numberOfRates : 0})</span>
                        </div>
                        <a
                            className="ps-btn"
                            href={`/product/${product.id}`}
                            title={i18next.t('showproduct')}
                            style={{ width: "100%" }}
                            >
                           {i18next.t('showproduct')}
                        </a>


                        {/* <ul className="ps-product__actions" style={{ padding: "0" }}>
                        <li style={{ maxWidth: "none", width: "100%", marginRight: "0" }} >
                            <a
                                href={`/product/${product.id}`}
                                title={i18next.t('showproduct')}
                                style={{ borderRadius: "0", width: "100%" }}
                            >
                                {i18next.t('showproduct')}
                            </a>
                        </li>
                    </ul> */}

                    
                        {/* <ul className="ps-product__actions">
                            <li>
                                <a
                                    href="#"
                                    onClick={this.handleAddItemToWishlist.bind(
                                        this
                                    )}>
                                    <i className="icon-heart"></i> Wishlist
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={this.handleAddItemToCompare.bind(
                                        this
                                    )}>
                                    <i className="icon-chart-bars"></i> Compare
                                </a>
                            </li>
                        </ul>
                    
                     */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductWide);

