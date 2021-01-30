import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import NavigationDefault from '../navigation/NavigationDefault';
import HeaderActions from './modules/HeaderActions';
import MenuCategories from './modules/MenuCategories';
import SearchHeader from './modules/SearchHeader';
import { addItem } from '../../../store/cart/action';
import { stickyHeader } from '../../../utilities/common-helpers';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl } from '../../../repositories/Repository';
import i18next from 'i18next';

class HeaderProduct extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {

        console.log("header........", this.props.singleProduct)
        console.log("header........ children", this.props.child)
        console.log(window.location.pathname)
        console.log(this.props.match);
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }

    handleAddItemToCart = (e) => {
        e.preventDefault();
        const { productData } = this.props;
        this.props.dispatch(addItem(productData));
    };

    handleScroll = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (number >= 300) {
            document
                .getElementById('headerSticky')
                .classList.add('header--sticky');
        } else {
            document
                .getElementById('headerSticky')
                .classList.remove('header--sticky');
        }
    };

    render() {
        const { productData , child } = this.props;
        const index =  this.props.singleProduct.productChildren_orginal.findIndex( item => 
             item.id == child
            // console.log("-------------------&&&&&&&&&&&&&&&&&&&", item.id, child)
             )
     console.log("-------------------&&&&&&&&&&&&&&&&&&&", child)


        let f_index= this.props.singleProduct.productChildren_orginal.findIndex( item => 
             item.colorCode == null
            // console.log("-----------------------------------------------",     item.colorCode);
        )

        console.log("-----------------------------------------------",f_index);
        
        console.log(" almost done ",index);
        const singleProduct = this.props.singleProduct;
        console.log(" almost done props ",singleProduct);
        return (
            <header
                className="header header--1 header--product"
                data-sticky="true"
                id="headerSticky">
                <div className="header__top">
                    <div className="ps-container">
                        <div className="header__left">
                            <Link href="/">
                            <a className="ps-logo" style={{height:"50px"}}>
                                    <img
                                        src="/static/img/chickchackmall-logo.svg"
                                        alt="chickchack"
                                        style={{height:"100%"}}
                                    />
                                </a>

                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span>{i18next.t("shopByCategory")}</span>
                                </div>
                                <div className="menu__content">
                                    <MenuCategories />
                                </div>
                            </div>
                        </div>
                        
                        <div className="header__center">
                            <SearchHeader />
                        </div>
                        <div className="header__right">
                            <HeaderActions />
                        </div>
                    </div>
                </div>
                
                
                
                <NavigationDefault />
                <nav className="navigation navigation--product">
                    <div className="container">
                        <article className="ps-product--header-sticky">
                            <div className="ps-product__thumbnail">
                                <img
                                    src={
                                        singleProduct
                                            ? `${singleProduct.images[0]}`
                                            : ''
                                    }
                                    alt="chickchack"
                                />
                            </div>
                            <div className="ps-product__wrapper">
                                <div className="ps-product__content">
                                    {
                                        singleProduct && <Link
                                            href="/product/[pid]"
                                            as={`/product/${singleProduct.id}`}>
                                            <a className="ps-product__title">
                                                {
                                                    localStorage.getItem('lang')==='en'
                                                    ? singleProduct.name_en
                                                    : singleProduct.name_ar}
                                            </a>
                                        </Link>
                                    }
                                </div>
                                <div className="ps-product__shopping">
                                    {/* {singleProduct.sale === true ? ( */}

                                  
                                 {
                                     child && index ? 
                                     singleProduct ? 
                                     <h2>$ { singleProduct.productChildren_orginal[index].isOffer ?
                                        (singleProduct.productChildren_orginal[index].price - 
                                            ((singleProduct.productChildren_orginal[index].price 
                                                *singleProduct.productChildren_orginal[index].offerRatio) /100))

                                        : singleProduct.productChildren_orginal[f_index].price}</h2> 
                                     : <h2>$ { singleProduct.productChildren_orginal[f_index].isOffer ?
                                        (singleProduct.productChildren_orginal[f_index].price - 
                                            ((singleProduct.productChildren_orginal[f_index].price 
                                                *singleProduct.productChildren_orginal[f_index].offerRatio) /100))
                                        : singleProduct.productChildren_orginal[f_index].price}</h2>
                    
                                     : <h2>$ { singleProduct.productChildren_orginal[f_index].isOffer ?
                                        (singleProduct.productChildren_orginal[f_index].price - 
                                            ((singleProduct.productChildren_orginal[f_index].price 
                                                *singleProduct.productChildren_orginal[f_index].offerRatio) /100))
                                        : singleProduct.productChildren_orginal[f_index].price}</h2>


                                    //  singleProduct.sale === true ? (
                                    //     <span className="ps-product__price">
                                    //         <span>${singleProduct.price}</span>
                                    //         <del>
                                    //             ${singleProduct.salePrice}
                                    //         </del>
                                    //     </span>
                                    // ) : (
                                    //         <span className="ps-product__price">
                                    //             <span>${singleProduct.productChildren_orginal[index].price}</span>
                                    //         </span>
                                    //     )
                                    
                                    // :  singleProduct.sale === true ? (
                                    //     <span className="ps-product__price">
                                    //         <span>${singleProduct.price}</span>
                                    //         <del>
                                    //             ${singleProduct.salePrice}
                                    //         </del>
                                    //     </span>
                                    // ) : (
                                        //     <span className="ps-product__price">
                                        //         <span>${singleProduct.productChildren_orginal[f_index].price}</span>
                                        //     </span>
                                        // )  
                                 }
                                    <a
                                        className="ps-btn"
                                        href="#"
                                        onClick={(e) =>
                                            this.handleAddItemToCart(e)
                                        }>       
                                       {i18next.t('addtocart')}
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </nav>
            </header>
        );
    }
}
export default connect((state) => state.product)(HeaderProduct);