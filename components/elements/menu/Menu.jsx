
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import MenuDropdown from './MenuDropdown';
import { getProductByCategortyId } from '../../../store/collection/action';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        lang: null
    }

    componentDidMount() {
        this.setState({
            lang: localStorage.getItem('lang')
        })
    }

    get_new_prodct(cid) {
        console.log('-------------------------------------------------------------------------------------------------------------------------------------------')
        console.log(cid)
        this.props.dispatch(getProductByCategortyId(cid, 8, 0));
    }

    render() {
        const { data, className } = this.props;
        return (
            <ul className={className}>
                {data &&
                    data.map(item => {
                        console.log(item)
                        if (item.subMenu) {
                            return <MenuDropdown menuData={item} key={item.text} />;
                        } else if (item.megaContent) {
                            return <MegaMenu menuData={item} key={item.text} />;
                        } else {
                            return (
                                <li key={item.id}>
                                    <div >
                                        <Link href={{ pathname: '/category', query: { cid: item.id } }} >
                                            <a onClick={() => this.get_new_prodct(item.id)}>
                                                {this.state.lang === 'ar' ? item.name_ar : item.name_en}
                                            </a>
                                        </Link>
                                    </div>
                                </li>
                            );
                        }
                    })}
            </ul>
        )
    }
}
export default connect(state => state)(Menu);
// export default ;








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
