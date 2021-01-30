import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class HomeDefaultDealOfDay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { collections, collectionSlug } = this.props;

        const products = getColletionBySlug(collections, collectionSlug);
        console.log("product deal of the day", products);
        return (
            <div className="ps-deal-of-day">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Deal of the day</h3>
                            </div>
                            <div className="ps-block__right">
                                <figure>
                                    <figcaption>End in:</figcaption>
                                    <CountDownSimple
                                        timeTillDate="12 31 2021, 6:00 am"
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
                                
                            {products.map(product => (
                             
                                <ProductDealOfDay
                                    product={product}
                                    key={product.title}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(HomeDefaultDealOfDay);


//export default connect(state => state.collection)( appWithTranslation (HomeDefaultDealOfDay));


/*

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
//import { appWithTranslation} from './../../../../i18next';
import i18next from 'i18next';
class HomeDefaultDealOfDay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {t}= this.props;
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        console.log("testttttttttt",collections.data);
        {collections.data && collections.data.rows ? console.log("testtt one",collections.data.rows) :
        console.log("wrong") };

        return (
            <div className="ps-deal-of-day">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Deal of the day</h3>  

                   <h2> {i18next.t('chickchack')}</h2>  
                            </div>
                            <div className="ps-block__right">
                                <figure>
                                    <figcaption>End in:</figcaption>
                                    <CountDownSimple
                                        timeTillDate="12 31 2021, 6:00 am"
                                        timeFormat="MM DD YYYY, h:mm a"
                                    />
                                </figure>
                            </div>
                        </div>
                        <Link href="/shop">
                            <a>View all for testing</a>
                        </Link>
                    </div>
                {/*    <div >
                        {test.collections.data.map(item  => (
                            <h1>{item}</h1>
                        ))}
                        </div> *//*}*/

                   /*     <div className="ps-section__content">
                        <Slider
                            {...carouselFullwidth}
                            className="ps-carousel outside">
                            { collections.data && collections.data.rows ?
                            collections.data.rows.map(product => (
                                <ProductDealOfDay
                                    product={product}
                                    key={product.id}
                                />
                            )) : <h2> something wrong</h2>}
                        </Slider>
                    </div>*/
               /*     {/*    <div className="ps-section__content">
                        <Slider
                            {...carouselFullwidth}
                            className="ps-carousel outside">
                            {products.map(product => (
                                <ProductDealOfDay
                                    product={product}
                                    key={product.title}
                                />
                            ))}
                        </Slider>
                    </div>
                            */
                           /*}
                </div>
            </div>
        );
    }
}


export default connect(state => state.collection) (HomeDefaultDealOfDay);*/

//export default connect(state => state.collection)( appWithTranslation (HomeDefaultDealOfDay));

/*

*/

/*

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
//import { appWithTranslation} from './../../../../i18next';
import i18next from 'i18next';
class HomeDefaultDealOfDay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {t}= this.props;
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        console.log("testttttttttt",collections.data);
       {/*
     {collections.data && collections.data.rows ? console.log("testtt one",collections.data.rows) :
        console.log("wrong") };
       *

       return (
        <div className="ps-deal-of-day">
            <div className="ps-container">
                <div className="ps-section__header">
                    <div className="ps-block--countdown-deal">
                        <div className="ps-block__left">
                            <h3>Deal of the day</h3>  

               <h2> {i18next.t('chickchack')}</h2>  
                        </div>
                        <div className="ps-block__right">
                            <figure>
                                <figcaption>End in:</figcaption>
                                <CountDownSimple
                                    timeTillDate="12 31 2021, 6:00 am"
                                    timeFormat="MM DD YYYY, h:mm a"
                                />
                            </figure>
                        </div>
                    </div>
                    <Link href="/shop">
                        <a>View all for testing</a>
                    </Link>
                </div>
            {/*    <div >
                    {test.collections.data.map(item  => (
                        <h1>{item}</h1>
                    ))}
                    </div> *

             {/*
                <div className="ps-section__content">
                    <Slider
                        {...carouselFullwidth}
                        className="ps-carousel outside">
                        { collections.data && collections.data.rows ?
                        collections.data.rows.map(product => (
                            <ProductDealOfDay
                                product={product}
                                key={product.id}
                            />
                        )) : <h2> something wrong</h2>}
                    </Slider>
                        </div> *
                    <div className="ps-section__content">
                    <Slider
                        {...carouselFullwidth}
                        className="ps-carousel outside">
                        {products.map(product => (
                            <ProductDealOfDay
                                product={product}
                                key={product.title}
                            />
                        ))}
                    </Slider>
                </div>
                        
            </div>
        </div>
    );
}
}


export default connect(state => state.collection) (HomeDefaultDealOfDay);


*/

