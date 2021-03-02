import React, { Component } from 'react';
import Link from 'next/link';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { all_category } from '~/store/product/action';

class HomeDefaultTopCategories extends Component{

    constructor(props){
        super(props);
        this.state={
            lang:null
        }
    }

    componentDidMount(){
        this.props.dispatch(all_category());
        this.setState({
            lang:localStorage.getItem('lang') || 'en'
        })
    }
    render(){
        const data = this.props.product.list_category;
        return(
            <div className="ps-top-categories">
                <div className="ps-container">
                    <h3>{i18next.t('categories_')}</h3>
                    <div className="row">
                        { data ? data.map((category, index)=>
                        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 col" key={index}>
                            <div className="ps-block--category">
                                <Link href={{ pathname: '/category', query: { cid: category.id } }} >
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img src="/static/img/categories/1.jpg" alt="chickchack" />
                                <p>{this.state.lang=='en'? category.name_en : category.name_ar}</p>
                            </div>
                        </div>
                        ) : <div>no data </div>}
                    </div>
                </div>
            </div>     
        )
    }
} 


export default connect(state => state)(HomeDefaultTopCategories);