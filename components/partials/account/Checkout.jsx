import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';

import FormCheckoutInformation from './modules/FormCheckoutInformation';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,
        }
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }


    componentDidMount() {
        this.setState({ lang: localStorage.getItem('lang') || 'en' })
    }
    render() {
        const { amount, cartTotal, cartItems, cartList } = this.props;
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                    <div className="ps-section__content">
                        <FormCheckoutInformation
                            amount={amount}
                            cartTotal={cartTotal}
                            cartItems={cartItems}
                            cartList={cartList}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Checkout);
