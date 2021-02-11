import React from 'react';
import Link from 'next/link';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newsletter from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import OurTeam from '../../components/partials/page/about-us/OurTeam';
import AboutAwards from '../../components/partials/page/about-us/AboutAwards';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BannerItem from '../../components/elements/media/BannerItem';
import Promotion from '../../components/elements/media/Promotion';
import NextArrow from '../../components/elements/carousel/NextArrow';
import PrevArrow from '../../components/elements/carousel/PrevArrow';
import mall from '../../public/static/img/mall.jpg';
import ReactPlayer from 'react-player';
// import chickchackvideo from '../../public/static/video/chickchack.mp4';
import Slider from 'react-slick';
import i18next from 'i18next';


const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'About Us',
        },
    ];
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
     
             <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            
            <div className="ps-page--single">
                {/* <img src="/static/img/mall.jpg" alt="" /> */}
                   {/* <ReactPlayer url="https://chickchack.s3.eu-west-2.amazonaws.com/landing-assets/1604397282182chickchack.mp4"  type="video/mp4"   className="react-player" style={{height:"100%"}}/> */}
                {/* <BreadCrumb breacrumb={breadCrumb} /> */}
                {/* <OurTeam /> */}
                <AboutAwards />
            </div>
    
            <div>
            {/* <Newsletter layout="container" /> */}
            <FooterDefault />
        </div>
            </div>


       


          
         
    );
};
export default AboutUsPage;
