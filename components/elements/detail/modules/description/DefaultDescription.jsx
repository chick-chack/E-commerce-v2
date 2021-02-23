import React, { Component } from 'react';

import { Tabs } from 'antd';
import i18next from 'i18next';
const { TabPane } = Tabs;

import PartialDescription from './PartialDescription';
import { connect } from 'react-redux';
import PartialSpecification from './PartialSpecification';
import PartialVendor from './PartialVendor';
import PartialReview from './PartialReview';
import PartialOffer from './PartialOffer';

class DefaultDescription extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }

    
    render() {
        const num= this.props.singleProduct.numberOfRates;
        return (
            <div>
                <div className="ps-product__content ps-tab-root">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={i18next.t('description')} key="1">
                            <PartialDescription />
                            {/* <div className="ps-document">
                                {this.props.singleProduct.description_en}
                            </div> */}
                        </TabPane>
                        <TabPane tab={i18next.t('specification')} key="2">
                            <PartialSpecification />
                        </TabPane>
                        {/* <TabPane tab="Vendor" key="3">
                            <PartialVendor />
                        </TabPane>*/}
                        <TabPane tab=   {`${i18next.t('reviews')} ( ${num} )`} key="4">
                            <PartialReview />
                        </TabPane>
                        {/*  <TabPane tab="Questions and Answers" key="5">
                            Content of Tab Pane 3
                        </TabPane> */}

                        <TabPane tab={i18next.t('moreoffers')} key="6">
                            <PartialOffer />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default connect((state) => state.product)(DefaultDescription);
// export default DefaultDescription;
