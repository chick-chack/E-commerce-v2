import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

class StoreView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ps-deal-of-day">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="store_img">
                                {this.props.storeinfo && this.props.storeinfo.image != null
                                ? <div className="store_img">
                                <img 
                                style={{display:"flex", alignItems:"center", width:"70%" , margin:"auto"}}
                                src={this.props.storeinfo.image} alt={this.props.storeinfo.mall.name_en}  />
                            </div>
                            :
                            <div className="store_img">
                            <img 
                            style={{display:"flex", alignItems:"center", width:"70%", margin:"auto"}}
                             src="/static/img/chickchackmall-logo.svg"
                            // src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
                             alt="Snow"  />
                            </div>
                            }

                            </div>

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                            <div className="store_content">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* <div className="ps-container">
                    <div className="ps-section__content">
                        <div className="store_view">
                            <div className="store_view" >

                                {this.props.storeinfo && this.props.storeinfo.image != null &&
                                    <div className="store_img">
                                        <img 
                                        style={{display:"flex", alignItems:"center", width:"70%" , margin:"auto"}}
                                        src={this.props.storeinfo.image} alt={this.props.storeinfo.mall.name_en}  />
                                    </div>
                                }
                                {this.props.storeinfo && this.props.storeinfo.image === null &&
                                    <div className="store_img">
                                        <img 
                                        style={{display:"flex", alignItems:"center", width:"70%", margin:"auto"}}
                                         src="/static/img/chickchackmall-logo.svg"
                                        // src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
                                         alt="Snow"  />
                                    </div>
                                }
                            </div>


                        </div>

                    </div>
                </div> */}
            </div>
        );
    }
}

export default connect(state => state.store)(StoreView);

