import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../elements/products/Product';
import ProductWide from '../../elements/products/ProductWide';
import ShopWidget from './modules/ShopWidget';
import BestSaleItems from './modules/BestSaleItems';
import RecommendItems from './modules/RecommendItems';
import { Pagination, Skeleton } from 'antd';
import { getProducts } from '../../../store/product/action';
import { SELECTION_ALL } from 'antd/lib/table/hooks/useSelection';


class LayoutShop extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        listView: true,
        pageSize:20,
        sort_value:null,
        params:{
            _start: 1,
            _limit: 12,
        },
        _start:1,
        _limit:12,
        page:1


    };

    componentDidMount(){
        localStorage.setItem("params",JSON.stringify(this.state.params));
    }

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    handlePagination(page, pageSize) {
        this.setState({
            pageSize:pageSize,
           
        })
     
        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize,
        };
        localStorage.setItem("params",JSON.stringify(params));

        this.props.dispatch(getProducts(params));
    }

    setSort_value(value){

        this.setState({
            sort_value:value
        })   

    }

    


    render() {
        const { allProducts, totalProducts } = this.props;
        console.log("shoooooooooooop", this.props);
        /* this.props: 
            allProducts: (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            brands: (17) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            categories: (14) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            dispatch: ƒ ()
            error: false
            productLoading: true
            productsLoading: false
            searchResults: null
            singleProduct: null
            singleProductTest: null
            totalProducts: 85
            __proto__: Object */

        console.log("layout shop all product", allProducts);
        /* all products : (12) [{}] */
        console.log("layout shop totalsproduct", totalProducts);
        /* tital products : 85 */
       // const products = allProducts;
        const testerg= allProducts;

        let products=null;
        //  array result from sort select
       
         if( testerg){

            products=  testerg.sort((a, b) => (this.state.sort_value === 'desc_date') ?
            (a.created_at> b.created_at ? 1 : -1)
            : (this.state.sort_value === "top_rating") ? (a.review > b.review ? 1 : -1)
            : (this.state.sort_value === "height_price") ? (a.price < b.price ? 1 : -1)
            : (this.state.sort_value === "low_price") ? (a.price > b.price ? 1 : -1)
            : (a.id > b.id ? 1 : -1) );

         }
         
       


        const total = totalProducts;
        const viewMode = this.state.listView;
        console.log("layout viewmode", viewMode);
        /* view mode : true */
        return (
            <div className="ps-shopping">
                <BestSaleItems collectionSlug="shop-best-seller-items" />
                <RecommendItems collectionSlug="shop-recommend-items" />
                <div className="ps-shopping__header">
                    <p>
                        <strong className="mr-2">{total}</strong>
                        Products found
                    </p>
                    <div className="ps-shopping__actions">
                        {/* "sort value:" {this.state.sort_value} */}
                        <select
                            className="ps-select form-control"
                            data-placeholder="Sort Items"
                            onChange={(e) => this.setSort_value(e.target.value)}>
                            <option value="desc_date">Sort by latest</option>
                            <option value="best_sale">Sort by popularity</option>
                            <option value="top_rating">Sort by average rating</option>
                            <option value="low_price">Sort by price: low to high</option>
                            <option value="height_price">Sort by price: high to low</option>
                        </select>

                        <div className="ps-shopping__view">
                            <p>View</p>
                            <ul className="ps-tab-list">
                                <li
                                    className={
                                        viewMode === true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-grid"></i>
                                    </a>
                                </li>
                                <li
                                    className={
                                        viewMode !== true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
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
                                {products && products.length > 0
                                    ? products.map((item) => (
                                          <div
                                              className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 "
                                              key={item.id}>
                                              <Product product={item} />
                                          </div>
                                      ))
                                    : ''}
                            </div>
                        </div>
                    ) : (
                        <div className="ps-shopping-product">
                            {products && products.length > 0
                                ? products.map((item) => (
                                      <ProductWide
                                          product={item}
                                          key={item.id}
                                      />
                                  ))
                                : ''}
                        </div>
                    )}
                    <div className="ps-shopping__footer text-center pt-40">
                        <Pagination
                            total={total - 1}
                            pageSize={this.state.pageSize}
                            responsive={true}
                            defaultCurrent={1}
                            onChange={this.handlePagination.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => state.product)(LayoutShop);
