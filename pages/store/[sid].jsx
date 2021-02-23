import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import StoreView from '../../components/partials/store/StoreView';
import StoreWidgets from '../../components/partials/store/StoreWidgets';
import Section_product from '../../components/partials/store/Section_product';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import StoreNavigationList from '../../components/shared/navigation/StoreNavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import { getStoresById } from '../../store/store/action';
import { getProductsByStores } from '../../store/store/action';
import { all_category } from '../../store/store/action';
import { getProductsById } from '../../store/product/action';
import HeaderStore from '../../components/shared/headers/HeaderStore';
// import { getCollections } from '../../store/collection/action';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import i18next from 'i18next';

class StoreDefaultPage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }

    state={
        lang:null
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })
        const { sid } = this.props.query;
        const { query } = this.props;
        if (isNaN(sid)) {
            Router.push('/page/page-404');
        }
        if (query) {
             this.props.dispatch(getStoresById(sid));
             this.props.dispatch(all_category(sid));
        }

        Router.events.on('routeChangeStart', url => {
            const nextPid = url.split('/').pop();
            if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
                this.props.dispatch(getProductsById(nextPid));
            }
        });
    }

    render() {
        const { storeinfo , list_category_store} = this.props;
        const breadCrumb = [
            {
                text: i18next.t('home'),
                url: '/',
            },

             {
                text:  this.props.storeinfo ? this.state.lang==='ar'
                        ? this.props.storeinfo['mall.name_ar']
                        : this.props.storeinfo['mall.name_en']
                : "Mall" ,
                 url:
                 this.props.storeinfo ?
                        `/mall?mallname=${ this.props.storeinfo['mall.name_en']}&mallid=${this.props.storeinfo['mall.id']}`
                        : `/mall?mallname=Dubai&mallid=1`,
                 
             },
            
            {
                text: this.props.storeinfo ? this.props.storeinfo['trader.storeName'] :  "Store",
                 url: `/store/${this.props.query.sid ? this.props.query.sid : ""}`,
            },
            
        ];

        return (
            <div className="site-content">
                
                {storeinfo ? (
                    <HeaderStore productData={storeinfo} />
                ) : (
                        ''
                    )}
                <HeaderMobileProduct />
                <StoreNavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--store">
                    <div className="ps-container" >
                    <div className="row store_content"  
                    //   style={{ backgroundImage: "url(" + "/static/img/joinus-bg.png" + ")",
                    //     backgroundPosition: 'center',
                    //     backgroundSize: 'cover',
                    //     backgroundRepeat: 'no-repeat'}}
                        >
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-2 ">
                           
                                {this.props.storeinfo && this.props.storeinfo.image != null
                                ? <div className="store_img">
                                <img 
                                style={{display:"flex", alignItems:"center", width:"70%" , margin:"auto"}}
                                src={this.props.storeinfo.image} alt={this.props.storeinfo.mall.name_en}  />
                            </div>
                            :
                            <div className="store_img">
                            <img 
                            style={{display:"flex", alignItems:"center", width:"70%", margin:"auto"}}
                            src="/static/img/store-gray.png"
                            //  src="/static/img/chickchackmall-logo.svg"
                            // src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
                             alt="Snow"  />
                            </div>
                            }

                            

                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-10 ">
                            {storeinfo ?
                            <div className="store_content_">
                                <p> Welcome to <span>{storeinfo['trader.storeName']} </span> , Trader Type: <span>  {this.state.lang==="en" ? storeinfo['storeType.name_en'] :storeinfo['storeType.name_ar'] }</span>
                                </p>
                                <p>
                                We are pleased for your visit! we hope you will enjoy shopping in our store.
                                </p>
                                <p>
                                We provide you with what you need from household appliances and furnishings to suit all tastes.
                                </p>
                                <p>
                                And because we care about you and because your trust is important to us, we provide you with the ability to view our products in a 3D way in addition to the ability to try them using Augmented Reality technologies, just click on the following link:
                                </p>
                                {/* <h3>{storeinfo['trader.storeName']}</h3> */}
                                {/* <h3>{i18next.t('storetype')} : {this.state.lang==="en" ? storeinfo['storeType.name_en'] :storeinfo['storeType.name_ar'] }</h3> */}
                                {/* <h3> {i18next.t('mall')} :  {this.state.lang==="en" ? storeinfo['mall.name_en'] :storeinfo['mall.name_ar']  }</h3> */}
                            </div>
                            :''
                            
                        }
                            
                        </div>
                
                      
                    </div>
                        {/* <div className="ps-page__container" 
                        
                        style={{ backgroundImage: "url(" + "/static/img/joinus-bg.png" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}
                    
                    }
                        
                        >
                            <div className="ps-page__right store_mall">
                                <StoreView />
             
                            </div>
                            <div className="ps-page__left">
                                <StoreWidgets />
                            </div>
                        </div> */}
                     
                    </div>
                </div>
                <Section_product />
                {/* <Newletters /> */}
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.store)(StoreDefaultPage);
