import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';




class MallView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        //const { allMalls } = this.props;
        //const malls=allMalls;
        //console.log("fffffffffffffffff", malls);

        //console.log("oooooooooooooooooooooooo", this.props);
        //  const malllist= this.props.malls_home.data;
        ///  const yarab=malllist[0];
        const malls = this.props.malls_home.malls;
        //  console.log("oooooooooooooooooooooooo", malls);



        // console.log("product deal of the day", allMalls);
        return (
            <div className="ps-deal-of-day">
                <div className="ps-container">
                    <div className="ps-section__header" style={{ marginTop: "10px", justifyContent: "center" }}>
                        <div className="ps-block--countdown-deal">
                            <div className="text-center">
                                <h3>List of the malls</h3>
                            </div>
                        </div>
                    </div>

                    <div className="ps-section__content">


                        <div className="malls_view">
                            {
                                this.props.malls_home.malls ? this.props.malls_home.malls.map((mall, index) => (
                                    <div className="mall_div" key={index} >
                                        <div className="mall_link" style={{ marginBottom: "20px" }}>
                                            <Link
                                                href={{
                                                    pathname: '/mall', query: {
                                                        mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                            : mall.name_en, mallid: mall.id
                                                    }
                                                }} >
                                                {localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                    : mall.name_en}
                                            </Link>
                                        </div>
                                        <div className="mall_img">
                                            <img src={mall.logo} alt="Snow" style={{ width: "100%" }} />
                                        </div>
                                    </div>

                                )
                                ) : <h2> no data</h2>
                            }
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(MallView);
