import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import {
    getProducts,
    getProductsByKeyword,
} from '../../../store/product/action';
import i18next from 'i18next'
import Product from '../../elements/products/Product';
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
        console.log("##########################################################################################", query);
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
    // // state = {
    //     state = {
    //         listView: true,
    //         pageNumber: 0,
    //         results: [],
    //     };
    
    //     componentDidMount() {
    //         const { query } = this.props.router;
    //         console.log("##########################################################################################", query);
    //         var data_search = {
    //             'category': query.categorey,
    //             'keyword': query.keyword
    //         }
    //         if (query) {
    //             this.props.dispatch(getProductsByKeyword(data_search));
    //         }
    //     }
    
    //     handleChangeViewMode = event => {
    //         event.preventDefault();
    //         this.setState({ listView: !this.state.listView });
    //     };
    
        // componentDidMount() {
        //     console.log("state from search", this.state);
        //     const { query } = this.props.router;
        //     console.log("query from search", query);
        //     var data_search = {
        //         'category': this.state.category,
        //         'keyword': query.keyword
        //     }
        //     if (query) {
        //         this.props.dispatch(getProductsByKeyword(data_search));
        //     }
        // }
    
        // handleChangeViewMode = event => {
        //     event.preventDefault();
        //     this.setState({ listView: !this.state.listView });
        // };
    
    //     listView: true,
    //     pageNumber: 0,
    //     results: [],
    // };
    


    // static async getInitialProps(ctx) {
    //     return { query: ctx.query };
    // }

    // searchByProductName = (keyword, object) => {
    //     let matches = [];
    //     let regexp = new RegExp(keyword.toLowerCase(), 'g');

    //     object.forEach(product => {
    //         if (product.title.toLowerCase().match(regexp))
    //             matches.push(product);
    //     });

    //     return matches;
    // };



    // componentDidMount() {
    //     this.props.dispatch(all_category());
    // }



    // handleSearch(e) {
    //     if (e.target.value !== '') {
    //         data_search = {
    //             'category': this.state.category,
    //             'keyword': e.target.value
    //         }
    //         // const keyword = e.target.value;
    //         this.props.dispatch(getProductsByKeyword(data_search));
    //         this.setState({
    //             searchPanel: true,
    //             keyword: e.target.value
    //         });
    //     } else {
    //         this.setState({ searchPanel: false, keyword: e.target.value, searchProducts: [] });
    //     }
    // }
    // handleChangeViewMode = event => {
    //     event.preventDefault();
    //     this.setState({ listView: !this.state.listView });
    // };


    render() {

        const allProducts = this.props.searchResults;
        let currentProducts = this.state.products;
        const viewMode = this.state.listView;

        return (
            <div className="ps-layout--shop">
                {/* <ShopWidget /> */}
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
                            {/* <div className="ps-shopping__footer">
                                <div className="ps-pagination">
                                    <ul className="pagination">
                                        <li className="active">
                                            <a href="#">1</a>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                               {i18next.t('nextpage')}
                                                <i className="icon-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
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


/*

    render() {
        const { allProducts } = this.props;
        let currentProducts = this.state.products;
        const viewMode = this.state.listView;
        return (
            <div className="ps-layout--shop">
                 <ShopWidget /> 
                <div className="ps-layout__right">
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
                                                      className="col-lg-4 col-md-4 col-sm-6 col-6 "
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
                            <div className="ps-shopping__footer">
                                <div className="ps-pagination">
                                    <ul className="pagination">
                                        <li className="active">
                                            <a href="#">1</a>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                               {i18next.t('nextpage')}
                                                <i className="icon-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  


    */