import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { add_order } from '../../../store/order/action';

import { loadScript } from '@paypal/paypal-js';

// let PayPalButton;/

class YourComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            state_: false
        }
        loadScript({ 'client-id': 'AeLHkpPiNQTJVprDom78nbEtB_6x_YOO9JzxneLbm3cn8Y_dGHkm3BlBOIWxoQVKymM_IOaU4xtUYKty' })
            .then(paypal => {
                const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
                paypal.Buttons().render();
                setState({ state_: true })
            });

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
            console.log('---------------------------------------------7-----------------------------------');
            console.log(details);
            console.log('---------------------------------------------7-----------------------------------');

            this.props.dispatch(add_order(this.props.value, 1, details))
            // this.setState({ showButtons: false, paid: true });
        });
    };


    render() {
        return (
            <div>
                {this.state.state_ && <div></div>}
                {!this.state.state_ && <PayPalButton
                    createOrder={(data, actions) => this.createOrder(data, actions)}
                    onApprove={(data, actions) => this.onApprove(data, actions)}
                />}

            </div>

        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(YourComponent);