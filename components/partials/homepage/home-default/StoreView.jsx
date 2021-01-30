import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import StoreTopRate from '../../../elements/stores/StoreTopRate';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { getColletionBySlug_test } from '../../../../utilities/product-helper';
import i18next from 'i18next';


class StoreView extends Component {
    constructor(props) {
        super(props);
    }
    render() {

         const stores = this.props.malls_home['stores'];
        // console.log("ttttttttttttttttttttttttttttttttttttt", stores);
        return (
            <div>
                <div className="ps-deal-of-day">
                    <div className="ps-container">
                        <div className="ps-section__header">
                            <div className="ps-block--countdown-deal">
                                <div className="ps-block__left">
                                    <h3> {i18next.t('storeTopRate')} </h3>
                                </div>
                            </div>
                            <Link href={`/StoreTopRate`}> 
                                <a>{i18next.t('viewall')}</a>
                            </Link>
                        </div>
                        <div className="ps-section__content">
                            <Slider
                                {...carouselFullwidth}
                                className="ps-carousel outside">
                                {stores ? stores.map((item, index) => (
                                        <StoreTopRate
                                            store={item}
                                            key={index}
                                        />
                                        // <h2 key={index}>
                                        //     {item["trader.storeName"]}
                                        // </h2>

                                    )) : <h2>{i18next.t("nodatafund")} </h2>}
                            </Slider>
                        </div>
                    </div>
                </div>




            </div>

        )
    }

}


export default connect(state => state.collection)(StoreView);


