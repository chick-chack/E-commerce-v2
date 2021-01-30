import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import ProductDealOfDay_edit from '../../../elements/products/ProductItem';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { getColletionBySlug_test } from '../../../../utilities/product-helper';
import i18next from 'i18next';

class HomeDefaultDealOfDay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { collections, collectionsfortest, collectionSlug } = this.props;
        const products_test = getColletionBySlug_test(collectionsfortest);



        // return(
        //     <div className="">
        //         { products_test ? products_test.map ( test =>(
        //             <h2> {test.title}</h2> )) : <h2> no data</h2>
        //         }

        //     </div>
        // )
    return (
         <div>
   
                {

                     products_test ? products_test.map( ( product, index)=>(
                         <div className="ps-deal-of-day">
                         <div className="ps-container">
                             <div className="ps-section__header">
                                <div className="ps-block--countdown-deal">
                                    <div className="ps-block__left">
                                     
                                        <h3>{localStorage.getItem("lang")=== "en" ?
                                       product.title_en: product.title_ar  }</h3>
                                     </div>
                                 </div>
                         
                                 <Link
                                        href={{
                                            pathname: '/ProductsSection', query: {
                                                // mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                // : mall.name_en,
                                                SectionName:product.title},}
                                            
                                        } >
                                    <a>{i18next.t('viewall')} </a>
                                </Link> 
                         </div>
                     <div className="ps-section__content">
                                 <Slider
                                    {...carouselFullwidth}
                                   className="ps-carousel outside">
                                   {product.data.map((item, index) => (
                                        <ProductDealOfDay_edit
                                            product={item}
                                            // key={item.id}
                                            key={index}
                                        />
                                   
                                   ))}
                             </Slider>
                            </div>
                       </div>
                </div>


                     )): <h2>{i18next.t("nodatafund")}</h2>
                 }
              
             </div>
            
             )
    }

}

        //     products_test.map(products => (
        //         <div className="ps-deal-of-day">
        //             <div className="ps-container">
        //                 <div className="ps-section__header">
        //                     <div className="ps-block--countdown-deal">
        //                         <div className="ps-block__left">
        //                             <h3>{products.title}</h3>
        //                         </div>
        //                     </div>
        //                     <Link href={`/view_all/${products.title}`}>
        //                         <a>View all</a>
        //                     </Link>
        //                 </div>
        //                 <div className="ps-section__content">
        //                     <Slider
        //                         {...carouselFullwidth}
        //                         className="ps-carousel outside">
        //                         {products['products'].map(product => (
        //                             <ProductDealOfDay_edit
        //                                 product={product}
        //                                 key={product.title}
        //                             />
        //                         ))}
        //                     </Slider>
        //                 </div>
        //             </div>
        //         </div>
        //     ))
        // );
    //}
//}

export default connect(state => state.collection)(HomeDefaultDealOfDay);



/*

  {

        //             products_test.products_most_sale ? products_test.products_most_sale.rows.map( ( product, index)=>(
        //                 <div className="ps-deal-of-day">
        //                 <div className="ps-container">
        //                     <div className="ps-section__header">
        //                         <div className="ps-block--countdown-deal">
        //                             <div className="ps-block__left">
        //                                 <h3>{product.id}</h3>
        //                             </div>
        //                         </div>
        //                         {/* <Link href={`/view_all/${products.title}`}>
        //                             <a>View all</a>
        //                         </Link> 
        //                     </div>
        //                     {/* <div className="ps-section__content">
        //                         <Slider
        //                             {...carouselFullwidth}
        //                             className="ps-carousel outside">
        //                             {products['products'].map(product => (
        //                                 <ProductDealOfDay_edit
        //                                     product={product}
        //                                     key={product.title}
        //                                 />
        //                             ))}
        //                         </Slider>
        //                     </div> 
        //                 </div>
        //             </div>


        //             )): <h2> No product found</h2>
        //         }

        */
