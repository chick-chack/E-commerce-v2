import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import NavigationDefault from '../navigation/NavigationDefault';
import HeaderActions from './modules/HeaderActions';
import MenuCategories from './modules/MenuCategories';
import StoreSearchHeader from './modules/StoreSearchHeader';
import { stickyHeader } from '../../../utilities/common-helpers';
import {  all_category } from '../../../store/product/action';
import i18next from 'i18next';

class HeaderStore extends Component {

    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
        this.props.dispatch(all_category())    
    }



    render() {
        const data= this.props.product.list_category;

        return (
            <header

            className="header header--1"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Link href="/">
                        <a className="ps-logo" style={{ height: "50px" }}>
                                <img
                                    src="/static/img/chickchackmall-logo.svg"
                                    alt="chickchack"
                                    style={{ height: "100%" }}
                                />
                            </a>

                        </Link>
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span>{i18next.t("shopByCategory")}</span>
                            </div>
                            <div className="menu__content">
                            <MenuCategories   data={data}  />
                            </div>
                        </div>
                    </div>
                    <div className="header__center">
                        <StoreSearchHeader />
                    </div>
                    <div className="header__right">
                        <HeaderActions />
                    </div>
                </div>
            </div>
            <NavigationDefault />
        </header>
    

        
        );
    }
}

// export default connect(state=> state.product)(SearchHeader);
//export default HeaderStore;
export default connect(state => state) (HeaderStore);
