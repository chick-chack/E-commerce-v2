import React from 'react';
import Link from 'next/link';
import { baseUrl } from '../../../repositories/Repository';
import i18next from 'i18next';

const BannerItem = ({ source , text_1, text_2}) => {
    if (source) {
        return (
            <Link href="http://chickchack.net/">
                <a style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    {/* <img src={`${baseUrl}${source.image.url}`} alt="chickchack" /> */}
                    <img src={source} alt="chickchack" />
                    <div  style={{ position:"absolute", display:"flex", alignItems:"center", justifyContent:"center", flexFlow:"column"}}> 
                    <p style={{color:"#ffffff", fontSize:"22px", fontWeight:"600"}}> {i18next.t(text_1)}</p>
                    <Link href="http://chickchack.net/">
                        <a  href="http://chickchack.net/" className="ps-btn">{i18next.t('joinus')}</a>
                        </Link>
                    </div>
                   
                </a>
            </Link>
        );
    } else {
        return (
            <Link href="/">
                <a>
                    <a className="ps-collection">
                        {/* <img src="/static/img/not-found.jpg" alt="chickchack" /> */}
                        <img src={source} alt="chickchack" />
                        <h2> hi</h2>
                    </a>
                </a>
            </Link>
        );
    }
};

export default BannerItem;

