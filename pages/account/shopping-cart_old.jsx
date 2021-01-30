import React from 'react';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ShoppingCart from '../../components/partials/account/ShoppingCart';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import i18next from 'i18next';

import { connect } from 'react-redux';

import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
    getcartlist,
    add_to_cart,
    deletecartitem

} from '../../store/cart/action';

class ShoppingCartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childern: '',
        };
    }


    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() { 
            this.props.dispatch(getcartlist());

    }


    render() {
        // console.log('={{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}')
        // console.log(this.state.childern)
        // console.log(this.props)
        // console.log('={{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}')
        // const { singleProductTest } = this.props;
        // const { singleProduct } = this.props;

        // const { cartlist} =this.props;

        // console.log('={{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}',cartlist)

        const breadCrumb = [
            {
                text: i18next.t('home'),
                url: '/',
            },
            {
                text: i18next.t('shoppingcart'),
            },
        ];

        return (

            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <ShoppingCart 
                    
                    // car={cartlist}
                    
                    />
                </div>
                <Newsletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.cart)(ShoppingCartPage);




// const ShoppingCartPage = () => {
//     const breadCrumb = [
//         {
//             text: i18next.t('home'),
//             url: '/',
//         },
//         {
//             text: i18next.t('shoppingcart'),
//         },
//     ];
//     return (
//         <div className="site-content">
//             <HeaderDefault />
//             <HeaderMobile />
//             <NavigationList />
//             <div className="ps-page--simple">
//                 <BreadCrumb breacrumb={breadCrumb} />
//                 <ShoppingCart />
//             </div>
//             <Newsletters layout="container" />
//             <FooterDefault />
//         </div>
//     );

// };

// export default ShoppingCartPage;
