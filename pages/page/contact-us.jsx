import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newsletter from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ContactInfo from '../../components/partials/page/ContactInfo';
import ContactForm from '../../components/partials/page/ContactForm';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ContactMap from '../../components/partials/page/ContactMap';

const ContactUsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'ContactUs',
            url:'/page/contact-us'
        },
    ];

    return (
        <div className="site-content">

         
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single" id="contact-us">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-container" style={{margin:"30px 0"}}>
                    <div className="row">
                        <div className="col-md-6 col-12">
                        <ContactMap />
                        </div>
                        <div className="col-md-6 col-12">
                        <ContactForm />

                        </div>
                    </div>
                {/* <div className="ps-section__left" style={{maxWidth:"50%"}}>
                  
                </div>
                <div className="ps-section__right">
                    <ContactForm />
                </div>
                       */}
                        
              
                </div>
           
                {/* <ContactInfo /> */}
          
            </div>
            <Newsletter layout="container" />
            <FooterDefault />
    
      </div>
    );
};

export default ContactUsPage;
