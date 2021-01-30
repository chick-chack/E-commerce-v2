import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';

import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
    getcartlist,
    add_to_cart,
    deletecartitem

} from '../../../../store/cart/action';

class HeaderActions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang:null
        };
    }
    



    
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }



  componentDidMount() { 
         this.setState({
    lang: localStorage.getItem('lang')
})}


    render() {
        const { compare, wishlist, auth } = this.props;     
        const {cartlist}  =this.props.cart;

        return (
            <div className="header__actions">
                <Link href="/account/compare">
                    <a className="header__extra">
                        <i className="icon-chart-bars"></i>
                        <span>
                            <i>
                                {compare
                                    ? compare.compareTotal
                                    : compare.compareTotal}
                            </i>
                        </span>
                    </a>
                </Link>
                <Link href="/account/wishlist">
                    <a className="header__extra">
                        <i className="icon-heart"></i>
                        <span>
                            <i>{wishlist.wishlistTotal}</i>
                        </span>
                    </a>
                </Link>
                <MiniCart  
                
                car={cartlist}
                
                />
                {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                    <AccountQuickLinks isLoggedIn={true} />
                ) : (
                    <AccountQuickLinks isLoggedIn={false} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(HeaderActions);
