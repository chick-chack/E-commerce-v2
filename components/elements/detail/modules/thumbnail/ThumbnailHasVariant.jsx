import React, { Component } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import NextArrow from '../../../carousel/NextArrow';
import PrevArrow from '../../../carousel/PrevArrow';
import ThumbnailImage from '../elements/ThumbnailImage';
import { baseUrl } from '../../../../../repositories/Repository';
import { isStaticData } from '../../../../../utilities/app-settings';
import SliderImage from 'react-zoom-slider';

class ThumbnailHasVariant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
            photoIndex: 0,
            isOpen: false,
            test: null
        };
    }

    handleOpenLightbox = (e, imageIndex) => {

        e.preventDefault();
        this.setState({ photoIndex: imageIndex, isOpen: true });
    };

    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const datatest = [
            {
                image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
                text: 'img1'
            },
            {
                image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
                text: 'img2'
            },
            {
                image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
                text: 'img3'
            },

        ];

        const test = [];
        this.props.product.images.length > 0 && this.props.product.images.map((item, index) => {
            let newpro = { 'image': item }
            test.push(newpro)
        })
        const gallerySetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };

        const variantSetting = {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
            ],
        };
        const { product } = this.props;
        const { photoIndex, isOpen } = this.state;
        const productImages = [];
        if (product.images.length > 0) {
            product.images.map(variant => {
                productImages.push(variant);
            });
        }

        return (
            <div className="ps-product__thumbnail" >
                {console.log(' this.props.product.images', test)}
                {
                    this.props.product.images.length > 0 &&
                    <SliderImage
                        data={test}
                        width="500px"
                        showDescription={false}
                        direction="right"
                    />

                }



            </div>
        );
    }
}

export default ThumbnailHasVariant;
