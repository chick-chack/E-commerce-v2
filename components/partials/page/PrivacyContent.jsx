import React from 'react';
import i18next from 'i18next';

const PrivacyContent = () => (
    <div className="ps-section--custom">
        <div className="container">
            <div className="ps-section__header">
                <h2>{i18next.t('privacypolicy')}</h2>
            </div>
            <div className="ps-section__content">
                {/* <h3>Page Content</h3> */}
                <p style={{fontSize:"20px"}}>
                  {i18next.t('privacy_1')}
                </p>
                <p style={{fontSize:"20px"}}>
              {i18next.t('privacy_2')}
                </p>
                {/* <h4>He quick, brown fox jumps over a lazy dog.</h4> */}
                <p style={{fontSize:"20px"}}>
              {i18next.t('privacy_3')}
                </p>
                <p style={{fontSize:"20px"}}>
               {i18next.t('privacy_4')}
                </p>
                <p style={{fontSize:"20px"}}>
              {i18next.t('privacy_5')}

                </p>
                <p style={{fontSize:"20px"}}>
              {i18next.t('privacy_6')}
                </p>
                <p style={{fontSize:"20px"}}>
            {i18next.t('privacy_7')}
                </p>
            </div>
        </div>
    </div>
);

export default PrivacyContent;
