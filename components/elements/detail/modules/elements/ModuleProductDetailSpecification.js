import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = () => (
    <div className="ps-product__specification">
        <Link href="/page/blank">
            <a className="report">Report Abuse</a>
        </Link>
        <p>
            {/* <strong>SKU:</strong> SF1133569600-1 */}
        </p>
        <p className="categories">
            <strong> Categories:</strong>
            <Link href="/shop">
                <a>{product.mainCategory.name_en}</a>
            </Link>
            <Link href="/shop">
                <a>{product.subCategory.name_en}</a>
            </Link>
            <Link href="/shop">
                <a>{product.subSubCategory.name_en}</a>
            </Link>
        </p>
        <p className="tags">
            <strong> Tags</strong>
            {product.tags.map(item => {
                return (
                    <Link href="#">
                        <a>{item}</a>
                    </Link>
                )
            })}

        </p>
    </div>
);

export default ModuleProductDetailSpecification;
