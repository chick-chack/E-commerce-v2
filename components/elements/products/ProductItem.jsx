

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
        {/*currency: symbol, text */ }
        //     console.log("currency", currency);
        //   console.log("product deal of day", product);
        // let productBadge = null;
        // if (product.badge && product.badge !== null) {
        //     product.badge.map(badge => {
        //         if (badge.type === 'sale') {
        //             return (productBadge = (
        //                 <div className="ps-product__badge">{badge.value} hello</div>
        //             ));
        //         } else if (badge.type === 'outStock') {
        //             return (productBadge = (
        //                 <div className="ps-product__badge out-stock">
        //                     {badge.value}
        //                 </div>
        //             ));
        //         } else {
        //             return (productBadge = (
        //                 <div className="ps-product__badge hot">
        //                     {badge.value}
        //                 </div>
        //             ));
        //         }
        //     });
        // }
        // let thumbnail;
        // if (isStaticData === false) {
        //     thumbnail = `${baseUrl}${product.thumbnail.url}`;
        // } else {
        //     thumbnail = product.thumbnail.url;
        // }
        const product = this.props.product;

        //  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", product)

        return (
            <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">

                    {/* <h2> {productChildern.product.productChildren[0].image}</h2> */}

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
                                // href="#"
                                // href={`/store/${store.traderId}`}
                                href={`/product/${product.id}`}
                                title={i18next.t('showproduct')}
                                style={{ borderRadius: "0", width: "100%" }}
                            >
                                {i18next.t('showproduct')}
                            </a>
                        </li>
                    </ul>
                    {/* <ul className="ps-product__actions">
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add To Cart"
                                onClick={this.handleAddItemToCart.bind(this)}>
                                <i className="icon-bag2"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                                onClick={this.handleShowQuickView.bind(this)}>
                                <i className="icon-eye"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to wishlist"
                                onClick={this.handleAddItemToWishlist.bind(
                                    this
                                )}>
                                <i className="icon-heart"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                                onClick={this.handleAddItemToCompare.bind(
                                    this
                                )}>
                                <i className="icon-chart-bars"></i>
                            </a>
                        </li>
                    </ul>
                
                 */}
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
                            // href="/product/[pid]"
                            // as={`/product/${product.id}`}
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

                        {/* <div className="ps-product__rating">
                            <span className="rating_num">
                                <Rater rating={product.rate ? product.rate : 0} total={5} interactive={false} />
                            ({product.numberOfRates ? product.numberOfRates : 0})</span>
                        </div> */}
                    </div>
                </div>
                
                
                {/* <Modal
                title={product.title}
                centered
                footer={null}
                width={1024}
                onCancel={this.handleHideQuickView}
                visible={this.state.isQuickView}>
                <ProductDetailQuickView product={product} />
            </Modal> */}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductItem);





/*

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
import 'react-rater/lib/react-rater.css';
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

    // render() {
    //     const { currency } = this.props;
    //     const product = this.props.product;

    //    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", product)
    
        return (
            <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail">

                // {/* <h2> {productChildern.product.productChildren[0].image}</h2> 

                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                       <LazyLoad>
                            <img src={product.productChildren[0]['image']} alt="chickchack" /> 
                   
                           </LazyLoad>
                           </a>           
               </Link> 
               
              
               <ul className="ps-product__actions">
                   <li>
                       <a
                           href="#"
                           data-toggle="tooltip"
                           data-placement="top"
                           title="Read More"
                           onClick={this.handleAddItemToCart.bind(this)}>
                           <i className="icon-bag2"></i>
                       </a>
                   </li>
                   <li>
                       <a
                           href="#"
                           data-toggle="tooltip"
                           data-placement="top"
                           title="Quick View"
                           onClick={this.handleShowQuickView.bind(this)}>
                           <i className="icon-eye"></i>
                       </a>
                   </li>
                   <li>
                       <a
                           href="#"
                           data-toggle="tooltip"
                           data-placement="top"
                           title="Add to wishlist"
                           onClick={this.handleAddItemToWishlist.bind(
                               this
                           )}>
                           <i className="icon-heart"></i>
                       </a>
                   </li>
                   <li>
                       <a
                           href="#"
                           data-toggle="tooltip"
                           data-placement="top"
                           title="Compare"
                           onClick={this.handleAddItemToCompare.bind(
                               this
                           )}>
                           <i className="icon-chart-bars"></i>
                       </a>
                   </li>
               </ul>
           </div>

           
        <div className="ps-product__container">
               <Link href="/shop">
                   <a className="ps-product__vendor">
                       { localStorage.getItem('lang')==="en" ? 
                       product.name_en : product.name_ar }</a>
               </Link>
               <div className="ps-product__content">
                   {product.productChildren[0]['isOffer'] === true ? (
                       <p className="ps-product__price sale" style={{display:"flex"}}>
                           {currency ? currency.symbol : '$'}
                           {formatCurrency( product.productChildren[0]['price']  - ((product.productChildren[0]['price']*product.productChildren[0]['offerRatio'] )/100 ))}
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
                       href="/product/[pid]"
                       as={`/product/${product.id}`}>
                       <a className="ps-product__title">
                       { localStorage.getItem('lang')==="en" ? 
                           product.descriptionPoint_en[0]
                           :product.descriptionPoint_ar[0] }</a>
                   </Link>

                   <div className="ps-product__rating">
                   <span className="rating_num">
                               <Rater rating={product.rate ?  product.rate : 0} total={5} interactive={false} />
                                ({product.numberOfRates ? product.numberOfRates : 0})</span>
                   </div>
                 
               </div>
           </div> 
           <Modal
               title={product.title}
               centered
               footer={null}
               width={1024}
               onCancel={this.handleHideQuickView}
               visible={this.state.isQuickView}>
               <ProductDetailQuickView product={product} />
           </Modal>
       </div>
   );
}
}
const mapStateToProps = state => {
return state.setting;
};
export default connect(mapStateToProps)(ProductItem);
 */ 

