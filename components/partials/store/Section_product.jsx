import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay_edit from '../../elements/products/ProductItem';
import { carouselFullwidth } from '../../../utilities/carousel-helpers';
import i18next from 'i18next';

class StoreDefault extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { sections_product_store,storeinfo , list_category_store} = this.props;
        // console.log(this.props.sections_product_store)
        // const products_test = getCo;
        console.log("product categories ",sections_product_store)
        console.log("product categories ",this.props)
        // console.log(products_test)
        return (
            <div>
                {
                    list_category_store && storeinfo ? list_category_store.map(product => (
                        <div className="ps-deal-of-day">
                            <div className="ps-container">
                                <div className="ps-section__header">
                                    <div className="ps-block--countdown-deal">
                                        <div className="ps-block__left">
                                            <h3>{localStorage.getItem("lang") === "en" ?
                                                product['subCategory.name_en'] : product['subCategory.name_ar']}</h3>
                                        </div>     
                                    </div>
                                    <Link
                                        // href={{
                                        //     pathname: '/store/ProductsCategory', query: {
                                        //         // mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                                        //         // : mall.name_en,
                                        //         categoryName: product.title_en},}
                                            
                                        // } >

                                            href={{
                                            pathname: '/store/ProductsByCategory', query: {
                                                // mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                 
                                                 mallid: storeinfo['mall.id'],
                                                  mallname:storeinfo['mall.name_en'],
                                                SectionId:product.id},}  
                                        }
                                        >
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
                                                key={index}
                                            />
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    )) :
                        <h2>No Data   </h2>
                }
            </div>
        )
    }
}
export default connect(state => state.store)(StoreDefault);




// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Link from 'next/link';
// import Slider from 'react-slick';
// import ProductDealOfDay_edit from '../../elements/products/ProductItem';
// import { carouselFullwidth } from '../../../utilities/carousel-helpers';
// import i18next from 'i18next';

// class StoreDefault extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const { sections_product } = this.props;
//         const products_test = getCo;
//         console.log(this.props)
//         console.log(products_test)
//         return (
//             <div>
//                 {
//                     products_test ? products_test.map((product, index) => (
//                         <div className="ps-deal-of-day">
//                             <div className="ps-container">
//                                 <div className="ps-section__header">
//                                     <div className="ps-block--countdown-deal">
//                                         <div className="ps-block__left">

//                                             <h3>{localStorage.getItem("lang") === "en" ?
//                                                 product.title_en : product.title_ar}</h3>
//                                         </div>
//                                     </div>
//                                     <Link href={`/view_all/${product.title}`}>
//                                         <a>{i18next.t('viewall')} </a>
//                                     </Link>
//                                 </div>
//                                 <div className="ps-section__content">
//                                     <Slider
//                                         {...carouselFullwidth}
//                                         className="ps-carousel outside">
//                                         {product.data.map((item, index) => (
//                                             <ProductDealOfDay_edit
//                                                 product={item}
//                                                 // key={item.id}
//                                                 key={index}
//                                             />

//                                         ))}
//                                     </Slider>
//                                 </div>
//                             </div>
//                         </div>
//                     )) : <h2>No Data   </h2>
//                 }
//             </div>
//         )
//     }
// }
// export default connect(state => state.store)(StoreDefault);
