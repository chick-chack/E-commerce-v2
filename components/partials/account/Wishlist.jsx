import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { removeWishlistItem } from '../../../store/wishlist/action';
import { add_to_cart } from '../../../store/cart/action';
import Link from 'next/link';
import { Rate } from 'antd';
import Router from 'next/router';
import ProductWishlist from '../../elements/products/ProductWishlist';
import i18next from 'i18next';
import { notification } from 'antd';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};

class Wishlist extends Component {
    constructor(props) {
        super(props);
    }

    handleAddItemToCart = (e, product) => {
        e.preventDefault();

        console.log("add cart in wishlist e:", e, "product:", product)
        console.log("product props", this.props.product)
        if (this.props.cart.cartlist) {
            if (this.props.cart.cartlist.length > 0) {
                let existItem = this.props.cart.cartlist.find(
                    item => item['productChild.id'] == product.productSelected.id
                )
                if (existItem) {
                    existItem.quantity ++;
                }
                else {
                    let index = this.props.product.singleProduct.productChildren_orginal.findIndex(
                        (item) => item.id == this.props.childern_ID
                    );
                    console.log("child id index ", index)
                    const newProduct = {
                        "productChild.colorCode": product.productSelected.colorCode,
                        "productChild.colorName_ar": product.productSelected.colorName_ar,
                        "productChild.colorName_en": product.productSelected.colorName_en,
                        "productChild.id": product.productSelected.id,
                        //"productChild.id":this.props.product.singleProduct.productChildren_orginal[index].productId,
                        "productChild.image":product.productSelected.image,
                        " productChild.isOffer": product.productSelected.isOffer,
                        "productChild.offerRatio": product.productSelected.offerRatio,
                        "productChild.price": product.productSelected.price,
                        "productChild.product.name_ar": product.product.name_ar,
                        "productChild.product.name_en": product.product.name_en,
                        " productChild.size": product.productSelected.size,
                        " productChildId":product.productSelected.id,
                        //" productChildId":this.props.product.singleProduct.productChildren_orginal[index].productId,
                        "quantity":1
                        // updatedAt: "2021-01-20T07:53:56.844Z"
                    }
                    this.props.cart.cartlist.push(newProduct)
                }
            }

        }
        this.props.dispatch(add_to_cart(product.productSelected.id, 1))
        this.props.dispatch(removeWishlistItem(product.product, product.productSelected));

        modalSuccess('success');
        Router.push('/account/shopping-cart')
    };

    handleRemoveWishListItem = (e, product) => {
        e.preventDefault();
        this.props.dispatch(removeWishlistItem(product.product, product.productSelected));
    };



    render() {
        const { wishlistItems } = this.props.wishlist;
        console.log("wishlist", this.props)
        return (
            <div className="ps-section--shopping ps-whishlist">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>
                        {i18next.t("wishlist")} </h1>
                    </div>
                    <div className="ps-section__content">
                        {wishlistItems && wishlistItems.length === 0 ? (
                            <div className="alert alert-danger" role="alert">
                               {i18next.t("emptywishlist")}
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table ps-table--whishlist">
                                    <thead>
                                        <tr>
                                        <th > {i18next.t("delete")}</th>
                                            <th>{i18next.t("product")}</th>
                                            <th>{i18next.t("price")}</th>
                                            {/* <th>Vendor</th> */}
                                            {/* <th > {i18next.t("delete")}</th> */}
                                            <th></th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlistItems.map((product, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <a
                                                        href="#"
                                                        onClick={e =>
                                                            this.handleRemoveWishListItem(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                        <i className="icon-cross"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <ProductWishlist
                                                        product={product.product}
                                                        product_selected={product.productSelected}
                                                        
                                                    />
                                                </td>
                                                <td className="price">
                                                    $
                                                    {product.productSelected.isOffer
                                                            ? (product.productSelected.price - ((product.productSelected.price * product.productSelected.offerRatio) / 100))
                                                            : (product.productSelected.price)}
                                                    {/* {product.productSelected.price} */}
                                                </td>
                                                {/* <td>{product.vendor}</td> */}
                                                <td>
                                                    <a
                                                        className="ps-btn"
                                                        href=""
                                                        onClick={e =>
                                                            this.handleAddItemToCart(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                       {i18next.t('addtocart')}
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
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
export default connect(mapStateToProps)(Wishlist);
