
import i18n from "i18next";
import { initReactI18next} from 'react-i18next';
import commn_en from './translations/en.json';
import common_ar from './translations/ar.json';

const resources ={
    en:{
        translation:commn_en
    },
    ar: {
        translation: common_ar
    }
}
i18n
.use(initReactI18next)
.init({
    resources,
    lang:'en',
    keySeparator :false,
    interpolation :{
        escapeValue : false
    }
});

export default i18n;



/*
const NextI18Next = require('next-i18next').default;
const {localeSubpaths} = require('next/config').default().publicRuntimeConfig;
const path = require('path');

module.exports = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['ar'],
    defaultNS: 'common',
    browserLanguageDetection: false,
    serverLanguageDetection: false,
    localeSubpaths: {
        ar: 'ar'
    },
    localePath: path.resolve('./public/static/locales')

});
*/
/*


const NextI18Next = require('next-i18next').default
const path = require('path')
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig



module.exports = new NextI18Next({
    otherLanguages: ['ar'],
    defaultNS: 'common',
    localeSubpaths: {
        ar: 'ar'
    },
    localePath: path.resolve('./public/static/locales')
})
*/
/*

const NextI18Next = require('next-i18next').default
const path = require('path')



module.exports = new NextI18Next({
    otherLanguages: ['ar'],
    defaultNS: 'common',
    localeSubpaths: {
        ar: 'ar'
    },
    localePath: path.resolve('./public/static/locales')
})

*/