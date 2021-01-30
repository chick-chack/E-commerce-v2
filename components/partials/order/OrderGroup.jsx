
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import i18next from 'i18next';
import FormListOrders from '../account/modules/FormListOrders';
import ProductDetails from './ProductDetails'
import _ from "lodash";
import dateFormat from 'dateformat';


class OrderGroup extends Component {
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
        const { order_list_group } = this.props;
        console.log("order group component list", order_list_group)
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    {/* <div className="ps-section__header">
                        <h1>{i18next.t('checkoutInfo')}</h1>
                    </div> */}
                           <div className="ps-section__header" style={{paddingBottom:"0px"}}>
                    { !_.isEmpty(this.props.order_list_group) ?
                         <h1> {i18next.t('orderlist')}</h1>
                         :<h1>    {i18next.t('emptyorderlist')}</h1> 
                    }
               
                </div>
<div className="ps-section__content">
    {!_.isEmpty(this.props.order_list_group) ?

            this.props.order_list_group.map((group,index) =>
            <div key={index}>
                    <h4>{group.groupName}</h4>
                    <h4> ${group.price}</h4>
                    <h4>  {dateFormat(group.createdAt, "dddd, mmmm dS, yyyy")}</h4>
                    <div className="table-responsive">
            <table className="table ps-table--shopping-cart">
                <thead>
                    <tr>
                        <th>{i18next.t("product")}</th>
                        <th>{i18next.t("quantity")}</th>
                        <th>{i18next.t("totalorice")}</th>
                        <th>{i18next.t("view")}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    group.orderDetails.map((order, index) => (

                        <tr key={index}>
                            <td>
                            <ProductDetails id={order.id}/>
                                {/* {dateFormat(order.createdAt, "dddd, mmmm dS, yyyy")} */}
                            </td>
                            <td>
                        {order.quantity}
                            </td>
                            <td className="price">
                                $ {order.price}
                            </td>
                            <td>
                                <div >
                                {/* <ProductDetails id={order.id}/> */}
                                    <Link
                                     href="/order/[oid]" as={`/order/${order.id}`}>
                                        <a className="ps-btn ps-btn--fullwidth">
                                            {i18next.t("view")}
                                        </a>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

                    
            </div>
            
            ): <h2> no</h2>}
      
</div>
</div>


                      
                    </div>
               
        );
    }
}

const mapStateToProps = state => {
    return state.order;
};
export default connect(mapStateToProps)(OrderGroup);
