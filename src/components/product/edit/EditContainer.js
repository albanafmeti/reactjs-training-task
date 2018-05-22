import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as ProductActionCreators from "../../../actions/product";
import EditProduct from "./EditProduct";
import NotFound from "../../general/NotFound";

class EditContainer extends Component {

    render() {

        const {products, match, dispatch} = this.props;

        const updateProduct = bindActionCreators(ProductActionCreators.updateProduct, dispatch);

        const product_id = parseInt(match.params.id, 10);

        const product = products.filter(function (product) {
            return product.id === product_id;
        }).pop();

        if (!product) {
            return <NotFound/>;
        }

        return (
            <div className="card">
                <h5 className="card-header">Edit Product

                    <Link to='/products' className="btn btn-sm btn-link pull-right"><i
                        className="fa fa-arrow-left"></i>&nbsp;&nbsp;Back to list</Link>

                </h5>
                <div className="card-body">

                    <EditProduct product={product} updateProduct={updateProduct}/>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(EditContainer);