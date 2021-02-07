import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';
import { connect } from 'react-redux';
import menuData from '../../../public/static/data/menu';
import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
import { getProductsByKeyword, all_category } from '../../../store/product/action';
import i18next from 'i18next'

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang:null
        };
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }
    
  
    componentDidMount() {
        this.props.dispatch(all_category());
        this.setState({lang: localStorage.getItem('lang')|| 'en' })
    }

    render() {
        const data= this.props.product.list_category;
        return (
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> 
                                    {i18next.t("shopByCategory")}
                                </span>
                            </div>
                            <div className="menu__content">
                                <Menu
                                    // data={menuData.product_categories}
                                    data={data}

                                    className="menu--dropdown"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="navigation__right">
                    <ul className="navigation__extra">
                            <li>
                                <Link href="/">
                                    <a> {i18next.t('home')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/page/about-us">
                                    <a>  {i18next.t('aboutus')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/page/contact-us">
                                    <a>  {i18next.t('contactus')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/order/MyOrders">
                                    <a>  {i18next.t('myorders')}</a>
                                </Link>
                            </li>
                        </ul>
                        {/* <Menu
                        
                            data={menuData.menuPrimary.menu_1}
                            className="menu"
                        /> */}
                        <ul className="navigation__extra">
                            {/* <li>
                                <Link href="/vendor/become-a-vendor">
                                    <a>Sell on chickchack</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/order-tracking">
                                    <a>Tract your order</a>
                                </Link>
                            </li>
                            <li>
                                <CurrencyDropdown />
                            </li> */}
                            <li>
                                <LanguageSwicher />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(state => state) (NavigationDefault);
