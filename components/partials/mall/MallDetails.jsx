import React, { Component } from 'react';
import { connect } from 'react-redux';


import CountDownSimple from '../../elements/CountDownSimple';
 import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../elements/products/ProductDealOfDay';
import StoreTopRate from '../../elements/stores/StoreTopRate';
import { carouselFullwidth } from '../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../utilities/product-helper';
import { getColletionBySlug_test } from '../../../utilities/product-helper';
import i18next from 'i18next';


class MallDetails extends Component {
    constructor(props) {
        super(props);
    }
 
    componentDidMount(){
    

    }


    render() {

        const mall = this.props.mallInfo;
        console.log("mallllllllllllllll info details", this.props)

        return (

                <div className="ps-container">
                   {
                       mall ?
                       <div className="row">
                       <div className="col-md-6 col-12">
                           <div className="mall-image">
                               <img src={mall.image} alt="mall"/>
                           </div>

                       </div>
                       <div className="col-md-6 col-12">
                           <h2> {localStorage.getItem("lang")==="ar"?  mall.name_ar :
                             mall.name_en } </h2>

                           <h3>
                           {localStorage.getItem("lang")==="ar"?  "عدد الطوابق :" :
                              "Number of the floor:"}
                             {mall.numberOfFloors} floors </h3>
                           <h3></h3>
                           
                           </div>
                   </div>
                   :<h1> no </h1>
                   }
               
                </div>




        )
    }

}


export default connect(state => state.mall)(MallDetails);


