import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BlogDetailSidebar from '../../components/partials/blog/BlogDetailSidebar';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';

const BlogLeftSidebar = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Our Press',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
        
        </div>
    );
};

export default BlogLeftSidebar;
