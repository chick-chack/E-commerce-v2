import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { menuPrimary } from '../../../public/static/data/menu';
import Link from 'next/link';
import i18next from 'i18next'

const { SubMenu } = Menu;

class PanelMenu extends Component {
    constructor(props) {
        super(props);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: [],
    };

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(
            (key) => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                className="menu--mobile-2">
                    <Menu.Item key={1}> 
                        <Link href="/">
                            <a> {i18next.t('home')}</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={2}> 
                        <Link href="/page/about-us">
                            <a>  {i18next.t('aboutus')}</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={3}> 
                        <Link href="/page/contact-us">
                            <a>  {i18next.t('contactus')}</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={4}> 
                        <Link href="/order/MyOrders">
                            <a>  {i18next.t('myorders')}</a>
                        </Link>
                    </Menu.Item>
            </Menu>   
        
        );
    }
}

const mapStateToProps = (state) => {
    return state.setting;
};

export default connect(mapStateToProps)(PanelMenu);
