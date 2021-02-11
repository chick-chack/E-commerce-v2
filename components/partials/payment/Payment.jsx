import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { add_order } from '../../../store/order/action';
import { PayPalButton } from "react-paypal-button-v2";
import { notification } from 'antd';
import Router from 'next/router';

const modalSuccess = type => {
    notification[type]({
        message: 'Success',
        description: 'Transaction completed',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'failed',
        description: 'Transaction completed',
    });
};


class YourComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    return_total() {
        return this.props.cart.cartlist ?
            Object.values(this.props.cart.cartlist)
                .reduce((acc, obj) => acc + (obj.quantity * (obj['productChild.isOffer']
                    ? obj['productChild.price'] - ((obj['productChild.price'] * obj['productChild.offerRatio']) / 100)
                    : obj['productChild.price'])), 0)
                .toFixed(2) : "nooooooooooooooooooo"
    }

    createOrder(data, actions) {
        var t = this.return_total()
        console.log(t)
        return actions.order.create({

            purchase_units: [
                {
                    amount: {
                        value: t,
                    },
                },
            ],
        });
    }

    onApprove = (data, actions) => {
        actions.order.capture().then(details => {
            this.props.dispatch(add_order(this.props.value, 1, details))
            modalSuccess('success');
            Router.push('/order/MyOrders')
        });
    };

    onCancel = () => {
        modalWarning('warning');
    }

    render() {
        return (
            <div>
                <PayPalButton
                    createOrder={(data, actions) => this.createOrder(data, actions)}
                    onApprove={(data, actions) => this.onApprove(data, actions)}
                    onCancel={() => this.onCancel()}
                    options={{
                        clientId: "AeLHkpPiNQTJVprDom78nbEtB_6x_YOO9JzxneLbm3cn8Y_dGHkm3BlBOIWxoQVKymM_IOaU4xtUYKty"
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(YourComponent);