import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/elements/ModuleProductDetailSharing';
// import ModuleProductDetailSpecification from '~/components/elements/detail/modules/elements/ModuleProductDetailSpecification';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/elements/ModuleProductDetailDescription';
import ImageFromApi from '~/components/elements/detail/modules/elements/ImageFromApi';
import Rating from '~/components/elements/Rating';
import ThumbnailHasVariant from '~/components/elements/detail/modules/thumbnail/ThumbnailHasVariant';
import { addItem, add_to_cart, getcartlist } from '~/store/cart/action';
import { addItemToCompare } from '~/store/compare/action';
import { addItemToWishlist } from '~/store/wishlist/action';
import { formatCurrency } from '../../../../utilities/product-helper';
import MagicTest from 'components/reactMagicZoom/magic';
import MagicZoom from 'react-magic-zoom';
import Router from 'next/router';
import Rater from 'react-rater';
import { notification } from 'antd';
import i18next from 'i18next';

const modalWarning = (type, item) => {
    notification[type]({
        message: 'Warning',
        description: "you can't add more, Only " + item + " left in stock",
        duration: 3,
    });
};

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};

const modalAsking = (type) => {
    notification[type]({
        message: 'Warning',
        description: 'Please choose the color and size you  need!',
        duration: 1,
    });
};


