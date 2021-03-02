import axios from 'axios';
// const baseDomain = 'http://45.76.97.89:3000';
const baseDomain ='https://portal.chickchack.net/api/v1/ecommerce';
// const baseDomain = 'https://check-chack-v2.herokuapp.com/api/v2/ecommerce';
const baseDomain1 = 'http://localhost:4000/api/v2/ecommerce';

const authorization_prefix = 'Bearer ';

export const customHeaders = {

    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
    //  Cookie: localStorage.getItem('currentCookie') ? localStorage.getItem('currentCookie')  : null
};


export const baseUrl = `${baseDomain}`;

export default axios.create({
    withCredentials: true,
    baseUrl,
    // headers: customHeaders,
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
