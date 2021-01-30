import React from 'react';
import { baseUrl } from '~/repositories/Repository';

const ImageFromApi = ({ url, alt }) => (
    <img
        src={`${url}`}
        alt={alt ? alt: "" }
    />
);

export default ImageFromApi;
