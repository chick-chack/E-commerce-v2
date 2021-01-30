import React from 'react';
import Link from 'next/link';

const GardenAndKitchen = ({ data }) => (
    <div className="ps-block--categories-box">
        <div className="ps-block__header">
            <h3>Home, Garden and Kitchen</h3>
            <ul>
                <li>
                    <Link href="/shop">
                        <a>New Arrivals</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Best Sellers</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="ps-block__content">
            {data &&
                data.map(category => {
                    if (category.type === 'large') {
                        return (
                            <div className="ps-block__banner" key={category.text}>
                                <img src={category.imagePath} alt="chickchack" />
                            </div>
                        );
                    } else {
                        return (
                            <div className="ps-block__item" key={category.text}>
                                <Link href="/shop">
                                    <a className="ps-block__overlay"></a>
                                </Link>
                                <img src={category.imagePath} alt="chickchack" />
                                <p>{category.text} </p>
                                <span>{category.item} Items</span>
                            </div>
                        );
                    }
                })}
        </div>
    </div>
);

export default GardenAndKitchen;
