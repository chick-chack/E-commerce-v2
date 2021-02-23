
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/elements/ModuleProductDetailSharing';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/elements/ModuleProductDetailDescription';
import ImageFromApi from '~/components/elements/detail/modules/elements/ImageFromApi';
import ThumbnailHasVariant from '~/components/elements/detail/modules/thumbnail/ThumbnailHasVariant';
import { addItem, add_to_cart, getcartlist, add_to_local_cart, updateCartSuccess } from '~/store/cart/action';
import { addItemToCompare } from '~/store/compare/action';
import { addItemToWishlist } from '~/store/wishlist/action';
import { formatCurrency } from '../../../../utilities/product-helper';
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
            final_QTY: 1,
            childern_IDD: null,
            current_id: null,
            reflectoinItem: null
        };
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }


    handleAddItemToCart = e => {
        if (this.props.auth.isLoggedIn && Boolean(this.props.auth.isLoggedIn) === true) {

            if (this.state.current_id) {
                if (this.props.cart.cartlist) {
                    if (this.props.cart.cartlist.length > 0) {
                        let existItem = this.props.cart.cartlist.find(
                            item => item['productChild.id'] == this.state.current_id
                        )
                        if (existItem) {
                            existItem.quantity = this.state.quantity;

                        }
                        else {
                            let index = this.props.product.singleProduct.productChildren_orginal.findIndex(
                                (item) => item.id == this.state.current_id
                            );

                            const newProduct = {
                                "productChild.colorCode": this.props.product.singleProduct.productChildren_orginal[index].colorCode,
                                "productChild.colorName_ar": this.props.product.singleProduct.productChildren_orginal[index].colorName_ar,
                                "productChild.colorName_en": this.props.product.singleProduct.productChildren_orginal[index].colorName_en,
                                "productChild.id": this.props.product.singleProduct.productChildren_orginal[index].id,
                                "productChild.productId": this.props.product.singleProduct.productChildren_orginal[index].productId,
                                "productChild.image": this.props.product.singleProduct.productChildren_orginal[index].image,
                                "productChild.isOffer": this.props.product.singleProduct.productChildren_orginal[index].isOffer,
                                "productChild.offerRatio": this.props.product.singleProduct.productChildren_orginal[index].offerRatio,
                                "productChild.price": this.props.product.singleProduct.productChildren_orginal[index].price,
                                "productChild.product.name_ar": this.props.product.singleProduct.name_ar,
                                "productChild.product.name_en": this.props.product.singleProduct.name_en,
                                "productChild.size": this.props.product.singleProduct.productChildren_orginal[index].size,
                                "productChildId": this.props.product.singleProduct.productChildren_orginal[index].id,
                                "quantity": this.state.quantity
                            }
                            this.props.cart.cartlist.push(newProduct)
                        }
                    } else {
                        let index = this.props.product.singleProduct.productChildren_orginal.findIndex(
                            (item) => item.id == this.state.current_id
                        );

                        const newProduct = {
                            "productChild.colorCode": this.props.product.singleProduct.productChildren_orginal[index].colorCode,
                            "productChild.colorName_ar": this.props.product.singleProduct.productChildren_orginal[index].colorName_ar,
                            "productChild.colorName_en": this.props.product.singleProduct.productChildren_orginal[index].colorName_en,
                            "productChild.id": this.props.product.singleProduct.productChildren_orginal[index].id,
                            "productChild.productId": this.props.product.singleProduct.productChildren_orginal[index].productId,
                            "productChild.image": this.props.product.singleProduct.productChildren_orginal[index].image,
                            "productChild.isOffer": this.props.product.singleProduct.productChildren_orginal[index].isOffer,
                            "productChild.offerRatio": this.props.product.singleProduct.productChildren_orginal[index].offerRatio,
                            "productChild.price": this.props.product.singleProduct.productChildren_orginal[index].price,
                            "productChild.product.name_ar": this.props.product.singleProduct.name_ar,
                            "productChild.product.name_en": this.props.product.singleProduct.name_en,
                            "productChild.size": this.props.product.singleProduct.productChildren_orginal[index].size,
                            "productChildId": this.props.product.singleProduct.productChildren_orginal[index].id,
                            "quantity": this.state.quantity
                        }
                        this.props.cart.cartlist.push(newProduct)
                    }

                }
                let QTY;
                if (this.state.final_QTY === 1) {

                    QTY = this.state.quantity
                }
                else {
                    QTY = this.state.quantity - this.state.final_QTY;
                }

                this.props.dispatch(add_to_cart(this.state.current_id, QTY))
                modalSuccess('success');
                Router.push('/account/shopping-cart')
            }

            else {
                modalAsking('warning');
            }
        }
        else {
            if (this.state.current_id) {
                if (this.props.cart.cartItems) {
                    if (this.props.cart.cartItems.length > 0) {
                        let existItem = this.props.cart.cartItems.find(
                            item => item['productChild.id'] == this.state.current_id
                        )
                        if (existItem) {

                            existItem.quantity = this.state.quantity;

                            this.props.dispatch(updateCartSuccess(this.props.cart.cartItems))
                        }
                        else {
                            let index = this.props.product.singleProduct.productChildren_orginal.findIndex(
                                (item) => item.id == this.state.current_id
                            );

                            const newProduct = {
                                "productChild.colorCode": this.props.product.singleProduct.productChildren_orginal[index].colorCode,
                                "productChild.colorName_ar": this.props.product.singleProduct.productChildren_orginal[index].colorName_ar,
                                "productChild.colorName_en": this.props.product.singleProduct.productChildren_orginal[index].colorName_en,
                                "productChild.id": this.props.product.singleProduct.productChildren_orginal[index].id,
                                "productChild.productId": this.props.product.singleProduct.productChildren_orginal[index].productId,
                                "productChild.image": this.props.product.singleProduct.productChildren_orginal[index].image,
                                "productChild.isOffer": this.props.product.singleProduct.productChildren_orginal[index].isOffer,
                                "productChild.offerRatio": this.props.product.singleProduct.productChildren_orginal[index].offerRatio,
                                "productChild.price": this.props.product.singleProduct.productChildren_orginal[index].price,
                                "productChild.product.name_ar": this.props.product.singleProduct.name_ar,
                                "productChild.product.name_en": this.props.product.singleProduct.name_en,
                                "productChild.size": this.props.product.singleProduct.productChildren_orginal[index].size,
                                "productChildId": this.props.product.singleProduct.productChildren_orginal[index].id,
                                "quantity": this.state.quantity
                            }
                            this.props.cart.cartItems.push(newProduct)
                            let QTY;
                            if (this.state.final_QTY === 1) {

                                QTY = this.state.quantity - 1
                            }
                            else {
                                QTY = this.state.quantity - this.state.final_QTY;
                            }

                            Router.push('/account/shopping-cart')
                        }
                    } else {
                        let index = this.props.product.singleProduct.productChildren_orginal.findIndex(
                            (item) => item.id == this.state.current_id
                        );

                        const newProduct = {
                            "productChild.colorCode": this.props.product.singleProduct.productChildren_orginal[index].colorCode,
                            "productChild.colorName_ar": this.props.product.singleProduct.productChildren_orginal[index].colorName_ar,
                            "productChild.colorName_en": this.props.product.singleProduct.productChildren_orginal[index].colorName_en,
                            "productChild.id": this.props.product.singleProduct.productChildren_orginal[index].id,
                            "productChild.productId": this.props.product.singleProduct.productChildren_orginal[index].productId,
                            "productChild.image": this.props.product.singleProduct.productChildren_orginal[index].image,
                            "productChild.isOffer": this.props.product.singleProduct.productChildren_orginal[index].isOffer,
                            "productChild.offerRatio": this.props.product.singleProduct.productChildren_orginal[index].offerRatio,
                            "productChild.price": this.props.product.singleProduct.productChildren_orginal[index].price,
                            "productChild.product.name_ar": this.props.product.singleProduct.name_ar,
                            "productChild.product.name_en": this.props.product.singleProduct.name_en,
                            "productChild.size": this.props.product.singleProduct.productChildren_orginal[index].size,
                            "productChildId": this.props.product.singleProduct.productChildren_orginal[index].id,
                            "quantity": this.state.quantity
                        }
                        this.props.cart.cartItems.push(newProduct)
                        let QTY;
                        if (this.state.final_QTY === 1) {

                            QTY = this.state.quantity - 1
                        }
                        else {
                            QTY = this.state.quantity - this.state.final_QTY;
                        }
                        Router.push('/account/shopping-cart')
                    }
                }
                modalSuccess('success');
            }
            else {
                modalAsking('warning');
            }
        }
    }


    handleAddItemToCompare = e => {
        e.preventDefault();
        if (this.state.current_id) {
            let childProduct = this.props.product.singleProduct.productChildren_orginal.find(
                (item) => item.id == this.state.current_id);
            this.props.dispatch(addItemToCompare(this.props.product.singleProduct, childProduct));
            Router.push('/account/compare')
        }
        else {
            modalAsking('warning');
        }
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();
        if (this.props.childern_ID) {
            let childProduct = this.props.product.singleProduct.productChildren_orginal.find(
                (item) => item.id == this.state.current_id);
            this.props.dispatch(addItemToWishlist(this.props.product.singleProduct, childProduct));
            Router.push('/account/wishlist')
        }
        else {
            modalAsking('warning');
        }
    };

    handleIncreaseItemQty = e => {
        e.preventDefault();

        if (this.state.current_id) {
            let test = this.props.product.singleProduct.productChildren_orginal.find(
                (item) => item.id == this.state.current_id);
            if (test) {
                if (test.quantity > this.state.quantity) {
                    this.setState({ quantity: this.state.quantity + 1 });
                } else {
                    modalWarning('warning', this.state.quantity);
                }
            }
        }
        else {
            modalAsking('warning');
        }
    };

    handleDecreaseItemQty = e => {
        e.preventDefault();

        if (this.state.current_id) {

            if (this.state.quantity > 1) {
                this.setState({ quantity: this.state.quantity - 1 });
            }

        } else {
            modalAsking('warning');
        }
    };

    // select color 
    handleSelectColor(colorId) {
        // here when select detected color
        console.log("select some thing", colorId)
        /* 51  */
        const { singleProduct } = this.props.product;
        this.setState({ has_color: true })
        if (this.state.has_zise_first) {
            console.log("has size")
            /* if he selected size already, find the selected product size id,this.state.selectedSize.id  */
            if (singleProduct && singleProduct.productChildren_size.length > 0) {

                console.log("productChildren_size", productChildren_size)
                const selectedChild_z_f = singleProduct.productChildren_size.find(
                    item => item.id === this.state.selectedSize.id
                );
                console.log("selectedChild_z_f", selectedChild_z_f)
                const selectedVariant = selectedChild_z_f.colors.find(
                    item => item.id === colorId
                );
                console.log("selectedChild_z_f.colors", selectedChild_z_f.colors)
                console.log("selectedVariant", selectedVariant)
                if (selectedVariant) {
                    const sizeItems = selectedVariant.sizes;
                    this.setState({ sizeItems: sizeItems });
                }
                this.setState({ selectedVariant: selectedChild_z_f, selectedChild_z_f: selectedVariant });

                if (singleProduct.id == this.props.pid) {
                    this.setState({ thumbnailArea: <ThumbnailHasVariant product={selectedChild_z_f} /> });
                }
            }
        } else {

            /* so, he didn't select size yet, it means : has color first */
            this.setState({ has_color_first: true });
            var selectedVariant;
            if (singleProduct && singleProduct.productChildren.length > 0) {
                console.log('product children array:', singleProduct.productChildren)
                /*
                product children array: contain the available colors,
                    0: {id: 51, colorName_ar: "زهري", colorName_en: "Pink", colorCode: "#f78da7", price: 1200, …}
                    1: {id: 52, colorName_ar: "احمر", colorName_en: "red", colorCode: "#eb144c", price: 1500, …}
                */
                /* we find out the item has the selected color id */
                const selectedVariantt = singleProduct.productChildren.find(item => item.id == colorId);
                console.log('selectedVariantt : ', selectedVariantt)
                /* selectedVariantt : 
                    {id: 52, colorName_ar: "احمر", colorName_en: "red", colorCode: "#eb144c", price: 1500, …}
                */

                if (selectedVariantt == undefined) {
                    console.log('selectedVariantt un defined: ', selectedVariantt)

                    for (var i = 0; i < singleProduct.productChildren.length; i++) {
                        for (var j = 0; j < singleProduct.productChildren[i].sizes.length; j++) {
                            if (colorId == singleProduct.productChildren[i].sizes[j].id) {
                                selectedVariant = singleProduct.productChildren[i];
                                this.setState({ selectedSize: singleProduct.productChildren[i].sizes[j] });

                            }
                        }
                    }
                } else {

                    selectedVariant = singleProduct.productChildren.find(item => item.id == colorId);
                    console.log('selectedVariant : ', selectedVariant)
                    /* selectedVariant : 
                        {id: 52, colorName_ar: "احمر", colorName_en: "red", colorCode: "#eb144c", price: 1500, …}
                    */



                    for (var i = 0; i < singleProduct.productChildren.length; i++) {
                        for (var j = 0; j < singleProduct.productChildren[i].sizes.length; j++) {
                            if (colorId == singleProduct.productChildren[i].sizes[j].id) {
                                this.setState({ selectedSize: singleProduct.productChildren[i].sizes[j] });
                                console.log('selectedSize : ', singleProduct.productChildren[i].sizes[j])
                                /* selectedSize :  {price: 1500, size: "L", quantity: 198, id: 52} */
                            }
                        }
                    }


                }

                if (selectedVariant) {
                    console.log('selectedVariant', selectedVariant)
                    /* selectedVariant {id: 52, colorName_ar: "احمر", colorName_en: "red", colorCode: "#eb144c", price: 1500, …} */
                    const sizeItems = selectedVariant.sizes;
                    console.log(' selectedVariant.sizes', selectedVariant.sizes)
                    /*
                     selectedVariant.sizes  :
                     0: {price: 1500, size: "L", quantity: 198, id: 52} */
                    this.setState({ sizeItems: sizeItems });
                }
                console.log('selectedVariant out the condition', selectedVariant)
                /*
                selectedVariant out the condition {id: 52, colorName_ar: "احمر", colorName_en: "red", colorCode: "#eb144c", price: 1500, …} */
                this.setState({ selectedVariant: selectedVariant });

                if (singleProduct.id == this.props.pid) {
                    console.log("testing", selectedVariant)
                    /*
                    {id: 52, colorName_ar: "احمر", colorName_en: "red", colorCode: "#eb144c", price: 1500, …}
                    */
                    this.setState({ thumbnailArea: <ThumbnailHasVariant product={selectedVariant} /> });
                }
            }
        }
    }

    // select size 
    handleSelectSize(sizeId) {
        console.log('size selected', sizeId)
        const { singleProduct } = this.props.product;
        console.log('this.props.childern_ID ', this.props.childern_ID)
        if (this.props.childern_ID != undefined && this.props.childern_ID != '') {
            /* here means he selected detected size */
            this.setState({ has_zise: true })
            /* now we find out the color  has the same id */

            let item = singleProduct.productChildren.find(item => item.id == sizeId)
            console.log('item', item)

            if (item == undefined) {
                for (var i = 0; i < singleProduct.productChildren.length; i++) {
                    for (var j = 0; j < singleProduct.productChildren[i].sizes.length; j++) {
                        if (sizeId == singleProduct.productChildren[i].sizes[j].id) {
                            const selectedVariant = singleProduct.productChildren[i].sizes[j];
                            console.log('selectedVariant un:', selectedVariant)
                            this.setState({ selectedSize: singleProduct.productChildren[i].sizes[j] });
                            this.setState({ selectedChild_z_f: singleProduct.productChildren[i].sizes[j] });

                        }
                    }
                }
            } else {
                const selectedVariant = item.sizes;
                console.log('selectedVariant  sssssssssssssssssss', selectedVariant)
                if (selectedVariant.length > 0) {
                    const selectedSizeItem = selectedVariant.find(item => item.id === sizeId);
                    if (selectedSizeItem) {
                        this.setState({ selectedSize: selectedSizeItem });
                        this.setState({ selectedChild_z_f: selectedSizeItem });
                    }
                }
            }

        } else if (this.props.id != undefined && this.props.id != '') {
            console.log('this.props.id   sssssssssssssssssss', this.props.id);

            this.setState({ has_zise: true })
            let item = singleProduct.productChildren.find(item => item.id == sizeId)
            console.log('item   sssssssssssssssssss', item)
            if (item == undefined) {
                for (var i = 0; i < singleProduct.productChildren.length; i++) {
                    for (var j = 0; j < singleProduct.productChildren[i].sizes.length; j++) {
                        if (sizeId == singleProduct.productChildren[i].sizes[j].id) {
                            const selectedVariant = singleProduct.productChildren[i].sizes[j];
                            this.setState({ selectedSize: singleProduct.productChildren[i].sizes[j] });
                            this.setState({ selectedChild_z_f: singleProduct.productChildren[i].sizes[j] });

                        }
                    }
                }
            } else {
                const selectedVariant = item.sizes;
                if (selectedVariant.length > 0) {
                    const selectedSizeItem = selectedVariant.find(item => item.id === sizeId);
                    if (selectedSizeItem) {
                        this.setState({ selectedSize: selectedSizeItem });
                        this.setState({ selectedChild_z_f: selectedSizeItem });
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
                    this.setState({ selectedChild_z_f: selectedSizeItem });
                }
            }
        } else {
            this.setState({ colorItems: this.props.product.singleProduct.productChildren_size.find(item => item.id === sizeId) });
            this.setState({ has_zise_first: true, selectedChild_z_f: undefined });
            const selectedVariant = this.props.product.singleProduct.productChildren_size;
            console.log('selectedVariant from size', selectedVariant)
            if (selectedVariant.length > 0) {
                const selectedSizeItem = selectedVariant.find(item => item.id === sizeId);
                if (selectedSizeItem) {
                    console.log('selectedSizeItem', selectedSizeItem)
                    /*  added new */
                    this.setState({ thumbnailArea: <ThumbnailHasVariant product={selectedSizeItem} /> });
                    this.setState({ selectedSize: selectedSizeItem });
                    this.setState({ selectedChild_z_f: selectedSizeItem });
                }
            }
        }
    }

    todo_handleSelectColor(id) {
        this.setState({
            current_id: id
        })
        this.handleSelectColor(id);
        if (this.props.auth.isLoggedIn && Boolean(this.props.auth.isLoggedIn) === true) {
            if (id) {
                if (this.props.cart.cartlist) {
                    if (this.props.cart.cartlist.length > 0) {
                        let existItem = this.props.cart.cartlist.find(
                            item => item['productChild.id'] == id
                        )
                        if (existItem) {
                            this.setState({
                                quantity: existItem.quantity,
                                final_QTY: existItem.quantity
                            })
                        }

                    }

                }
            }
        }
        else {
            if (id) {
                if (this.props.cart.cartItems) {
                    if (this.props.cart.cartItems.length > 0) {
                        let existItem = this.props.cart.cartItems.find(
                            item => item['productChild.id'] == id
                        )
                        if (existItem) {
                            this.setState({
                                quantity: existItem.quantity,
                                final_QTY: existItem.quantity
                            })
                        }

                    }

                }

            }
        }
    }

    change(id) {
        console.log("chaaaaaaange", id)
        this.setState({
            current_id: id
        })
    }
    change_state(data) {
        console.log("change data", data)

        this.setState({ thumbnailArea: <ThumbnailHasVariant product={data} /> });
    }

    changeImage(id) {
        console.log("change image", id);
        let index = this.props.product.singleProduct.productChildren.findIndex(item =>
            item.id == this.props.childern_ID);
        console.log("change image index", index);
        console.log("change image", this.props.product.singleProduct.productChildren[index]);
        // this.setState({ thumbnailArea: <ThumbnailHasVariant product={this.props.product.singleProduct.productChildren[index]} /> })
    }


    todo_handleSelectSize(id) {
        this.setState({
            current_id: id
        })
        this.handleSelectSize(id);

        if (this.props.auth.isLoggedIn && Boolean(this.props.auth.isLoggedIn) === true) {
            if (id) {
                if (this.props.cart.cartlist) {
                    if (this.props.cart.cartlist.length > 0) {
                        let existItem = this.props.cart.cartlist.find(
                            item => item['productChild.id'] == id
                        )
                        if (existItem) {
                            this.setState({
                                quantity: existItem.quantity,
                                final_QTY: existItem.quantity
                            })
                        }

                    }

                }
            }
        }
        else {
            if (id) {
                if (this.props.cart.cartItems) {
                    if (this.props.cart.cartItems.length > 0) {
                        let existItem = this.props.cart.cartItems.find(
                            item => item['productChild.id'] == id
                        )
                        if (existItem) {
                            this.setState({
                                quantity: existItem.quantity,
                                final_QTY: existItem.quantity
                            })

                        }

                    }

                }

            }
        }

    }
    componentDidMount() {
        console.log('----------------------------------------------------------------------------------------------------')
        console.log( this.props)
        console.log('----------------------------------------------------------------------------------------------------')
        /* this.props.id : undefined, when render the page */
        if (this.props.id) {
            this.setState({
                current_id: this.props.id
            })
        }
        console.log('this.props.childern_ID', this.props.childern_ID);
        /* no thing */
        this.props.dispatch(getcartlist());
        const { product } = this.props;

        console.log('this.props.product', this.props.product);
        console.log('this.props.product------------', this.props);
        /* this.props.product:
        StoreSearchResult: null
        add_review: false
        allProducts: null
        brands: []
        categories: null
        error: false
        list_category: []
        productLoading: false
        productsLoading: true
        reviewProduct: {review_5: {…}, review_4: {…}, review_3: {…}, review_2: {…}, review_1: {…}}
        review_orginal: (4) [{…}, {…}, {…}, {…}]
        searchResults: null
        singleProduct: {id: 43, name_ar: "ابل اي فون الشبكية 6S بالإضافة إلى 32GB", name_en: "Apple iPhone Retina 6s Plus 32GB", description_ar: "<h2>This is a Heading<br>this is a paragraph.</h2>", description_en: "<p>This is a Heading<br>this is a paragraph.</p>", …}
        sub_list_category: []
        totalProducts: 0
        */
        console.log('product.singleProduct.productChildren.length', product.singleProduct.productChildren.length);
        /* product children : arrau of available colors */
        console.log('product.singleProduct.productChildren', product.singleProduct.productChildren);
        /*
        product.singleProduct.productChildren
        0: {id: 51, colorName_ar: "زهري", colorName_en: "Pink", colorCode: "#f78da7", price: 1200, …}
        1: {id: 52, colorName_ar: "احمر", colorName_en: "red", colorCode: "#eb144c", price: 1500, …} */
        console.log('this.props.pid', this.props.pid);
        console.log('this.props.childern_ID', this.props.childern_ID);
        console.log('this.props.id', this.props.id);
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
        } else if (this.props.id != undefined && this.props.id != null && this.props.id != '') {
            for (var i = 0; i < product.singleProduct.productChildren.length; i++) {
                for (var j = 0; j < product.singleProduct.productChildren[i].sizes.length; j++) {
                    if (this.props.id == product.singleProduct.productChildren[i].sizes[j].id) {
                        this.handleSelectColor(this.props.id);
                        this.setState({ has_color_first: true });
                        this.handleSelectSize(this.props.id);
                    }
                }
            }
        } else {
            /* here the parrent  pid: 43, we take the first color */
            if (product.singleProduct && product.singleProduct.productChildren.length > 0) {
                this.setState({ selectedVariant: product.singleProduct.productChildren[0] });
                console.log(' product.singleProduct.productChildren[0]', product.singleProduct.productChildren[0]);
                // console.log('this.props.id',this.props.id);

                if (product.singleProduct.id == this.props.pid) {
                    /* send the images for first child  */
                    this.setState({ thumbnailArea: <ThumbnailHasVariant product={product.singleProduct.productChildren[0]} /> });
                }
            }
        }
        if (this.props.auth.isLoggedIn && Boolean(this.props.auth.isLoggedIn) === true) {
            if (this.state.current_id) {
                if (this.props.cart.cartlist) {
                    if (this.props.cart.cartlist.length > 0) {
                        let existItem = this.props.cart.cartlist.find(
                            item => item['productChild.id'] == this.state.current_id
                        )
                        if (existItem) {
                            this.setState({
                                quantity: existItem.quantity,
                                final_QTY: existItem.quantity
                            })
                        }

                    }

                }
            }
            else if (this.props.id) {
                if (this.props.cart.cartlist) {
                    if (this.props.cart.cartlist.length > 0) {
                        let existItem = this.props.cart.cartlist.find(
                            item => item['productChild.id'] == this.props.id
                        )
                        if (existItem) {
                            this.setState({
                                quantity: existItem.quantity,
                                final_QTY: existItem.quantity
                            })
                        }

                    }

                }

            }

        }
        else {
            if (this.state.current_id) {
                if (this.props.cart.cartItems) {
                    if (this.props.cart.cartItems.length > 0) {
                        let existItem = this.props.cart.cartItems.find(
                            item => item['productChild.id'] == this.state.current_id
                        )
                        if (existItem) {
                            this.setState({
                                quantity: existItem.quantity,
                                final_QTY: existItem.quantity
                            })
                            // existItem.quantity += this.state.quantity

                        }

                    }

                }

            }
            else if (this.props.id) {
                if (this.props.cart.cartItems) {
                    if (this.props.cart.cartItems.length > 0) {
                        let existItem = this.props.cart.cartItems.find(
                            item => item['productChild.id'] == this.props.id
                        )
                        if (existItem) {
                            this.setState({
                                quantity: existItem.quantity,
                                final_QTY: existItem.quantity
                            })
                            // existItem.quantity += this.state.quantity

                        }

                    }

                }
            }
        }
    }
    componentDidUpdate(prevPops) {
        
        console.log('----------------------------------------------------------------------------------------------------')
        console.log( this.props)
        console.log('----------------------------------------------------------------------------------------------------')
        //   this.setState({
        //     selectedVariant:{'id':this.props.childern_ID},
        //     selectedChild_z_f:{'id':this.props.childern_ID}

        //   })
        // console.log('updateeeeeeeeeeed: selectedVariant', this.state.selectedVariant, "selectedChild_z_f", this.state.selectedChild_z_f, "selectedSize:", this.setState.selectedSize, "pre", prevProps);
        // this.handleSelectColor(this.props.childern_ID)
        // this.todo_handleSelectColor(this.props.childern_ID)

    }

    render() {

        const { currency } = this.props.setting;
        const { singleProduct } = this.props.product;
        const testing = this.props.childern_ID
        console.log('cccccccccccccc0', testing)
        const { selectedVariant, selectedChild_z_f, selectedSize, sizeItems, colorItems } = this.state;
        console.log('******************************************','selectedVariant', selectedVariant, 'selectedChild_z_f ',selectedChild_z_f,'selectedSize', selectedSize,'sizeItems',  sizeItems,'colorItems', colorItems
        )
        let variants, sizeSelectionArea, colorSelectionArea, priceArea, ModuleProductDetailSpecification;

        if (selectedVariant !== null) {

        /* replaced  this.state.current_id with this.props.childern_ID*/
        if (this.props.childern_ID) {

            console.log('cccccccccccccc0 second time', this.props.childern_ID)
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
                    <p className="p_weight">
                        g {this.props.product.singleProduct.productChildren_orginal[index].weight}
                    </p>
                </h4>

            );
            {
                // this.changeImage(this.props.childern_ID)
                // this.handleSelectColor(51)
            }

        }
        else if (this.props.id) {
            console.log("else", this.props.id)
            let index = this.props.product.singleProduct.productChildren_orginal.findIndex(item =>
                item.id == this.props.id)
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
                         <p className="p_weight">
                            g {this.props.product.singleProduct.productChildren_orginal[index].weight}
                        </p>
                </h4>
            );

        }


        else {
            /* the parent */
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
                    <p className="p_weight">
                        g {this.props.product.singleProduct.productChildren_orginal[index].weight}
                    </p>
                </h4>
            );
        }
        }

        /*************************           if (singleProduct) {         */


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
                        {singleProduct.tags.map((item, index) => {
                            return (
                                <Link key={index} href="#" >
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
                        <Link key={item.id} scroll={false} href={'/product/' + singleProduct.id + '?id=' + item.id}>
                            < div
                                className={`ps-variant ps-variant--image ${selectedChild_z_f &&
                                    selectedChild_z_f.id === item.id
                                    ? 'active'
                                    : ''
                                    }`

                                }
                                // key={item.id}
                                onClick={e => this.todo_handleSelectColor(item.id)}
                            >
                                < div>
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
                                    }</div>
                            </div >
                        </Link>
                    );
                });
            } else {
                colorSelectionArea = singleProduct.productChildren.map(item => {
                    return (
                        <Link key={item.id} scroll={false} href={'/product/' + singleProduct.id + '?id=' + item.id}>
                            <div
                                className={`ps-variant ps-variant--image ${selectedVariant &&
                                    selectedVariant.id === item.id
                                    ? 'active'
                                    : ''
                                    }`}
                                // key={item.id}
                                onClick={e => this.todo_handleSelectColor(item.id)}
                            >
                                < div>
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
                            </div>
                        </Link>
                    );


                });
            }

            if (this.state.has_color_first) {
                sizeSelectionArea = sizeItems.map(item => {
                    return (
                        item.size != 'undefined' ?
                            <Link key={item.id} scroll={false} href={'/product/' + singleProduct.id + '?id=' + item.id}>
                                <div
                                    className={`ps-variant ps-variant--size ${selectedSize && selectedSize.id === item.id
                                        ? 'active'
                                        : ''
                                        }`}
                                    // key={item.id}
                                    onClick={e => this.todo_handleSelectSize(item.id)}
                                >
                                    < div>
                                        <span className="ps-variant__tooltip">
                                            {item.size}
                                        </span>
                                        <span className="ps-variant__size">
                                            {item.size}
                                        </span>
                                    </div>
                                </div >
                            </Link> : ''
                    );
                });
            } else {
                sizeSelectionArea = singleProduct.productChildren_size.map(item => {
                    return (
                        item.size != "undefined" ?
                            <Link key={item.id} scroll={false} href={'/product/' + singleProduct.id + '?id=' + item.id}>
                                <div
                                    className={`ps-variant ps-variant--size ${selectedSize && selectedSize.id === item.id
                                        ? 'active'
                                        : ''
                                        }`}
                                    // key={item.id}
                                    onClick={e => this.todo_handleSelectSize(item.id)}
                                >
                                    < div>
                                        <span className="ps-variant__tooltip">
                                            {item.size}
                                        </span>
                                        <span className="ps-variant__size">
                                            {item.size}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            :
                            ''
                    );
                });
            }

            if(this.props.id ){
                const index= this.props.product.singleProduct.productChildren_orginal.find(item =>
                    item.id==this.props.id
                )

                console.log('+++++++++++++++++++++++++++++++++++++++++++++',index)
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

                                    {selectedSize != null ?
                                        selectedSize.size != "undefined" ? selectedSize.size : '' : i18next.t('chooseoption')
                                    }
                                    {/* {localStorage.getItem('lang') === "en" ?
                                        selectedSize !== null
                                            ? ' ' + selectedSize.size
                                            : ' Choose an option'

                                        : selectedSize !== null
                                            ? ' ' + selectedSize.size
                                            : 'اختر خيار'
                                    } */}

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
                                    {selectedSize != null ?
                                        selectedSize.size != "undefined" ?
                                            selectedSize.size : '' : i18next.t('chooseoption')
                                    }
                                    {/* {localStorage.getItem('lang') === "en" ?
                                        selectedSize !== null
                                            ? ' ' + selectedSize.size
                                            : ' Choose an option'

                                        : selectedSize !== null
                                            ? ' ' + selectedSize.size
                                            : 'اختر خيار'} */}

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
                {this.state.thumbnailArea == null && singleProduct.id == this.props.pid && <ThumbnailHasVariant product={singleProduct.productChildren[0]} />}
                {this.state.thumbnailArea}
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
                        <div className="ps-product__actions">
                            <a
                                href="/account/wishlist"
                                onClick={this.handleAddItemToWishlist.bind(
                                    this
                                )}>
                                <i className="icon-heart"></i>
                            </a>
                            <a
                                href="/account/compare"
                                onClick={this.handleAddItemToCompare.bind(
                                    this
                                )}>
                                <i className="icon-chart-bars"></i>
                            </a>
                        </div>
                    </div>

                    {ModuleProductDetailSpecification}
                    <ModuleProductDetailSharing />
                </ div>
            </div >
        );


    }
}

export default connect(state => { return state })(ModuleProductHasVariants);