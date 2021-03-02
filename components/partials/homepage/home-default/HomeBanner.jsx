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
import i18next from 'i18next';

class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null
        }
    }
    componentDidMount() {
        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })
    }
    render() {
        // const { banners, promotions } = this.props;
        const { homeBanners, homePromotions } = this.props;
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
        return (
            <div className="ps-home-banner ps-home-banner--1">
                <div className="ps-container">
                    <div className="ps-section__left">
                        {homeBanners !== null ? (
                            <Slider
                                {...carouselSetting}
                                className="ps-carousel">
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <img src='static/img/amman.jpg' alt="chickchack" />
                                        <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", flexFlow: "column" }}>
                                            <p style={{ color: "#ffffff", fontSize: "1.8rem", fontWeight: "600" }}> {i18next.t('areyoutrader')}</p>
                                            <Link href="https://join.chickchack.net/">
                                                <a className="ps-btn" style={{ padding: "10px 15px" }}>{i18next.t('joinus')}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {homeBanners.map((item, index) => (
                                    <BannerItem mall={item} key={index} />
                                ))}
                            </Slider>
                        ) : (
                                ''
                            )}
                    </div>


                    <div className="ps-section__right">
                        {homePromotions ?
                            homePromotions.map((item, index) =>
                                <Promotion key={index}
                                    link='https://google.com'
                                    // image= {item.image}
                                    image={promotion1_ ? promotion1_ : null}
                                />
                            )
                            :
                            <div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );

    }
}

export default connect(state => state.collection)(HomeBanner);
