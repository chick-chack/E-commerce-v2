import React, { Component } from 'react';

import { connect } from 'react-redux';

class PartialSpecification extends Component {
    constructor(props) {
        super(props);
        console.log(props.singleProduct.specification)
    }
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-bordered ps-table ps-table--specification">
                    <tbody>
                        {
                            this.props.singleProduct.specification.map(item => (
                              localStorage.getItem('lang')==='en'
                              ?
                              <tr>
                              <td>
                                  {JSON.parse(item).name_en}
                              </td>
                              <td>
                                  {JSON.parse(item).value_en}
                              </td>
                          </tr>
                          :
                          <tr>
                          <td>
                              {JSON.parse(item).name_ar}
                          </td>
                          <td>
                              {JSON.parse(item).value_ar}
                          </td>
                      </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect((state) => state.product)(PartialSpecification);



