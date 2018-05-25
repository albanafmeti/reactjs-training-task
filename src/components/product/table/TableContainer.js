import React, {Component} from 'react';
import {connect} from "react-redux";

import Table from './Table';
import SearchForm from './SearchForm';
import AddProduct from "./AddProduct";
import * as ProductActionCreators from "../../../actions/product";

class TableContainer extends Component {

    render() {

        const {products, isFiltered, updateProduct, removeProduct, addProduct, fetchProducts} = this.props;

        return (
            <div>
                <div className="card">
                    <div className="card-header">List of products

                        <AddProduct addProduct={addProduct}/>
                    </div>
                    <div className="card-body">

                        <SearchForm fetchProducts={fetchProducts}
                                    isFiltered={isFiltered}/>

                        <Table
                            products={products}
                            updateProduct={updateProduct}
                            removeProduct={removeProduct}/>

                    </div>
                </div>
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

const mapDispatchToProps = dispatch => {
    return {
        updateProduct: (id, data) => dispatch(ProductActionCreators.updateProduct(id, data)),
        removeProduct: (id) => dispatch(ProductActionCreators.removeProduct(id)),
        addProduct: (data) => dispatch(ProductActionCreators.addProduct(data)),
        fetchProducts: (query) => dispatch(ProductActionCreators.fetchProducts(query)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);