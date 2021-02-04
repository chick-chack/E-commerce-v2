import React, { Component } from 'react';

import Slider from 'react-slick';
import Link from 'next/link';
//import { appWithTranslation} from './../../../../i18next';

import i18next from 'i18next';
import groundimg from '../../../../public/static/img/joinus-bg.png';



class AboutAwards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };
        return (
            <div className="ps-about-awards" style={{padding:"50px 0" , background:"#ffffff", backgroundImage:'../../../../public/static/img/joinus-bg.png'}}>
                <div className="container">
                    <div className="ps-section__header">
                        <h4 style={{marginBottom:"50px"}}>{i18next.t('whoweare')}</h4>
                        {/* <h2> {i18next.t('chickchack')}</h2>   */}
                        <p>{i18next.t('aboutus_1')}
                    </p>
                    <br/>
                    <p>{i18next.t('aboutus_2')}</p>


                        {/* <p>
                           Hello I'm Razan, working in chick chack, I am just testing the template to be able add changes, leaders and influencers recognize Overstock
                            as one of the most trust worthy retail companies in
                            the U.S., ranking high for both customer and
                            employee satisfaction.
                        </p> */}
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselSetting} className="ps-carousel">
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/1.svg"
                                            alt="chickchack"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/2.svg"
                                            alt="chickchack"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/3.svg"
                                            alt="chickchack"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/4.svg"
                                            alt="chickchack"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img
                                            src="/static/img/awards/5.svg"
                                            alt="chickchack"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

//export default  appWithTranslation (AboutAwards) ;

export default AboutAwards ;
