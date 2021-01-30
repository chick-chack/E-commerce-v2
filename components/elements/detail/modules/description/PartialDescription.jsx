// import React from 'react';
// import Product from '~/components/elements/products/Product';

import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import renderHTML from 'react-render-html';
class PartialDescription extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ps-document"  >
                { localStorage.getItem('lang')==='en'
                ?  renderHTML(this.props.singleProduct.description_en) 
                :  renderHTML(this.props.singleProduct.description_ar)}
            </div>
        );
    }
}


export default connect((state) => state.product)(PartialDescription);