
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbnailDefault from './modules/thumbnail/ThumbnailDefault';
import InformationDefault from './modules/information/InformationDefault';
import DefaultDescription from './modules/description/DefaultDescription';
import ModuleProductHasproductChildren from '~/components/elements/detail/modules/ModuleProductHasproductChildren';

class ProductDetailFullwidth extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { singleProduct } = this.props.product;
        console.log("hi from pid props", this.props.id)
        console.log(singleProduct)
        if (singleProduct !== null && singleProduct !== undefined) {
            if (singleProduct.productChildren) {
                if (singleProduct.productChildren.length > 0) {
                    if (singleProduct.productChildren[0].colorName_en != null) {
                        return (
                            <div className="ps-product--detail ps-product--fullwidth">
                                <ModuleProductHasproductChildren 
                                            product={singleProduct} 
                                            id={this.props.id}
                                            childern_ID={this.props.childern_ID}/>
                                <DefaultDescription />
                            </div>
                            
                        );
                    } else {
                        return (
                            <div className="ps-product--detail ps-product--fullwidth">
                                <div className="ps-product__header">
                                    <ThumbnailDefault product={singleProduct} />
                                    <InformationDefault product={singleProduct} />
                                </div>
                                <DefaultDescription />
                            </div>
                        );
                    }
                } else {
                    return <p>No Data</p>;
                }
            } else {
                return <p>No Data</p>;
            }
        } else {
            return <p>No Data</p>;
        }
    }
}

const mapStateToProps = state => {
    return state.product;
};

export default connect(state => {return state })(ProductDetailFullwidth);




// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import ThumbnailDefault from './modules/thumbnail/ThumbnailDefault';
// import InformationDefault from './modules/information/InformationDefault';
// import DefaultDescription from './modules/description/DefaultDescription';
// import ModuleProductHasproductChildren from '~/components/elements/detail/modules/ModuleProductHasproductChildren';

// class ProductDetailFullwidth extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { singleProduct } = this.props;
//         console.log(singleProduct)
//         if (singleProduct !== null && singleProduct !== undefined) {
//             if (singleProduct.productChildren) {
//                 if (singleProduct.productChildren.length > 0) {
//                     if (singleProduct.productChildren[0].colorName_en != null) {
//                         return (
//                             <div className="ps-product--detail ps-product--fullwidth">
//                                 <ModuleProductHasproductChildren product={singleProduct} />
//                                 <DefaultDescription />
//                             </div>
//                         );
//                     } else {
//                         return (
//                             <div className="ps-product--detail ps-product--fullwidth">
//                                 <div className="ps-product__header">
//                                     <ThumbnailDefault product={singleProduct} />
//                                     <InformationDefault product={singleProduct} />
//                                 </div>
//                                 <DefaultDescription />
//                             </div>
//                         );
//                     }
//                 } else {
//                     return <p>No Data</p>;
//                 }
//             } else {
//                 return <p>No Data</p>;
//             }
//         } else {
//             return <p>No Data</p>;
//         }
//     }
// }

// const mapStateToProps = state => {
//     return state.product;
// };

// export default connect(mapStateToProps)(ProductDetailFullwidth);
