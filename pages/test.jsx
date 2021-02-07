import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
// import Rating from '../../../Rating';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/elements/ModuleProductDetailSharing';
import { addItem, add_to_cart } from '../store/cart/action';
import { addItemToCompare } from '../store/compare/action';
import { addItemToWishlist } from '../store/wishlist/action';
// import ModuleProductDetailSpecification from '~/components/elements/detail/modules/elements/ModuleProductDetailSpecification';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/elements/ModuleProductDetailDescription';
import { imageSwatcher } from '~/public/static/data/product-detail.json';
import ImageFromApi from '~/components/elements/detail/modules/elements/ImageFromApi';

class InformationDefault extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            quantity: 1,
            selectedVariant: null,
            selectedSize: null,
            sizeItems: null,
            price: null,
            test: this.props.car
        };
    }

    handleAddItemToCart = e => {
        // e.preventDefault();
        const { cartlist } = this.props;

        this.setState({
            test: cartlist
        })


        let existItem = this.props.cartlist.find(
            (item) => item.id === this.props.product.productChildren[0].id)
        console.log("leeeeeeeeeeeeko", existItem);

        if (existItem) {
            existItem.quantity = this.state.quantity
        }



        console.log("-------------------------------", this.props.product.productChildren[0].id)
        //     console.log("# color id");
        //     console.log("# size id");
        //     console.log("# state", this.state);
        //     const { product } = this.props;
        //     const productSelected= product.productChildren[0];
        //     console.log("# product selected ", productSelected);
        //     let tempProduct = productSelected;
        //     console.log("temp", tempProduct)
        //     tempProduct.quantity = this.state.quantity;
        //     //this.props.dispatch(addItem(productSelected));
        // this.props.dispatch( addItem( product, productSelected ))
        this.props.dispatch(add_to_cart(this.props.product.productChildren[0].id, this.state.quantity))

    };


    handleAddItemToCompare = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();

        const { product } = this.props;
        const productSelected = product.productChildren[0];

        this.props.dispatch(addItemToWishlist(product, productSelected));
    };

    handleIncreaseItemQty = e => {
        e.preventDefault();
        this.setState({ quantity: this.state.quantity + 1 });
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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", this.props)
        if (product && product.singleProduct.productChildren.length > 0) {
            this.setState({ selectedVariant: product.singleProduct.productChildren[0] });
        }
    }

    render() {


        const { product } = this.props;
        const { selectedVariant, selectedSize, sizeItems } = this.state;
        // let variants, sizeSelectionArea, priceArea, ModuleProductDetailSpecification;
        // if (selectedVariant !== null) {
        //     if (selectedVariant.is_sale) {
        //         priceArea = (
        //             <h4 className="ps-product__price sale">
        //                 <del className="mr-2">
        //                     {currency ? currency.symbol : '$'}
        //                     {selectedVariant.sale_price}
        //                 </del>
        //                 {currency ? currency.symbol : '$'}
        //                 {selectedVariant.price}
        //             </h4>
        //         );
        //     } else {
        //         priceArea = (
        //             <h4 className="ps-selectedVariant__price">
        //                 {currency ? currency.symbol : '$'}
        //                 {selectedVariant.price}
        //             </h4>
        //         );
        //     }
        // }

        // if (product) {
        //     ModuleProductDetailSpecification = (
        //         <div className="ps-product__specification">
        //             <Link href="/page/blank">
        //                 <a className="report">Report Abuse</a>
        //             </Link>

        //             {/* <p> <strong>SKU:</strong> SF1133569600-1 </p> */}
        //             <p className="categories">
        //                 <strong> Categories:</strong>
        //                 <Link href="/shop">
        //                     <a>{product.mainCategory.name_en}</a>
        //                 </Link>
        //                 <Link href="/shop">
        //                     <a>{product.subCategory.name_en}</a>
        //                 </Link>
        //                 <Link href="/shop">
        //                     <a>{product.subSubCategory.name_en}</a>
        //                 </Link>
        //             </p>
        //             <p className="tags">
        //                 <strong> Tags</strong>
        //                 {product.tags.map(item => {
        //                     return (
        //                         <Link href="/shop">
        //                             <a>{item}</a>
        //                         </Link>
        //                     )
        //                 })}

        //             </p>
        //         </div>
        //     )
        //     if (product.productChildren.length > 0) {
        //         let colorSelectionArea = product.productChildren.map(item => {
        //             return (
        //                 <div
        //                     className={`ps-variant ps-variant--image ${selectedVariant &&
        //                         selectedVariant.id === item.id
        //                         ? 'active'
        //                         : ''
        //                         }`}
        //                     key={item.id}
        //                     onClick={e => this.handleSelectColor(item.id)}>
        //                     <span className="ps-variant__tooltip">
        //                         {item.name}
        //                     </span>
        //                     {item.thumbnail !== null ? (
        //                         <ImageFromApi
        //                             url={item.image}
        //                         // alt={item.thumbnail.name}
        //                         />
        //                     ) : (
        //                             ''
        //                         )}
        //                 </div>
        //             );
        //         });
        //         if (sizeItems !== null) {
        //             sizeSelectionArea = sizeItems.map(item => {
        //                 return (
        //                     <div
        //                         className={`ps-variant ps-variant--size ${selectedSize && selectedSize.id === item.id
        //                             ? 'active'
        //                             : ''
        //                             }`}
        //                         key={item.id}
        //                         onClick={e => this.handleSelectSize(item.id)}>
        //                         <span className="ps-variant__tooltip">
        //                             {item.name}
        //                         </span>
        //                         <span className="ps-variant__size">
        //                             {item.character}
        //                         </span>
        //                     </div>
        //                 );
        //             });
        //         }
        //         variants = (
        //             <div className="ps-product__variations">
        //                 <figure>
        //                     <figcaption>
        //                         Color:
        //                         <strong>
        //                             {selectedVariant !== null
        //                                 ? selectedVariant.name
        //                                 : 'Choose an option'}
        //                         </strong>
        //                     </figcaption>
        //                     {colorSelectionArea}
        //                 </figure>
        //                 {selectedVariant !== null}
        //                 <figure>
        //                     <figcaption>
        //                         Size:
        //                         <strong className="pl-1">
        //                             {selectedSize !== null
        //                                 ? selectedSize.name
        //                                 : 'Choose an option'}
        //                         </strong>
        //                     </figcaption>
        //                     {sizeSelectionArea}
        //                 </figure>
        //             </div>
        //         );

        //     } else {
        //         if (product.is_sale) {
        //             priceArea = (
        //                 <h4 className="ps-product__price sale">
        //                     <del className="mr-2">
        //                         {currency ? currency.symbol : '$'}
        //                         {product.sale_price}
        //                     </del>
        //                     {currency ? currency.symbol : '$'}
        //                     {product.price}
        //                 </h4>
        //             );
        //         } else {
        //             priceArea = (
        //                 <h4 className="ps-product__price">
        //                     {currency ? currency.symbol : '$'}
        //                     {product.price}
        //                 </h4>
        //             );
        //         }
        //     }
        // }

        return (
            <div> hellllo</div>
            // <div className="ps-product__info">
            //     <h1>{product.name_en}</h1>
            //     <div className="ps-product__meta">
            //         <p>
            //             Store:
            //                 <Link href="/shop">
            //                 <a className="ml-2 text-capitalize">
            //                     {product.trader.storeName}
            //                 </a>
            //             </Link>
            //         </p>
            //         <p>
            //             Mall:
            //                 <Link href="/shop">
            //                 <a className="ml-2 text-capitalize">
            //                     {product.trader.mall.name_en}
            //                 </a>
            //             </Link>
            //         </p>
            //         <div className="ps-product__rating">
            //             <Rating />
            //             <span>{product.numberOfRates}</span>
            //         </div>
            //     </div>
            //     {priceArea}
            //     <ModuleProductDetailDescription product={product} />
            //     {/* {variants} */}
            //     {product.quantity == 1 && <figcaption>
            //         <strong className="pl-1"> Only 1 left in stock - order soon.</strong>
            //     </figcaption>}
            //     {product.quantity == 0 && <figcaption>
            //         <strong className="pl-1"> Out of stock</strong>
            //     </figcaption>}
            //     <div className="ps-product__shopping">
            //         <figure>
            //             <figcaption>Quantity</figcaption>
            //             <div className="form-group--number">
            //                 <button
            //                     className="up"
            //                     onClick={this.handleIncreaseItemQty.bind(this)}>
            //                     <i className="fa fa-plus"></i>
            //                 </button>
            //                 <button
            //                     className="down"
            //                     onClick={this.handleDecreaseItemQty.bind(this)}>
            //                     <i className="fa fa-minus"></i>
            //                 </button>
            //                 <input
            //                     className="form-control"
            //                     type="text"
            //                     placeholder={this.state.quantity}
            //                     disabled
            //                 />
            //             </div>
            //         </figure>
            //         <a
            //             className="ps-btn ps-btn--black"
            //             href="#"
            //             onClick={this.handleAddItemToCart.bind(this)}>
            //             Add to cart
            //         </a>
            //         <a
            //             className="ps-btn"
            //             href="#"
            //             onClick={this.handleAddItemToCart.bind(this)}>
            //             Buy Now
            //         </a>
            //         <div className="ps-product__actions">
            //             <a
            //                 href="#"
            //                 onClick={this.handleAddItemToWishlist.bind(this)}>
            //                 <i className="icon-heart"></i>
            //             </a>
            //             <a
            //                 href="#"
            //                 onClick={this.handleAddItemToCompare.bind(this)}>
            //                 <i className="icon-chart-bars"></i>
            //             </a>
            //         </div>
            //     </div>
            //     {ModuleProductDetailSpecification}
            //     <ModuleProductDetailSharing />
            //     <div className="ps-product__actions-mobile">
            //         <a
            //             className="ps-btn ps-btn--black"
            //             href="#"
            //             onClick={this.handleAddItemToCart.bind(this)}>
            //             Add to cart
            //         </a>
            //         <a
            //             className="ps-btn"
            //             href="#"
            //             onClick={this.handleAddItemToCart.bind(this)}>
            //             Buy Now
            //         </a>
            //     </div>
            // </div>




        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(InformationDefault);
