import React, { Component } from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import ProductDetailOnSale from '../../components/elements/detail/ProductDetailOnSale';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { getCollections } from '../../store/collection/action';
import { getProductsById } from '../../store/product/action';
import { connect } from 'react-redux';

class ProductOnSalePage extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;
        if (query) {
            const collectionsParams = [
                'customer_bought',
                'shop-recommend-items',
                'widget_same_brand',
            ];
            this.props.dispatch(getCollections(collectionsParams));
        }
    }
    render() {
        return (
            <div className="layout--product">
                <HeaderDefault />
            
            </div>
        );
    }
}

export default connect()(ProductOnSalePage);
