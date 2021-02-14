import React from 'react';
import Link from 'next/link';
import i18next from 'i18next';

const ModuleProductDetailDescription = ({ product }) => (
    <div className="ps-product__desc">
        <p>
            {i18next.t('soldby')}:
            <Link href={`/store/${product.traderId}`}>
                <a>
                    <strong> {product.trader.storeName}</strong>
                </a>
            </Link>
        </p>
        <ul   className="ps-list--dot">
                             {localStorage.getItem('lang') === "en" ? 
                                     product.descriptionPoint_en.map( ( item, index)=>
                                     <li className="ps-product__title" key={index}>
                                        {  JSON.parse(item).value}
                                     </li>
                                     ) :
                                     product.descriptionPoint_ar.map( ( item, index)=>
                                     <li className="ps-product__title" key={index}>
                                        {  JSON.parse(item).value}
                                     </li>) }

                                        {/* <li>{product.mainCategory.name_en}</li> */}
            {/* <li >{product.subCategory.name_en}</li> */}
            {/* <li>{product.subSubCategory.name_en}</li> */}
            {/* <li>{product.descriptionPoint_en}</li> */}
            {/* <li>{product.subCategory.name_en}</li> */}
                            
                        </ul>

    </div>
);

export default ModuleProductDetailDescription;
