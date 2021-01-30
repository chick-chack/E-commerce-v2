
import axios from 'axios';
import '../i18next';
import i18next from 'i18next';



export const stickyHeader = () => {
    let number =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    const header = document.getElementById('headerSticky');
    if (header !== null) {
        if (number >= 300) {
            header.classList.add('header--sticky');
          //  console.log("header", header)
        } else {
            header.classList.remove('header--sticky');
           // console.log("header", header);
           // console.log("hegffgader", header)
        }
    }
};

