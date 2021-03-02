import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import mall_pic from '../../../../public/static/img/amman.jpg'
import dubai_pic from '../../../../public/static/img/dubaimall.jpg';
import i18next from 'i18next'


class MallView extends Component {
    constructor(props) {
        super(props);
        this.state={
            lang:null
        }
    }
    componentDidMount(){
        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })
    }
    render() {
        const malls = this.props.malls_home.malls;
        return (
            <div className="ps-top-categories">
                <div className="ps-container">
                    <h3>{i18next.t('malls')}</h3>
                    <div className="row">
                        { this.props.malls_home.malls ? this.props.malls_home.malls.map((mall, index)=>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 col" key={index}>
                            <div className="ps-block--category">
                                <Link href={{   pathname: '/mall', query: {
                                                mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                : mall.name_en, mallid: mall.id
                                            }
                                        }} >
                                            <a className="ps-block__overlay"></a>
                                </Link>
                                <img src={`${mall.id == 1 ? dubai_pic : mall_pic}`} alt="chickchack" />
                                <p>{this.state.lang=='en'? mall.name_en : mall.name_ar}</p>
                            </div>
                        </div>
                        ) : <div>no data </div>}
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(state => state.collection)(MallView);

