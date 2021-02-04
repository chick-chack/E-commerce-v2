

const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
/*
const {nextI18NextRewrites} = require('next-i18next/rewrites');

const localeSubpaths = {
    en: 'en',
    ar: 'ar',
};

*/



// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()

//////////////////////


const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    },
};

module.exports = withPlugins([withImages()]);


/*
module.exports={
    rewrites: async ()=> nextI18NextRewrites(localeSubpaths)
}*/



/*


const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    ar: 'ar'
}

 { rewrites: async ()=> nextI18NextRewrites(localeSubpaths)}


*/
