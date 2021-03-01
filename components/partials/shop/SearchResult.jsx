import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import {
    getProducts,
    getProductsByKeyword,
} from '../../../store/product/action';
import i18next from 'i18next'
import Product from '../../elements/products/ProductItem';
import ProductWide from '../../elements/products/ProductWide';
import ShopWidget from './modules/ShopWidget';
class SearchResult extends Component {

    state = {
        listView: true,
        pageNumber: 0,
        results: [],
    };

    componentDidMount() {
        const { query } = this.props.router;
        var data_search = {
            'category': query.categorey,
            'keyword': query.keyword
        }
        if (query) {
            this.props.dispatch(getProductsByKeyword(data_search));
        }
    }

    handleChangeViewMode = event => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    render() {

        const allProducts = this.props.searchResults;
        let currentProducts = this.state.products;
        const viewMode = this.state.listView;

        return (
            <div className="ps-layout--shop">
                    <div className="ps-shopping">
                        <div className="ps-shopping__header"
                        style={this.state.lang=== "ar" ? {textAlign:"right", direction:"rtl"}: {textAlign:"left"}}
                        >
                            {allProducts && allProducts.length > 0 ? (
                                <p>
                                    <strong>
                                        {allProducts ? allProducts.length : 0}
                                    </strong>
                                    <span className="ml-1">{i18next.t('productsfound')}</span>
                                </p>
                            ) : (
                                <p>{i18next.t("tryanotherword")}</p>
                            )}

                            <div className="ps-shopping__actions">
                                <div className="ps-shopping__view">
                                    <p>{i18next.t('view')}</p>
                                    <ul className="ps-tab-list">
                                        <li
                                            className={
                                                viewMode === true
                                                    ? 'active'
                                                    : ''
                                            }>
                                            <a
                                                href="#"
                                                onClick={
                                                    this.handleChangeViewMode
                                                }>
                                                <i className="icon-grid"></i>
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                viewMode !== true
                                                    ? 'active'
                                                    : ''
                                            }>
                                            <a
                                                href="#"
                                                onClick={
                                                    this.handleChangeViewMode
                                                }>
                                                <i className="icon-list4"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="ps-shopping__content">
                            {viewMode === true ? (
                                <div className="ps-shopping-product">
                                <div className="row">
                                    {allProducts && allProducts.length > 0
                                        ? allProducts.map(item => (
                                            <div
                                                className="col-lg-3 col-md-3 col-sm-6 col-6 "
                                                key={item.id}>
                                                <Product product={item} />
                                            </div>
                                        ))
                                        : ''}
                                </div>
                            </div>
                            ) : (
                                <div className="ps-shopping-product">
                                        {allProducts && allProducts.length > 0
                                            ? allProducts.map(item => (
                                                <ProductWide
                                                    product={item}
                                                    key={item.id}
                                                />
                                            ))
                                            : ''}
                                    </div>
                            )}
                        </div>
                    </div>
            
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.product;
};
export default withRouter(connect(mapStateToProps)(SearchResult));
