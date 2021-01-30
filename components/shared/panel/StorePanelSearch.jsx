import React, { Component } from 'react';
// import { getProductsByKeyword } from '../../../store/product/action';
import ProductResult from '../../elements/products/ProductSearchResult';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { getProductsByKeyword_inStore, all_category } from '../../../store/product/action';
import i18next from 'i18next';

var data_search = {};

class StorePanelSearch extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     searchPanel: false,
        //     searchProducts: [],
        //     keyword: '',
        // };
        this.state = {
            searchPanel: false,
            keyword: '',
            StoreSearchResult:null,
            category: 'All',
            lang:null
        };
    }


    componentDidMount() {
        console.log("store panel", this.props)
        
        this.props.dispatch(all_category());
        
        this.setState({
            lang: localStorage.getItem('lang')
        })
    }

    searchByProductName = (keyword, object) => {
        let matches = [];
        let regexp = new RegExp(keyword.toLowerCase(), 'g');

        object.forEach((product) => {
            if (product.title.toLowerCase().match(regexp))
                matches.push(product);
        });

        return matches;
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ searchPanel: false });
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword.toLowerCase()}&categorey=${this.state.category}`);
    }


    change(e) {
        e.preventDefault();
        console.log("e change", e.target.value)

        this.setState({ category: e.target.value, searchPanel: false });
    }


    // handleSubmit(e) {
    //     e.preventDefault();
    //     const keyword = this.state.keyword;
    //     Router.push(`/search?keyword=${keyword}`);
    // }
    // handleSearch(e) {
    //     if (e.target.value !== '') {
    //         const keyword = e.target.value;
    //         this.props.dispatch(getProductsByKeyword(keyword));
    //         this.setState({
    //             searchPanel: true,
    //             keyword: e.target.value,
    //         });
    //     } else {
    //         this.setState({ searchPanel: false, searchProducts: [] });
    //     }
    // }
    handleSearch(e) {
        if (e.target.value !== '') {
            data_search = {
                'category': this.state.category,
                'keyword': e.target.value
            }
            // const keyword = e.target.value;
            this.props.dispatch(getProductsByKeyword_inStore(data_search, this.props.store.storeinfo.traderId));
            this.setState({
                searchPanel: true,
                keyword: e.target.value
            });
        } else {
            this.setState({ searchPanel: false, keyword: e.target.value, searchProducts: [] });
        }
    }

    render() {
        //const { searchProducts } = this.state;
       // const { StoreSearchResult } = this.props;
       const { searchPanel } = this.state;
        const { StoreSearchResult, list_category } = this.props.product;
        return (
            <div className="ps-panel__search-results">
                <form
                    className="ps-form--search-mobile"
                    action="/"
                    onSubmit={this.handleSubmit.bind(this)}>

                    {/* // method="get"  > */ }
                    
                    <div className="form-group--nest">
                        <input
                            className="form-control"
                            style={this.state.lang=== "ar" ? {textAlign:"right", direction:"rtl"}: {textAlign:"left"}}
                            type="text"
                            placeholder={i18next.t("enternameofproduct")} 
                            onChange={this.handleSearch.bind(this)}
                            value={this.state.keyword}
                        />
              

                        <button onClick={this.handleSubmit.bind(this)} >
                            <i className="icon-magnifier"></i>
                        </button>
                        
                    </div>
                    <div
                    className={`ps-panel--search-result${
                        searchPanel && searchPanel === true ? ' active ' : ''
                    }`}
                    
                    style={searchPanel && searchPanel === true ?{display:"block"} :{ display:"none"} }
                    
                    >
                    <div className="ps-panel__content" style={this.state.lang=== "ar" ? {textAlign:"right", direction:"rtl"}: {textAlign:"left"}}>
                        {StoreSearchResult && StoreSearchResult.length > 0 ? (
                            StoreSearchResult.map(product => (
                                <ProductResult
                                    product={product}
                                    key={product.id}
                                />
                            ))
                        ) : (
                            <span style={this.state.lang=== "ar" ? {textAlign:"right", direction:"rtl"}: {textAlign:"left"}}>{i18next.t("tryanotherword")}</span>
                        )}
                    </div>
                    <div className="ps-panel__footer text-center">
                        <Link href="/search">
                            <a>{i18next.t("seeallresults")}</a>
                        </Link>
                    </div>
                </div>
            

                </form>
                {/* {StoreSearchResult &&
                    StoreSearchResult.map((product) => (
                        <ProductResult product={product} key={product.id} />
                    ))} */}
                        {/* {StoreSearchResult && StoreSearchResult.length > 0 ? (
                            StoreSearchResult.map(product => (
                                <ProductResult
                                    product={product}
                                    key={product.id}
                                />
                            ))
                        ) : (
                            <span style={this.state.lang=== "ar" ? {textAlign:"right", direction:"rtl"}: {textAlign:"left"}}>{i18next.t("tryanotherword")}</span>
                        )} */}
            </div>
        );
    }
}

// export default connect((state) => state.product)(PanelSearch);
export default connect(state => state)(StorePanelSearch);