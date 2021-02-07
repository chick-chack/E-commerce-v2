import React, { Component } from 'react';
import Link from 'next/link';
import { sameBrands } from '../../../public/static/data/product';
import Product from '../../../components/elements/products/Product';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../utilities/product-helper';
class ProductWidgets extends Component {

    render() {
        const { collections, collectionSlug, storeinfo } = this.props;
  
        return (
            <section className="store_widgets">
                {storeinfo && <aside className="widget widget_product widget_features_store">
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                       <p>Store Name : </p>               
                                    </td>
                                                 
                                    <td>
                                    <p>
                                         {storeinfo['trader.storeName']}
                                    </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <p>Store Type : </p>               
                                    </td>
                                                 
                                    <td>
                                    <p>
                                    {storeinfo['storeType.name_en']}
                                    </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <p>Mall  : </p>               
                                    </td>
                                                 
                                    <td>
                                    <p>
                                    <p>
                        {storeinfo['mall.name_en']}
                    </p>
                                    </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                             
                    {/* <p>
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
                    </p> */}
                </aside>}
            </section>
        );
    }

}

export default connect(state => state.store)(ProductWidgets);
