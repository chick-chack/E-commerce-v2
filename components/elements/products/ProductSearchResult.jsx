

import React, { Component } from 'react';
import Link from 'next/link';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Rating from '../Rating';
import { formatCurrency } from '../../../utilities/product-helper';
import { isStaticData } from '../../../utilities/app-settings';
import Rater from 'react-rater';
import { baseUrl } from '../../../repositories/Repository';

class ProductResult extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, currency } = this.props;

        return (
            <div className="ps-product ps-product--wide ps-product--search-result">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a>
                            <img src={product.metaImage} alt={product.name_en} />
                        </a>
                    </Link>
                </div>

                <div className="ps-product__content">
                    <Link href="/shop">
                        <a className="ps-product__vendor">
                            {localStorage.getItem('lang') === "en" ?
                                product.name_en : product.name_ar}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <span className="rating_num">
                            <Rater rating={product.rate ? product.rate : 0} total={5} interactive={false} />
                                ({product.numberOfRates ? product.numberOfRates : 0})</span>
                    </div>
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


                    {/* 
                    <div className="ps-product__rating">
                        <Rating />
                        <span>{product.ratingCount}</span>
                    </div>
                    {product.is_sale === true ? (
                        <p className="ps-product__price sale">
                            {currency ? currency.symbol : '$'}
                            {formatCurrency(product.price)}
                            <del className="ml-1">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.sale_price)}
                            </del>
                        </p>
                    ) : (
                            <p className="ps-product__price">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.price)}
                            </p>
                        )} */}


                </div>



            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductResult);


// import React, { Component } from 'react';
// import Link from 'next/link';
// import { Rate } from 'antd';
// import { connect } from 'react-redux';
// import Rating from '../Rating';
// import { formatCurrency } from '../../../utilities/product-helper';
// import { isStaticData } from '../../../utilities/app-settings';
// import { baseUrl } from '../../../repositories/Repository';

// class ProductResult extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const { product, currency } = this.props;

//         return (
//             <div className="ps-product ps-product--wide ps-product--search-result">
//                 <div className="ps-product__thumbnail">
//                     <Link href="/product/[pid]" as={`/product/${product.id}`}>
//                         <a>
//                             <img src={isStaticData === true ? product.thumbnail.url : `${baseUrl}${product.thumbnail.url}`} alt="chickchack" />
//                         </a>
//                     </Link>
//                 </div>
//                 <div className="ps-product__content">
//                     <Link href="/product/[pid]" as={`/product/${product.id}`}>
//                         <a className="ps-product__title">{product.title}</a>
//                     </Link>
//                     <div className="ps-product__rating">
//                         <Rating />
//                         <span>{product.ratingCount}</span>
//                     </div>
//                     {product.is_sale === true ? (
//                         <p className="ps-product__price sale">
//                             {currency ? currency.symbol : '$'}
//                             {formatCurrency(product.price)}
//                             <del className="ml-1">
//                                 {currency ? currency.symbol : '$'}
//                                 {formatCurrency(product.sale_price)}
//                             </del>
//                         </p>
//                     ) : (
//                         <p className="ps-product__price">
//                             {currency ? currency.symbol : '$'}
//                             {formatCurrency(product.price)}
//                         </p>
//                     )}
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return state.setting;
// };
// export default connect(mapStateToProps)(ProductResult);
