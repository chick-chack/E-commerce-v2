import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { removeCompareItem } from '../../../store/compare/action';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import { Rate } from 'antd';
import Rater from 'react-rater';
import i18next from 'i18next';

class Compare extends Component {
    constructor(props) {
        super(props);
    }

    handleAddItemToCart = product => {
        this.props.dispatch(addItem(product));
    };

    handleRemoveCompareItem = (e, product) => {
        e.preventDefault();
        this.props.dispatch(removeCompareItem(product));
    };

    render() {
        const { compareItems } = this.props.compare;
        return (
            <div className="ps-compare ps-section--shopping">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>{i18next.t('compareproduct')}</h1>
                    </div>
                    <div className="ps-section__content">
                        {compareItems && compareItems.length === 0 ? (
                            <div className="alert alert-danger" role="alert">
                               {i18next.t('comparelistempty')}
                            </div>
                        ) : (
                                <div className="table-responsive">
                                    <table className="table ps-table--compare">
                                        <tbody>
                                            <tr>
                                                <td className="heading" rowSpan="2">
                                                    {i18next.t('product')}
                                        </td>
                                                {compareItems &&
                                                    compareItems.length > 0 ? (
                                                        compareItems.map(product => (
                                                            <td key={product.id}>
                                                                <a
                                                                    href="#"
                                                                    onClick={e =>
                                                                        this.handleRemoveCompareItem(
                                                                            e,
                                                                            product,
                                                                        )
                                                                    }>
                                                                    {i18next.t('remove')}
                                                    </a>
                                                            </td>
                                                        ))
                                                    ) : (
                                                        <td></td>
                                                    )}
                                            </tr>
                                            <tr>
                                                {compareItems &&
                                                    compareItems.length > 0 ? (
                                                        compareItems.map(product => (
                                                            <td key={product.id}>
                                                                <div className="ps-product--compare">
                                                                    <div className="ps-product__thumbnail">

                                                                        <Link href="/product/[pid]" as={`/product/${product.product.id}?id=${product.productSelected.id}`}>
                                                                            <a>
                                                                                <LazyLoad>

                                                                                    <img src={product.productSelected.image} style={{ maxWidth: "25%" }} alt="product" />
                                                                                </LazyLoad>
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="ps-product__content">
                                                                        <Link
                                                                            href="/product/[pid]"
                                                                            as={`/product/${product.id}`}>
                                                                            <a className="ps-product__title">
                                                                                {
                                                                                    product.title
                                                                                }
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        ))
                                                    ) : (
                                                        <td></td>
                                                    )}
                                            </tr>
                                            <tr>
                                                <td className="heading">{i18next.t('rating')}</td>
                                                {compareItems &&
                                                    compareItems.length > 0 ? (
                                                        compareItems.map(product => (
                                                            <td key={product.id}>
                                                                {/* <Rate
                                                        disabled
                                                        defaultValue={4}
                                                    /> */}
                                                                <div className="ps-product__rating">
                                                                    <span className="rating_num">
                                                                        <Rater rating={product.product.rate ? product.product.rate : 0} total={5} interactive={false} />
                                                                            ({product.product.numberOfRates ? product.product.numberOfRates : 0})</span>
                                                                </div>
                                                            </td>
                                                        ))
                                                    ) : (
                                                        <td></td>
                                                    )}
                                            </tr>
                                            <tr>
                                                <td className="heading">Price</td>
                                                {compareItems &&
                                                    compareItems.length > 0 ? (
                                                        compareItems.map(product => {
                                                            if (product.sale === true) {
                                                                return (
                                                                    <td
                                                                        key={
                                                                            product.id
                                                                        }>
                                                                        <h4 className="price sale">
                                                                            $
                                                                {
                                                                                product.price
                                                                            }
                                                                            <del>
                                                                                ${product.salePrice}
                                                                            </del>
                                                                        </h4>
                                                                    </td>
                                                                );
                                                            } else
                                                                return (
                                                                    <td
                                                                        key={
                                                                            product.id
                                                                        }>
                                                                        <h4 className="price">
                                                                            ${' '}
                                                                            {/* {
                                                                    product.price
                                                                } */}
                                                                            {product.productSelected.isOffer
                                                                                ? (product.productSelected.price - ((product.productSelected.price * product.productSelected.offerRatio) / 100))
                                                                                : (product.productSelected.price)}
                                                                        </h4>
                                                                    </td>
                                                                );
                                                        })
                                                    ) : (
                                                        <td></td>
                                                    )}
                                            </tr>
                                            <tr>
                                                <td className="heading">Sold By</td>
                                                {compareItems &&
                                                    compareItems.length > 0 ? (
                                                        compareItems.map(product => (
                                                            <td key={product.id}>
                                                                <Link href="/vendor/store-list">
                                                                    <a>
                                                                        {product.product.trader.storeName}
                                                                    </a>
                                                                </Link>
                                                            </td>
                                                        ))
                                                    ) : (
                                                        <td></td>
                                                    )}
                                            </tr>
                                            <tr>
                                                <td className="heading"></td>
                                                {compareItems &&
                                                    compareItems.length > 0 ? (
                                                        compareItems.map(product => (
                                                            <td key={product.id}>
                                                                <button className="ps-btn">
                                                                    {i18next.t('addtocart')}
                                                    </button>
                                                            </td>
                                                        ))
                                                    ) : (
                                                        <td></td>
                                                    )}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(Compare);

