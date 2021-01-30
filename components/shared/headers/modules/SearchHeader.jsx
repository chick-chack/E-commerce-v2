import React, { Component } from 'react';
import { Select } from 'antd';
import Link from 'next/link';
import Router from 'next/router';

import ProductResult from '../../../elements/products/ProductSearchResult';
import { connect } from 'react-redux';
import { getProductsByKeyword, all_category } from '../../../../store/product/action';
import i18next from 'i18next'
// import { all_category } from '../../../../store/collection/action';

var data_search = {};

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPanel: false,
            keyword: '',
            category: 'All',
            lang:null
        };
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    searchByProductName = (keyword, object) => {
        let matches = [];
        let regexp = new RegExp(keyword.toLowerCase(), 'g');

        object.forEach(product => {
            if (product.title.toLowerCase().match(regexp))
                matches.push(product);
        });

        return matches;
    };

    componentDidMount() {
        this.props.dispatch(all_category());
        this.setState({
            lang: localStorage.getItem('lang')
        })
    }
    handleSearch(e) {
        if (e.target.value !== '') {
            data_search = {
                'category': this.state.category,
                'keyword': e.target.value
            }
            // const keyword = e.target.value;
            this.props.dispatch(getProductsByKeyword(data_search));
            this.setState({
                searchPanel: true,
                keyword: e.target.value
            });
        } else {
            this.setState({ searchPanel: false, keyword: e.target.value, searchProducts: [] });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ searchPanel: false });
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword}&categorey=${this.state.category}`);
    }


    change(e) {
        e.preventDefault();
        
        this.setState({ category: e.target.value, searchPanel: false });
    }



    render() {


        // const { searchPanel } = this.state;
        // const {searchResults} = this.props;
        const { searchPanel } = this.state;
        const { searchResults, list_category } = this.props.product;

        return (

             <form
                className="ps-form--quick-search"
                method="get"
                action="/"
                onSubmit={this.handleSubmit.bind(this)}>

                <div className="ps-form__categories">
                <select className="form-control" onChange={this.change.bind(this)} value={this.state.category} >
                        <option value='All' >
                        {this.state.lang=== "ar" ? "الكل ": "All"}
                            
                        </option>
                        {list_category.map(item => (
                            <option value={item.id} key={item.id}>
                                {/* {item['subCategory.name_en']} */}
                                {this.state.lang=== "ar" ?   item.name_ar  :  item.name_en }
                               
                            </option>
                        ))}
                    </select>
                </div>

                <input
                    className="form-control"
                    style={this.state.lang=== "ar" ? {textAlign:"right", direction:"rtl"}: {textAlign:"left"}}
                    type="text"
                    placeholder={i18next.t("enternameofproduct")} 
                    onChange={this.handleSearch.bind(this)}
                    value={this.state.keyword}

                />
                <button onClick={this.handleSubmit.bind(this)}>
                    {i18next.t("search")}</button>
                <div
                    className={`ps-panel--search-result${
                        searchPanel && searchPanel === true ? ' active ' : ''
                    }`}>
                    <div className="ps-panel__content" style={this.state.lang=== "ar" ? {textAlign:"right", direction:"rtl"}: {textAlign:"left"}}>
                        {searchResults && searchResults.length > 0 ? (
                            searchResults.map(product => (
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
        );
    }
}

// export default connect(state=> state.product)(SearchHeader);
export default connect(state => state)(SearchHeader);


/*var data_search = {};

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPanel: false,
            keyword: '',
            category: 'All',
        };
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }


    searchByProductName = (keyword, object) => {
        let matches = [];
        let regexp = new RegExp(keyword.toLowerCase(), 'g');

        object.forEach(product => {
            if (product.title.toLowerCase().match(regexp))
                matches.push(product);
        });

        return matches;
    };



    searchByProductName = (keyword, object) => {
        let matches = [];
        let regexp = new RegExp(keyword.toLowerCase(), 'g');

        object.forEach(product => {
            if (product.title.toLowerCase().match(regexp))
                matches.push(product);
        });

        return matches;
    };

    componentDidMount() {
        
        this.props.dispatch(all_category());
    
    //     //console.log("persistore", this.persistor);
    //     //console.log("this persistore",persistStore( this.props.store));
    //
      this.setState({lang: localStorage.getItem('lang')|| 'en' })

        i18next.changeLanguage(this.state.lang);

        }

    handleSearch(e) {
        if (e.target.value !== '') {
            const keyword = e.target.value;
            this.props.dispatch(getProductsByKeyword(keyword));
            this.setState({
                searchPanel: true,
                keyword: e.target.value
            });
        } else {
            this.setState({ searchPanel: false, searchProducts: [] });
        }
    }
    handleSearch(e) {
        if (e.target.value !== '') {
            data_search = {
                'category': this.state.category,
                'keyword': e.target.value
            }
            // const keyword = e.target.value;
            this.props.dispatch(getProductsByKeyword(data_search));
            this.setState({
                searchPanel: true,
                keyword: e.target.value
            });
        } else {
            this.setState({ searchPanel: false, keyword: e.target.value, searchProducts: [] });
        }
    }



    handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword}`);
    }

    
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ searchPanel: false });
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword}&categorey=${this.state.category}`);
    }


    change(e) {
        e.preventDefault();
        this.setState({ category: e.target.value, searchPanel: false });
    }

*/