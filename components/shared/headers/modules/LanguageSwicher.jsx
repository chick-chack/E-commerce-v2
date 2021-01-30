import React, { Component } from 'react';
import { notification } from 'antd';
//import { i18n } from './../../../../i18next';
//import styled from "@emotion/styled";
import { useContext } from 'react'
import { I18nContext } from 'next-i18next';
import i18next from 'i18next';

function LanguageSwicher ()  {
    
   // const { i18n: { language } } = useContext(I18nContext);
   const changeLang=(option)=> {
    localStorage.setItem('lang',option);
    window.location.reload();
    
}

        return (
            <div className="ps-dropdown language">
               {i18next.t('selectlanguage')}
            {/*
             <select name="language" className="custome-select pull-right" onChange={this.changeLang} value={lang}>
                                        <option value="en"> {i18next.t('Enlanguage')}</option>
                                        <option value="ar"> {i18next.t('Arlanguage')}</option>
                                    </select>
            */}
             <ul className="ps-dropdown-menu">
                <li>
                    <a
                      
                        onClick={() => changeLang('ar')}>
                        {/* <img src="/static/img/flag/germany.png" alt="chickchack" /> */}
                        {i18next.t('arabic')}
                    </a>
                </li>
                <li>
                    <a
                     
                        onClick={() => changeLang('en')}>
                        {/* <img src="/static/img/flag/fr.png" alt="chickchack" /> */}
                        {i18next.t('english')}
                    </a>
                </li>
            </ul>
            {/*
            <ul className="ps-dropdown-menu">
                <li>
                    <a
                      
                        onClick={() => i18n.changeLanguage('ar')}>
                        <img src="/static/img/flag/germany.png" alt="chickchack" />
                        AR
                    </a>
                </li>
                <li>
                    <a
                     
                        onClick={() => i18n.changeLanguage('en')}>
                        <img src="/static/img/flag/fr.png" alt="chickchack" />
                        EN
                    </a>
                </li>
            </ul>
            */}
        </div>
        );
    }


export default LanguageSwicher;




/*

    <ul className="ps-dropdown-menu">
             
                </ul>
                <button type="button" onClick={() => i18n.changeLanguage('ar')} className={language === 'ar' ? 'is-active': ''}>AR</button>
            <button type="button" onClick={() => i18n.changeLanguage('en')} className={language === 'en' ? 'is-active': ''}>EN</button>



import React, { Component } from 'react';
import { notification } from 'antd';
class LanguageSwicher extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <div className="ps-dropdown language">
                <a href="#" onClick={this.handleFeatureWillUpdate.bind(this)}>
                    <img src="/static/img/flag/en.png" alt="chickchack" />
                    English
                </a>
                <ul className="ps-dropdown-menu">
                    <li>
                        <a
                            href="#"
                            onClick={this.handleFeatureWillUpdate.bind(this)}>
                            <img src="/static/img/flag/germany.png" alt="chickchack" />
                            Germany
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={this.handleFeatureWillUpdate.bind(this)}>
                            <img src="/static/img/flag/fr.png" alt="chickchack" />
                            France
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LanguageSwicher;


*/

/*

 <ul className="ps-dropdown-menu">
                    <li>
                    <a  onClick={() =>  i18n.changeLanguage('en')} >
                    <img src="/static/img/flag/en.png" alt="chickchack" />
                    English
                </a>
                    </li>
                    <li>
                        <a onClick={() =>  i18n.changeLanguage('ar')}>
                            <img src="/static/img/flag/germany.png" alt="chickchack" />
                            Arabic
                        </a>
                    </li>
                   
                </ul>

                 
        const { i18n: { language } } = useContext(I18nContext);
                
                   <button type="button" onClick={() => i18n.changeLanguage('ar')} className={language === 'ar' ? 'is-active': ''}>AR</button>
            <button type="button" onClick={() => i18n.changeLanguage('en')} className={language === 'en' ? 'is-active': ''}>EN</button>
                */
