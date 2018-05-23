import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Table from './Table';
import SearchForm from './SearchForm';
import AddProduct from "./AddProduct";
import * as ProductActionCreators from "../../../actions/product";

class TableContainer extends Component {

    render() {

        const {products, isFiltered, dispatch} = this.props;
        const updateProduct = bindActionCreators(ProductActionCreators.updateProduct, dispatch);
        const removeProduct = bindActionCreators(ProductActionCreators.removeProduct, dispatch);
        const addProduct = bindActionCreators(ProductActionCreators.addProduct, dispatch);
        const fetchProducts = bindActionCreators(ProductActionCreators.fetchProducts, this.props.dispatch);

        return (
            <div>
                <div className="card">
                    <h5 className="card-header">List of products

                        <a className="btn btn-sm btn-primary pull-right" data-toggle="modal"
                           data-target="#add-product-modal"><i className="fa fa-plus"></i>&nbsp;&nbsp;Add Product</a>
                    </h5>
                    <div className="card-body">

                        <SearchForm fetchProducts={fetchProducts}
                                    isFiltered={isFiltered}/>

                        <Table
                            products={products}
                            updateProduct={updateProduct}
                            removeProduct={removeProduct}/>

                    </div>
                </div>

                <AddProduct addProduct={addProduct}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.filteredProducts,
        isFiltered: state.isFiltered,
    }
};

export default connect(mapStateToProps)(TableContainer);