import axios from 'axios';
// const baseDomain = 'http://45.76.97.89:3000';
const baseDomain = 'https://portal.chickchack.net/api/v1/ecommerce';
const authorization_prefix = 'Bearer ';

export const customHeaders = {

    withCredentials: true,
    // Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
    //  Cookie: localStorage.getItem('currentCookie') ? localStorage.getItem('currentCookie')  : null
};

export const options = data => {
    return ({
        method: data.method,
        withCredentials: true,
        // headers: {
        //     Accept: 'application/json'
        // },
        data: data.data,
        url: "https://portal.chickchack.net/api/v1/ecommerce" + data.url
    })
};

export const options_auth = data => {
    return ({
        method: data.method,
        withCredentials: true,
        // headers: {
        //     Accept: 'application/json',
        // }, 
        data: data.data,
        url: "https://portal.chickchack.net/api/v1/ecommerce" + data.url
    })
};

export const options_ = data => {
    return ({
        method: data.method,
        withCredentials: false,
        // headers: {
        //     Accept: 'application/json'
        // },

        url: "https://portal.chickchack.net/api/v1/ecommerce" + data.url
    })
};


export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};




// import axios from 'axios';
// // const baseDomain = 'http://45.76.97.89:3000';
// const baseDomain = 'https://portal.chickchack.net/api/v1/ecommerce';
// const authorization_prefix = 'Bearer ';

// export const customHeaders = {
//     Accept: 'application/json',
//     /* Authorization: authorization_prefix + token || undefined*/
//     //  Cookie: localStorage.getItem('currentCookie') ? localStorage.getItem('currentCookie')  : null
// };

// export const baseUrl = `${baseDomain}`;

// export default axios.create({
//     baseUrl,
//     headers: customHeaders,
// });

// export const serializeQuery = query => {
//     return Object.keys(query)
//         .map(
//             key =>
//                 `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
//         )
//         .join('&');
// };
