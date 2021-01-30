import React from 'react';

import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb2 from '../../components/elements/BreadCrumb2';
import BlogSmallThumbnail from '../../components/partials/blog/BlogSmallThumbnail';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const BlogSmallThumbnailPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Blog Small Thumbnail',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--blog">
                <div className="container">
                    <div className="ps-page__header">
                        <h1>Our Press</h1>
                        <BreadCrumb2 breacrumb={breadCrumb} />
                    </div>
                    <BlogSmallThumbnail layout="right" />
                </div>
            </div>
            <Newletters />
            <FooterDefault />
        </div>
    );
};

export default BlogSmallThumbnailPage;