/*

     <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a>
                            <LazyLoad>
                                <img src={thumbnail} alt="chickchack" />
                            </LazyLoad>
                        </a>
                    </Link>
                    {product.badge ? productBadge : ''}
                    <ul className="ps-product__actions">
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Read More"
                                onClick={this.handleAddItemToCart.bind(this)}>
                                <i className="icon-bag2"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                                onClick={this.handleShowQuickView.bind(this)}>
                                <i className="icon-eye"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to wishlist"
                                onClick={this.handleAddItemToWishlist.bind(
                                    this
                                )}>
                                <i className="icon-heart"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                                onClick={this.handleAddItemToCompare.bind(
                                    this
                                )}>
                                <i className="icon-chart-bars"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ps-product__container">
                    <Link href="/shop">
                        <a className="ps-product__vendor">Young Shop</a>
                    </Link>
                    <div className="ps-product__content">
                        {product.is_sale === true ? (
                            <p className="ps-product__price sale">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.price)}
                                <del className="ml-2">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(product.sale_price)}
                                </del>
                                <small>18% off</small>
                            </p>
                        ) : (
                            <p className="ps-product__price">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.price)}
                            </p>
                        )}
                        <Link
                            href="/product/[pid]"
                            as={`/product/${product.id}`}>
                            <a className="ps-product__title">{product.title}</a>
                        </Link>

                        <div className="ps-product__rating">
                            <Rating />
                            <span>{product.ratingCount}</span>
                        </div>
                        <div
                            className="ps-product__progress-bar ps-progress"
                            data-value={product.inventory}>
                            <div className="ps-progress__value">
                                {(product.depot / product.inventory) * 100 <
                                100 ? (
                                    <span
                                        style={{
                                            width:
                                                (product.depot /
                                                    product.inventory) *
                                                    100 +
                                                '%',
                                        }}></span>
                                ) : (
                                    <span style={{ width: '100%' }}></span>
                                )}
                            </div>
                            {product.inventory - product.depot >= 0 ? (
                                <p>Sold: {product.inventory - product.depot}</p>
                            ) : (
                                <p>Sold: {product.inventory}</p>
                            )}
                        </div>
                    </div>
                </div>
                <Modal
                    title={product.title}
                    centered
                    footer={null}
                    width={1024}
                    onCancel={this.handleHideQuickView}
                    visible={this.state.isQuickView}>
                    <ProductDetailQuickView product={product} />
                </Modal>
            </div>

            */



            /*


             <Link href="/product/[pid]" as={`/product/${product.id}`}>
               <a>
                        <LazyLoad>
                             <img src={thumbnail} alt="chickchack" /> 
                    
                            </LazyLoad>
                            </a>
                         
                        
            
                        </Link>







                          <div
                        className="ps-product__progress-bar ps-progress"
                        data-value={product.inventory}>
                        <div className="ps-progress__value">
                            {(product.depot / product.inventory) * 100 <
                            100 ? (
                                <span
                                    style={{
                                        width:
                                            (product.depot /
                                                product.inventory) *
                                                100 +
                                            '%',
                                    }}></span>
                            ) : (
                                <span style={{ width: '100%' }}></span>
                            )}
                        </div>
                        {product.inventory - product.depot >= 0 ? (
                            <p>Sold: {product.inventory - product.depot}</p>
                        ) : (
                            <p>Sold: {product.inventory}</p>
                        )}
                    </div>

                            {/*currency: symbol, text *
   //     console.log("currency", currency);
     //   console.log("product deal of day", product);
        // let productBadge = null;
        // if (product.badge && product.badge !== null) {
        //     product.badge.map(badge => {
        //         if (badge.type === 'sale') {
        //             return (productBadge = (
        //                 <div className="ps-product__badge">{badge.value} hello</div>
        //             ));
        //         } else if (badge.type === 'outStock') {
        //             return (productBadge = (
        //                 <div className="ps-product__badge out-stock">
        //                     {badge.value}
        //                 </div>
        //             ));
        //         } else {
        //             return (productBadge = (
        //                 <div className="ps-product__badge hot">
        //                     {badge.value}
        //                 </div>
        //             ));
        //         }
        //     });
        // }
        // let thumbnail;
        // if (isStaticData === false) {
        //     thumbnail = `${baseUrl}${product.thumbnail.url}`;
        // } else {
        //     thumbnail = product.thumbnail.url;
        // }

*/