import React from 'react';
import Link from 'next/link';
import { baseUrl } from '../../../repositories/Repository';

const Promotion = ({ link, image }) => {
    if (image) {
        return (
            <Link href={link}>
                <a className="ps-collection">
                    <img src={image} alt="chickchack"  style={{padding:"3px"}}/>
                    {/* <img src="http://45.76.97.89:3000/uploads/promotion_1_d6deb591f0.jpeg" alt="chickchack" /> */}
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={link ? link : '/shop'}>
                <a className="ps-collection">
                    <img src="/static/img/not-found.jpg" alt="chickchack" style={{padding:"3px"}}/>
                    {/* <img src="http://45.76.97.89:3000/uploads/promotion_1_d6deb591f0.jpeg" alt="chickchack" /> */}
                </a>
            </Link>
        );
    }
};



export default Promotion;
