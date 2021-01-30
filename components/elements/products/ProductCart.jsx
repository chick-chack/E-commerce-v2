import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl } from '../../../repositories/Repository';
const ProductCart = ({ product }) => {
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link    
                
                // href="/product/[pid]"
                //  as={`/product/${product['productChild.productId']}?id=${product['productChild.id']}`}
                 href={{
                    pathname:`/product/${product['productChild.productId']}`,
                    query: 
                    {
                        id: product['productChild.id'],
                    }
                }}
                 
                 
                 >
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
                             <img src={product['productChild.image']}    alt="product" />
                        </LazyLoad>
                    </a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link    
                    //  href="/product/[pid]" as={`/product/${product['productChild.productId']}?id=${product['productChild.id']}`}
                    href={{
                        pathname:`/product/${product['productChild.productId']}`,
                        query: 
                        {
                            id: product['productChild.id'],
                        }
                    }}
                     
                     >
                    <a className="ps-product__title">{ localStorage.getItem('lang')==="en" ? 
                        product['productChild.product.name_en'] : product['productChild.product.name_ar'] }
                        </a>
                </Link>
            </div>
        </div>
    );
};


export default ProductCart;
