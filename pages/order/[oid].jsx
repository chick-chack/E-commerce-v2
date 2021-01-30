import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import OrderGroup from '../../components/partials/order/OrderGroup';
import { order_list_group } from '../../store/order/action';
import i18next from 'i18next';

class OrderDetailsPage extends React.Component {
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

        console.log("ssssssssssssssssssssssssssssssssssssssss",this.props.query )
        const { oid } = this.props.query;
        const { query } = this.props;
        if (isNaN(oid)) {
            Router.push('/page/page-404');
        }
        if (query) {

             this.props.dispatch(order_list_group(oid));
        }
    }

    render() {
        // const { storeinfo , list_category_store} = this.props;

        return (
            <div className="site-content">
                
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />

                <div className="ps-page--store">
                    <div className="ps-container">
                        {/* <div className="ps-page__container">
                            <div className="ps-page__right store_mall">
                                <h2> hello, it is order details</h2>
                
                            </div>
                            <div className="ps-page__left">
      
                            </div>
                        </div>
   */}
                        <OrderGroup />
                    </div>
                </div>
                <Newletters />
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.order)(OrderDetailsPage);

