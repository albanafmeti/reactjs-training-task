import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends PureComponent {

    static propTypes = {
        product: PropTypes.object.isRequired
    };

    render() {

        const {product} = this.props;

        return (
            <table className="table">
                <tbody>
                <tr>
                    <th scope="row">Name</th>
                    <td>{product.name}</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>{product.price} $</td>
                </tr>
                <tr>
                    <th scope="row">Creation Date</th>
                    <td>{product.creation_date.format('YYYY/MM/DD')}</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p><strong>Description</strong></p>
                        <div>{product.description ? product.description :
                            <p className="text-center">No description specified.</p>}</div>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default ProductDetails;