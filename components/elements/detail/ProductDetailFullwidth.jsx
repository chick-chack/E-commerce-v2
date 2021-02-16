
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbnailDefault from './modules/thumbnail/ThumbnailDefault';
import InformationDefault from './modules/information/InformationDefault';
import DefaultDescription from './modules/description/DefaultDescription';
import ModuleProductHasproductChildren from '~/components/elements/detail/modules/ModuleProductHasproductChildren';
import BounceLoader from "react-spinners/BounceLoader";
class ProductDetailFullwidth extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { singleProduct } = this.props.product;
        if (singleProduct !== null && singleProduct !== undefined) {
            if (singleProduct.productChildren) {
                if (singleProduct.productChildren.length > 0) {
                    if (singleProduct.productChildren[0].colorName_en != null) {
                        return (
                            <div className="ps-product--detail ps-product--fullwidth">
                                <ModuleProductHasproductChildren
                                    product={singleProduct}
                                    id={this.props.id}
                                    childern_ID={this.props.childern_ID}
                                    pid={this.props.pid} />
                                <DefaultDescription />
                            </div>

                        );
                    } else {
                        return (
                            <div className="ps-product--detail ps-product--fullwidth">
                                <div className="ps-product__header">
                                    {/* <div className="row">
                                        <div className="col-md-6 col-12">
                                        <ThumbnailDefault product={singleProduct} />

                                        </div>
                                        <div className="col-md-6 col-12">
                                        <InformationDefault product={singleProduct} />

                                        </div>
                                    </div> */}
                                    <ThumbnailDefault product={singleProduct} />
                                    <InformationDefault product={singleProduct} />
                                </div>
                                <DefaultDescription />
                            </div>
                        );
                    }
                } else {
                    return <div style={{ textAlign: 'center' }}>
                        <div className="ps-form__orders">
                            <BounceLoader color='#BA915E' loading={true} size={150} />
                        </div>
                    </div >
                }
            } else {
                return <div style={{ textAlign: 'center' }}>
                    <div className="ps-form__orders">
                        <BounceLoader color='#BA915E' loading={true} size={150} />
                    </div>
                </div>
            }
        } else {
            return <div style={{ textAlign: 'center' }}>
                <div className="ps-form__orders">
                    <BounceLoader color='#BA915E' loading={true} size={150} />
                </div>
            </div>
        }
    }
}

const mapStateToProps = state => {
    return state.product;
};

export default connect(state => { return state })(ProductDetailFullwidth);



