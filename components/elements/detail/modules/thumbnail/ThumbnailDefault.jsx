import React, { Component } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import NextArrow from '../../../carousel/NextArrow';
import PrevArrow from '../../../carousel/PrevArrow';
import ThumbnailImage from '../elements/ThumbnailImage';
import { baseUrl } from '../../../../../repositories/Repository';
import { isStaticData } from '../../../../../utilities/app-settings';
class ThumbnailDefault extends Component {
    constructor(props) {
        super(props);
        console.log(props.product.images)
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
            photoIndex: 0,
            isOpen: false,
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

        const { product, } = this.props;
        const { photoIndex, isOpen } = this.state;
        const productImages = [];
        this.props.product.images.map(variant => {
            // if (isStaticData === false) {
            //     productImages.push(`${baseUrl}${variant.url}`);
            // } else {
            productImages.push(variant);
            // }
        });

        return (
            <div className="ps-product__thumbnail" data-vertical="true">
                <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            ref={slider => (this.slider1 = slider)}
                            asNavFor={this.state.variantCarousel}
                            className="ps-product__gallery ps-carousel inside">
                            {productImages.map((variant, index) => (
                                <div className="item" key={variant}>
                                    <a
                                        href="#"
                                        onClick={e =>
                                            this.handleOpenLightbox(e, index)
                                        }>
                                        <ThumbnailImage url={variant} />
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </figure>
                <Slider
                    asNavFor={this.state.galleryCarousel}
                    ref={slider => (this.slider2 = slider)}
                    swipeToSlide={true}
                    arrows={false}
                    slidesToShow={2}
                    vertical={true}
                    focusOnSelect={true}
                    {...variantSetting}
                    className="ps-product__variants">
                    {productImages.map(variant => (
                        <div className="item" key={variant}>
                            <ThumbnailImage url={variant} />
                        </div>
                    ))}
                </Slider>
                {isOpen && (
                    <Lightbox
                        mainSrc={productImages[photoIndex]}
                        nextSrc={
                            productImages[
                            (photoIndex + 1) % productImages.length
                            ]
                        }
                        prevSrc={
                            productImages[
                            (photoIndex + productImages.length - 1) %
                            productImages.length
                            ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + productImages.length - 1) %
                                    productImages.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + 1) % productImages.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default ThumbnailDefault;




// import React, { Component } from 'react';
// import Slider from 'react-slick';
// import Lightbox from 'react-image-lightbox';
// import NextArrow from '../../../carousel/NextArrow';
// import PrevArrow from '../../../carousel/PrevArrow';
// import ThumbnailImage from '../elements/ThumbnailImage';
// import { baseUrl } from '../../../../../repositories/Repository';
// import { isStaticData } from '../../../../../utilities/app-settings';
// class ThumbnailDefault extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             galleryCarousel: null,
//             variantCarousel: null,
//             photoIndex: 0,
//             isOpen: false,
//             omagesss: [
//                 // {
//                 //     id: 1,
//                 //     url: "https://res.cloudinary.com/travash/image/upload/v1489088001/ugjgeyg6irpjnlvdzdqo.jpg"
//                 // },
//                 {
//                     id: 2,
//                     url: "https://images-na.ssl-images-amazon.com/images/I/81sSyXuZBqL._AC_SL1500_.jpg"
//                 },
//                 {
//                     id: 3,
//                     url: "https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._AC_SL1500_.jpg"
//                 },
//                 {
//                     id: 4,
//                     url: "https://images-na.ssl-images-amazon.com/images/I/81xaMP9TqPL._AC_SL1500_.jpg"
//                 },
//             ]
//         };
//     }

//     handleOpenLightbox = (e, imageIndex) => {
//         e.preventDefault();
//         this.setState({ photoIndex: imageIndex, isOpen: true });
//     };

//     componentDidMount() {
//         this.setState({
//             galleryCarousel: this.slider1,
//             variantCarousel: this.slider2,
//         });
//     }

//     render() {
//         const gallerySetting = {
//             dots: false,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             nextArrow: <NextArrow />,
//             prevArrow: <PrevArrow />,
//         };

//         const variantSetting = {
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 4,
//                         dots: false,
//                         arrows: false,
//                         vertical: false,
//                         infinite: false,
//                     },
//                 },
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 4,
//                         dots: false,
//                         arrows: false,
//                         vertical: false,
//                         infinite: false,
//                     },
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 4,
//                         dots: false,
//                         arrows: false,
//                         vertical: false,
//                         infinite: false,
//                     },
//                 },
//             ],
//         };

//         const { product, } = this.props;
//         const { photoIndex, isOpen, omagesss } = this.state;
//         const productImages = [];
//         omagesss.map(variant => {
//             // if (isStaticData === false) {
//             //     productImages.push(`${baseUrl}${variant.url}`);
//             // } else {
//                 productImages.push(variant.url);
//             // }
//         });

//         return (
//             <div className="ps-product__thumbnail" data-vertical="true">
//                 <figure>
//                     <div className="ps-wrapper">
//                         <Slider
//                             {...gallerySetting}
//                             ref={slider => (this.slider1 = slider)}
//                             asNavFor={this.state.variantCarousel}
//                             className="ps-product__gallery ps-carousel inside">
//                             {omagesss.map((variant, index) => (
//                                 <div className="item" key={variant.id}>
//                                     <a
//                                         href="#"
//                                         onClick={e =>
//                                             this.handleOpenLightbox(e, index)
//                                         }>
//                                         <ThumbnailImage url={variant.url} />
//                                     </a>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </figure>
//                 <Slider
//                     asNavFor={this.state.galleryCarousel}
//                     ref={slider => (this.slider2 = slider)}
//                     swipeToSlide={true}
//                     arrows={false}
//                     slidesToShow={3}
//                     vertical={true}
//                     focusOnSelect={true}
//                     {...variantSetting}
//                     className="ps-product__variants">
//                     {omagesss.map(variant => (
//                         <div className="item" key={variant.id}>
//                             <ThumbnailImage url={variant.url} />
//                         </div>
//                     ))}
//                 </Slider>
//                 {isOpen && (
//                     <Lightbox
//                         mainSrc={productImages[photoIndex]}
//                         nextSrc={
//                             productImages[
//                             (photoIndex + 1) % productImages.length
//                             ]
//                         }
//                         prevSrc={
//                             productImages[
//                             (photoIndex + productImages.length - 1) %
//                             productImages.length
//                             ]
//                         }
//                         onCloseRequest={() => this.setState({ isOpen: false })}
//                         onMovePrevRequest={() =>
//                             this.setState({
//                                 photoIndex:
//                                     (photoIndex + productImages.length - 1) %
//                                     productImages.length,
//                             })
//                         }
//                         onMoveNextRequest={() =>
//                             this.setState({
//                                 photoIndex:
//                                     (photoIndex + 1) % productImages.length,
//                             })
//                         }
//                     />
//                 )}
//             </div>
//         );
//     }
// }

// export default ThumbnailDefault;
