import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Form, Input } from 'antd';
import { order_listt } from '../../../../store/order/action';
import _ from "lodash";
import i18next from 'i18next';
import dateFormat from 'dateformat';

class FormListOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,
        }
    }

    componentDidMount() {
        this.setState({ lang: localStorage.getItem('lang') || 'en' })
    }

    render() {
        const { order_list } = this.props;
        console.log("order form", order_list)

        return (
            <div className="ps-section--shopping ps-shopping-cart">

                <div className="ps-section__content">
                    {!_.isEmpty(this.props.order_list) ?
                        <div className="table-responsive">
                            <table className="table ps-table--shopping-cart">
                                <thead>
                                    <tr>
                                        <th>{i18next.t("date")}</th>
                                        <th>{i18next.t("address_")}</th>
                                        <th>{i18next.t("totalorice")}</th>
                                        <th>{i18next.t("view")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.order_list.map((order, index) => (

                                        <tr key={index}>
                                            <td>
                                                {/* {order.createdAt} */}
                                                {dateFormat(order.createdAt, "dddd, mmmm dS, yyyy")}
                                            </td>
                                            <td>
                                                {JSON.parse(order.address).name} , 
                                                {JSON.parse(order.address).country} , 
                                                {JSON.parse(order.address).city} , 
                                                {JSON.parse(order.address).neighborhood} , 
                                                {JSON.parse(order.address).street} , 
                                                {JSON.parse(order.address).postCode}
                                                {/* {JSON.parse(order.address.name)},{JSON.parse(order.address.country)}
                                                {JSON.parse(order.address.city)},{JSON.parse(order.address.neighborhood)}
                                                {JSON.parse(order.address.street)},{JSON.parse(order.address.postCode)} */}
                                            </td>
                                            <td className="price">
                                                $ {order.totalPrice}
                                            </td>
                                            <td>
                                                <div className="row justify-content">
                                                  
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
                        : <div> </div>}
                </div>
            </div>


        );
    }
}


const mapStateToProps = state => {
    return state.order;
};

export default connect(mapStateToProps)(FormListOrders);