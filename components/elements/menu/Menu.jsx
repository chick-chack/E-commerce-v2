
import Link from 'next/link';

import MegaMenu from './MegaMenu';
import MenuDropdown from './MenuDropdown';

//const Menu = ({ data, className }) => (

import React, { Component } from 'react';
class Menu extends Component {
    constructor(props) {
        super(props);
    }
    state={
        lang:null
    }

    componentDidMount(){
        this.setState({
            lang: localStorage.getItem('lang')
        })
    }
    render(){
        const { data, className } = this.props;
        return(
            <ul className={className}>
            {data &&
                data.map(item => {
                    if (item.subMenu) {
                        return <MenuDropdown menuData={item} key={item.text} />;
                    } else if (item.megaContent) {
                        return <MegaMenu menuData={item} key={item.text} />;
                    } else {
                        return (
                            <li key={item.id}>
                                 {/* <Link
                                    href={`category/[cid]`}
                                    //  href={`${item.url}/[pid]`}
                                      as={`category/${item.id}`}
                                      >
                                        <a>
                                            {this.state.lang==='ar' ? item.name_ar :item.name_en  }
                                            </a>
                                    </Link> */}

                                    <Link  href={{
                                                    pathname: '/category', query: {
                                                    // categoryname: localStorage.getItem("lang") === "ar" ?  item.name_ar
                                                    //         : item.name_en,
                                                             cid: item.id
                                                    }
                                                }} >
                                       <a>
                                            {this.state.lang==='ar' ? item.name_ar :item.name_en  }
                                            </a>
                                    </Link>


                            </li>
                        );
                    }
                })}
         
        </ul>
        )
    }}
export default Menu;








// import React from 'react';
// import Link from 'next/link';

// import MegaMenu from './MegaMenu';
// import MenuDropdown from './MenuDropdown';

// const Menu = ({ data, className }) => (
//     <ul className={className}>
//         {data &&
//             data.map(item => {
//                 if (item.subMenu) {
//                     return <MenuDropdown menuData={item} key={item.text} />;
//                 } else if (item.megaContent) {
//                     return <MegaMenu menuData={item} key={item.text} />;
//                 } else {
//                     return (
//                         <li key={item.text}>
//                             {item.type === 'dynamic' ? (
//                                 <Link href={`${item.url}/[pid]`} as={`${item.url}/${item.endPoint}`}>
//                                     <a>{item.text}</a>
//                                 </Link>
//                             ) : (
//                                 <Link href={item.url} as={item.alias}>
//                                     <a>{item.text}</a>
//                                 </Link>
//                             )}
//                         </li>
//                     );
//                 }
//             })}
//     </ul>
// );

// export default Menu;
