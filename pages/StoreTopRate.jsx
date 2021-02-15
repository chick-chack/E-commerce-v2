import React from 'react';
import { connect } from 'react-redux';
import FooterDefault from '../components/shared/footers/FooterDefault';
import Newletters from '../components/partials/commons/Newletters';
import CustomerBought from '../components/partials/product/CustomerBought';
import HeaderMobileProduct from '../components/shared/header-mobile/HeaderMobileProduct';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import BreadCrumb from '../components/elements/BreadCrumb';
import { getAllHomeTopStores } from '../store/collection/action';
import Store from '../components/elements/stores/Store';
import StoreWide from '../components/elements/stores/StoreWide';
import i18next from 'i18next';
import ReactPaginate from "react-paginate";
import _ from "lodash";

class TopStoreRateHomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        listView: true,
        pageSize: 8,
        lang:null,
    };

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        this.setState({
            lang: localStorage.getItem('lang') || 'en'
        })
        const { query } = this.props;
        if (query) {
            this.props.dispatch(getAllHomeTopStores(8, 0))
        }
    }



    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };


    handlePagination(page, pageSize) {
        this.setState({ pageSize: pageSize,})

        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize, };
            
        localStorage.setItem("params", JSON.stringify(params));
        this.props.dispatch(getAllHomeTopStores(8, 0));
    }
    FetchData(page) {
        this.props.dispatch(getAllHomeTopStores(this.state.pageSize, page))
    }
    handlePageSize(value) {
        this.setState({ pageSize: value })
        this.props.dispatch(getAllHomeTopStores(value, 0));
    }


    render() {

        const { all_home_top_stores } = this.props;

        const breadCrumb = [
            {
                text: i18next.t('home'),
                url: '/',
            },

            {

                text: i18next.t('topstorerate'),
                url:'/StoreTopRate'
            },
        ];

        const total = all_home_top_stores.count;

        const viewMode = this.state.listView

        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="container-fluid">
                    <div className="ps-shopping" style={{ marginTop: "20px" }}>
                        <div className="ps-shopping__header">
                            <p> <strong className="mr-2">{total}</strong> {i18next.t('storesfound')}   </p>
                            <div className="ps-shopping__actions">
                                <select name="language" className="ps-select form-control"
                                    onChange={(e) =>
                                        this.handlePageSize(e.target.value)
                                    }>
                                    <option value="8">8</option>
                                    <option value="12">12</option>
                                    <option value="16">16</option>
                                    <option value="20">20</option>
                                </select>
                                <div className="ps-shopping__view">
                                    <ul className="ps-tab-list">

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
                                        {all_home_top_stores.rows && all_home_top_stores.rows.length > 0
                                            ? all_home_top_stores.rows.map((item) => (
                                                <div
                                                    className="col-xl-2 col-lg-4 col-md-4 col-sm-6 xs-6 col-12"
                                                    key={item.traderId}>
                                                    <Store store={item} />


                                                </div>
                                            ))
                                            : ''}
                                    </div>
                                </div>
                            ) : (
                                    <div className="ps-shopping-product">
                                        {all_home_top_stores.rows && all_home_top_stores.rows.length > 0
                                            ? all_home_top_stores.rows.map((item) => (
                                                <StoreWide
                                                    store={item}
                                                    key={item.id}
                                                />

                                            ))
                                            : ''}
                                    </div>
                                )}
                            <div className="ps-shopping__footer text-center pt-40">
                                {/* <Pagination
                            total={total - 1}
                            pageSize={this.state.pageSize}
                            responsive={true}
                            defaultCurrent={1}
                            onChange={this.handlePagination.bind(this)}
                        /> */}
                                {!_.isEmpty(all_home_top_stores.rows) && (
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


                </div>




                <Newletters />
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.collection)(TopStoreRateHomePage);

