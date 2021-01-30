
import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import FormListOrders from '../account/modules/FormListOrders';
import _ from "lodash";

// import FormCheckoutInformation from './modules/FormCheckoutInformation';

class MyOrders extends Component {
    constructor(props) {
        super(props);
        this.state={
            lang:null
        }

    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }


    componentDidMount(){
        this.setState({lang: localStorage.getItem('lang')|| 'en' })

    
    }
    render() {
        const { order_list } = this.props;
        console.log("order component list", order_list)
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    {/* <div className="ps-section__header">
                        <h1>{i18next.t('checkoutInfo')}</h1>
                    </div> */}
                           <div className="ps-section__header" style={{paddingBottom:"0px"}}>
                    { !_.isEmpty(this.props.order_list) ?
                         <h1> {i18next.t('orderlist')}</h1>
                         :<h1>    {i18next.t('emptyorderlist')}</h1> 
                    }
               
                </div>
                    <div className="ps-section__content">

                            <FormListOrders
                             order_list={order_list}
                        />
                      
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.order;
};
export default connect(mapStateToProps)(MyOrders);
