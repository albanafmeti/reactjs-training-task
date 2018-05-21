import React, {Component} from 'react';
import ProductRow from './ProductRow';

import PropTypes from 'prop-types';

class Table extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        updateProduct: PropTypes.func.isRequired,
        removeProduct: PropTypes.func.isRequired,
    };

    render() {

        const {products} = this.props;

        const productComponents = products.map((product, index) => {
            return <ProductRow product={product} key={product.id}
                               updateProduct={this.props.updateProduct}
                               removeProduct={this.props.removeProduct}/>;
        });


        return (
            <table className="table table-striped">
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

export default Table