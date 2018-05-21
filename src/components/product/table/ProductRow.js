import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductRow extends Component {

    static propTypes = {
        product: PropTypes.object.isRequired,
        updateProduct: PropTypes.func.isRequired,
        removeProduct: PropTypes.func.isRequired,
    };

    render() {
        return (
            <tr>
                <th scope="row">{this.props.product.id}</th>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price} $</td>
                <td>{this.props.product.creation_date}</td>
                <td>
                    <a href="#" className="btn btn-success mr-1" title="Edit"><span className="fa fa-pencil"></span></a>
                    <a href="#" className="btn btn-danger mr-1" title="Delete"><span className="fa fa-times"></span></a>
                </td>
            </tr>
        );
    }
}

export default ProductRow;