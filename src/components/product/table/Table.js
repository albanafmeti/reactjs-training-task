import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ProductRow from './ProductRow';

class Table extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        updateProduct: PropTypes.func.isRequired,
        removeProduct: PropTypes.func.isRequired,
    };

    render() {

        const {products, updateProduct, removeProduct} = this.props;

        const productComponents = products.map((product, index) => {
            return <ProductRow product={product} key={product.id}
                               updateProduct={updateProduct}
                               removeProduct={removeProduct}/>;
        });


        return (
            <table className="products-table table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Creation Date</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>

                {
                    productComponents.length ?
                        productComponents :
                        <tr>
                            <td colSpan={5}><p className="text-center m-0">No results.</p></td>
                        </tr>
                }

                </tbody>
            </table>
        );
    }
}

export default Table;