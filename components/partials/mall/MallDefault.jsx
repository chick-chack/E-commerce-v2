import React, { Component } from 'react';
import { connect } from 'react-redux';


import CountDownSimple from '../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../elements/products/ProductDealOfDay';
import ProductDealOfDay_edit from '../../elements/products/ProductItem';
import { carouselFullwidth } from '../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../utilities/product-helper';
import { getColletionBySlug_test } from '../../../utilities/product-helper';
import i18next from 'i18next';

class MallDefault extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        mall_id: null,
        mall_name:null,
        listView: true,
        pageSize: 8,
        sort_value: null,
        params: {
            _start: 1,
            _limit: 12,
        },
        _start: 1,
        _limit: 12,
        page: 1


    };


      
    componentDidMount(){
        this.setState({
            mall_id: this.props.mall_id,
            mall_name:this.props.mall_name
        })

    }

    render() {
        const { sections_product } = this.props;
        const products_test = getColletionBySlug_test(sections_product);
        return (
            <div>

                {
                    products_test ? products_test.map((product, index) => (
                        <div>
                            {product.data.length>0?
                            <div key={index} className="ps-deal-of-day">
                            <div className="ps-container">
                                <div className="ps-section__header">
                                    <div className="ps-block--countdown-deal">
                                        <div className="ps-block__left">

                                            <h3>{localStorage.getItem("lang") === "en" ?
                                                product.title_en : product.title_ar}</h3>
                                        </div>
                                    </div>
                                          <Link
                                        href={{
                                            pathname: '/mall/productssection', query: {
                                                 mallid: this.state.mall_id,
                                                 mallname:this.state.mall_name,
                                                SectionName:product.title},}
                                        } >
                                            <a>{i18next.t('viewall')}</a>
                                     
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

                    : <div> </div>}
                        </div>
                    )

                    ) : <h2>{i18next.t("nodatafund")}</h2>
                }

            </div>

        )
    }

}


export default connect(state => state.mall)(MallDefault);
