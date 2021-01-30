import React, { Component } from 'react';
import Link from 'next/link';
import { sameBrands } from '../../../public/static/data/product';
import Product from '../../../components/elements/products/Product';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../utilities/product-helper';
class ProductWidgets extends Component {

    render() {
        const { collections, collectionSlug, storeinfo } = this.props;
        console.log('______________________________________________@__________________________');
        console.log(storeinfo)
        return (
            <section className="store_widgets">
                {storeinfo && <aside className="widget widget_product widget_features_store">
                    <p>
                        {storeinfo['trader.storeName']}
                    </p>
                    <p>
                        {storeinfo['storeType.name_en']}
                    </p>
                    <p>
                        {storeinfo['mall.name_en']}
                    </p>
                    <p>
                        {storeinfo['trader.storeName']}
                    </p>
                </aside>}
            </section>
        );
    }

}

export default connect(state => state.store)(ProductWidgets);
