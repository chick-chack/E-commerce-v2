import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../store/store';
import DefaultLayout from '../components/layouts/DefaultLayout';
import '../scss/style.scss';
import '../scss/home-default.scss';
import '../scss/market-place-1.scss';
import '../scss/market-place-2.scss';
import '../scss/market-place-3.scss';
import '../scss/market-place-4.scss';
import '../scss/electronic.scss';
import '../scss/furniture.scss';
import '../scss/organic.scss';
import '../scss/technology.scss';
import '../scss/autopart.scss';
import '../scss/electronic.scss';
import 'react-rater/lib/react-rater.css';
import 'react-phone-input-2/lib/style.css';
import '../components/elements/magiczoom/scss/_react-magic-zoom.scss';
import axios from 'axios';
import i18next from 'i18next';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.store);
  }

  state = {
    lang: null,
  };
  getInitialProps() {}
  componentDidMount() {
    this.setState({ lang: localStorage.getItem('lang') || 'en' });

    i18next.changeLanguage(this.state.lang);
    if (this.state.lang === 'ar') {
      document.getElementById('__next').classList.add('rtlpage');
    }

    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);

    this.setState({ open: true });
    //console.log("loaded", document.getElementById('__next') )
  }
  render() {
    i18next.changeLanguage(this.state.lang);
    if (this.state.lang === 'ar') {
      document.getElementById('__next').classList.add('rtlpage');
    }

    const { Component, pageProps, store } = this.props;

    const getLayout =
      Component.getLayout || ((page) => <DefaultLayout children={page} />);
    return getLayout(
      <Provider store={store}>
        <PersistGate
          loading={<Component {...pageProps} />}
          persistor={this.persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
