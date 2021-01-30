import React, { Component } from 'react';
import { Menu } from 'antd';
import { connect } from 'react-redux';
import Link from 'next/link';
import categories from '../../../public/static/data/static-categories.json';
import {  all_category } from '../../../store/product/action';
import {  all_sub_category } from '../../../store/product/action';
import i18next from 'i18next';

const { SubMenu } = Menu;

class StorePanelCategories extends Component {
    constructor(props) {
        super(props);
    }
    state={
        lang:null
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    
    componentDidMount() {
        this.setState({
            lang: localStorage.getItem('lang')
        })
            this.props.dispatch(all_sub_category())    
            
    }


    render() {
        const data= this.props.product.sub_list_category;
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}>
                {data.map(category => (
                    <Menu.Item key={category.id}>
                        <a href={`/shop?category=${category.slug}`}>
                            {this.state.lang==='ar' ? category['subCategory.name_ar'] :category['subCategory.name_en'] }     
                        </a>
                    </Menu.Item>
                ))}
            </Menu>
        );
    }
}

//export default PanelCategories;
export default connect(state => state) (StorePanelCategories);


