import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl } from '../../../repositories/Repository';
const ProductWishlist = ({ product_selected, product }) => {
    console.log("cart product ", product_selected);

    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}?id=${product_selected.id}`}>
                    <a>
                        <LazyLoad>
                            {/* <img
                                src={
                                    isStaticData === false['productChild.id']
                                        ? `${baseUrl}${product.thumbnail.url}`
                                        : product.thumbnail.url
                                }
                                alt="chickchack"
                            /> */}
                             <img src={product_selected.image}    alt="product" />
                        </LazyLoad>
                    </a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${product.id}?id=${product_selected.id}`}>
                    <a className="ps-product__title">{ localStorage.getItem('lang')==="en" ? 
                        product.name_en : product.name_ar }</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductWishlist;
