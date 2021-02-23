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
        // console.log(props)
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
            photoIndex: 0,
            isOpen: false,
            test:null
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
        // let test=[];
    //     this.props.product.images.length > 0 && this.props.product.images.map((item, index)=>{
    //       let newpro={'image':item}
    //       this.setState({
    //           test:{...test,newpro}
    //       })
    //     //   test.push(newpro)
    //   })
    }

    render() {
        {
            // console.log('len',  this.props.product.images.length)

        }
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

          const test=[];
          this.props.product.images.length > 0 && this.props.product.images.map((item, index)=>{
            let newpro={'image':item}
            test.push(newpro)
        })
        //   this.props.product.images.map((item, index)=>{
        //       let newpro={'image':item}
        //       test.push(newpro)
        //   })
        //   console.log('test', test)

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
        // console.log("imaaaaaaaaaaaaages",product.images )
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
    this.props.product.images.length>0 &&   
    <SliderImage 
      data={test} 
      width="500px" 
      showDescription={false} 
      direction="right" 
    //   o={console.log('me')}
    
    />}

    
{/* 
{isOpen && (console.log({ productImages }),
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
                )
                } */}

                {/* <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            ref={slider => (this.slider1 = slider)}
                            asNavFor={this.state.variantCarousel}
                            className="ps-product__gallery ps-carousel inside">
                            {product.images !== undefined && product.images.map((variant, index) => (
                                <div className="item" key={product.id}>
                                    <a
                                        href=""
                                        onClick={e =>
                                            this.handleOpenLightbox(e, index)
                                        }
                                    >
                                        <ThumbnailImage url={variant} />
                                    </a>
                                </div>
                            ))}
                            {product.images == undefined && product.image !== null &&
                                <div className="item" key={product.id}>
                                    <a
                                        href=""
                                        onClick={e =>
                                            this.handleOpenLightbox(e, index)
                                        }
                                    >
                                        <ThumbnailImage url={product.image} />
                                    </a>
                                </div>
                            }
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
                    {product.images !== undefined && product.images.map(variant => (
                        <div className="item" key={product.id}>
                            <ThumbnailImage url={variant} />
                        </div>
                    ))}
                    {product.image !== undefined && //product.images.map(variant => (
                        <div className="item" key={product.id}>
                            <ThumbnailImage url={product.image} />
                        </div>
                        // ))
                    }
                </Slider>
                {isOpen && (console.log({ productImages }),
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
                )
                }
                
                */}
            </div>
        );
    }
}

export default ThumbnailHasVariant;
