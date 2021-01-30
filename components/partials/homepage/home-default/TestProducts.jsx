import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
// import { testGetProductsSuccess} from  '../../../../store/collection/action';
//import CollectionRepository from '../../../../repositories/CollectionRepository';


class TestProducts extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
      
     //   const  testproducts=  this.props.dispatch(CollectionRepository.getProductsBystore(37));

        //console.log(testproducts.data)
   
         
        
      
    }


    render() {
       // const { testproducts} = this.props;
        //const products = getColletionBySlug(collections, collectionSlug);

        const { testproducts}=testGetProductsSuccess(37);
        console.log("test getb product", {testproducts});

        return (
            <div className="ps-deal-of-day">
               {/* <div className="ps-container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Deal of the day</h3>
                            </div>
                            <div className="ps-block__right">
                                <figure>
                                    <figcaption>End in:</figcaption>
                                    <CountDownSimple
                                        timeTillDate="12 31 2022, 6:00 am"
                                        timeFormat="MM DD YYYY, h:mm a"
                                    />
                                </figure>
                            </div>
                        </div>
                        <Link href="/shop">
                            <a>View all</a>
                        </Link>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselFullwidth}
                            className="ps-carousel outside">
                            {testproducts.data.map(product => (
                                <ProductDealOfDay
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </Slider>
                    </div>
                            </div>*/}
            </div>
        );
    }
}


export default connect(state => state.collection)(TestProducts);
