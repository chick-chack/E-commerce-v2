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
        
        
            {/* <div className="ps-container">
                <h3>{i18next.t('categories_')}</h3>
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 col">
                        <div className="ps-block--category">
                            <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img src="/static/img/categories/1.jpg" alt="chickchack" />
                            <p>Electronics</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img src="/static/img/categories/2.jpg" alt="chickchack" />
                            <p>Clothings</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img src="/static/img/categories/3.jpg" alt="chickchack" />
                            <p>Computers</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img src="/static/img/categories/4.jpg" alt="chickchack" />
                            <p>Home & Kitchen</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img src="/static/img/categories/5.jpg" alt="chickchack" />
                            <p>Health & Beauty</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img src="/static/img/categories/6.jpg" alt="chickchack" />
                            <p>Health & Beauty</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img src="/static/img/categories/7.jpg" alt="chickchack" />
                            <p>Jewelry & Watch</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 ">
                        <div className="ps-block--category">
                            <Link href="/shop">
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img src="/static/img/categories/8.jpg" alt="chickchack" />
                            <p>Technology Toys</p>
                        </div>
                    </div>
                </div>
            </div>
        
         */}
        </div>
    
            
        )
    }
} 


export default connect(state => state)(HomeDefaultTopCategories);