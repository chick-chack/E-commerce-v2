import React from 'react';

const ModuleProductDetailSharing = () => (
    // <div className="ps-product__sharing">
    //     <a className="facebook" href="http://chickchack.net/">
    //         <i className="fa fa-facebook"></i>
    //     </a>
    //     <a className="twitter" href="http://chickchack.net/">
    //         <i className="fa fa-twitter"></i>
    //     </a>
    //     <a className="google" href="http://chickchack.net/">
    //         <i className="fa fa-google-plus"></i>
    //     </a>
    //     <a className="linkedin" href="http://chickchack.net/">
    //         <i className="fa fa-linkedin"></i>
    //     </a>
    //     <a className="instagram" href="http://chickchack.net/">
    //         {/* <i className="fa fa-instagram"></i> */}
    //         <span className="fa fa-instagram"></span>
    //     </a>
    // </div>
    <div>
           <ul className="ps-list--social-product">
                    <li>
                        <a 
                         className="facebook" 
                        href="https://www.facebook.com/ChickChackMall/" target="_blank">
                                <span className="fa fa-facebook"></span>
                            {/* <i className="fa fa-facebook"></i> */}
                        </a>
                    </li>
                    <li>
                        <a 
                        className="twitter" 
                        href="https://twitter.com/chickchack7">
                            <span className="fa fa-twitter"></span>
                            {/* <i className="fa fa-twitter"></i> */}
                        </a>
                    </li>
                    {/* <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li> */}
                       <li>
                        <a 
                        className="linkedin"
                         href="https://www.linkedin.com/in/chick-chack-3231901b2/">
                              <span className="fa fa-linkedin"></span>
                            {/* <i className="fa fa-linkedin"></i> */}
                        </a>
                    </li>
                
                    <li>
                        <a 
                        className="instagram"
                         href="https://www.instagram.com/chickchack2/?hl=en" target="_blank">
                            {/* <i className="fa fa-instagram"></i> */}
                            <span className="fa fa-instagram"></span>
                        </a>
                    </li>
                </ul>
            
    </div>
);

export default ModuleProductDetailSharing;