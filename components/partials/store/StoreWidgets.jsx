import React, { Component } from 'react';
import Link from 'next/link';
import { sameBrands } from '../../../public/static/data/product';
import Product from '../../../components/elements/products/Product';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../utilities/product-helper';
import i18next from 'i18next';
class ProductWidgets extends Component {

    state={
        lang:null
    }

    componentDidMount() {
        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })

    }

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
                                       <p>{i18next.t('storename')} </p>               
                                    </td>
                                                 
                                    <td>
                                    <p>
                                         {storeinfo['trader.storeName']}
                                    </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <p>{i18next.t('storetype')} </p>               
                                    </td>
                                                 
                                    <td>
                                    <p>
                                    {this.state.lang==="en" ? storeinfo['storeType.name_en'] :storeinfo['storeType.name_ar']  }
                   
                                    </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                       <p>{i18next.t('mall')}: </p>               
                                    </td>
                                                 
                                    <td>
                                    <p>
                                    <p>
                                        {this.state.lang==="en" ? storeinfo['mall.name_en'] :storeinfo['mall.name_ar']  }
                  
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
