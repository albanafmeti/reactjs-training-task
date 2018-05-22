import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import ProductDetails from "./ProductDetails";
import NotFound from '../../general/NotFound';

class DetailsContainer extends Component {
    render() {

        const {products, match} = this.props;

        const product_id = parseInt(match.params.id, 10);

        const product = products.filter(function (product) {
            return product.id === product_id;
        }).pop();

        if (!product) {
            return <NotFound/>;
        }

        return (
            <div className="card">
                <h5 className="card-header">{product.name}

                    <Link to='/products' className="btn btn-sm btn-link pull-right"><i
                        className="fa fa-arrow-left"></i>&nbsp;&nbsp;Back to list</Link>

                </h5>
                <div className="card-body">

                    <ProductDetails product={product}/>

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(DetailsContainer);