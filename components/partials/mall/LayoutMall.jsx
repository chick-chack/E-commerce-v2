import React, { Component } from 'react';
import { connect } from 'react-redux';
import Store from '../../elements/stores/Store';
import { Pagination, Skeleton } from 'antd';
import StoreMallView from './StoreMallView';
import { SELECTION_ALL } from 'antd/lib/table/hooks/useSelection';
import { getAllStoresMalls, getTopStoresByMalls, getProductsByMalls } from '../../../store/mall/action';
import ReactPaginate from "react-paginate";
import _ from "lodash";
import i18next from 'i18next';


class LayoutMall extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        mall_id: null,
        listView: true,
        pageSize: 8,
        sort_value: null,
        params: {
            _start: 1,
            _limit: 12,
        },
        _start: 1,
        _limit: 12,
        page: 1
    };




    componentDidMount() {
        localStorage.setItem("params", JSON.stringify(this.state.params));
        this.setState({
            mall_id: this.props.mall_id
        })
    }


    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };


    handlePagination(page, pageSize) {
        this.setState({
            pageSize: pageSize,

        })

        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize,
        };
        localStorage.setItem("params", JSON.stringify(params));
        this.props.dispatch(getAllStoresMalls(1, 8, 0));
    }

    setSort_value(value) {
        this.setState({
            sort_value: value
        })

    }

    FetchData(page) {
        this.props.dispatch(getAllStoresMalls(this.state.mall_id, this.state.pageSize, page))
    }

    handlePageSize(value) {
        this.setState({ pageSize: value })
        this.props.dispatch(getAllStoresMalls(this.state.mall_id, value, 0));
    }


    render() {

        const { all_stores } = this.props;
        const total = all_stores.count;
        const viewMode = this.state.listView;
        return (
            <div className="ps-shopping" style={{ marginTop: "20px" }}>
                <div className="ps-shopping__header">
                    <p>
                        <strong className="mr-2">{total}</strong>
                        {i18next.t('storesfound')}
                    </p>
                    <div className="ps-shopping__actions"
                    //  style={{width:"50%"}}
                    >
                        {/* <select
                        style={{margin:"0px 3px"}}
                            className="ps-select form-control"
                            data-placeholder="Sort Items"
                            onChange={(e) => this.setSort_value(e.target.value)}>
                            <option value="desc_date">Sort by latest</option>
                            <option value="best_sale">Sort by popularity</option>
                            <option value="top_rating">Sort by average rating</option>
                            <option value="low_price">Sort by price: low to high</option>
                            <option value="height_price">Sort by price: high to low</option>
                        </select> */}

                        <select name="language" className="ps-select form-control"
                            onChange={(e) =>
                                this.handlePageSize(e.target.value)
                            }>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                        </select> <div className="ps-shopping__view">
                            {/* <p>View</p> */}
                            <p>#items</p>
                            {/* <ul className="ps-tab-list">
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
                            </ul> */}
                        </div>
                    </div>
                </div>
                <div >
                </div>
                <div className="ps-shopping__content" style={{ padding: "25px 0", borderBottom: " 1px solid #ccc" }}>
                    {viewMode === true ? (
                        <div className="ps-shopping-product">
                            <div className="row">
                                {all_stores.rows && all_stores.rows.length > 0
                                    ? all_stores.rows.map((item) => (
                                        <div
                                            className="col-xl-2 col-lg-4 col-md-4 col-sm-6 xs-6 col-6"
                                            key={item.traderId}>
                                            <Store store={item} />

                                        </div>
                                    ))
                                    : ''}
                            </div>
                        </div>
                    ) : (
                            <div className="ps-shopping-product">
                                {all_stores && all_stores.length > 0
                                    ? all_stores.rows.map((item,index) => (
                                        <h2 key={index}  > {item.rate}</h2>
                                    ))
                                    : ''}
                            </div>
                        )}
                    <div className="ps-shopping__footer text-center pt-40">
                        {!_.isEmpty(all_stores.rows) && (
                            <ReactPaginate
                                pageCount={Math.ceil(total / this.state.pageSize)}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={0}
                                previousLabel={"←"}
                                nextLabel={"→"}
                                onPageChange={(data) => this.FetchData(data.selected)}
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
        );
    }
}

export default connect((state) => state.mall)(LayoutMall);




