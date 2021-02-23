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
        return (
            <div>
                {
                    list_category_store && storeinfo ? list_category_store.map((product, index) => (
                        <div className="ps-deal-of-day" key={index}>
                            <div className="ps-container">
                                <div className="ps-section__header">
                                    <div className="ps-block--countdown-deal">
                                        <div className="ps-block__left">
                                            <h3>{localStorage.getItem("lang") === "en" ?
                                                product['subCategory.name_en'] : product['subCategory.name_ar']}</h3>
                                        </div>     
                                    </div>
                                    <Link
                                            href={{
                                            pathname: '/store/ProductsByCategory', query: { 
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

