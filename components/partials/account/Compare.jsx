import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_to_cart, updateCartSuccess } from '../../../store/cart/action';
import { removeCompareItem } from '../../../store/compare/action';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import { Rate } from 'antd';
import Rater from 'react-rater';
import i18next from 'i18next';
import Router from 'next/router';
import { notification } from 'antd';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};


class Compare extends Component {
    constructor(props) {
        super(props);
    }

    handleAddItemToCart =(e, product)  => {
        e.preventDefault();
        console.log('compare props', product)
        if (this.props.auth.isLoggedIn && Boolean(this.props.auth.isLoggedIn) === true ){ 
            if (this.props.cart.cartlist) {
                if (this.props.cart.cartlist.length > 0) {
                    let existItem = this.props.cart.cartlist.find(
                        item => item['productChild.id'] == product.productSelected.id
                    )
                    if (existItem) {
                        existItem.quantity ++;
                    }
                    else {
                        // let index = this.props.wishlist.wishlistItems.product.productChildren_orginal.findIndex(
                        //     (item) => item.id == this.props.childern_ID
                        // );
                        // console.log("child id index ", index)
                        const newProduct = {
                            "productChild.colorCode": product.productSelected.colorCode,
                            "productChild.colorName_ar":  product.productSelected.colorName_ar,
                            "productChild.colorName_en":  product.productSelected.colorName_en,
                            "productChild.id":  product.productSelected.id,
                            "productChild.productId": product.product.productId,
                            "productChild.image":product.productSelected.image,
                            "productChild.isOffer": product.productSelected.isOffer,
                            "productChild.offerRatio": product.productSelected.offerRatio,
                            "productChild.price": product.productSelected.price,
                            "productChild.product.name_ar": product.product.name_ar,
                            "productChild.product.name_en": product.product.name_en,
                            "productChild.size": product.productSelected.size,
                            "productChildId": product.productSelected.id,
                            //" productChildId":this.props.product.singleProduct.productChildren_orginal[index].productId,
                            "quantity":1
                        }
                        this.props.cart.cartlist.push(newProduct)
                    }
                }
    
            }
            this.props.dispatch(add_to_cart(product.productSelected.id, 1))
            this.props.dispatch(removeCompareItem(product.product, product.productSelected));
    
            modalSuccess('success');
            Router.push('/account/shopping-cart')}
    
            else{
                if (this.props.cart.cartItems) {
                    console.log("tester", this.props.wishlist.wishlistItems)
                    if (this.props.cart.cartItems.length > 0) {
                        let existItem = this.props.cart.cartItems.find(
                            item => item['productChild.id'] == product.productSelected.id
                        )
                        if (existItem) {
                            existItem.quantity ++;
                            this.props.dispatch(removeCompareItem(product.product, product.productSelected));
                            this.props.dispatch(updateCartSuccess(this.props.cart.cartItems))
    
                        }
                        else {
                            console.log("this.props.product ", this.props.wishlist.wishlistItems)
                            // let index = this.props.wishlist.wishlistItems.findIndex(
                            //     (item) => item.product.productSelected.id == this.props.childern_ID
                            // );
                            // console.log("child id index ", index)
                            const newProduct = {
                                "productChild.colorCode": product.productSelected.colorCode,
                                "productChild.colorName_ar":  product.productSelected.colorName_ar,
                                "productChild.colorName_en":  product.productSelected.colorName_en,
                                "productChild.id":  product.productSelected.id,
                                "productChild.productId": product.product.productId,
                                "productChild.image":product.productSelected.image,
                                "productChild.isOffer": product.productSelected.isOffer,
                                "productChild.offerRatio": product.productSelected.offerRatio,
                                "productChild.price": product.productSelected.price,
                                "productChild.product.name_ar": product.product.name_ar,
                                "productChild.product.name_en": product.product.name_en,
                                "productChild.size": product.productSelected.size,
                                "productChildId": product.productSelected.id,
                                //" productChildId":this.props.product.singleProduct.productChildren_orginal[index].productId,
                                "quantity":1
                            }
                            // this.props.cart.cartItems.push(newProduct)
                            console.log("new yyyyyproduct", newProduct)
                            this.props.cart.cartItems.push(newProduct)
                            this.props.dispatch(removeCompareItem(product.product, product.productSelected));
                            this.props.dispatch(updateCartSuccess(this.props.cart.cartItems))
                            // let QTY;
                            // if(this.state.final_QTY===1 ){
                
                            //      QTY= this.state.quantity-1
                            // }
                            // else{
                            //      QTY= this.state.quantity - this.state.final_QTY;
                            // } 
                            
                            //  this.props.dispatch(add_to_local_cart(newProduct,  QTY))
                             Router.push('/account/shopping-cart')
                            console.log("------------------------", this.props.cart.cartItems)
                        }
                    }
        
                }
                // this.props.dispatch(add_to_cart(product.productSelected.id, 1))
                // this.props.dispatch(removeWishlistItem(product.product, product.productSelected));
        
                modalSuccess('success');
                Router.push('/account/shopping-cart')}
        // this.props.dispatch(addItem(product));
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
                                                                    {i18next.t('remove')} </a>
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
                                                                
                                                                <button className="ps-btn"
                                                                    onClick={e =>
                                                                        this.handleAddItemToCart(
                                                                            e,
                                                                            product,
                                                                        )
                                                                    }>
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

