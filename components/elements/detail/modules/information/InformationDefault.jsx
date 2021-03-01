import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Rating from '../../../Rating';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/elements/ModuleProductDetailSharing';
import { addItem, add_to_cart, getcartlist } from '../../../../../store/cart/action';
import { addItemToCompare } from '../../../../../store/compare/action';
import { addItemToWishlist } from '../../../../../store/wishlist/action';
import Router from 'next/router';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/elements/ModuleProductDetailDescription';
import { imageSwatcher } from '~/public/static/data/product-detail.json';
import ImageFromApi from '~/components/elements/detail/modules/elements/ImageFromApi';
import { formatCurrency } from "../../../../../utilities/product-helper";
import i18next from 'i18next';
import Rater from 'react-rater';
import { notification } from 'antd';

const modalWarning = (type, item) => {
    notification[type]({
        message: 'Warning',
        description: "you can't add more, Only " + item + " left in stock",
        duration: 3,
    });
};

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};


class InformationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            final_QTY:1,
            selectedVariant: null,
            selectedSize: null,
            sizeItems: null,
            price: null,
            test: this.props.cart.cartlist

        };
    }
    handleAddItemToCart = e => {
        const { cartlist } = this.props.cart;
        this.setState({
            test: cartlist
        })

        if (this.props.auth.isLoggedIn && Boolean(this.props.auth.isLoggedIn) === true ){
        let existItem = this.props.cart.cartlist.find(
            (item) => item['productChild.id'] == this.props.product.singleProduct.productChildren[0].id)

        if (existItem) {
            existItem.quantity = this.state.quantity;
        }
        else {
            const newProduct = {
                "productChild.colorCode": null,
                "productChild.colorName_ar": null,
                "productChild.colorName_en": null,
                "productChild.id": this.props.product.singleProduct.productChildren[0].id,
                "productChild.productId":this.props.product.singleProduct.productChildren[0].productId,
                "productChild.image": this.props.product.singleProduct.productChildren[0].image,
                "productChild.isOffer": this.props.product.singleProduct.productChildren[0].isOffer,
                "productChild.offerRatio": this.props.product.singleProduct.productChildren[0].offerRatio,
                "productChild.price": this.props.product.singleProduct.productChildren[0].price,
                "productChild.product.name_ar": this.props.product.singleProduct.name_ar,
                "productChild.product.name_en": this.props.product.singleProduct.name_en,
                "productChild.size": this.props.product.singleProduct.productChildren[0].size,
                "productChildId": this.props.product.singleProduct.productChildren[0].id,
                
                "quantity": this.state.quantity
            }
            this.props.cart.cartlist.push(newProduct)
        } 
        let QTY;
        if(this.state.final_QTY===1 ){


             QTY= this.state.quantity
        }
        else{
             QTY= this.state.quantity - this.state.final_QTY;
        }    
        this.props.dispatch(add_to_cart(this.props.product.singleProduct.productChildren[0].id, QTY))
        modalSuccess('success');
        Router.push('/account/shopping-cart')
    }
    else{
        let existItem = this.props.cart.cartItems.find(
            (item) => item['productChild.id'] == this.props.product.singleProduct.productChildren[0].id)

        if (existItem) {
            existItem.quantity = this.state.quantity;
        }
        else {
            const newProduct = {
                "productChild.colorCode": null,
                "productChild.colorName_ar": null,
                "productChild.colorName_en": null,
                "productChild.id": this.props.product.singleProduct.productChildren[0].id,
                "productChild.productId":this.props.product.singleProduct.productChildren[0].productId,
                "productChild.image": this.props.product.singleProduct.productChildren[0].image,
                "productChild.isOffer": this.props.product.singleProduct.productChildren[0].isOffer,
                "productChild.offerRatio": this.props.product.singleProduct.productChildren[0].offerRatio,
                "productChild.price": this.props.product.singleProduct.productChildren[0].price,
                "productChild.product.name_ar": this.props.product.singleProduct.name_ar,
                "productChild.product.name_en": this.props.product.singleProduct.name_en,
                "productChild.size": this.props.product.singleProduct.productChildren[0].size,
                "productChildId": this.props.product.singleProduct.productChildren[0].id,
                "quantity": this.state.quantity
            }
            this.props.cart.cartItems.push(newProduct)
        } 
        let QTY;
        if(this.state.final_QTY===1 ){

             QTY= this.state.quantity-1
        }
        else{
             QTY= this.state.quantity - this.state.final_QTY;
        } 
        modalSuccess('success');
        Router.push('/account/shopping-cart')
    }
    };
    handleAddItemToCompare = e => {
        e.preventDefault();    
        console.log("nn",this.props.product.singleProduct)    
            let childProduct = this.props.product.singleProduct.productChildren_orginal.find(
                (item) => item.colorCode == null);
            this.props.dispatch(addItemToCompare(this.props.product.singleProduct,childProduct ));   
            Router.push('/account/compare')
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();
        console.log("nn",this.props.product.singleProduct)
        let childProduct = this.props.product.singleProduct.productChildren_orginal.find(
            (item) => item.colorCode == null);
        this.props.dispatch(addItemToWishlist(this.props.product.singleProduct,childProduct ));
        Router.push('/account/wishlist')
    };
    handleIncreaseItemQty = e => {
        e.preventDefault();
            let test = this.props.product.singleProduct.productChildren_orginal.find(
                (item) => item.id == this.props.product.singleProduct.productChildren[0].id);
             if(test){
                if (test.quantity > this.state.quantity) {
                    this.setState({ quantity: this.state.quantity + 1 });
                } else {
                    modalWarning('warning', this.state.quantity);
                }
             }     
    };

    handleDecreaseItemQty = e => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    handleSelectColor(colorId) {
        const { product } = this.props;
        if (product && product.productChildren.length > 0) {
            const selectedVariant = product.productChildren.find(
                item => item.id === colorId
            );
            if (selectedVariant) {
                const sizeItems = selectedVariant.sizes;
                this.setState({ sizeItems: sizeItems });
            }
            this.setState({ selectedVariant: selectedVariant });
        }
    }
    handleSelectSize(sizeId) {
        const { sizeItems } = this.state;
        if (sizeItems && sizeItems) {
            const selectedSizeItem = sizeItems.find(item => item.id === sizeId);
            if (selectedSizeItem) {
                this.setState({ selectedSize: selectedSizeItem });
            }
        }
    }
    componentDidMount() {
        const { product } = this.props;
        console.log('parent', this.props)
        this.props.dispatch(getcartlist());
        if (product && product.singleProduct.productChildren.length > 0) {
            this.setState({ selectedVariant: product.singleProduct.productChildren[0] });
        }

        if (this.props.auth.isLoggedIn && Boolean(this.props.auth.isLoggedIn) === true ){
        let existItem = this.props.cart.cartlist.find(
            (item) => item['productChild.id'] == this.props.product.singleProduct.productChildren[0].id)
        if (existItem) {
            this.setState({
                quantity: existItem.quantity,
                final_QTY:existItem.quantity
            })
        }
    }
        else{
            let existItem = this.props.cart.cartItems.find(
                (item) => item['productChild.id'] == this.props.product.singleProduct.productChildren[0].id)
    
            if (existItem) {
                this.setState({
                    quantity: existItem.quantity,
                    final_QTY:existItem.quantity
                })
    
            }
        }
    }
    render() {
        const { singleProduct } = this.props.product;
        const { cartlist } = this.props.cart;
        const { selectedVariant, selectedSize, sizeItems } = this.state;
        const { currency } = this.props.setting;
        let variants, sizeSelectionArea, priceArea, ModuleProductDetailSpecification;
        if (selectedVariant !== null) {
            if (selectedVariant.is_sale) {
                priceArea = (
                    <h4 className="ps-product__price sale">
                        <del className="mr-2">
                            {currency ? currency.symbol : '$'}
                            {selectedVariant.sale_price}
                        </del>
                        {currency ? currency.symbol : '$'}
                        {selectedVariant.price}
                       
                    </h4>
                );
            } else {
                priceArea = (
                    <h4 className="ps-selectedVariant__price">
                        {selectedVariant.isOffer === true ? (
                            <p className="ps-product__price sale" style={{ display: "flex" }}>
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(selectedVariant.price - ((selectedVariant.price * selectedVariant.offerRatio) / 100))}
                                <del className="ml-2">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(selectedVariant.price)}
                                </del>
                                <small>{selectedVariant.offerRatio}% off</small>
                            </p>
                        ) : (
                                <p className="ps-product__price">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(selectedVariant.price)}
                                </p>
                            )}
                             <p className="p_weight">
                                g {selectedVariant.weight}
                            </p>
                    </h4>
                );
            }
        }
        if (singleProduct) {
            ModuleProductDetailSpecification = (
                <div className="ps-product__specification">
                    <Link href="/page/blank">
                        <a className="report">{i18next.t('report')}</a>
                    </Link>
                    {localStorage.getItem('lang') === 'en'
                        ?
                        <p className="categories">
                            <strong> {i18next.t('categories')}:</strong>
                            <Link href="#">
                                <a>{singleProduct.mainCategory.name_en}</a>
                            </Link>
                            <Link href="#">
                                <a>{singleProduct.subCategory.name_en}</a>
                            </Link>
                            <Link href="#">
                                <a>{singleProduct.subSubCategory.name_en}</a>
                            </Link>
                        </p>
                        : <p className="categories">
                            <strong> {i18next.t('categories')}:</strong>
                            <Link href="#">
                                <a>{singleProduct.mainCategory.name_ar}</a>
                            </Link>
                            <Link href="#">
                                <a>{singleProduct.subCategory.name_ar}</a>
                            </Link>
                            <Link href="#">
                                <a>{singleProduct.subSubCategory.name_ar}</a>
                            </Link>
                        </p>
                    }
                    <p className="tags">
                        <strong> {i18next.t('tags')}</strong>
                        {singleProduct.tags.map(item => {
                            return (
                                <Link href="/shop">
                                    <a>{item}</a>
                                </Link>
                            )
                        })}

                    </p>
                </div>
            )
            if (singleProduct.productChildren.length > 0) {
                let colorSelectionArea = singleProduct.productChildren.map(item => {
                    return (
                        <div
                            className={`ps-variant ps-variant--image ${selectedVariant &&
                                selectedVariant.id === item.id
                                ? 'active'
                                : ''
                                }`}
                            key={item.id}
                            onClick={e => this.handleSelectColor(item.id)}>
                            <span className="ps-variant__tooltip">
                                {item.name}
                            </span>
                            {item.thumbnail !== null ? (
                                <ImageFromApi
                                    url={item.image}
                                />
                            ) : (
                                    ''
                                )}
                        </div>
                    );
                });
                if (sizeItems !== null) {
                    sizeSelectionArea = sizeItems.map(item => {
                        return (
                            <div
                                className={`ps-variant ps-variant--size ${selectedSize && selectedSize.id === item.id
                                    ? 'active'
                                    : ''
                                    }`}
                                key={item.id}
                                onClick={e => this.handleSelectSize(item.id)}>
                                <span className="ps-variant__tooltip">
                                    {item.name}
                                </span>
                                <span className="ps-variant__size">
                                    {item.character}
                                </span>
                            </div>
                        );
                    });
                }
                variants = (
                    <div className="ps-product__variations">
                        <figure>
                            <figcaption>
                                Color:
                                <strong>
                                    {selectedVariant !== null
                                        ? selectedVariant.name
                                        : 'Choose an option'}
                                </strong>
                            </figcaption>
                            {colorSelectionArea}
                        </figure>
                        {selectedVariant !== null}
                        <figure>
                            <figcaption>
                                Size:
                                <strong className="pl-1">
                                    {selectedSize !== null
                                        ? selectedSize.name
                                        : 'Choose an option'}
                                </strong>
                            </figcaption>
                            {sizeSelectionArea}
                        </figure>
                    </div>
                );

            } else {
                if (singleProduct.is_sale) {
                    priceArea = (
                        <h4 className="ps-product__price sale">
                            <del className="mr-2">
                                {currency ? currency.symbol : '$'}
                                {singleProduct.sale_price}
                            </del>
                            {currency ? currency.symbol : '$'}
                            {singleProduct.price}
                        </h4>
                    );
                } else {
                    priceArea = (
                        <h4 className="ps-product__price">
                            {singleProduct.isOffer === true ? (
                                <p className="ps-product__price sale" style={{ display: "flex" }}>
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(singleProduct.price - ((singleProduct.price * singleProduct.offerRatio) / 100))}
                                    <del className="ml-2">
                                        {currency ? currency.symbol : '$'}
                                        {formatCurrency(singleProduct.price)}
                                    </del>
                                    <small>{singleProduct.offerRatio}% off</small>

                                </p>
                            ) : (
                                    <p className="ps-product__price">
                                        {currency ? currency.symbol : '$'}
                                        {formatCurrency(singleProduct.price)}
                                    </p>
                                )}
                                 <p className="p_weight">
                                g {singleProduct.weight}
                            </p>

                        </h4>
                    );
                }
            }
        }

        return (

            <div className="ps-product__info">
                <h1>  {localStorage.getItem('lang') === "en" ?
                    singleProduct.name_en
                    : singleProduct.name_ar}</h1>
                <div className="ps-product__meta">
                    <p>
                        {i18next.t('store')}:
                            <Link href={`/store/${singleProduct.traderId}`}>
                            <a className="ml-2 text-capitalize">
                                {singleProduct.trader.storeName}
                            </a>
                        </Link>
                    </p>
                    <p>
                        {i18next.t('mall')} :
                            <Link href={localStorage.getItem('lang') === 'en'
                            ? `/mall?mallname=${singleProduct.trader.mall.name_en}&mallid=${singleProduct.trader.mall.id}`
                            : `/mall?mallname=${singleProduct.trader.mall.name_ar}&mallid=${singleProduct.trader.mall.id}`
                        }>
                            <a className="ml-2 text-capitalize">
                                {localStorage.getItem('lang') === "en" ?
                                    singleProduct.trader.mall.name_en
                                    : singleProduct.trader.mall.name_ar}

                            </a>
                        </Link>
                    </p>
                    <div className="ps-product__rating">
                        <span className="rating_num">
                            <Rater rating={singleProduct.rate ? singleProduct.rate : 0} total={5} interactive={false} />
                            ({singleProduct.numberOfRates ? singleProduct.numberOfRates : 0})</span>
                    </div>
                </div>
                {priceArea}
                <ModuleProductDetailDescription product={singleProduct} />
                {singleProduct.quantity == 1 && <figcaption>
                    <strong className="pl-1"> Only 1 left in stock - order soon.</strong>
                </figcaption>}
                {singleProduct.quantity == 0 && <figcaption>
                    <strong className="pl-1"> Out of stock</strong>
                </figcaption>}
                <div className="ps-product__shopping">
                    <figure>
                        <figcaption>{i18next.t('quantity')}</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={this.handleIncreaseItemQty.bind(this)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={this.handleDecreaseItemQty.bind(this)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={this.state.quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn ps-btn--black"
                        href="#"
                        onClick={this.handleAddItemToCart.bind(this)}>
                        {i18next.t('addtocart')}
                    </a>
                    <div className="ps-product__actions">
                        <a
                            href="/account/wishlist"
                            onClick={this.handleAddItemToWishlist.bind(this)}>
                            <i className="icon-heart"></i>
                        </a>
                        <a
                            href="/account/compare"
                            onClick={this.handleAddItemToCompare.bind(this)}>
                            <i className="icon-chart-bars"></i>
                        </a>
                    </div>
                </div>
                {ModuleProductDetailSpecification}
                <ModuleProductDetailSharing />

            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(InformationDefault);
