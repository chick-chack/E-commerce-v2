import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import { getProductByCategortyId } from '../../store/collection/action';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import ProductDealOfDay_edit from '../../components/elements/products/ProductItem';
import ProductWide from '../../components/elements/products/ProductWide'
import ReactPaginate from "react-paginate";
import _ from "lodash";
import i18next from 'i18next';

class CategoryDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        lang: null,
        listView: true,
        pageSize: 8,
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }


    componentDidMount() {
        console.log('fffffffffff')
        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })
        const { cid } = this.props.query;
        const { query } = this.props;
        if (isNaN(cid)) {
            Router.push('/page/page-404');
        }
        if (query) {
            this.props.dispatch(getProductByCategortyId(cid, 8, 0));
            //  this.props.dispatch(all_category(sid));
        }

        // Router.events.on('routeChangeStart', url => {
        //     const nextPid = url.split('/').pop();
        //     if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
        //         this.props.dispatch(getProductsById(nextPid));
        //     }
        // });
    }


    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };


    handlePagination(page, pageSize) {
        this.setState({ pageSize: pageSize, })

        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize,
        };

        localStorage.setItem("params", JSON.stringify(params));
        this.props.dispatch(getProductByCategortyId(this.props.query.cid, 8, 0));
    }
    FetchData(page) {
        this.props.dispatch(getProductByCategortyId(this.props.query.cid, this.state.pageSize, page))
    }

    handlePageSize(value) {
        this.setState({ pageSize: value })
        this.props.dispatch(getProductByCategortyId(this.props.query.cid, value, 0));
    }


    render() {
        const { productListByCategory } = this.props;
        const total = productListByCategory ? productListByCategory.count : "no data";
        const viewMode = this.state.listView;

        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <div className="container-fluid">
                    <div className="ps-shopping" style={{ marginTop: "20px" }}>
                        <div className="ps-shopping__header">

                            <p>
                                <strong className="mr-2">{total}</strong>
                        Product found
                    </p>
                            <div className="ps-shopping__actions" >

                                <select name="language" className="ps-select form-control"
                                    onChange={(e) =>
                                        this.handlePageSize(e.target.value)
                                    }>
                                    <option value="8">8</option>
                                    <option value="2">12</option>
                                    <option value="3">16</option>
                                    <option value="20">20</option>
                                </select>
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
                        <div className="ps-shopping__content" style={{ padding: "25px 0", borderBottom: " 1px solid #ccc" }}>
                            {viewMode === true ? (
                                <div className="ps-shopping-product">
                                    <div className="row">
                                        {productListByCategory.rows
                                            ? productListByCategory.rows.map((item) => (
                                                <div
                                                    className="col-xl-2 col-lg-2 col-md-2 col-sm-3 xs-4 col-6"
                                                    key={item.id}>
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
                                        {productListByCategory
                                            ? productListByCategory.rows.map((item) => (
                                                <ProductWide
                                                    product={item}
                                                    key={item.id}
                                                />

                                            ))
                                            : ''}
                                    </div>
                                )}
                            <div className="ps-shopping__footer text-center pt-40">
                                {!_.isEmpty(productListByCategory) && (
                                    <ReactPaginate
                                        pageCount={Math.ceil(total / this.state.pageSize)}
                                        pageRangeDisplayed={2}
                                        marginPagesDisplayed={1}
                                        previousLabel={"←"}
                                        nextLabel={"→"}
                                        onPageChange={(data) => (console.log("data selected", data.selected), this.FetchData(data.selected))}
                                        subContainerClassName={'pages pagination'}
                                        containerClassName={"pagination"}
                                        previousLinkClassName={"pagination__link"}
                                        nextLinkClassName={"pagination__link"}
                                        disabledClassName={"pagination__link--disabled"}
                                        activeClassName={"pagination__link--active"}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Newletters /> */}
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.collection)(CategoryDefaultPage);
