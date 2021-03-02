import React from 'react';
import Link from 'next/link';
import { baseUrl } from '../../../repositories/Repository';
import i18next from 'i18next';
// import mall_pic from '../../../../public/static/img/amman.jpg'
// import dubai_pic from '../../../../public/static/img/dubaimall.jpg';

const BannerItem = ({ mall }) => {
    if (mall) {
        return (
            <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img 
                    // src={mall.image} 
                    src='/static/img/dubaimall.jpg'
                    alt="chickchack" />
                    <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", flexFlow: "column" }}>
                        <p style={{ color: "#ffffff", fontSize: "1.8rem", fontWeight: "600" }}>{ localStorage.getItem("lang") === "ar" ? mall.name_ar
                            : mall.name_en}</p>
                        <Link 
                        href={{   pathname: '/mall', query: {
                            mallname: localStorage.getItem("lang") === "ar" ? mall.name_ar
                            : mall.name_en, mallid: mall.id
                                }
                            }}
                        >
                            <a 
                            className="ps-btn" style={{ padding: "10px 15px" }}>{i18next.t('view')}</a>
                        </Link>
                    </div>
                </div>
            </div>
        );
        return (
            <Link href="/shop">
                <a>
                    <img src={`${baseUrl}${source.image.url}`} alt="martfury" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href="/">
                <a>
                    <a className="ps-collection">
                        {/* <img src="/static/img/not-found.jpg" alt="chickchack" /> */}
                        <img src={mall.image} alt="chickchack" />
                        <h2> hi</h2>
                    </a>
                </a>
            </Link>
        );
    }
};

export default BannerItem;

