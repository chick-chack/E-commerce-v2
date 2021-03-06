import React from 'react';
import { connect } from 'react-redux';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductDealOfDay_edit from '../../components/elements/products/ProductItem';
import ProductWide from '../../components/elements/products/ProductWide'
import {  getAllProductsByCategory} from '../../store/store/action';
import i18next from 'i18next';
import ReactPaginate from "react-paginate";
import _ from "lodash";



class ProductsByCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        listView: true,
        pageSize:8,
    };




    static async getInitialProps(ctx) {
        console.log("sectiiiiiiiiiiiion",ctx.query)
        return { query: ctx.query };
    }


    
componentDidMount() {

    const { query } = this.props;
    console.log( "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",query)
    
    
    if (query) {
       
        //     this.props.dispatch(getAllProductsByCategory(this.props.query.storeId, this.props.query.categoryId,2,0))
        this.props.dispatch(getAllProductsByCategory(1, 2,1,0))
    }
}


handleChangeViewMode = (event) => {
    event.preventDefault();
    this.setState({ listView: !this.state.listView });
};


//  : offset,
// 

handlePagination(page, pageSize) {
    
    this.setState({
        pageSize:pageSize,
       
    })
 
    const params = {
        _start: page === 1 ? 0 : page * pageSize,
        _limit: pageSize,
    };
    localStorage.setItem("params",JSON.stringify(params));

  //  this.props.dispatch(getStores(params));
  // this.props.query.mallid
  this.props.dispatch(getAllProductsByCategory(this.props.query.mallid, this.props.query.SectionId,8,0));
}


FetchData( page){
    this.props.dispatch( getAllProductsByCategory(this.props.query.mallid,this.props.query.SectionId, this.state.pageSize,page))
}


 handlePageSize(value){
    this.setState({ pageSize:value })
    this.props.dispatch(getAllProductsByCategory(this.props.query.mallid,this.props.query.SectionId ,value,0));  
}


render() {

    const { category_products } = this.props;
    const listProduct= category_products.data

   // console.log( listProduct.count);
   // console.log( this.props.query );


        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Dubai',
                url:`/mall?mallname=${this.props.query.mallname}&mallid=${this.props.query.mallid}`
                
            },
            {

                // text: singleProduct ? singleProduct.title : '',
                text: category_products.title_ar
            },
        ];
    
      const total = listProduct ? listProduct.count  : "no data";
      //  console.log("total stores via mall id", total);
     const viewMode = this.state.listView;
        console.log("layout viewmode", viewMode);


    return (
        <div className="site-content">
        <HeaderDefault />
        <HeaderMobile />
        <NavigationList />


        {/* </div>
        <div className="layout--product">
            {/* {singleProduct ? (
                <HeaderProduct productData={singleProduct} />
            ) : (
                    ''
                )} */}
     
           <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
           {/*   <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">
                            <ProductDetailFullwidth />
                        </div>
                        <div className="ps-page__right">
                            <ProductWidgets collectionSlug="widget_same_brand" />
                        </div>
                    </div>
                    <CustomerBought
                        layout="fullwidth"
                        collectionSlug="customer_bought"
                    />
                    <RelatedProduct
                        layout="fullwidth"
                        collectionSlug="shop-recommend-items"
                    />
                </div>
            </div> */}
   
                    <div className="container-fluid">
              <div className="ps-shopping" style={{marginTop:"20px"}}>
                {/* <BestSaleItems collectionSlug="shop-best-seller-items" />
                <RecommendItems collectionSlug="shop-recommend-items" />  */}
                 <div className="ps-shopping__header">
                    {/* <p>
                        <strong className="mr-2">{total}</strong>
                        Stores found
                    </p> */}
                        <p>
                        <strong className="mr-2">{total}</strong>
                        Product found
                    </p>
                    <div className="ps-shopping__actions" >

                        <select name="language" className="ps-select form-control"
                  onChange={(e)=>
                    this.handlePageSize(e.target.value)
                    // this.setState({ pageSize:e.target.value })
                    }>
                  
                {/* //   setpageSize(e.target.value)} */}
     
              <option value="8">8</option>
              <option value="1">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
          </select>
                        {/* <div className="col-md-3 display-flex  align-items-center">
         
          </div> */}

                        <div className="ps-shopping__view">
                            <p>View</p>
                            <ul className="ps-tab-list">
                                <li
                                    className={
                                        viewMode === true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-grid"></i>
                                    </a>
                                </li>
                                <li
                                    className={
                                        viewMode !== true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-list4"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div >
                    </div>
                 <div className="ps-shopping__content" style={{padding:"25px 0", borderBottom:" 1px solid #ccc"}}>
                    {viewMode === true ? (
                        <div className="ps-shopping-product">
                            <div className="row">
                                {listProduct 
                                    ? listProduct.rows.map((item) => (
                                          <div
                                              className="col-xl-2 col-lg-4 col-md-4 col-sm-6 xs-6 col-12"
                                              key={item.id}>
                                              {/* <Store store={item} /> */}
                                              <ProductDealOfDay_edit
                                                product={item}
                                       
                                            />
                                            
                                          
                                          </div>
                                      ))
                                    : ''}
                            </div>
                        </div>
                    ) : (
                        <div className="ps-shopping-product">
                            {listProduct 
                                ? listProduct.rows.map((item, index) => (
                                      <ProductWide
                                          product={item}
                                          key={index}
                                      />
                                  ))
                                :   <h2> bye</h2>}
                        </div>
                    )}
                    <div className="ps-shopping__footer text-center pt-40">
                        {!_.isEmpty(listProduct) && (
                        <ReactPaginate
                            pageCount={Math.ceil(total /this.state.pageSize)}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={0}
                            previousLabel={"←"}
                            nextLabel={"→"}
                            onPageChange={(data) => this.FetchData(data.selected )}
                            subContainerClassName={'pages pagination'}
                            containerClassName={"pagination"}
                            previousLinkClassName={"pagination__link"}
                            nextLinkClassName={"pagination__link"}
                            disabledClassName={"pagination__link--disabled"}
                            activeClassName={"pagination__link--active"}
                            />
                         ) }
                    </div>
                </div> 
            </div>
            
            
              </div>
                
      <Newletters />
            <FooterDefault />
        </div>
    );
}
}

export default connect(state => state.store)(ProductsByCategory);

