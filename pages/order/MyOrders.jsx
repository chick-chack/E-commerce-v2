import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import Router from 'next/router';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import MyOrders from '../../components/partials/order/MyOrders';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { order_list } from '../../store/order/action';
import i18next from 'i18next';

class OrderDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    state={
        lang:null
    }


    static async getInitialProps(ctx) {
        console.log("index shop, getinitial", ctx.query);
        /* brand: (12) ["1", "2", "3", "4", "5", "6", "7", "8", "9", "13", "14", "15"]
            __proto__: Object */
        return { query: ctx.query };
    }  
    componentDidMount() {
        console.log("order index", this.props);
        this.setState({
            lang: localStorage.getItem('lang') ||  'en'
        })
        const { query } = this.props;
        if (query) {

            this.props.dispatch(order_list());
        }
    }


render(){
    return (
        // <div className="site-content">
        //     <HeaderDefault />
        //     <HeaderMobile />
        //     <NavigationList />
        //     {/* <PostDetailBackground /> */}
        //     <div className="container">
        //         {/* <RelatedPosts />
        //         <PostComments /> */}
        //     </div>
        //     <FooterDefault />
        // </div>
        <div className="site-content">
        <HeaderDefault />
        <HeaderMobile />
        <NavigationList />
        <div className="ps-page--simple">
            <MyOrders />
        </div>
        <Newsletters layout="container" />
        <FooterDefault />
    </div>
    );

}
   
};

export default connect(state => state.order)(OrderDefaultPage);

// export default OrderDefaultPage;
