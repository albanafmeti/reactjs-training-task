import React, {Component} from 'react';
import Table from './Table';
import SearchForm from './SearchForm';
import AddProduct from "./AddProduct";

import * as ProductActionCreators from "../../../actions/product";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class TableContainer extends Component {

    componentWillMount() {
        this.fetchProducts();
    }

    fetchProducts = (query = null) => {
        const fetchProducts = bindActionCreators(ProductActionCreators.fetchProducts, this.props.dispatch);
        fetchProducts(query);
    };

    render() {

        const {products, dispatch} = this.props;
        const updateProduct = bindActionCreators(ProductActionCreators.updateProduct, dispatch);
        const removeProduct = bindActionCreators(ProductActionCreators.removeProduct, dispatch);
        const addProduct = bindActionCreators(ProductActionCreators.addProduct, dispatch);

        return (
            <div>
                <div className="card">
                    <h5 className="card-header">List of products

                        <a href="#" className="btn btn-sm btn-primary pull-right" data-toggle="modal"
                           data-target="#add-product-modal"><i className="fa fa-plus"></i>&nbsp;&nbsp;Add Product</a>
                    </h5>
                    <div className="card-body">

                        <SearchForm fetchProducts={this.fetchProducts}/>

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
};

const mapStateToProps = state => {
    return {
        products: state.filteredProducts
    }
};

export default connect(mapStateToProps)(TableContainer);