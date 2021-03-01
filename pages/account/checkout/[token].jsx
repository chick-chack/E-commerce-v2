import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { connect } from 'react-redux';

// import Head from "next/head";
// import Newsletters from '../../../components/partials/commons/Newletters';
import FooterDefault from '../../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../../components/elements/BreadCrumb';
import Checkout from '../../../components/partials/account/Checkout';
import HeaderMobile from '../../../components/shared/headers/HeaderMobile';
import NavigationList from '../../../components/shared/navigation/NavigationList';
import i18next from 'i18next';
import { unityLogin } from '../../../store/auth/action';

// import { Helmet } from "react-helmet";

const OrderTrackingPage = (props) => {
  const router = useRouter();
  useEffect(() => {
    console.log(props);
    const request = async () => {
      try {
        props.dispatch(unityLogin(router.query.token));
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);

  useEffect(() => {
    console.log(props.isLoggedIn);
    if (props.isLoggedIn === false) {
      Router.push('/');
    }
  }, [props.isLoggedIn]);

  const breadCrumb = [
    {
      text: i18next.t('home'),
      url: '/',
    },
    {
      text: i18next.t('shoppingcart'),
      url: '/account/shopping-cart',
    },
    {
      text: i18next.t('checkoutinfo'),
      url: '/account/checkout',
    },
  ];
  return (
    <div className="site-content">
      <HeaderDefault />
      <HeaderMobile />
      <NavigationList />
      <div className="ps-page--simple">
        <BreadCrumb breacrumb={breadCrumb} />
        <Checkout />
      </div>
      {/* <Newsletters layout="container" /> */}
      <FooterDefault />
    </div>
  );
};

// export default OrderTrackingPage;
const mapStateToProps = (state) => {
  return state.auth;
};
export default connect(mapStateToProps)(OrderTrackingPage);