class ModuleProductHasVariants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            selectedVariant: null,
            selectedSize: null,
            sizeItems: null,
            colorItems: null,
            price: null, has_zise: false, has_color: false,
            has_zise_first: false, has_color_first: false,
            final_QTY:1,
            reflectoinItem: null,
            reflectionChanged: null
            
        };
        this.handleRefreshReflection = this.handleRefreshReflection.bind(this);
    }


    handleRefreshReflection(item) {
        this.setState({
            reflectoinItem: item,
            reflectionChanged: new Date(),
        });
    };

    getReflectoinItem() {
        return this.refs.id && this.refs.id.getReflection();
    }


    static async getInitialProps(ctx) {
       
        return { query: ctx.query };
    }


    handleAddItemToCart = e => {
        if (this.props.childern_ID) {
            if (this.props.cart.cartlist) {
                if (this.props.cart.cartlist.length > 0) {
                    let existItem = this.props.cart.cartlist.find(
                        item => item['productChild.id'] == this.props.childern_ID
                    )
                    if (existItem) {
                        existItem.quantity = this.state.quantity;
                     
                    }
                    else {
                        let index = this.props.product.singleProduct.productChildren_orginal.findIndex(
                            (item) => item.id == this.props.childern_ID
                        );
                    
                        const newProduct = {
                            "productChild.colorCode": this.props.product.singleProduct.productChildren_orginal[index].colorCode,
                            "productChild.colorName_ar": this.props.product.singleProduct.productChildren_orginal[index].colorName_ar,
                            "productChild.colorName_en": this.props.product.singleProduct.productChildren_orginal[index].colorName_en,
                            "productChild.id": this.props.product.singleProduct.productChildren_orginal[index].id,
                            //    "productChild.id":this.props.product.singleProduct.productChildren_orginal[index].productId,
                            "productChild.image": this.props.product.singleProduct.productChildren_orginal[index].image,
                            " productChild.isOffer": this.props.product.singleProduct.productChildren_orginal[index].isOffer,
                            "productChild.offerRatio": this.props.product.singleProduct.productChildren_orginal[index].offerRatio,
                            "productChild.price": this.props.product.singleProduct.productChildren_orginal[index].price,
                            "productChild.product.name_ar": this.props.product.singleProduct.name_ar,
                            "productChild.product.name_en": this.props.product.singleProduct.name_en,
                            " productChild.size": this.props.product.singleProduct.productChildren_orginal[index].size,
                            " productChildId": this.props.product.singleProduct.productChildren_orginal[index].id,
                            //" productChildId":this.props.product.singleProduct.productChildren_orginal[index].productId,
                            "quantity": this.state.quantity
                            // updatedAt: "2021-01-20T07:53:56.844Z"
                        }
                        this.props.cart.cartlist.push(newProduct)
                    }
                } else {
                    let index = this.props.product.singleProduct.productChildren_orginal.findIndex(
                        (item) => item.id == this.props.childern_ID
                    );
                 
                    const newProduct = {
                        "productChild.colorCode": this.props.product.singleProduct.productChildren_orginal[index].colorCode,
                        "productChild.colorName_ar": this.props.product.singleProduct.productChildren_orginal[index].colorName_ar,
                        "productChild.colorName_en": this.props.product.singleProduct.productChildren_orginal[index].colorName_en,
                        "productChild.id": this.props.product.singleProduct.productChildren_orginal[index].id,
                        //"productChild.id":this.props.product.singleProduct.productChildren_orginal[index].productId,
                        "productChild.image": this.props.product.singleProduct.productChildren_orginal[index].image,
                        " productChild.isOffer": this.props.product.singleProduct.productChildren_orginal[index].isOffer,
                        "productChild.offerRatio": this.props.product.singleProduct.productChildren_orginal[index].offerRatio,
                        "productChild.price": this.props.product.singleProduct.productChildren_orginal[index].price,
                        "productChild.product.name_ar": this.props.product.singleProduct.name_ar,
                        "productChild.product.name_en": this.props.product.singleProduct.name_en,
                        " productChild.size": this.props.product.singleProduct.productChildren_orginal[index].size,
                        " productChildId": this.props.product.singleProduct.productChildren_orginal[index].id,
                        "quantity": this.state.quantity
                    }
                    this.props.cart.cartlist.push(newProduct)
                }

            }

            let QTY= this.state.quantity - this.state.final_QTY;
            
            this.props.dispatch(add_to_cart(this.props.childern_ID,  QTY))

            modalSuccess('success');
            Router.push('/account/shopping-cart')
        }


        else {
           // alert("please choose the size and color")
             modalAsking('warning');
        }
        // let tempProduct = product;
        // tempProduct.quantity = this.state.quantity;
        // this.props.dispatch(addItem(product));
        //this.props.dispatch(add_to_cart( this.props.childern_ID, this.state.quantity))
        //this.props.dispatch(getcartlist());


    };

    handleAddItemToCompare = e => {
        e.preventDefault();
        if (this.props.childern_ID) {  
            let childProduct = this.props.product.singleProduct.productChildren_orginal.find(
                (item) => item.id == this.props.childern_ID);
            this.props.dispatch(addItemToCompare(this.props.product.singleProduct,childProduct ));
        }
        else{
            modalAsking('warning');
        }
    };

    
    
    // {
    //     e.preventDefault();
    //     const { singleProduct } = this.props.product;
    //     this.props.dispatch(addItemToCompare(singleProduct));
    // };

    // handleAddItemToWishlist = e => {
    //     e.preventDefault();
    //     const { singleProduct } = this.props.product;
    //     this.props.dispatch(addItemToWishlist(singleProduct));
    // };

    
    handleAddItemToWishlist = e => {
        e.preventDefault();
        if (this.props.childern_ID) {  
            let childProduct = this.props.product.singleProduct.productChildren_orginal.find(
                (item) => item.id == this.props.childern_ID);
            this.props.dispatch(addItemToWishlist(this.props.product.singleProduct,childProduct ));
        }
        else{
            modalAsking('warning');
        }
    };


    handleIncreaseItemQty = e => {
        e.preventDefault();

        if (this.props.childern_ID) {
            let test = this.props.product.singleProduct.productChildren_orginal.find(
                (item) => item.id == this.props.childern_ID);
             if(test){
                if (test.quantity > this.state.quantity) {
                    this.setState({ quantity: this.state.quantity + 1 });
                } else {
                    modalWarning('warning', this.state.quantity);
                }
             }   
        }
        
        else{
            modalAsking('warning');
        }
    };

    handleDecreaseItemQty = e => {
        e.preventDefault();
        // if (this.state.quantity > 1) {
        //     this.setState({ quantity: this.state.quantity - 1 });
        // }
        if (this.props.childern_ID) {

            if (this.state.quantity > 1) {
                this.setState({ quantity: this.state.quantity - 1 });
            }

        }else{
            modalAsking('warning');
        }
    };

    // select color 
    handleSelectColor(colorId) {
        // const router = useRouter()
        if (this.props.childern_ID != undefined && this.props.childern_ID == colorId) { } else {
            Router.push('/product/' + this.props.product.singleProduct.id + '?id=' + colorId)
        }
        const { singleProduct } = this.props.product;
        this.setState({ has_color: true })
        if (this.state.has_zise_first) {
            if (singleProduct && singleProduct.productChildren_size.length > 0) {
                const selectedChild_z_f = singleProduct.productChildren_size.find(
                    item => item.id === this.state.selectedSize.id
                );
                const selectedVariant = selectedChild_z_f.colors.find(
                    item => item.id === colorId
                );
          
                if (selectedVariant) {
                    const sizeItems = selectedVariant.sizes;
                    this.setState({ sizeItems: sizeItems });
                 
                }
                this.setState({ selectedVariant: selectedChild_z_f });
                this.setState({ selectedChild_z_f: selectedVariant });
            }
        } else {
            this.setState({ has_color_first: true });
           
            var selectedVariant;
            if (singleProduct && singleProduct.productChildren.length > 0) {
                const selectedVariantt = singleProduct.productChildren.find(item => item.id == colorId);
               
                if (selectedVariantt == undefined) {
                    for (var i = 0; i < singleProduct.productChildren.length; i++) {
                        for (var j = 0; j < singleProduct.productChildren[i].sizes.length; j++) {
                            if (this.props.childern_ID == singleProduct.productChildren[i].sizes[j].id) {
                                selectedVariant = singleProduct.productChildren[i];
                                this.setState({ selectedSize: singleProduct.productChildren[i].sizes[j] });
                            }
                        }
                    }
                } else {
                    selectedVariant = singleProduct.productChildren.find(item => item.id == colorId);
                    for (var i = 0; i < singleProduct.productChildren.length; i++) {
                        for (var j = 0; j < singleProduct.productChildren[i].sizes.length; j++) {
                            if (this.props.childern_ID == singleProduct.productChildren[i].sizes[j].id) {
                                this.setState({ selectedSize: singleProduct.productChildren[i].sizes[j] });
                            }
                        }
                    }
                }
             
                if (selectedVariant) {
                    const sizeItems = selectedVariant.sizes;
                    this.setState({ sizeItems: sizeItems });
                }
                this.setState({ selectedVariant: selectedVariant });
            }
        }
    }

    // select size 
    handleSelectSize(sizeId) {
        if (this.props.childern_ID != undefined && this.props.childern_ID == sizeId) { } else {
            Router.push('/product/' + this.props.product.singleProduct.id + '?id=' + sizeId)
        }
        const { singleProduct } = this.props.product;
        if (this.props.childern_ID != undefined) {
            this.setState({ has_zise: true })
            let item = singleProduct.productChildren.find(item => item.id == sizeId)
            if (item == undefined) {
                for (var i = 0; i < singleProduct.productChildren.length; i++) {
                    for (var j = 0; j < singleProduct.productChildren[i].sizes.length; j++) {
                        if (this.props.childern_ID == singleProduct.productChildren[i].sizes[j].id) {
                            const selectedVariant = singleProduct.productChildren[i].sizes[j];
                            this.setState({ selectedSize: singleProduct.productChildren[i].sizes[j] });
                        }
                    }
                }
            } else {
                const selectedVariant = item.sizes; console.log(singleProduct.productChildren)
                if (selectedVariant.length > 0) {
                    const selectedSizeItem = selectedVariant.find(item => item.id === sizeId);
                    if (selectedSizeItem) {
                        this.setState({ selectedSize: selectedSizeItem });
                    }
                }
            }

        } else if (this.state.has_color_first) {
            this.setState({ has_zise: true })
            const selectedVariant = this.state.selectedVariant.sizes;
            if (selectedVariant.length > 0) {
                const selectedSizeItem = selectedVariant.find(item => item.id === sizeId);
                if (selectedSizeItem) {
                    this.setState({ selectedSize: selectedSizeItem });
                }
            }
        } else {
            this.setState({ colorItems: this.props.product.singleProduct.productChildren_size.find(item => item.id === sizeId) });
            this.setState({ has_zise_first: true, selectedChild_z_f: undefined });
            const selectedVariant = this.props.product.singleProduct.productChildren_size;
            if (selectedVariant.length > 0) {
                const selectedSizeItem = selectedVariant.find(item => item.id === sizeId);
                if (selectedSizeItem) {
                    this.setState({ selectedSize: selectedSizeItem });
                }
            }
        }
    }

    componentDidMount() {
        const { id } = this.props;
        this.props.dispatch(getcartlist());
        
        const { product } = this.props;
        if (this.props.childern_ID != undefined && this.props.childern_ID != null && this.props.childern_ID != '') {
            for (var i = 0; i < product.singleProduct.productChildren.length; i++) {
                for (var j = 0; j < product.singleProduct.productChildren[i].sizes.length; j++) {
                    if (this.props.childern_ID == product.singleProduct.productChildren[i].sizes[j].id) {
                        this.handleSelectColor(this.props.childern_ID);
                        this.setState({ has_color_first: true });
                        this.handleSelectSize(this.props.childern_ID);
                    }
                }
            }


        } else {
            if (product.singleProduct && product.singleProduct.productChildren.length > 0) {
                this.setState({ selectedVariant: product.singleProduct.productChildren[0] });
            }
        }
        if (this.props.childern_ID) {
            if (this.props.cart.cartlist) {
                if (this.props.cart.cartlist.length > 0) {
                    let existItem = this.props.cart.cartlist.find(
                        item => item['productChild.id'] == this.props.childern_ID
                    )
                    if (existItem) {
                        this.setState({
                            quantity: existItem.quantity,
                            final_QTY:existItem.quantity
                        })
                        // existItem.quantity += this.state.quantity
                     
                    }
                 
                } 

            }
         
        }
    

    }

    render() {

        let reflectoinItem1 = this.getReflectoinItem(),
        reflectionOpt = {
            type: 'donor',
            position: {
                left: '100%',
                top: '10%'
            },
            size: {
                height: 100,
                width: 300
            }

        };



        const { currency } = this.props.setting;
        const { singleProduct } = this.props.product;

        const { selectedVariant, selectedChild_z_f, selectedSize, sizeItems, colorItems } = this.state;
        let variants, sizeSelectionArea, colorSelectionArea, priceArea, thumbnailArea, ModuleProductDetailSpecification;
        if (selectedVariant !== null) {
            if (this.props.childern_ID && this.props.childern_ID != undefined) {
                let index = this.props.product.singleProduct.productChildren_orginal.findIndex(item =>
                    item.id == this.props.childern_ID)

                priceArea = (
                    <h4 className="ps-selectedVariant__price">
                        {this.props.product.singleProduct.productChildren_orginal[index].isOffer === true ? (
                            <p className="ps-product__price sale" style={{ display: "flex" }}>
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(this.props.product.singleProduct.productChildren_orginal[index].price - ((this.props.product.singleProduct.productChildren_orginal[index].price * this.props.product.singleProduct.productChildren_orginal[index].offerRatio) / 100))}
                                <del className="ml-2">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(this.props.product.singleProduct.productChildren_orginal[index].price)}
                                </del>
                                <small>{this.props.product.singleProduct.productChildren_orginal[index].offerRatio}% off</small>

                            </p>
                        ) : (
                                <p className="ps-product__price">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(this.props.product.singleProduct.productChildren_orginal[index].price)}
                                </p>
                            )}
                    </h4>
                );
            }
            else {
                let index = this.props.product.singleProduct.productChildren_orginal.findIndex(item =>
                    item.colorCode == null)

                priceArea = (
                    <h4 className="ps-selectedVariant__price">
                        {this.props.product.singleProduct.productChildren_orginal[index].isOffer === true ? (
                            <p className="ps-product__price sale" style={{ display: "flex" }}>
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(this.props.product.singleProduct.productChildren_orginal[index].price - ((this.props.product.singleProduct.productChildren_orginal[index].price * this.props.product.singleProduct.productChildren_orginal[index].offerRatio) / 100))}
                                <del className="ml-2">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(this.props.product.singleProduct.productChildren_orginal[index].price)}
                                </del>
                                <small>{this.props.product.singleProduct.productChildren_orginal[index].offerRatio}% off</small>

                            </p>
                        ) : (
                                <p className="ps-product__price">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(this.props.product.singleProduct.productChildren_orginal[index].price)}
                                </p>
                            )}
                    </h4>
                );
            }
            thumbnailArea = <ThumbnailHasVariant product={selectedVariant} />;
        }
        else {

        }

        if (singleProduct) {
            ModuleProductDetailSpecification = (
                <div className="ps-product__specification">
                    <Link href="/page/blank">
                        <a className="report">{i18next.t('report')}</a>
                    </Link>
                    {localStorage.getItem('lang') === 'en'
                        ?
                        <p className="categories">
                            <strong> {i18next.t('categories')}:</strong>
                            <Link href="#">
                                <a>{singleProduct.mainCategory.name_en}</a>
                            </Link>
                            <Link href="#">
                                <a>{singleProduct.subCategory.name_en}</a>
                            </Link>
                            <Link href="#">
                                <a>{singleProduct.subSubCategory.name_en}</a>
                            </Link>
                        </p>
                        : <p className="categories">
                            <strong> {i18next.t('categories')}:</strong>
                            <Link href="#">
                                <a>{singleProduct.mainCategory.name_ar}</a>
                            </Link>
                            <Link href="#">
                                <a>{singleProduct.subCategory.name_ar}</a>
                            </Link>
                            <Link href="#">
                                <a>{singleProduct.subSubCategory.name_ar}</a>
                            </Link>
                        </p>
                    }

                    <p className="tags">
                        <strong> {i18next.t('tags')}</strong>
                        {singleProduct.tags.map(item => {
                            return (
                                <Link href="#">
                                    <a>{item}</a>
                                </Link>
                            )
                        })}

                    </p>
                </div>
            )

            if (this.state.has_zise_first) {
                colorSelectionArea = colorItems.colors.map(item => {
                    return (
                        < div
                            className={`ps-variant ps-variant--image ${selectedChild_z_f &&
                                selectedChild_z_f.id === item.id
                                ? 'active'
                                : ''
                                }`
                            }
                            key={item.id}
                            onClick={e => this.handleSelectColor(item.id)}>
                            <span className="ps-variant__tooltip">
                                {item.colorName_en}
                            </span>
                            {
                                colorItems.images[0] != undefined ? (
                                    <ImageFromApi
                                        url={colorItems.images[0]}
                                        alt={item.colorName_en}
                                    />
                                ) : (
                                        ''
                                    )
                            }
                        </div >
                    );
                });
            }

            else {
                colorSelectionArea = singleProduct.productChildren.map(item => {
                    return (
                        <div
                            className={`ps-variant ps-variant--image ${selectedVariant &&
                                selectedVariant.id === item.id
                                ? 'active'
                                : ''
                                }`}
                            key={item.id}
                            onClick={e => this.handleSelectColor(item.id)}>
                            <span className="ps-variant__tooltip">
                                {item.colorName_en}
                            </span>
                            {item.images != undefined ? (
                                <ImageFromApi
                                    url={item.images[0]}
                                    alt={item.colorName_en}
                                />
                            ) : (
                                    ''
                                )}
                        </div>
                    );


                });
            }

            if (this.state.has_color_first) {
                console.log(sizeItems)
                sizeSelectionArea = sizeItems.map(item => {
                    return (
                        <div
                            className={`ps-variant ps-variant--size ${selectedSize && selectedSize.id === item.id
                                ? 'active'
                                : ''
                                }`}
                            key={item.id}
                            onClick={e => this.handleSelectSize(item.id)}
                        >
                            <span className="ps-variant__tooltip">
                                {item.size}
                            </span>
                            <span className="ps-variant__size">
                                {item.size}
                            </span>
                        </div>
                    );
                });
            }

            else {
                sizeSelectionArea = singleProduct.productChildren_size.map(item => {
                    return (
                        <div
                            className={`ps-variant ps-variant--size ${selectedSize && selectedSize.id === item.id
                                ? 'active'
                                : ''
                                }`}
                            key={item.id}
                            onClick={e => this.handleSelectSize(item.id)}
                        >
                            <span className="ps-variant__tooltip">
                                {item.size}
                            </span>
                            <span className="ps-variant__size">
                                {item.size}
                            </span>
                        </div>

                    );
                });
            }

            if (this.state.has_zise_first) {
                variants = (
                    <div className="ps-product__variations">
                        <figure>
                            <figcaption>
                                {i18next.t('color')} :
                                <strong>
                                    {localStorage.getItem('lang') === "en" ?

                                        selectedChild_z_f !== undefined
                                            ? ' ' + selectedChild_z_f.colorName_en
                                            : ' Choose an option'

                                        : selectedChild_z_f !== undefined
                                            ? ' ' + selectedChild_z_f.colorName_ar
                                            : ' اختر خيار'
                                    }
                                </strong>
                            </figcaption>
                            {colorSelectionArea}
                        </figure>
                        {selectedVariant !== null}
                        <figure>
                            <figcaption>
                                {i18next.t('size')}:
                                <strong className="pl-1">
                                    {localStorage.getItem('lang') === "en" ?
                                        selectedSize !== null
                                            ? ' ' + selectedSize.size
                                            : ' Choose an option'

                                        : selectedSize !== null
                                            ? ' ' + selectedSize.size
                                            : 'اختر خيار'
                                    }

                                </strong>
                            </figcaption>
                            {sizeSelectionArea}
                        </figure>
                    </div>
                );
            } else {
                variants = (
                    <div className="ps-product__variations">
                        <figure>
                            <figcaption>
                                {i18next.t('color')}:
                            <strong>
                                    {localStorage.getItem('lang') === "en" ?
                                        selectedVariant !== null
                                            ? ' ' + selectedVariant.colorName_en
                                            : ' Choose an option'

                                        : selectedVariant !== null
                                            ? ' ' + selectedVariant.colorName_ar
                                            : 'اختر خيار'
                                    }
                                </strong>
                            </figcaption>
                            {colorSelectionArea}
                        </figure>
                        {selectedVariant !== null}
                        <figure>
                            <figcaption>
                                {i18next.t('size')}:
                            <strong className="pl-1">

                                    {localStorage.getItem('lang') === "en" ?
                                        selectedSize !== null
                                            ? ' ' + selectedSize.size
                                            : ' Choose an option'

                                        : selectedSize !== null
                                            ? ' ' + selectedSize.size
                                            : 'اختر خيار'}

                                </strong>
                            </figcaption>
                            {sizeSelectionArea}
                        </figure>
                    </div>
                );
            }



        }

        else {
            if (singleProduct.is_sale) {
                priceArea = (
                    <h4 className="ps-product__price sale">
                        <del className="mr-2">
                            {currency ? currency.symbol : '$'}
                            {singleProduct.price}
                        </del>
                        {currency ? currency.symbol : '$'}
                        {singleProduct.productChildren[0].price}
                    </h4>
                );
            } else {
                priceArea = (
                    <h4 className="ps-product__price">
                        {currency ? currency.symbol : '$'}
                        {singleProduct.productChildren[0].price}
                    </h4>
                );
            }
        }


        return (
            <div className="ps-product__header" >
                { thumbnailArea}
                < div className="ps-product__info" >
                    <h1>   {localStorage.getItem('lang') === "en" ?
                        singleProduct.name_en
                        : singleProduct.name_ar}
                    </h1>
                    <div className="ps-product__meta">
                        <p>
                            {i18next.t('store')}:
                            <Link href={`/store/${singleProduct.traderId}`}>
                                <a className="ml-2 text-capitalize">
                                    {singleProduct.trader.storeName}
                                </a>
                            </Link>
                        </p>
                        <p>
                            {i18next.t('mall')} :
                         <Link href={localStorage.getItem('lang') === 'en'
                                ? `/mall?mallname=${singleProduct.trader.mall.name_en}&mallid=${singleProduct.trader.mall.id}`
                                : `/mall?mallname=${singleProduct.trader.mall.name_ar}&mallid=${singleProduct.trader.mall.id}`
                            }>
                                <a className="ml-2 text-capitalize">
                                    {localStorage.getItem('lang') === "en" ?
                                        singleProduct.trader.mall.name_en
                                        : singleProduct.trader.mall.name_ar}

                                </a>
                            </Link>
                        </p>
                        <div className="ps-product__rating">
                            <span className="rating_num">
                                <Rater rating={singleProduct.rate ? singleProduct.rate : 0} total={5} interactive={false} />
                                    ({singleProduct.numberOfRates ? singleProduct.numberOfRates : 0})</span>
                        </div>
                    </div>
                    {priceArea}
                    <ModuleProductDetailDescription product={singleProduct} />
                    {variants}
                    {singleProduct.quantity == 1 && <figcaption>
                        <strong className="pl-1"> Only 1 left in stock - order soon.</strong>
                    </figcaption>}
                    {singleProduct.quantity == 0 && <figcaption>
                        <strong className="pl-1"> Out of stock</strong>
                    </figcaption>}
                    < div className="ps-product__shopping" >
                        <figure>
                            <figcaption>{i18next.t('quantity')}</figcaption>
                            <div className="form-group--number">
                                <button
                                    className="up"
                                    onClick={this.handleIncreaseItemQty.bind(
                                        this
                                    )}>
                                    <i className="fa fa-plus"></i>
                                </button>
                                <button
                                    className="down"
                                    onClick={this.handleDecreaseItemQty.bind(
                                        this
                                    )}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={this.state.quantity}
                                    disabled
                                />
                            </div>
                        </figure>
                        <button
                            className="ps-btn ps-btn--black"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            {i18next.t('addtocart')}
                        </button>
                        {/* <a
                            className="ps-btn"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            {i18next.t('buynow')}
                        </a> */}
                        <div className="ps-product__actions">
                            <a
                                href="#"
                                onClick={this.handleAddItemToWishlist.bind(
                                    this
                                )}>
                                <i className="icon-heart"></i>
                            </a>
                            <a
                                href="#"
                                onClick={this.handleAddItemToCompare.bind(
                                    this
                                )}>
                                <i className="icon-chart-bars"></i>
                            </a>
                        </div>
                    </div>

                    {ModuleProductDetailSpecification}
                    <ModuleProductDetailSharing />
                    {/* <div className="ps-product__actions-mobile">
                        <a
                            className="ps-btn ps-btn--black"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            {i18next.t('addtocart')}
                        </a>
                        <a
                            className="ps-btn"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            {i18next.t('buynow')}
                        </a>
                    </div> */}


                </ div>
                {/* <div>
                    <h2>Original use case:</h2>
                    <MagicZoom>
                        <span>
                            <img src={'http://lorempixel.com/520/400/sports/1'} />
                        </span>
                    </MagicZoom>
                </div>
          */}
               {/* <MagicTest /> */}
            </div >
        );
    }
}

export default connect(state => { return state })(ModuleProductHasVariants);




