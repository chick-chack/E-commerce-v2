import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

class StoreView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.storeinfo)
        // const malls = this.props.malls_home.malls;

        return (
            <div className="ps-deal-of-day">
                <div className="ps-container">
                    {/* <div className="ps-section__header" style={{ marginTop: "10px", justifyContent: "center" }}>
                    </div> */}
                    <div className="ps-section__content">
                        <div className="store_view">
                            <div className="store_view" >
                                {/* <div className="mall_link" style={{ marginBottom: "20px" }}>
                                    <Link
                                        href={{
                                            pathname: '/mall', query: {
                                                mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                                                    : mall.name_en, mallid: mall.id
                                            }
                                        }} >
                                        {localStorage.getItem("lang") === "ar" ? mall.name_ar
                                            : mall.name_en}
                                    </Link>
                                </div> */}
                                {this.props.storeinfo && this.props.storeinfo.image != null &&
                                    <div className="store_img">
                                        <img src={this.props.storeinfo.image} alt={this.props.storeinfo.mall.name_en} style={{ width: "100%" }} />
                                    </div>
                                }
                                {this.props.storeinfo && this.props.storeinfo.image === null &&
                                    <div className="store_img">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" alt="Snow" style={{ width: "100%" }} />
                                    </div>
                                }
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.store)(StoreView);

