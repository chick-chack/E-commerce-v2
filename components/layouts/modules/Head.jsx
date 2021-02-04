import React from 'react';
import Head from 'next/head';
import { Helmet } from "react-helmet";

const StyleSheets = () => (
    <Head>
        <title>Chick Chack</title>
        <link rel="shortcut icon" href="/static/img/chickchack-logo-icon.png" />
        <link rel="icon" href="/static/img/chickchack-logo-icon.png" sizes="32x32" />
        <link rel="icon" href="/static/img/chickchack-logo-icon.png" sizes="192x192" />
        <link rel="apple-touch-icon-precomposed" href="/static/img/chickchack-logo-icon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="nouthemes" />
        <meta name="keywords" content="chickchack, React, eCommerce, Template" />
        <meta name="description" content="Chick Chack" />
        <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="/static/fonts/Linearicons/Font/demo-files/demo.css"
        />

        <link
            rel="stylesheet"
            href="/static/fonts/font-awesome/css/font-awesome.min.css"
        />

        <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/bootstrap.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/slick.min.css"
        />
        <Helmet>
            <meta charSet="utf-8" />
            <script src="https://www.paypal.com/sdk/js?client-id=AeLHkpPiNQTJVprDom78nbEtB_6x_YOO9JzxneLbm3cn8Y_dGHkm3BlBOIWxoQVKymM_IOaU4xtUYKty"></script>
        </Helmet>
        <script src="https://www.paypal.com/sdk/js?client-id=AeLHkpPiNQTJVprDom78nbEtB_6x_YOO9JzxneLbm3cn8Y_dGHkm3BlBOIWxoQVKymM_IOaU4xtUYKty" ></script>


    </Head>
);

export default StyleSheets;
