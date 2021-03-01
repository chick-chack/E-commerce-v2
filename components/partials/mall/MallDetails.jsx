import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountDownSimple from '../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../elements/products/ProductDealOfDay';
import StoreTopRate from '../../elements/stores/StoreTopRate';
import { carouselFullwidth } from '../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../utilities/product-helper';
import { getColletionBySlug_test } from '../../../utilities/product-helper';
import i18next from 'i18next';


class MallDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const mall = this.props.mallInfo;
        return (
            <div className="ps-container" style={{ padding: "30px 0" }}>
                {
                    mall ?
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="mall-image">
                                    <img src={mall.image} alt="mall" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <section className="store_widgets">
                                    <aside className="widget widget_product widget_features_store">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p>{i18next.t('mallname')} </p>
                                                        </td>

                                                        <td>
                                                            <p>
                                                                {localStorage.getItem("lang") === "ar" ? mall.name_ar :
                                                                    mall.name_en}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p>   {i18next.t('floors')}

                                                            </p>
                                                        </td>

                                                        <td>
                                                            <p>
                                                                {mall.numberOfFloors} {i18next.t('floor')}

                                                            </p>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>


                                    </aside>
                                </section>

                            </div>
                        </div>
                        : <h1> no </h1>
                }

            </div>

        )
    }

}

export default connect(state => state.mall)(MallDetails);


