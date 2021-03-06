import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import mall_pic from '../../../../public/static/img/mall.jpg'
import dubai_pic from '../../../../public/static/img/dubaimall.jpg'


class MallView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const malls = this.props.malls_home.malls;

        return (
            <div className="ps-top-categories">
                <div className="ps-container">
                    {/* <h2>List of Malls</h2> */}
                    <div className="row">
                        {this.props.malls_home.malls ? this.props.malls_home.malls.map((mall, index) => (
                            <div className="col-md-6 col-12 ">
                                <div className="ps-block--mall-view">
                                    <Link href={{
                                        pathname: '/mall', query: {
                                            mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                : mall.name_en, mallid: mall.id
                                        }
                                    }} >
                                        <a className="ps-block__overlay">
                                            {/* {localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                    : mall.name_en} */} </a>
                                    </Link>
                                    <img
                                        src={`${mall.id == 1 ? dubai_pic : mall_pic}`}
                                        alt="Snow" style={{ width: "100%", height: "370px" }} />
                                    <p style={{ fontSize: "24px" }}>     {localStorage.getItem("lang") === "ar" ? mall.name_ar
                                        : mall.name_en}</p>
                                </div>
                            </div>)) : <h2> no data</h2>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(state => state.collection)(MallView);

