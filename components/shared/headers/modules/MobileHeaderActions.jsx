import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountQuickLinks from './AccountQuickLinks';
import Link from 'next/link';
import AccountQuickLinksMobile from './AccountQuickLinksMobile';
import { getCart, removeItem, getcartlist, deletecartitem } from '../../../../store/cart/action';
/*import { Drawer } from 'antd';
import PanelCartMobile from '../../panel/PanelCartMobile';*/
class MobileHeaderActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        };
    }

    handleDrawerClose = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };

    componentDidMount() {

        this.props.dispatch(getcartlist());
    }

    render() {
        const { auth } = this.props;
        // const { cartTotal } = this.props.cart;
        const { amount, cartTotal, cartItems , cartlist} = this.props.cart;
        return (
            <div className="navigation__right">
                <Link href="/account/shopping-cart">
                    <a className="header__extra" href="#">
                        <i className="icon-bag2"></i>
                        <span>
                            {/* <i>{cartTotal ? cartTotal : 0}</i> */}
                            <i>{this.props.cart.cartlist ? this.props.cart.cartlist.length : 0}</i>

                        </span>
                    </a>
                </Link>

                {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                    <AccountQuickLinksMobile />
                ) : (
                    <div className="header__extra">
                        <Link href="/account/login">
                            <i className="icon-user"></i>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(MobileHeaderActions);

