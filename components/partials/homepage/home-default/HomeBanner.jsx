import React, { Component } from 'react';

import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getItemBySlug } from '../../../../utilities/product-helper';
import Promotion from '../../../elements/media/Promotion';
import BannerItem from '../../../elements/media/BannerItem';
import mall from '../../../../public/static/img/mall.jpg';
import support from '../../../../public/static/img/support.jpg'
import dubai_pic from '../../../../public/static/img/dubaimall.jpg'
import promotion1_ from '../../../../public/static/img/promotion_1.jpeg'
import promotion2_ from '../../../../public/static/img/promotion_1.jpeg'


class HomeBanner extends Component {

    state = {
        lang: null
    };

    componentDidMount() {

        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })

    }


    render() {
        const { banners, promotions } = this.props;
        /* banners : [{
            id, created_At, created_by,name, slug,updated_at, updated_by,
            items:[{}]
        }] */
        /* promotions : [{
           id, created_At, created_by,name, slug,updated_at, updated_by,
           items:[{}]
       }] */
        const carouselSetting = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        const bannerData = getItemBySlug(banners, 'banner-home-fullwidth');
        const promotionData = getItemBySlug(promotions, 'home_fullwidth_promotions');
        console.log("promotion data", promotionData);

        let promotion1, promotion2;

        if (promotionData) {
            console.log("promotion data", promotionData);
            /* promotionData: [{
                id,slug,name,created_by, created_at,
                items:[{
                    id,link,name,slug,image
                }]
            }]*/
            promotion1 = getItemBySlug(promotionData.items, 'main_1');
            promotion2 = getItemBySlug(promotionData.items, 'main_2');
            console.log('------------------------------------------------------------------------------------------')
            console.log(promotion1)
            console.log(promotion2)
            console.log('------------------------------------------------------------------------------------------')
        }
        return (
            <div className="ps-home-banner ps-home-banner--1" >
                <div className="ps-container" >
                    <div className="ps-section__left" >
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel">

                            <BannerItem source={mall} key={1} text_1={'areyoutrader'} />
                            <BannerItem source={mall} key={2} text_1={'3dvirtual'} text_2={'3dvirtual'} />
                            <BannerItem source={support} key={3} text_1={'supportmanypayment'} />
                            <BannerItem source={mall} key={4} text_1={'easyship'} />

                        </Slider>

                    </div>
                    <div className="ps-section__right" style={{ marginTop: "30px" }} >
                        <Promotion
                            link="/"
                            // image={promotion1 ? promotion1.image : null}
                            image={promotion1 ? promotion1_ : promotion1_}
                        />
                        <Promotion
                            link="/"
                            image={promotion2 ? promotion2_ : promotion2_}
                        // image={promotion1 ? promotion1.image : null}
                        />
                    </div>

                    {/* {bannerData !== null ? (
                            <Slider
                                {...carouselSetting}
                                className="ps-carousel">
                                {bannerData.items.map(item => (
                                    <BannerItem source={item} key={item.id} />
                                ))}
                            </Slider>
                        ) : (
                            ''
                        )} */}

                    {/* <div className="ps-section__left">
                        {bannerData !== null ? (
                            <Slider
                                {...carouselSetting}
                                className="ps-carousel">
                                {bannerData.items.map(item => (
                                    <BannerItem source={item} key={item.id} />
                                ))}
                            </Slider>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className="ps-section__right">
                        <Promotion
                            link="/shop"
                            image={promotion1 ? promotion1.image : null}
                        />
                        <Promotion
                            link="/shop"
                            image={promotion2 ? promotion2.image : null}
                        />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default connect(state => state.media)(HomeBanner);
