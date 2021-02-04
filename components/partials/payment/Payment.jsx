import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

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
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: this.return_total(),
                    },
                },
            ],
        });
    }

    onApprove(data, actions) {
        console.log('-------------------------------------8-------------------------------------------')
        console.log(data)
        console.log(actions)
        console.log('-------------------------------------8-------------------------------------------')
        return actions.order.capture();
    }

    render() {
        return (

            <PayPalButton
                createOrder={(data, actions) => this.createOrder(data, actions)}
                onApprove={(data, actions) => this.onApprove(data, actions)}
            />
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(YourComponent);